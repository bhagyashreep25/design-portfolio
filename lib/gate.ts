import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

/**
 * Server-only password gate for protected case studies.
 *
 * This module must never be imported from a client component. Everything here
 * reads env vars and runs on the server; the password is never serialized into
 * the page payload. Pages check `isUnlocked()` and render the gate *instead of*
 * their content, so locked visitors are never sent the content at all.
 */

export const GATE_COOKIE = "portfolio_unlock";

/** A year — the unlock is a convenience, not a session. */
export const GATE_MAX_AGE = 60 * 60 * 24 * 365;

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(
      `${name} is not set. Copy .env.example to .env.local and fill it in.`
    );
  }
  return value;
}

/** Constant-time string compare that doesn't leak length via early return. */
function safeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a, "utf8");
  const bb = Buffer.from(b, "utf8");
  if (ab.length !== bb.length) {
    // Still burn a comparison so a wrong-length guess isn't measurably faster.
    timingSafeEqual(ab, ab);
    return false;
  }
  return timingSafeEqual(ab, bb);
}

/**
 * The cookie value. Keyed by the signing secret and derived from the current
 * password, so rotating either one invalidates every cookie already issued.
 */
function expectedToken(): string {
  return createHmac("sha256", requireEnv("PORTFOLIO_GATE_SECRET"))
    .update(requireEnv("PORTFOLIO_PASSWORD"))
    .digest("hex");
}

/** True if `input` is the configured password. */
export function isCorrectPassword(input: string): boolean {
  return safeEqual(input, requireEnv("PORTFOLIO_PASSWORD"));
}

/** The token to hand back once the password checks out. */
export function issueToken(): string {
  return expectedToken();
}

/** Whether this visitor has already unlocked protected work. */
export async function isUnlocked(): Promise<boolean> {
  const token = (await cookies()).get(GATE_COOKIE)?.value;
  return typeof token === "string" && safeEqual(token, expectedToken());
}
