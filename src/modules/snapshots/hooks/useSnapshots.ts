import { useEffect, useState } from "react";
import { getSnapshotsPage } from "../../../core/services/sanity/snapshots.service";

export type SnapshotImage = {
  id: string | number;
  image: string;
};

export type SnapshotsData = {
  title: string;
  images: SnapshotImage[];
};

export const useSnapshots = (): SnapshotsData | null => {
  const [data, setData] = useState<SnapshotsData | null>(null);

  useEffect(() => {
    getSnapshotsPage().then((res) => {
      if (!res) return;

      const images: SnapshotImage[] = res.images.map(
        (img: { _key: string; url: string }, index: number) => ({
          id: img._key,
          image: img.url,
          height: 300 + (index % 5) * 120, // 👈 stable masonry heights
        }),
      );

      setData({
        title: res.title,
        images,
      });
    });
  }, []);

  return data;
};
