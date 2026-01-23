type Props = {
  size?: number;
};

const SkeletonCircle = ({ size = 64 }: Props) => (
  <div
    style={{ width: size, height: size }}
    className="bg-white/10 rounded-full animate-pulse"
  />
);

export default SkeletonCircle;
