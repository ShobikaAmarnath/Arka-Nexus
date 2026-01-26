type Props = {
  size?: number;
};

const SkeletonCircle = ({ size = 64 }: Props) => (
  <div
    style={{ width: size, height: size }}
    className="animate-pulse rounded-full bg-white/10"
  />
);

export default SkeletonCircle;
