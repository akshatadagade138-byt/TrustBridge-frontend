import HeroPortrait from "@/components/site/HeroPortrait";
import { ShieldCheck, Scale, Compass, Heart, ArrowUpRight } from "lucide-react";

const TRUST_BADGES = [
  { label: "Confidential & Secure", icon: ShieldCheck },
  { label: "Neutral & Supportive", icon: Scale },
  { label: "Solution Focused", icon: Compass }
];

export default function HeroSection() {
  const handleBook = (e) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      data-testid="hero-section"
      className="relative min-h-[100vh] pt-[110px] pb-24 overflow-hidden grain-overlay text-cream"
      style={{
        background:
          "radial-gradient(ellipse at 25% 0%, #4A3328 0%, #2F2019 55%, #1F1410 100%)",
      }}
    >
      {/* Ambient color washes */}
      <div
        aria-hidden
        className="absolute -top-32 -left-40 w-[640px] h-[640px] rounded-full blur-3xl opacity-35"
        style={{
          background:
            "radial-gradient(closest-side, rgba(176,141,87,0.55), transparent)",
        }}
      />
      <div
        aria-hidden
        className="absolute top-40 right-[-200px] w-[680px] h-[680px] rounded-full blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(closest-side, rgba(216,195,176,0.45), transparent)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-[-200px] left-1/3 w-[520px] h-[520px] rounded-full blur-3xl opacity-25"
        style={{
          background:
            "radial-gradient(closest-side, rgba(176,141,87,0.5), transparent)",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14 lg:gap-10 items-center">
        {/* Left content */}
        <div className="lg:col-span-7 animate-fade-up">

          <h1 className="font-serif font-light text-cream leading-[1.05] tracking-[-0.015em] text-[38px] sm:text-[48px] md:text-[58px] lg:text-[68px]">
            Where Communication Breaks Down,
            <br />
            <span className="italic text-gold">I Build Alignment.</span>
          </h1>

          <p className="mt-8 max-w-xl text-sand/85 text-[15px] md:text-[17px] leading-relaxed font-light">
            I am a Conflict & Communication Strategist. I help couples, corporates, and business leaders identify and resolve communication patterns that create conflict bringing clarity, alignment, and forward movement.
          </p>

          <p className="mt-4 max-w-xl text-sand/70 text-[14px] md:text-[15px] leading-relaxed font-light">
            My role is to help them understand patterns, de-escalate situations, and make clear decisions, whether that means repairing the relationship or separating without unnecessary damage.
          </p>

          {/* CTA — highlighted primary */}
          <div className="mt-12 flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              onClick={handleBook}
              data-testid="hero-cta-button"
              className="cta-gold cta-pulse group relative inline-flex items-center gap-3 font-sans text-[14px] font-medium tracking-[0.14em] rounded-full pl-8 pr-7 py-[18px] text-espresso"
            >
              <span>Book a Clarity-Communication Session</span>
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-espresso text-cream transition-transform duration-500 group-hover:translate-x-1">
                <ArrowUpRight size={14} strokeWidth={1.8} />
              </span>
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-14 flex flex-wrap gap-3">
            {TRUST_BADGES.map(({ label, icon: Icon }) => (
              <div
                key={label}
                data-testid={`trust-badge-${label.toLowerCase().replace(/\s+/g, "-").replace("&", "and")}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-cream/[0.05] backdrop-blur-md border border-cream/15 text-cream/85 text-[11px] tracking-[0.22em] uppercase font-light"
              >
                <Icon size={14} className="text-gold" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual — founder portrait placeholder */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in">
          <HeroPortrait />
        </div>
      </div>
    </section>
  );
}
