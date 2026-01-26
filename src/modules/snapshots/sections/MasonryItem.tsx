import { useState } from "react";
import MasonrySkeleton from "../skeleton/MasonrySkeleton";

export function MasonryItem({ image }: { image: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative mb-4 break-inside-avoid overflow-hidden rounded-xl shadow-xl">
      {!loaded && <MasonrySkeleton />}

      <img
        src={image}
        alt="Snap Shot"
        loading="lazy" // ✅ network lazy loading
        onLoad={() => setLoaded(true)} // ✅ skeleton removal
        className={`block h-auto w-full object-contain transition-all duration-500 hover:scale-110 ${loaded ? "opacity-100" : "absolute inset-0 opacity-0"} `}
      />
    </div>
  );
}
