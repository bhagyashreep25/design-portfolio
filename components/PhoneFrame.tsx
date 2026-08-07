/** Design-space dimensions of the phone's screen. */
export const SCREEN_W = 404;
export const SCREEN_H = 874;

/**
 * iPhone proportions, all expressed as fractions of the device width so the
 * frame stays correct at any size. Percentage padding and `left` resolve
 * against the container's width; percentage border-radius resolves against the
 * element's own box, so each radius is given as `horizontal / vertical` — the
 * vertical figure is divided through by the box's aspect so corners stay round.
 */
const BEZEL = 0.033; // bezel as a fraction of device width
const SCREEN_RADIUS = 0.154; // as a fraction of screen width

const screenW = 1 - 2 * BEZEL; // 0.934
const screenH = screenW * (SCREEN_H / SCREEN_W); // 2.021
const deviceH = screenH + 2 * BEZEL; // 2.087
const deviceRadius = SCREEN_RADIUS * screenW + BEZEL;
const screenRadius = SCREEN_RADIUS * screenW;

const pct = (n: number) => `${(n * 100).toFixed(3)}%`;
/** `horizontal / vertical` radius pair that renders as a circular corner. */
const radius = (r: number, boxW: number, boxH: number) =>
  `${pct(r / boxW)} / ${pct(r / boxH)}`;

/** Machined-aluminium look for the frame rail and side buttons. */
const FRAME_METAL =
  "linear-gradient(145deg,#54545a 0%,#8e8e96 10%,#3f3f45 28%,#2b2b30 50%,#7a7a82 76%,#3a3a40 92%,#55555b 100%)";

interface PhoneFrameProps {
  /** Screen contents — positioned against the screen, which is `relative`. */
  children: React.ReactNode;
  /** Width utilities for the device, e.g. "w-[300px] sm:w-[360px]". */
  className?: string;
}

export default function PhoneFrame({ children, className = "" }: PhoneFrameProps) {
  return (
    <div className={className}>
      <div
        className="relative shadow-[0_34px_80px_-32px_rgba(43,17,11,0.55),0_8px_24px_-12px_rgba(43,17,11,0.35)]"
        style={{
          background: FRAME_METAL,
          padding: pct(BEZEL),
          borderRadius: radius(deviceRadius, 1, deviceH),
        }}
      >
        {/* Side buttons: action, volume up, volume down, power */}
        {[
          { side: "left", top: "17.5%", height: "3.2%" },
          { side: "left", top: "24%", height: "5.6%" },
          { side: "left", top: "31.5%", height: "5.6%" },
          { side: "right", top: "26%", height: "8.5%" },
        ].map((b, i) => (
          <span
            key={i}
            aria-hidden="true"
            className="absolute"
            style={{
              background: FRAME_METAL,
              width: "0.9%",
              top: b.top,
              height: b.height,
              [b.side]: "-0.75%",
              borderRadius: b.side === "left" ? "1px 0 0 1px" : "0 1px 1px 0",
            }}
          />
        ))}

        <div
          className="relative overflow-hidden bg-[#FDFDFD] shadow-[0_0_0_2px_#0b0b0d,inset_0_0_14px_rgba(0,0,0,0.28)]"
          style={{
            aspectRatio: `${SCREEN_W} / ${SCREEN_H}`,
            borderRadius: radius(screenRadius, screenW, screenH),
          }}
        >
          {children}

          {/* Screen glare */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent"
          />
        </div>
      </div>
    </div>
  );
}
