import { ArrowUpRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

/**
 * Services Showcase — used on Home and on the standalone /services page.
 *
 * Three category blocks: Couples · Corporate Teams · Business & Leadership.
 * Each block alternates the image-collage / content side for editorial rhythm.
 */

const CATEGORIES = [
  {
    id: "couples",
    eyebrow: "I.",
    label: "For Couples",
    title: "Restoring connection through clearer, more honest communication.",
    services: [
      "Conflict Clarity Session — Framework",
      "Relationship Reset Program",
      "Pre-Litigation Stability Framework",
      "Conflict to Clarity System (Couple Sessions)",
    ],
    closing:
      "Not all conflict is loud. Some of the deepest impact comes from what’s never said.",
    images: [
      "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=70",
      "https://images.unsplash.com/photo-1522770179533-24471fcdba45?auto=format&fit=crop&w=600&q=70",
    ],
  },
  {
    id: "corporate",
    eyebrow: "II.",
    label: "For Corporate Teams",
    title: "Strengthening team alignment through structured communication.",
    services: [
      "Strategic Workshop (Entry) — 90 minutes",
      "Deep-Dive Intervention — Half-day / Full-day",
      "Advisory & Retainer (Premium) — Ongoing strategic support",
    ],
    closing:
      "This isn’t a training session — it’s a structured intervention to resolve communication gaps that directly impact performance.",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=70",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=70",
    ],
  },
  {
    id: "business",
    eyebrow: "III.",
    label: "For Business & Leadership",
    title: "Enabling clarity in decisions, execution, and performance.",
    services: [
      "Decision & Alignment Intensive",
      "Execution & Accountability Intensive",
    ],
    closing:
      "In business, conflict rarely looks like confrontation — it shows up as delay, misalignment, and lost momentum.",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=70",
    ],
  },
];

function ImageCollage({ images, label }) {
  if (images.length >= 3) {
    return (
      <div className="grid grid-cols-12 grid-rows-6 gap-3 h-[520px] md:h-[600px]">
        <div className="col-span-8 row-span-4 relative overflow-hidden rounded-[24px] border border-sand/40">
          <img
            src={images[0]}
            alt={`${label} — 1`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] hover:scale-[1.04]"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(59,42,36,0.0) 50%, rgba(59,42,36,0.45) 100%)",
            }}
          />
        </div>
        <div className="col-span-4 row-span-4 relative overflow-hidden rounded-[24px] border border-sand/40">
          <img
            src={images[1]}
            alt={`${label} — 2`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] hover:scale-[1.04]"
          />
        </div>
        <div className="col-span-12 row-span-2 relative overflow-hidden rounded-[24px] border border-sand/40">
          <img
            src={images[2]}
            alt={`${label} — 3`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] hover:scale-[1.04]"
          />
        </div>
      </div>
    );
  }
  // 2 images fallback
  return (
    <div className="grid grid-cols-12 grid-rows-6 gap-3 h-[520px] md:h-[600px]">
      <div className="col-span-12 row-span-4 relative overflow-hidden rounded-[24px] border border-sand/40">
        <img
          src={images[0]}
          alt={`${label} — 1`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] hover:scale-[1.04]"
        />
      </div>
      <div className="col-span-12 row-span-2 relative overflow-hidden rounded-[24px] border border-sand/40">
        <img
          src={images[1]}
          alt={`${label} — 2`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] hover:scale-[1.04]"
        />
      </div>
    </div>
  );
}

export default function ServicesShowcase({ showHeader = true }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBook = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/#contact");
      return;
    }
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      data-testid="services-showcase"
      className="relative py-28 md:py-36 grain-overlay"
      style={{
        background:
          "linear-gradient(180deg, #F7F2EE 0%, #ECE2D6 100%)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Header */}
        {showHeader && (
          <div className="grid md:grid-cols-12 gap-10 items-end mb-24">
            <div className="md:col-span-7">
              <div className="flex items-center gap-3 mb-5">
                <span className="gold-divider" />
                <span className="eyebrow">Services</span>
              </div>
              <h2 className="font-serif font-light text-espresso text-[40px] md:text-[58px] leading-[1.02] tracking-[-0.005em]">
                Tailored work for the
                <br />
                <span className="italic text-walnut">rooms that matter.</span>
              </h2>
            </div>
            <div className="md:col-span-5">
              <p className="text-walnut/85 text-lg leading-relaxed font-light max-w-md">
                Three offerings, each shaped around a different audience — but
                anchored in the same disciplined approach to clarity, structure,
                and outcome.
              </p>
            </div>
          </div>
        )}

        {/* Categories */}
        <div className="space-y-28 md:space-y-32">
          {CATEGORIES.map((cat, idx) => (
            <article
              key={cat.id}
              id={cat.id}
              data-testid={`service-block-${cat.id}`}
              className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
            >
              {/* Image collage */}
              <div
                className={`lg:col-span-7 ${
                  idx % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <ImageCollage images={cat.images} label={cat.label} />
              </div>

              {/* Content */}
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-serif italic text-walnut/60 text-2xl">
                    {cat.eyebrow}
                  </span>
                  <span className="gold-divider" />
                  <span className="eyebrow">{cat.label}</span>
                </div>

                <h3 className="font-serif font-light text-espresso text-[32px] md:text-[40px] leading-[1.1] tracking-[-0.005em]">
                  {cat.title}
                </h3>

                <div className="editorial-divider opacity-50 my-9" />

                <p className="eyebrow text-mocha mb-5">We Offer</p>
                <ul className="space-y-4">
                  {cat.services.map((s, i) => (
                    <li
                      key={s}
                      data-testid={`service-${cat.id}-item-${i}`}
                      className="flex items-start gap-4"
                    >
                      <span className="font-serif italic text-walnut/40 text-base mt-1 shrink-0 w-5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-ink/85 text-[15px] font-light leading-relaxed">
                        {s}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  onClick={handleBook}
                  data-testid={`service-${cat.id}-cta`}
                  className="cta-gold group inline-flex items-center gap-3 mt-10 font-sans text-[13px] font-medium tracking-[0.14em] rounded-full pl-7 pr-6 py-4"
                >
                  <span>Book a Clarity-Communication Session</span>
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-espresso text-cream transition-transform duration-500 group-hover:translate-x-1">
                    <ArrowUpRight size={12} strokeWidth={1.8} />
                  </span>
                </a>

                <p className="mt-10 font-serif italic text-walnut/85 text-[18px] md:text-[20px] leading-snug border-l border-gold/60 pl-5">
                  {cat.closing}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
