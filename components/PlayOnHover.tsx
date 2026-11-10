"use client";

type Tag = "div" | "li";

interface PlayOnHoverProps extends React.HTMLAttributes<HTMLElement> {
  as?: Tag;
  /** The keyframes name that ends the run (the element's own, or a child's) */
  animation: string;
}

/**
 * Plays a CSS keyframe animation once per hover, to the end. A `:hover`
 * animation snaps back to rest the moment the pointer leaves; this sets
 * [data-playing] on pointer enter and clears it only when `animation`
 * finishes. Style the animation off `[data-playing]` in CSS.
 */
export default function PlayOnHover({ as: Tag = "div", animation, children, ...rest }: PlayOnHoverProps) {
  return (
    <Tag
      {...rest}
      onPointerEnter={(e) => {
        e.currentTarget.dataset.playing = "";
      }}
      onAnimationEnd={(e) => {
        if (e.animationName === animation) delete e.currentTarget.dataset.playing;
      }}
    >
      {children}
    </Tag>
  );
}
