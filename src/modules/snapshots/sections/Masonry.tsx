import type { SnapshotImage } from "../hooks/useSnapshots";
import { MasonryItem } from "./MasonryItem";

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
          <MasonryItem image={item.image} />
        ))}
      </div>
    </div>
  );
}

export default Masonry;
