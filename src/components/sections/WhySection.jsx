import { Eye, MessageSquareDashed, Compass } from "lucide-react";

const FEATURES = [
  {
    title: "Pattern Awareness",
    icon: Eye,
    intro:
      "Identify the hidden patterns driving conflict.",
    points: [
      "Toxic cycles & projections",
      "Ego clashes & power dynamics",
      "Emotional immaturity patterns",
      "Repeated communication breakdowns",
    ],
  },
  {
    title: "Conflict De-escalation",
    icon: MessageSquareDashed,
    intro:
      "Reduce tension through structured communication.",
    points: [
      "Communication without escalation",
      "When to pause vs. when to react",
      "Handling third-party influence",
      "Boundary-setting with dignity",
    ],
  },
  {
    title: "Conscious Decision-Making",
    icon: Compass,
    intro:
      "Move from emotional reactions to clear decisions.",
    points: [
      "Repair with structure",
      "Separate with dignity",
      "Avoid destructive litigation",
      "Align stakeholders around outcomes",
    ],
  },
];

export default function WhySection() {
  return (
    <section
      data-testid="why-section"
      className="relative py-28 md:py-20 grain-overlay"
      style={{
        background:
          "linear-gradient(180deg, #F7F2EE 0%, #FAF8F6 50%, #F7F2EE 100%)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="grid md:grid-cols-12 gap-10 items-end mb-20">
          <div className="md:col-span-7">
            <h2 className="font-serif font-light text-espresso text-[40px] md:text-[56px] leading-[1.02] tracking-[-0.005em]">
              Why <span className="italic text-walnut">TrustBridge</span> Counsel?
            </h2>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES.map(({ title, icon: Icon, intro, points, plate }, idx) => (
            <article
              key={title}
              data-testid={`feature-card-${idx}`}
              className="group relative bg-cream rounded-[28px] border border-sand/60 p-9 md:p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(59,42,36,0.25)] hover:border-gold/40"
            >
              {/* Plate marker */}
              <div className="absolute top-7 right-7 font-serif italic text-walnut/40 text-xl">
                {plate}
              </div>

              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-ivory border border-sand/70 mb-7 transition-colors group-hover:border-gold/50 group-hover:bg-gold/5">
                <Icon size={20} className="text-walnut group-hover:text-gold transition-colors" />
              </div>

              <h3 className="font-serif font-medium text-espresso text-[28px] md:text-[30px] leading-tight mb-4">
                {title}
              </h3>

              <p className="text-walnut/80 text-[15px] leading-relaxed font-light mb-7">
                {intro}
              </p>

              <ul className="space-y-3">
                {points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 text-ink/75 text-sm font-light"
                  >
                    <span className="mt-[10px] w-1 h-1 rounded-full bg-gold shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <div className="editorial-divider opacity-30 mt-8" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
