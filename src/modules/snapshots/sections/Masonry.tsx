import type { SnapshotImage } from '../hooks/useSnapshots';

interface MasonryProps {
  data: SnapshotImage[];
}

function Masonry({ data }: MasonryProps) {
  return (
    <div className="w-full px-4">
      <div
        className="
          columns-1
          sm:columns-2
          md:columns-3
          xl:columns-4
          gap-4
        "
      >
        {data.map((item) => (
          <div
            key={item.id}
            className="mb-4 break-inside-avoid rounded-xl overflow-hidden shadow-xl"
          >
            <img
              src={item.image}
              alt="Snap Shot"
              loading="lazy"
              className="w-full h-auto block object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Masonry;