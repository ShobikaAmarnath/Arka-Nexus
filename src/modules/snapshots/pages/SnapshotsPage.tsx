import Masonry from "../sections/Masonry";
import { useSnapshots, type SnapshotsData } from "../hooks/useSnapshots";

const SnapshotsPage = () => {
  const data: SnapshotsData | null = useSnapshots();
  if (!data) return <p className="p-8 text-white">Loading...</p>;

  return (
    <div className="relative mt-24 px-2 pb-8 lg:px-6">
      <h1 className="mb-8 text-center text-h2 font-bold text-brand-primary">
        {data.title}
      </h1>

      <Masonry data={data.images} />
    </div>
  );
};

export default SnapshotsPage;
