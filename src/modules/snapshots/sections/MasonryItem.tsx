import { useState } from "react";
import MasonrySkeleton from "../skeleton/MasonrySkeleton";

export function MasonryItem({ image }: { image: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="mb-4 break-inside-avoid rounded-xl overflow-hidden shadow-xl relative">
      {!loaded && <MasonrySkeleton />}

      <img
        src={image}
        alt="Snap Shot"
        loading="lazy"               // ✅ network lazy loading
        onLoad={() => setLoaded(true)} // ✅ skeleton removal
        className={`
          w-full
          h-auto
          block
          object-contain
          transition-all
          duration-500
          hover:scale-110
          ${loaded ? "opacity-100" : "opacity-0 absolute inset-0"}
        `}
      />
    </div>
  );
}
