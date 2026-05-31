import { useState } from "react";
import { Heart, Building2, Briefcase, ArrowUpRight, ChevronDown } from "lucide-react";

const GROUPS = [
  {
    eyebrow: "I.",
    title: "Couples",
    icon: Heart,
    intro:
      "When conversations have reduced, connection feels distant, and important things remain unsaid.",
    points: [
      "You feel constant tension, but no real resolution",
      "Conversations turn into arguments or silence",
      "You’re unsure whether to leave, discontinue, or break",
      "You’re thinking about legal options, but not fully convinced",
      "You worry about how this is affecting your child, family, or business",
    ],
  },
  {
    eyebrow: "II.",
    title: "Corporate Teams",
    icon: Building2,
    intro:
      "When communication gaps quietly affect collaboration, feedback, and team alignment.",
    points: [
      "What was meant as input lands as criticism",
      "Meetings are smooth, but not honest",
      "Feedback loops have stopped working",
      "Cross-functional friction is slowing delivery",
      "Trust between leaders and teams has thinned",
    ],
  },
  {
    eyebrow: "III.",
    title: "Business & Leadership",
    icon: Briefcase,
    intro:
      "When decisions are delayed, execution lacks clarity, and internal alignment is breaking down.",
    points: [
      "Strategic direction keeps shifting in private",
      "Co-founder or partner alignment is fraying",
      "Boardroom conversations don’t reach the real issue",
      "Execution stalls because people aren’t aligned",
      "Reputational stakes make plain-speaking harder",
    ],
  },
];

export default function WhoThisIsFor() {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleBook = (e) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section
      data-testid="who-this-is-for-section"
      className="relative py-20 md:py-24 overflow-hidden grain-overlay text-cream"
      style={{
        background:
          "radial-gradient(ellipse at 75% 0%, #4A3328 0%, #2F2019 55%, #1F1410 100%)",
      }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute -top-40 left-1/4 w-[640px] h-[640px] rounded-full blur-3xl opacity-25"
        style={{
          background:
            "radial-gradient(closest-side, rgba(176,141,87,0.55), transparent)",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid md:grid-cols-12 gap-10 items-end mb-20">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-5">
            </div>
            <h2 className="font-serif font-light text-cream text-[40px] md:text-[60px] leading-[1.02] tracking-[-0.005em]">
              Who Is <span className="italic text-gold">This For.</span>
            </h2>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {GROUPS.map(({ title, icon: Icon, intro, points }, idx) => {
            const isExpanded = expandedCard === idx;

            return (
              <article
                key={title}
                data-testid={`who-card-${idx}`}
                onClick={() => toggleCard(idx)}
                className="group relative rounded-[28px] p-9 md:p-10 transition-all duration-500 hover:-translate-y-1 backdrop-blur-md cursor-pointer md:cursor-default"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(216,195,176,0.08) 0%, rgba(90,64,52,0.18) 100%)",
                  border: "1px solid rgba(250,248,246,0.10)",
                }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-cream/[0.04] border border-cream/15 mb-7 transition-colors group-hover:border-gold/50">
                  <Icon size={20} className="text-gold" />
                </div>

                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif font-medium text-cream text-[28px] md:text-[32px] leading-tight">
                    {title}
                  </h3>
                  <ChevronDown
                    size={24}
                    className={`text-gold md:hidden transition-transform duration-300 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Desktop: Always visible | Mobile: Expandable */}
                <div className={`md:block ${isExpanded ? "block" : "hidden"}`}>
                  <p className="font-serif italic text-sand/85 text-[17px] leading-relaxed mb-7">
                    {intro}
                  </p>

                  <ul className="space-y-3">
                    {points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-3 text-cream/75 text-[14px] font-light leading-relaxed"
                      >
                        <span className="mt-[8px] w-1 h-1 rounded-full bg-gold shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 flex flex-col items-center text-center">
          <p className="font-serif italic text-sand/80 text-[22px] md:text-[26px] max-w-2xl leading-snug">
            If any of this feels like your room, there is a way through.
          </p>
          <a
            href="#contact"
            onClick={handleBook}
            data-testid="who-cta-book"
            className="cta-gold cta-pulse group inline-flex items-center gap-3 mt-10 font-sans text-[14px] font-medium tracking-[0.14em] rounded-full pl-8 pr-7 py-[18px]"
          >
            <span>Book a Clarity-Communication Session</span>
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-espresso text-cream transition-transform duration-500 group-hover:translate-x-1">
              <ArrowUpRight size={14} strokeWidth={1.8} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
