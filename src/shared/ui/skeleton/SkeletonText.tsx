type Props = {
  lines?: number;
  className?: string;
};

const SkeletonText = ({ lines = 3, className = "" }: Props) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-4 w-full animate-pulse rounded bg-white/10"
          style={{ width: `${100 - i * 8}%` }}
        />
      ))}
    </div>
  );
};

export default SkeletonText;
