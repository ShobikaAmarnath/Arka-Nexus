type Props = {
  className?: string;
};

const SkeletonBox = ({ className = "" }: Props) => (
  <div
    className={`
      bg-white/10
      animate-pulse
      rounded-lg
      ${className}
    `}
  />
);

export default SkeletonBox;
