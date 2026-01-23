import SkeletonBox from "../../../shared/ui/skeleton/SkeletonBox";
import SkeletonText from "../../../shared/ui/skeleton/SkeletonText";
import SkeletonCircle from "../../../shared/ui/skeleton/SkeletonCircle";

const TrainingServiceSkeleton = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white px-6 pt-24 selection:bg-[#e66a1c]/30">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[650px] flex items-center pb-16">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Hero Text */}
          <div className="lg:col-span-7 space-y-8">
            <SkeletonBox className="h-6 w-40 rounded-md" />
            <SkeletonBox className="h-14 w-3/4 rounded-lg" />
            <div className="pl-8 border-l-2 border-white/10 space-y-4">
              <SkeletonText lines={3} />
              <SkeletonText lines={2} className="max-w-3xl" />
            </div>
          </div>

          {/* Hero Visual */}
          <div className="lg:col-span-5 flex justify-center pt-12 lg:pt-24">
            <SkeletonCircle size={300} />
          </div>

        </div>
      </section>

      {/* ================= CONTENT BLOCKS ================= */}
      <section className="max-w-7xl mx-auto py-20 space-y-24">

        {[1, 2, 3].map((section) => (
          <div key={section} className="space-y-8">
            <SkeletonBox className="h-8 w-56" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
