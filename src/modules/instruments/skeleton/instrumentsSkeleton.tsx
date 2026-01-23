import SkeletonBox from "../../../shared/ui/skeleton/SkeletonBox";
import SkeletonText from "../../../shared/ui/skeleton/SkeletonText";

const InstrumentsSkeleton = () => {
  return (
    <div className="relative pb-8 text-white bg-[#020617] pt-24">

      {/* ================= HERO SKELETON ================= */}
      <section className="relative py-8 overflow-hidden">
        <div className="max-w-[1200px] mx-auto mt-[100px] px-5 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-5 items-center">

          {/* Hero Text */}
          <div className="space-y-4">
            <SkeletonBox className="h-10 w-2/3" />
            <SkeletonText lines={3} />
          </div>

          {/* Hero Visual */}
          <div className="flex items-center justify-center">
            <SkeletonBox className="w-[220px] h-[140px] rounded-[14px]" />
          </div>

        </div>
      </section>

      {/* ================= GRID SKELETON ================= */}
      <section className="flex flex-col items-center max-w-[1200px] mx-auto py-6 md:py-10 px-4">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4 md:gap-5 max-w-[1000px] mx-auto w-full">
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
        <div className="max-w-[1100px] mx-auto flex justify-center gap-6">
          {[1, 2, 3].map((i) => (
            <SkeletonBox
              key={i}
              className="lg:w-[240px] lg:h-[160px] w-[140px] h-[130px] rounded-xl"
            />
          ))}
        </div>
      </section>

    </div>
  );
};

export default InstrumentsSkeleton;
