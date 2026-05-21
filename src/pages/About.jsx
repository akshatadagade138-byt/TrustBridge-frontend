import {
  Users,
  MessageCircle,
  Briefcase,
  Scale,
} from "lucide-react";

const FOUNDER_IMAGE =
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=75";

const COMPANY_IMAGE =
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=75";

const SERVICES = [
  { icon: Users, text: "Couple & Family Dynamics" },
  { icon: Briefcase, text: "Workplace Conflict Resolution" },
  { icon: MessageCircle, text: "Communication Strategy" },
  { icon: Scale, text: "Pre-Legal Mediation" },
];

export default function About() {
  return (
    <main data-testid="about-page" className="relative">
      {/* SECTION 1: About the Company */}
      <section
        className="min-h-screen w-full relative flex items-center justify-center overflow-hidden grain-overlay pt-28 pb-16"
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
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(closest-side, rgba(176,141,87,0.4), transparent)",
          }}
        />

        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Text Content - Left */}
            <div className="lg:pt-12">
              <h2 className="font-serif font-light text-cream text-[32px] md:text-[42px] leading-[1.1] tracking-[-0.01em]">
                Resolve Conflict <span className="italic text-gold">Before</span> It Escalates
              </h2>

              <p className="mt-8 text-sand/90 text-lg leading-relaxed font-light">
                We help individuals, couples, and organizations navigate conflict with clarity and structure —
                before it escalates into legal, emotional, or relational damage.
              </p>

              <p className="mt-5 text-sand/80 text-base leading-relaxed font-light">
                Our approach goes beyond surface-level resolution to understand the patterns, emotions,
                and miscommunication that drive conflict. With a foundation in legal reasoning and a
                strategic communication lens, we help you move from reaction to clarity, from escalation
                to structured resolution.
              </p>

              {/* Services */}
              <div className="mt-10 flex flex-wrap gap-3">
                {SERVICES.map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-cream/[0.08] backdrop-blur-md border border-cream/15"
                  >
                    <Icon size={16} className="text-gold" />
                    <span className="text-cream/90 text-sm font-light">{text}</span>
                  </div>
                ))}
              </div>

              {/* Company Values */}
              <div className="mt-10 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-gold" />
                  <div>
                    <h3 className="text-cream font-medium text-base">Clarity Over Confusion</h3>
                    <p className="text-sand/60 text-sm font-light">We cut through noise to find the real issue</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-gold" />
                  <div>
                    <h3 className="text-cream font-medium text-base">Structure Over Chaos</h3>
                    <p className="text-sand/60 text-sm font-light">Frameworks that bring order to complexity</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-gold" />
                  <div>
                    <h3 className="text-cream font-medium text-base">Dignity in Resolution</h3>
                    <p className="text-sand/60 text-sm font-light">Every party leaves with respect intact</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image - Right */}
            <div className="hidden lg:flex justify-center mt-16">
              <div className="relative w-full max-w-[480px] aspect-[4/5]">
                <div
                  aria-hidden
                  className="absolute -top-8 -left-8 w-[60%] h-[60%] rounded-full blur-3xl opacity-50"
                  style={{
                    background:
                      "radial-gradient(closest-side, rgba(176,141,87,0.5), transparent)",
                  }}
                />
                <div className="relative rounded-[32px] overflow-hidden border border-cream/20 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.4)]">
                  <img
                    src={COMPANY_IMAGE}
                    alt="Professional handshake representing trust and partnership"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: About the Founder */}
      <section
        className="min-h-screen w-full relative flex items-center justify-center overflow-hidden grain-overlay py-16"
        style={{
          background:
            "linear-gradient(135deg, #F7F2EE 0%, #ECE2D6 50%, #E5D9CC 100%)",
        }}
      >
        <div
          aria-hidden
          className="absolute top-20 left-10 w-[400px] h-[400px] rounded-full blur-3xl opacity-40"
          style={{
            background:
              "radial-gradient(closest-side, rgba(176,141,87,0.4), transparent)",
          }}
        />

        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Portrait */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative w-full max-w-[380px] aspect-[3/4]">
                <div
                  aria-hidden
                  className="absolute -top-8 -right-8 w-[70%] h-[70%] rounded-full blur-3xl opacity-50"
                  style={{
                    background:
                      "radial-gradient(closest-side, rgba(176,141,87,0.5), transparent)",
                  }}
                />
                <div className="relative rounded-[32px] overflow-hidden border-2 border-sand/40 shadow-[0_40px_80px_-30px_rgba(59,42,36,0.3)]">
                  <img
                    src={FOUNDER_IMAGE}
                    alt="Pinkey B. — Founder, TrustBridge Counsel"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Founder Content */}
            <div className="order-2 lg:order-1">
              <h2 className="font-serif font-light text-espresso text-[36px] md:text-[52px] leading-[1.05] tracking-[-0.02em]">
                Meet the Founder
              </h2>
              <p className="mt-2 font-serif italic text-walnut text-[28px] md:text-[36px]">
                Pinkey B.
              </p>

              <div className="mt-8 space-y-5 text-ink/85 text-[15px] md:text-[16px] font-light leading-[1.85]">
                <p>
                  The 15+ years of cumulative experience from working for MNC to handling business
                  as Business Head and then to Law, has been remarkable. Academic degree in B.B.M,
                  a Postgraduate degree in HRM, and an LLB degree, along with training in mediation
                  gave more clarity.
                </p>
                <p>
                  This blend of education and experience has shaped the ability to decode human behaviour,
                  simplify complex situations, and bring clarity to conflict.
                </p>
                <p>
                  My work focuses on communication, conflict understanding, workplace dynamics, and
                  mediation-oriented approaches that help individuals and organisations navigate
                  conversations with greater clarity, structure, and confidence.
                </p>
                <p>
                  My work goes beyond couple dynamics and their impact on children to include resolving
                  workplace conflicts across employer–employee relationships, team leads, and inter-team
                  coordination. I also help businesses improve communication and alignment to enhance
                  overall performance.
                </p>
              </div>

              {/* Credentials */}
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-espresso/10 text-espresso text-xs font-medium">B.B.M.</span>
                <span className="px-4 py-2 rounded-full bg-espresso/10 text-espresso text-xs font-medium">PG · HRM</span>
                <span className="px-4 py-2 rounded-full bg-espresso/10 text-espresso text-xs font-medium">LL.B.</span>
                <span className="px-4 py-2 rounded-full bg-espresso/10 text-espresso text-xs font-medium">Mediation</span>
              </div>

              <p className="mt-8 font-serif italic text-walnut/80 text-lg">
                "If that resonates, we are here to help."
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
