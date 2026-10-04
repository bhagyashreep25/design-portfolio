import { LAYERS, LAYER_VIEWBOX, OUTLINE_STROKES, TIMING } from "./portraitArt";

// Hero portrait that draws itself from the crown down, then a circle draws
// itself anticlockwise behind the head and crops the shoulders as it passes. Pure CSS animation (see "Portrait draw" in globals.css) so it
// stays a server component. The resting styles are the finished portrait;
// animations only define where each piece starts from.

// Circle geometry in the source art's coordinate space (viewBox 0 0 1300 1537)
const CX = 650;
const CY = 887;
const R = 650;
// The source art closes the shoulders with a line along the artboard's bottom
// edge. The circle crops it in the end, but it must stay hidden until then.
const SHOULDER_END = 1540;
// Band just outside the circle that holds everything the circle will crop
// (the shoulders reach ~950 from the centre)
const CROP_BAND_R = 830;
const CROP_BAND_WIDTH = 2 * (CROP_BAND_R - R) + 10;

// Full circle starting at 12 o'clock and running anticlockwise
const circlePath = (r: number) =>
  `M${CX} ${CY - r}A${r} ${r} 0 1 0 ${CX} ${CY + r}A${r} ${r} 0 1 0 ${CX} ${CY - r}`;
const circleLen = (r: number) => Math.ceil(2 * Math.PI * r);

// Hover extras (.pd-hover in globals.css): a blush on each cheekbone and two
// sparkles off the top of the head
const BLUSH_CHEEKS = [
  [592, 532],
  [810, 532],
];
const SPARKLES = [
  { x: 975, y: 95, r: 34 },
  { x: 1040, y: 175, r: 18 },
];
const sparklePath = (r: number) => {
  const k = 0.12 * r;
  return `M0 ${-r}C${k} ${-k} ${k} ${-k} ${r} 0C${k} ${k} ${k} ${k} 0 ${r}C${-k} ${k} ${-k} ${k} ${-r} 0C${-k} ${-k} ${-k} ${-k} 0 ${-r}Z`;
};

// Hover smile: the lips are cut out of each layer and split down the middle,
// and each half tips its corner up around a pivot just under the lips
// (.pd-smile in globals.css). With nothing below the pivot, the halves only
// ever swing into each other, so no gap opens between them.
const LIPS = { x1: 605, x2: 765, y1: 580, y2: 675, mid: 684 };
const LIPS_OVERLAP = 0.5;

const layerSrc = (name: string) => `/images/portrait/${name}.svg`;

// Each colour layer is a static SVG file placed on the padded canvas
const LayerImage = ({ name }: { name: string }) => (
  <image
    href={layerSrc(name)}
    x={LAYER_VIEWBOX.x}
    y={LAYER_VIEWBOX.y}
    width={LAYER_VIEWBOX.width}
    height={LAYER_VIEWBOX.height}
  />
);

type Vars = React.CSSProperties & Record<`--${string}`, string | number>;

const stroke = (len: number, delay: number, dur: number): Vars => ({
  "--len": len,
  animationDelay: `${delay}s`,
  animationDuration: `${dur}s`,
});

export default function PortraitDraw() {
  const { nose, nostril, lips, fill, circle } = TIMING;

  return (
    <>
      {/* The drawing starts on load, so fetch the layers before it needs them */}
      {[...LAYERS.map((l) => l.key), "fill"].map((name) => (
        <link key={name} rel="preload" as="image" href={layerSrc(name)} />
      ))}
      <svg
        viewBox="0 0 1300 1537"
        overflow="visible"
        role="img"
        aria-label="Portrait of Bhagyashree Phadnis"
        className="absolute bottom-0 left-0 w-full h-[118.23%]"
      >
        <defs>
          <filter id="pd-blush-blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="16" />
          </filter>

          {/* Crop: everything above the circle's centre stays (the hair breaks out of
              the top), everything below is clipped to the circle. Until the circle
              is drawn, a band around it keeps the shoulders visible; the band is
              erased in step with the circle, so the crop follows the pen. */}
          <mask id="pd-crop" maskUnits="userSpaceOnUse" x="-400" y="-400" width="2100" height="2400">
            <rect x="-400" y="-400" width="2100" height={CY + 400} fill="white" />
            <circle cx={CX} cy={CY} r={R} fill="white" />
            <path
              className="pd-anim pd-crop-sweep"
              style={stroke(circleLen(CROP_BAND_R), circle.delay, circle.dur)}
              d={circlePath(CROP_BAND_R)}
              fill="none"
              stroke="white"
              strokeWidth={CROP_BAND_WIDTH}
            />
          </mask>

          {LAYERS.map((layer) => (
            <mask
              key={layer.key}
              id={`pd-reveal-${layer.key}`}
              maskUnits="userSpaceOnUse"
              x="-400"
              y="-400"
              width="2100"
              height="2400"
            >
              <g fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round">
                <g transform={`translate(${layer.maskOffset[0]} ${layer.maskOffset[1]})`} strokeWidth={layer.maskWidth}>
                  {OUTLINE_STROKES.map((s, i) => (
                    <path
                      key={i}
                      className="pd-anim pd-draw"
                      style={stroke(s.len, s.delay + layer.lag, s.dur)}
                      d={s.d}
                    />
                  ))}
                </g>
                {/* Nose and nostril are real strokes, so each layer is revealed by itself */}
                <path
                  className="pd-anim pd-draw"
                  style={stroke(layer.nose.len, nose.delay + layer.lag, nose.dur)}
                  d={layer.nose.d}
                  strokeWidth={layer.nose.width}
                />
                <path
                  className="pd-anim pd-draw"
                  style={stroke(layer.nostril.len, nostril.delay + layer.lag, nostril.dur)}
                  d={layer.nostril.d}
                  strokeWidth={layer.nostril.width}
                />
                {/* Lips get coloured in with a left-to-right sweep */}
                <path
                  className="pd-anim pd-draw"
                  style={stroke(170, lips.delay + layer.lag, lips.dur)}
                  d="M598 628H768"
                  strokeWidth={96}
                  strokeLinecap="butt"
                />
              </g>
              {/* Safety net: before the circle comes in, show the whole layer so
                  nothing the traced centerlines missed is left hidden */}
              <rect
                className="pd-anim pd-settle"
                style={{ animationDelay: `${circle.delay}s` }}
                x="-400"
                y="-400"
                width="2100"
                height={400 + SHOULDER_END}
                fill="white"
              />
            </mask>
          ))}

          <clipPath id="pd-no-lips">
            <path
              clipRule="evenodd"
              d={`M-400 -400H1700V2000H-400ZM${LIPS.x1} ${LIPS.y1}H${LIPS.x2}V${LIPS.y2}H${LIPS.x1}Z`}
            />
          </clipPath>
          <clipPath id="pd-lips-left">
            <rect x={LIPS.x1} y={LIPS.y1} width={LIPS.mid + LIPS_OVERLAP - LIPS.x1} height={LIPS.y2 - LIPS.y1} />
          </clipPath>
          <clipPath id="pd-lips-right">
            <rect x={LIPS.mid - LIPS_OVERLAP} y={LIPS.y1} width={LIPS.x2 - LIPS.mid + LIPS_OVERLAP} height={LIPS.y2 - LIPS.y1} />
          </clipPath>
        </defs>

        {/* Circle frame, underneath everything so the head breaks out of it */}
        <path
          className="pd-anim pd-draw"
          style={stroke(circleLen(R), circle.delay, circle.dur)}
          d={circlePath(R - 0.75)}
          fill="none"
          stroke="#A582DF"
          strokeWidth="1.5"
        />

        {/* White fills behind the hair and face that hide the circle line */}
        <g className="pd-anim pd-settle" style={{ animationDelay: `${fill}s` }}>
          <LayerImage name="fill" />
        </g>

        {/* Hover blush: a very light blurred wash on the cheekbones with two faint
            hatch strokes on each, under the ink */}
        <g className="pd-blush">
          <g filter="url(#pd-blush-blur)" fill="#9776CF" opacity="0.22">
            {BLUSH_CHEEKS.map(([x, y]) => (
              <ellipse key={x} cx={x} cy={y} rx="50" ry="26" />
            ))}
          </g>
          <g stroke="#9776CF" strokeOpacity="0.4" strokeWidth="3" strokeLinecap="round">
            {BLUSH_CHEEKS.flatMap(([x, y]) =>
              [0, 1].map((i) => (
                <path key={`${x}-${i}`} d={`M${x - 12 + i * 13} ${y + 9}L${x - 4 + i * 13} ${y - 9}`} />
              ))
            )}
          </g>
        </g>

        <g mask="url(#pd-crop)">
          {LAYERS.map((layer) => (
            <g key={layer.key} mask={`url(#pd-reveal-${layer.key})`}>
              <g clipPath="url(#pd-no-lips)">
                <LayerImage name={layer.key} />
              </g>
              {(["left", "right"] as const).map((side) => (
                <g key={side} className={`pd-smile pd-smile-${side}`}>
                  <g clipPath={`url(#pd-lips-${side})`}>
                    <LayerImage name={layer.key} />
                  </g>
                </g>
              ))}
            </g>
          ))}
        </g>

        {SPARKLES.map((sp, i) => (
          <g key={sp.x} transform={`translate(${sp.x} ${sp.y})`}>
            <path
              className="pd-sparkle"
              style={{ transitionDelay: `${i * 0.1}s` }}
              d={sparklePath(sp.r)}
              fill="#A582DF"
            />
          </g>
        ))}
      </svg>
    </>
  );
}
