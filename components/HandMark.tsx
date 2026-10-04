// A pen mark drawn over its children once the AnimateIn around it scrolls
// into view (.hand-mark in globals.css), in the page's --cs-accent colour:
// a loose loop around a key number, or a double underline under a key word.
const MARKS = {
  circle: {
    viewBox: "0 0 200 100",
    d: "M150 14C110 2 40 6 16 34C-4 60 30 92 100 94C170 96 202 70 194 42C188 20 150 8 104 10",
  },
  underline: {
    viewBox: "0 0 200 20",
    d: "M3 8C50 4 120 3 197 6M24 15C80 11 140 11 182 13",
  },
};

export default function HandMark({
  children,
  variant = "circle",
}: {
  children: React.ReactNode;
  variant?: keyof typeof MARKS;
}) {
  const mark = MARKS[variant];
  return (
    <span className={`hand-mark hand-mark-${variant}`}>
      {children}
      <svg aria-hidden="true" viewBox={mark.viewBox} preserveAspectRatio="none">
        <path pathLength={1} d={mark.d} />
      </svg>
    </span>
  );
}
