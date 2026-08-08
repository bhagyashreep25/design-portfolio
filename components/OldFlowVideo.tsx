import PhoneFrame from "@/components/PhoneFrame";
import LoopingVideo from "@/components/LoopingVideo";

interface OldFlowVideoProps {
  src: string;
  poster: string;
  /** Describes the recording for screen readers. */
  label: string;
  className?: string;
}

export default function OldFlowVideo({
  src,
  poster,
  label,
  className = "",
}: OldFlowVideoProps) {
  return (
    <PhoneFrame className={className}>
      <LoopingVideo
        src={src}
        poster={poster}
        label={label}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </PhoneFrame>
  );
}
