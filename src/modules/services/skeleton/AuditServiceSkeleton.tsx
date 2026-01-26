import SkeletonBox from "../../../shared/ui/skeleton/SkeletonBox";
import SkeletonText from "../../../shared/ui/skeleton/SkeletonText";

const AuditServiceSkeleton = () => {
  return (
    <div className="animate-fade-in min-h-screen w-full px-5 pt-24 lg:px-8">
      {/* ================= HERO ================= */}
      <section className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Hero Text */}
        <div className="space-y-6">
          <SkeletonBox className="h-14 w-3/4" />
          <SkeletonText lines={3} />
        </div>

        {/* Hero Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <SkeletonBox className="h-40 rounded-xl" />
            <SkeletonBox className="h-48 rounded-xl" />
          </div>
          <div className="mt-8 flex flex-col gap-4">
            <SkeletonBox className="h-48 rounded-xl" />
            <SkeletonBox className="h-40 rounded-xl" />
          </div>
        </div>
      </section>

      {/* ================= STAGES ================= */}
      <section className="mx-auto max-w-[1280px] space-y-10 py-24">
        <div className="flex justify-center">
          <SkeletonBox className="h-8 w-64" />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <SkeletonBox key={i} className="h-64 rounded-2xl" />
          ))}
        </div>
      </section>

      {/* ================= KEY STEPS & BENEFITS ================= */}
      <section className="mx-auto max-w-[1280px] py-16">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Key Steps */}
          <div className="space-y-8">
            <SkeletonBox className="h-8 w-56" />
            <SkeletonBox className="h-56 rounded-2xl" />
          </div>

          {/* Benefits */}
          <div className="space-y-8">
            <SkeletonBox className="h-8 w-56" />
            <SkeletonBox className="h-56 rounded-2xl" />
          </div>
        </div>

        {/* ================= PROCESS FLOW ================= */}
        <div className="mt-16 flex items-center justify-center gap-3">
          {[1, 2, 3, 4].map((i) => (
            <SkeletonBox key={i} className="h-3 w-3 rounded-full" />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AuditServiceSkeleton;
