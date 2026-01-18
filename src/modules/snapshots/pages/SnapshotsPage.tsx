import Masonry from "../sections/Masonry";
import { useSnapshots, type SnapshotsData } from "../hooks/useSnapshots";

const SnapshotsPage = () => {
  const data: SnapshotsData | null = useSnapshots();
  if (!data) return <p className="p-8 text-white">Loading...</p>;

  return (
    <div className="relative px-2 lg:px-6 mt-24 pb-8">
      <h1 className="text-h2 font-bold text-brand-primary text-center mb-8">
        {data.title}
      </h1>

      <Masonry data={data.images} />
    </div>
  );
};

export default SnapshotsPage;
