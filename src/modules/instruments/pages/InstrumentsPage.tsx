import { useInstrumentsPage } from "../hooks/useInstrumentsPage";
import InstrumentsHero from "../sections/InstrumentsHero";
import InstrumentsGrid from "../sections/InstrumentsGrid";
import InstrumentsGallery from "../sections/InstrumentsGallery";
import "./instruments.css";
import InstrumentsSkeleton from "../skeleton/instrumentsSkeleton";
import NotFoundPage from "../../../shared/not-found/NotFoundPage";

const InstrumentsPage = () => {
  const { data, visible, scrollProgress, loading } = useInstrumentsPage();

  if (loading) return <InstrumentsSkeleton />;
  if (!data) return <NotFoundPage />;

  return (
    // Replaced .instruments-page with Tailwind
    <div className="relative bg-[#020617] pb-8 text-white">
      {/* Scroll progress bar - Refactored to Tailwind */}
      <div
        className="fixed left-0 top-0 z-[60] h-1 bg-gradient-to-r from-[#f97316] to-[#eaaf2f] transition-[width] duration-150 ease-linear"
        style={{ width: `${scrollProgress}%` }}
      />

      <InstrumentsHero
        title={data.title}
        intro={data.intro}
        image={data.images}
        visible={visible.hero}
      />

      <InstrumentsGrid
        instruments={data.instruments}
        visible={visible.instruments}
      />

      {data.images?.length > 1 && (
        <InstrumentsGallery images={data.images} visible={visible.gallery} />
      )}
    </div>
  );
};

export default InstrumentsPage;
