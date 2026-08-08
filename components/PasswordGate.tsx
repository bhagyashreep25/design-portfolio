"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

/**
 * The lock screen for protected case studies.
 *
 * This component never sees the password. It posts the visitor's guess to
 * /api/unlock, which compares it server-side and sets a signed cookie; the
 * page then re-renders on the server with the real content. Protected content
 * is never passed through here as children, so a locked visitor is never sent
 * it in the first place.
 */
export default function PasswordGate() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (pending) return;

    setPending(true);
    try {
      const res = await fetch("/api/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: input }),
      });

      if (res.ok) {
        // The cookie is set; ask the server for this page again, which now
        // renders the case study instead of this gate.
        router.refresh();
        return;
      }
      setError(true);
    } catch {
      setError(true);
    }
    setPending(false);
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-14">
      <Image
        src="/images/password-gate.gif"
        alt=""
        width={500}
        height={350}
        className="rounded-xl mb-12"
        unoptimized
      />

      <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#4c4c4c] text-center mb-4">
        This project is{" "}
        <strong className="font-semibold text-[#8C63D1]">
          password protected
        </strong>
      </h1>

      <p className="text-base text-[#6b6b6b] text-center max-w-lg mb-1">
        If you&rsquo;re a recruiter or hiring manager, you can find the password on
        my resume. If not, then you can reach out to me at
      </p>
      <a
        href="mailto:bagsphadnis@gmail.com"
        className="text-base text-[#4c4c4c] underline hover:text-[#8C63D1] transition-colors mb-10"
      >
        bagsphadnis@gmail.com
      </a>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-5 w-full max-w-xs"
      >
        <label htmlFor="gate-password" className="sr-only">
          Password
        </label>
        <input
          id="gate-password"
          type="password"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError(false);
          }}
          placeholder="Enter your password"
          autoComplete="current-password"
          aria-invalid={error}
          aria-describedby={error ? "gate-error" : undefined}
          className={`w-full px-4 py-3 border rounded-md text-base text-[#4c4c4c] placeholder-[#b0b0b0] outline-none transition-colors ${
            error ? "border-red-400" : "border-[#d0d0d0] focus:border-[#8C63D1]"
          }`}
        />
        {error && (
          <p id="gate-error" role="alert" className="text-sm text-red-500">
            Incorrect password. Try again.
          </p>
        )}
        <button
          type="submit"
          disabled={pending}
          className="w-full bg-[#D2B9FA] text-[#4c4c4c] font-normal text-[18px] py-3 hover:bg-[#c4a6f5] transition-colors disabled:opacity-60"
        >
          {pending ? "Checking…" : "Submit"}
        </button>
      </form>
    </div>
  );
}
