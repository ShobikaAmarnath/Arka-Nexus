import {
  Database,
  Activity,
  Thermometer,
  Zap,
  Wind,
  Settings,
  Search,
  Music,
} from "lucide-react";
import "../pages/instruments.css";

export default function InstrumentsGrid({
  instruments,
  visible,
}: {
  instruments: string[];
  visible: boolean;
}) {
  const iconPool = [
    Database,
    Activity,
    Thermometer,
    Zap,
    Wind,
    Settings,
    Search,
    Music,
  ];

  return (
    <section
      className="mx-auto flex max-w-[1200px] flex-col items-center justify-center px-4 py-6 text-center md:py-10"
      data-animate
      id="instruments"
    >
      <div className="w-full">
        {/* Optional Title */}
        {/* <h2 className={`text-[28px] font-bold text-[#f7c07a] mb-5 ${visible ? 'slide-up' : ''}`}>Instruments Used</h2> */}

        <div className="mx-auto grid max-w-[1000px] grid-cols-[repeat(auto-fit,minmax(240px,1fr))] justify-items-center gap-4 md:gap-5">
          {instruments.map((item, idx) => {
            const Icon = iconPool[idx % iconPool.length] || Database;
            return (
              <div
                key={idx}
                className={`group relative flex w-full max-w-[280px] items-center gap-3 overflow-hidden rounded-card border-l-[3px] border-orange-500/90 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-3 shadow-[0_8px_24px_rgba(4,8,24,0.5)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)] md:max-w-[310px] md:p-4 ${visible ? "fade-in" : ""}`}
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#eaaf2f1f] to-[#f973161f] text-orange-500 md:h-12 md:w-12">
                  <Icon size={20} />
                </div>
                <div className="text-left">
                  <h3 className="m-0 text-body-sm leading-tight text-white">
                    {item}
                  </h3>
                </div>
                {/* Subtle card highlight overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.02] to-white/[0.01]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
