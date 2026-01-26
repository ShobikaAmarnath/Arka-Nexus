import { urlFor } from "../../../core/services/client";
import "../pages/instruments.css";

export default function InstrumentsGallery({
  images,
  visible,
}: {
  images: any[];
  visible: boolean;
}) {
  return (
    <section className="py-section-y" data-animate id="gallery">
      <div className="mx-auto max-w-[1100px]">
        <h2
          className={`mb-10 text-center text-[28px] font-bold text-[#f7c07a] ${visible ? "slide-up" : ""}`}
        >
          Gallery
        </h2>

        {/* Flexbox container centers items regardless of count */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {images.slice(1, 7).map((img, i) => (
            <div
              key={i}
              className={`relative h-[130px] w-[140px] flex-shrink-0 overflow-hidden rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-all duration-300 hover:scale-105 lg:h-[160px] lg:w-[240px] ${visible ? "scale-in" : ""} `}
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <img
                src={urlFor(img).width(600).url()}
                alt={`instrument-${i}`}
                className="h-full w-full object-cover" // Changed to object-cover to fill the small container nicely
              />
              {/* Subtle dark overlay to match your screenshot's aesthetic */}
              <div className="pointer-events-none absolute inset-0 bg-black/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
