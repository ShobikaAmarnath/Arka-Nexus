import SkeletonBox from "../../../shared/ui/skeleton/SkeletonBox";
import SkeletonText from "../../../shared/ui/skeleton/SkeletonText";

const InstrumentsSkeleton = () => {
  return (
    <div className="relative bg-[#020617] pb-8 pt-24 text-white">
      {/* ================= HERO SKELETON ================= */}
      <section className="relative overflow-hidden py-8">
        <div className="mx-auto mt-[100px] grid max-w-[1200px] grid-cols-1 items-center gap-5 px-5 md:grid-cols-[2fr_1fr]">
          {/* Hero Text */}
          <div className="space-y-4">
            <SkeletonBox className="h-10 w-2/3" />
            <SkeletonText lines={3} />
          </div>

          {/* Hero Visual */}
          <div className="flex items-center justify-center">
            <SkeletonBox className="h-[140px] w-[220px] rounded-[14px]" />
          </div>
        </div>
      </section>

      {/* ================= GRID SKELETON ================= */}
      <section className="mx-auto flex max-w-[1200px] flex-col items-center px-4 py-6 md:py-10">
        <div className="mx-auto grid w-full max-w-[1000px] grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4 md:gap-5">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonBox
              key={i}
              className="h-[70px] max-w-[310px] rounded-card"
            />
          ))}
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="py-section-y">
        <div className="mx-auto flex max-w-[1100px] justify-center gap-6">
          {[1, 2, 3].map((i) => (
            <SkeletonBox
              key={i}
              className="h-[130px] w-[140px] rounded-xl lg:h-[160px] lg:w-[240px]"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default InstrumentsSkeleton;
