import SkeletonBox from "../../../shared/ui/skeleton/SkeletonBox";
import SkeletonText from "../../../shared/ui/skeleton/SkeletonText";
import SkeletonCircle from "../../../shared/ui/skeleton/SkeletonCircle";

const TrainingServiceSkeleton = () => {
  return (
    <div className="min-h-screen bg-[#020617] px-6 pt-24 text-white selection:bg-brand-primary/30">
      {/* ================= HERO ================= */}
      <section className="relative flex min-h-[650px] items-center pb-16">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-12">
          {/* Hero Text */}
          <div className="space-y-8 lg:col-span-7">
            <SkeletonBox className="h-6 w-40 rounded-md" />
            <SkeletonBox className="h-14 w-3/4 rounded-lg" />
            <div className="space-y-4 border-l-2 border-white/10 pl-8">
              <SkeletonText lines={3} />
              <SkeletonText lines={2} className="max-w-3xl" />
            </div>
          </div>

          {/* Hero Visual */}
          <div className="flex justify-center pt-12 lg:col-span-5 lg:pt-24">
            <SkeletonCircle size={300} />
          </div>
        </div>
      </section>

      {/* ================= CONTENT BLOCKS ================= */}
      <section className="mx-auto max-w-7xl space-y-24 py-20">
        {[1, 2, 3].map((section) => (
          <div key={section} className="space-y-8">
            <SkeletonBox className="h-8 w-56" />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {[1, 2, 3, 4].map((item) => (
                <SkeletonBox
                  key={item}
                  className="h-14 rounded-r-xl border-l-4 border-white/20"
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TrainingServiceSkeleton;
