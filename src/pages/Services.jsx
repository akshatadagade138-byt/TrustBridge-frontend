import { Link } from "react-router-dom";
import { ArrowUpRight, Heart, Building2, Briefcase } from "lucide-react";

const PROCESS_STEPS = [
  "Break down your situation without bias",
  "Identify the core patterns driving conflict",
  "Map possible paths forward (repair / structured separation)",
  "Help you regain clarity before things escalate",
];

const CATEGORIES = [
  {
    id: "couples",
    eyebrow: "I.",
    label: "For Couples",
    icon: Heart,
    blurb:
      "Restoring connection through clearer, more honest communication.",
    services: [
      "Conflict Clarity Session — Framework",
      "Relationship Reset Program",
      "Pre-Litigation Stability Framework",
      "Conflict to Clarity System (Couple Sessions)",
    ],
  },
  {
    id: "corporate",
    eyebrow: "II.",
    label: "For Corporates",
    icon: Building2,
    blurb:
      "Strengthening team alignment through structured communication.",
    services: [
      "Strategic Workshop (Entry Level) — 90-Minute",
      "Deep-Dive Intervention — Half-Day / Full-Day",
      "Advisory & Retainer (Premium) — Ongoing Strategic Support",
    ],
  },
  {
    id: "business",
    eyebrow: "III.",
    label: "For Business",
    icon: Briefcase,
    blurb:
      "Enabling clarity in decisions, execution, and performance.",
    services: [
      "Decision & Alignment Intensive",
      "Execution & Accountability Intensive",
    ],
  },
];

export default function Services() {
  return (
    <main data-testid="services-page" className="bg-ivory">
      {/* SECTION 1 — DARK header */}
      <section
        className="relative pt-[140px] pb-32 overflow-hidden grain-overlay text-cream"
        style={{
          background:
            "radial-gradient(ellipse at 25% 0%, #4A3328 0%, #2F2019 55%, #1F1410 100%)",
        }}
      >
        <div
          aria-hidden
          className="absolute -top-32 left-1/4 w-[640px] h-[640px] rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(closest-side, rgba(176,141,87,0.55), transparent)",
          }}
        />
        <div
          aria-hidden
          className="absolute bottom-[-200px] right-[-200px] w-[520px] h-[520px] rounded-full blur-3xl opacity-25"
          style={{
            background:
              "radial-gradient(closest-side, rgba(216,195,176,0.45), transparent)",
          }}
        />

        <div className="relative max-w-[1100px] mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
          </div>
          <h1 className="font-serif font-light text-cream text-[48px] sm:text-[64px] md:text-[84px] leading-[1.0] tracking-[-0.015em]">
            What we offer.
          </h1>
          <p className="mt-5 font-serif italic text-gold text-[24px] md:text-[30px] tracking-tight">
            Couples · Corporates · Business
          </p>

          <p className="mt-12 max-w-2xl text-sand/85 text-xl leading-relaxed font-light">
            Each engagement is designed as a focused{" "}
            <span className="text-cream">intervention</span> — to resolve the
            specific communication breakdowns that are affecting outcomes.
          </p>
        </div>
      </section>

      {/* SECTION 2 — LIGHT process */}
      <section
        data-testid="services-process"
        className="relative py-28 md:py-36 grain-overlay"
        style={{
          background:
            "linear-gradient(180deg, #F7F2EE 0%, #ECE2D6 100%)",
        }}
      >
        <div className="max-w-[1180px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-serif font-light text-espresso text-[40px] md:text-[54px] leading-[1.05] tracking-[-0.005em]">
              A <span className="italic text-walnut">structured</span>
              <br />
              intervention session.
            </h2>
            <p className="mt-7 text-walnut/85 text-lg leading-relaxed font-light max-w-md">
              Not a conversation. Not a workshop. A disciplined room with a
              defined arc — designed to move you from tension to clarity.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div
              className="rounded-[28px] border border-sand/60 bg-cream/95 p-9 md:p-12 shadow-[0_30px_60px_-30px_rgba(59,42,36,0.18)]"
            >
              <p className="eyebrow text-mocha mb-8">In every session, we</p>
              <ul className="space-y-7">
                {PROCESS_STEPS.map((step, idx) => (
                  <li
                    key={step}
                    data-testid={`services-process-step-${idx}`}
                    className="flex items-start gap-6"
                  >
                    <span className="font-serif italic text-gold text-3xl leading-none mt-1 shrink-0 w-8">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-ink/85 text-[17px] font-light leading-relaxed">
                      {step}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — alternating category blocks */}
      <section
        data-testid="services-categories"
        className="relative"
      >
        {CATEGORIES.map((cat, idx) => {
          const isDark = idx % 2 === 0;
          return (
            <CategoryBlock key={cat.id} cat={cat} isDark={isDark} />
          );
        })}
      </section>

      {/* SECTION 4 — Final CTA on LIGHT */}
      <section
        className="relative py-28 md:py-36 grain-overlay"
        style={{
          background:
            "linear-gradient(180deg, #ECE2D6 0%, #F7F2EE 100%)",
        }}
      >
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <p className="eyebrow text-mocha mb-6">Begin</p>
          <h2 className="font-serif font-light text-espresso text-[40px] md:text-[58px] leading-[1.05] tracking-[-0.005em]">
            Not sure which is right
            <br />
            for you? <span className="italic text-walnut">Start with a session.</span>
          </h2>
          <p className="mt-7 text-walnut/85 text-lg leading-relaxed font-light max-w-xl mx-auto">
            One conversation is enough to know. We will recommend the shape of
            work that fits — or tell you, plainly, that we are not the right
            room.
          </p>
          <Link
            to="/#contact"
            data-testid="services-final-cta"
            className="cta-gold cta-pulse group inline-flex items-center gap-3 mt-12 font-sans text-[14px] font-medium tracking-[0.14em] rounded-full pl-8 pr-7 py-[18px]"
          >
            <span>Book a Clarity-Communication Session</span>
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-espresso text-cream transition-transform duration-500 group-hover:translate-x-1">
              <ArrowUpRight size={14} strokeWidth={1.8} />
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}

function CategoryBlock({ cat, isDark }) {
  const Icon = cat.icon;
  return (
    <div
      data-testid={`services-block-${cat.id}`}
      className={`relative py-28 md:py-32 overflow-hidden grain-overlay ${
        isDark ? "text-cream" : "text-ink"
      }`}
      style={
        isDark
          ? {
              background:
                "radial-gradient(ellipse at 75% 0%, #4A3328 0%, #2F2019 55%, #1F1410 100%)",
            }
          : {
              background:
                "linear-gradient(180deg, #FAF8F6 0%, #F0E7DA 100%)",
            }
      }
    >
      {isDark && (
        <div
          aria-hidden
          className="absolute -top-32 right-1/4 w-[520px] h-[520px] rounded-full blur-3xl opacity-25"
          style={{
            background:
              "radial-gradient(closest-side, rgba(176,141,87,0.55), transparent)",
          }}
        />
      )}

      <div className="relative max-w-[1180px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left meta */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 mb-6">
            <span
              className={`font-serif italic text-2xl ${
                isDark ? "text-sand/60" : "text-walnut/60"
              }`}
            >
              {cat.eyebrow}
            </span>
            <span className="w-12 h-px bg-gold" />
            <span
              className={`text-[11px] tracking-[0.42em] uppercase font-light ${
                isDark ? "text-sand/85" : "text-mocha"
              }`}
            >
              {cat.label}
            </span>
          </div>

          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${
              isDark
                ? "bg-cream/[0.04] border border-cream/20"
                : "bg-ivory border border-sand/70"
            }`}
          >
            <Icon size={22} className="text-gold" />
          </div>

          <h2
            className={`font-serif font-light text-[40px] md:text-[56px] leading-[1.05] tracking-[-0.005em] ${
              isDark ? "text-cream" : "text-espresso"
            }`}
          >
            {cat.label.replace("For ", "")}
            <span className="text-gold">.</span>
          </h2>

          <p
            className={`mt-6 font-serif italic text-[20px] md:text-[22px] leading-snug max-w-md ${
              isDark ? "text-sand/85" : "text-walnut/90"
            }`}
          >
            {cat.blurb}
          </p>
        </div>

        {/* Right list */}
        <div className="lg:col-span-7">
          <p
            className={`text-[11px] tracking-[0.32em] uppercase font-light mb-8 ${
              isDark ? "text-sand/70" : "text-mocha"
            }`}
          >
            We Offer
          </p>

          <ul className="space-y-2">
            {cat.services.map((s, i) => (
              <li
                key={s}
                data-testid={`services-${cat.id}-item-${i}`}
                className="group"
              >
                <div
                  className={`flex items-baseline gap-6 py-6 border-b transition-colors duration-300 ${
                    isDark
                      ? "border-cream/15 group-hover:border-gold/60"
                      : "border-espresso/15 group-hover:border-gold/60"
                  }`}
                >
                  <span
                    className={`font-serif italic text-2xl shrink-0 w-12 transition-colors ${
                      isDark
                        ? "text-sand/60 group-hover:text-gold"
                        : "text-walnut/50 group-hover:text-gold"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-serif text-[22px] md:text-[26px] leading-snug font-light ${
                      isDark ? "text-cream" : "text-espresso"
                    }`}
                  >
                    {s}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
