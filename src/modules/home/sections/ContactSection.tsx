import ContactForm from "../../../shared/components/contact/components/ContactForm";
import AN from "@/assets/videos/AN.mp4";
import { getHomeContent } from "../providers/home.provider";
import type { HomeContent } from "../content/home.content";
import { useEffect, useState } from "react";

export default function ContactSection() {
  const [content, setContent] = useState<HomeContent | null>(null);

  // Fetch content
  useEffect(() => {
    getHomeContent().then(setContent);
  }, []);

  if (!content) return null;

  return (
    <section className="min-h-screen p-4 md:p-10">
      {" "}
      {/* bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] */}
      <div className="mx-auto box-border flex max-w-7xl flex-col gap-6 lg:flex-row lg:gap-10">
        {/* Contact Left */}
        <div className="flex flex-1 flex-col justify-center rounded-2xl border border-[#f1f5f9] bg-white p-6 shadow-sm md:p-12">
          {/* Video Container */}
          <div className="mb-6 flex justify-center overflow-hidden">
            <video
              className="mb-6 block h-auto w-full max-w-[400px] border-none bg-white object-contain outline-none"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={AN} type="video/mp4" />
            </video>
          </div>

          <h2 className="mb-6 text-center text-h3 font-bold tracking-tight text-brand-primary">
            {content.contact.title}
          </h2>

          <p className="mb-8 text-center text-body-sm leading-[1.7] text-neutral-textMain">
            {content.contact.description}
          </p>

          <ul className="space-y-0">
            {content.contact.services.map((service, index) => (
              <li
                key={index}
                className="flex items-center py-3 text-body-sm leading-none text-neutral-textMain"
              >
                <span className="mr-4 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-secondary text-xs font-bold text-brand-dark">
                  ✓
                </span>
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Right */}
        <div className="flex flex-1 items-center justify-center rounded-2xl border border-[#f1f5f9] bg-white p-6 shadow-sm md:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
