import { urlFor } from "../../../core/services/client";
import "../pages/instruments.css";

export default function InstrumentsHero({
  title,
  intro,
  image,
  visible,
}: {
  title: string;
  intro: string;
  image: any[];
  visible: boolean;
}) {
  return (
    <section className="relative overflow-hidden py-8" data-animate id="hero">
      <div className="relative z-10 mx-auto mt-[100px] grid max-w-[1200px] grid-cols-1 items-center gap-2.5 px-5 md:grid-cols-[2fr_1fr] md:gap-5">
        {/* Hero Text */}
        <div className={`space-y-3 ${visible ? "animate-in" : ""}`}>
          <h1 className="text-h1 font-black leading-[1.05] text-brand-primary">
            {title}
          </h1>
          <p className="max-w-[760px] text-justify text-body leading-relaxed text-neutral-white/90">
            {intro}
          </p>
        </div>

        {/* Hero Visual */}
        <div
          className={`relative flex items-center justify-center ${visible ? "animate-in" : ""}`}
        >
          {image?.[0] ? (
            <div className="relative z-10">
              <img
                src={urlFor(image[0]).width(1200).url()}
                alt="instruments-hero"
                className="h-[150px] w-[200px] rounded-[14px] border border-white/5 object-cover shadow-[0_20px_40px_rgba(0,0,0,0.5)] lg:h-[140px] lg:w-[220px]"
              />
            </div>
          ) : (
            <div className="relative z-10 opacity-95">
              <svg viewBox="0 0 64 64" width="96" height="96" aria-hidden>
                <rect
                  x="6"
                  y="10"
                  width="52"
                  height="32"
                  rx="4"
                  fill="#ffffff11"
                />
                <circle cx="20" cy="26" r="4" fill="#eaaf2fff" />
                <rect
                  x="36"
                  y="20"
                  width="16"
                  height="12"
                  rx="2"
                  fill="#f97316"
                />
              </svg>
            </div>
          )}

          {/* Complex Animations kept as legacy classes */}
          <div className="pulse-ring"></div>
          <div className="pulse-ring delayed"></div>
        </div>
      </div>
    </section>
  );
}
