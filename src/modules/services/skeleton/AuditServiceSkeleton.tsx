import SkeletonBox from "../../../shared/ui/skeleton/SkeletonBox";
import SkeletonText from "../../../shared/ui/skeleton/SkeletonText";

const AuditServiceSkeleton = () => {
  return (
    <div className="min-h-screen w-full px-5 lg:px-8 pt-24 animate-fade-in">

      {/* ================= HERO ================= */}
      <section className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

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
          <div className="flex flex-col gap-4 mt-8">
            <SkeletonBox className="h-48 rounded-xl" />
            <SkeletonBox className="h-40 rounded-xl" />
          </div>
        </div>

      </section>

      {/* ================= STAGES ================= */}
      <section className="py-24 max-w-[1280px] mx-auto space-y-10">
        <div className="flex justify-center">
          <SkeletonBox className="h-8 w-64" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <SkeletonBox key={i} className="h-64 rounded-2xl" />
          ))}
        </div>
      </section>

      {/* ================= KEY STEPS & BENEFITS ================= */}
      <section className="py-16 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

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
        <div className="flex justify-center items-center gap-3 mt-16">
          {[1, 2, 3, 4].map((i) => (
            <SkeletonBox key={i} className="w-3 h-3 rounded-full" />
          ))}
        </div>
      </section>

    </div>
  );
};

export default AuditServiceSkeleton;
