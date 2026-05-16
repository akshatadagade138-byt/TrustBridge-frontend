import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  GraduationCap,
  Scale,
  Users,
  Building2,
  Target,
  Shield,
  Heart,
} from "lucide-react";

const PORTRAIT_URL =
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=75";

const COMPANY_VALUES = [
  { icon: Target, text: "Clarity over confusion" },
  { icon: Shield, text: "Structure over chaos" },
  { icon: Heart, text: "Dignity in every resolution" },
];

const CAREER_ARC = [
  {
    plate: "I.",
    period: "The early years",
    title: "Multinational Banking",
    body:
      "A first chapter shaped by precision, structure, and the quiet discipline of working with people whose decisions carried weight.",
  },
  {
    plate: "II.",
    period: "The mid years",
    title: "Head of Marketing",
    body:
      "Leading marketing for a growing enterprise — a school in narrative, persuasion, and the careful choreography of cross-functional teams.",
  },
  {
    plate: "III.",
    period: "The current chapter",
    title: "Law, Mediation & Counselling",
    body:
      "A move into law was not a pivot — it was a return to the underlying question every earlier chapter had been circling: how is this conflict actually being held?",
  },
];

const CREDENTIALS = [
  {
    label: "B.B.M.",
    detail: "Bachelor of Business Management",
    icon: Building2,
  },
  {
    label: "PG · HRM",
    detail: "Postgraduate, Human Resource Management",
    icon: Users,
  },
  { label: "LL.B.", detail: "Bachelor of Laws", icon: Scale },
  {
    label: "Mediation",
    detail: "Formal training in mediation practice",
    icon: GraduationCap,
  },
];

export default function About() {
  return (
    <main data-testid="about-page" className="bg-ivory">
      {/* SECTION 1 — DARK header: About the Company */}
      <section
        className="relative pt-[110px] pb-20 overflow-hidden grain-overlay text-cream"
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

        <div className="relative max-w-[1100px] mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
          </div>
          <h1 className="font-serif font-light text-cream text-[48px] sm:text-[64px] md:text-[76px] leading-[1.0] tracking-[-0.015em]">
            TrustBridge <span className="italic text-gold">Counsel</span>
          </h1>
          <p className="mt-5 font-serif italic text-sand/85 text-[20px] md:text-[24px] tracking-tight">
            Conflict Resolution · Communication Strategy · Emotional Intelligence
          </p>

          <p className="mt-10 max-w-2xl text-sand/85 text-lg leading-relaxed font-light">
            We help individuals, couples, and organizations navigate conflict with clarity and structure — before it escalates into legal, emotional, or relational damage.
          </p>

          {/* Company Values */}
          <div className="mt-12 flex flex-wrap gap-4">
            {COMPANY_VALUES.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-cream/[0.06] backdrop-blur-md border border-cream/15"
              >
                <Icon size={16} className="text-gold" />
                <span className="text-cream/85 text-sm font-light">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — LIGHT: Meet the Founder */}
      <section
        data-testid="about-founder-intro"
        className="relative py-16 md:py-20 grain-overlay"
        style={{
          background:
            "linear-gradient(180deg, #F7F2EE 0%, #ECE2D6 100%)",
        }}
      >
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Portrait */}
            <div className="lg:col-span-5">
              <div className="relative w-full aspect-[4/5] max-w-[420px] mx-auto">
                <div
                  aria-hidden
                  className="absolute -top-6 -left-6 w-[60%] h-[60%] rounded-full blur-3xl opacity-50"
                  style={{
                    background:
                      "radial-gradient(closest-side, rgba(176,141,87,0.5), transparent)",
                  }}
                />
                <div className="relative rounded-[28px] overflow-hidden border border-sand/60 shadow-[0_30px_60px_-30px_rgba(59,42,36,0.25)]">
                  <img
                    src={PORTRAIT_URL}
                    alt="Pinkey B. — Founder, TrustBridge Counsel"
                    loading="lazy"
                    className="w-full h-full object-cover aspect-[4/5]"
                  />
                </div>
              </div>
            </div>

            {/* Founder Intro */}
            <div className="lg:col-span-7">
              <h2 className="font-serif font-light text-espresso text-[36px] md:text-[48px] leading-[1.05] tracking-[-0.015em]">
                Meet the Founder, <span className="italic text-walnut">Pinkey B.</span>
              </h2>

              <div className="mt-8 space-y-5 text-ink/85 text-[16px] font-light leading-[1.8] max-w-xl">
                <p>
                  Pinkey B. brings over 15 years of experience across business development, training, human resources, public relations, counselling, mediation, and law.
                </p>
                <p>
                  Her professional journey—from working with multinational banking institutions to leading marketing functions and later moving into law and mediation—has shaped a deep understanding of communication, conflict, and human behaviour.
                </p>
                <p>
                  With qualifications in BBM, HRM, LLB, and mediation training, she combines strategic thinking with emotional insight to help people navigate difficult conversations with clarity and structure.
                </p>
              </div>

              {/* Credentials */}
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-espresso/10 text-espresso text-xs font-medium">BBM</span>
                <span className="px-4 py-2 rounded-full bg-espresso/10 text-espresso text-xs font-medium">HRM</span>
                <span className="px-4 py-2 rounded-full bg-espresso/10 text-espresso text-xs font-medium">LL.B.</span>
                <span className="px-4 py-2 rounded-full bg-espresso/10 text-espresso text-xs font-medium">Mediation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — DARK: Session & Conflict Strategy */}
      <section
        data-testid="about-conflict-strategy"
        className="relative py-16 md:py-20 overflow-hidden grain-overlay text-cream"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, #4A3328 0%, #2F2019 55%, #1F1410 100%)",
        }}
      >
        <div
          aria-hidden
          className="absolute -top-32 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-25"
          style={{
            background:
              "radial-gradient(closest-side, rgba(176,141,87,0.55), transparent)",
          }}
        />

        <div className="relative max-w-[1100px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Heading & Intro */}
            <div>
              <div className="flex items-center gap-3 mb-5">
              </div>
              <h2 className="font-serif font-light text-cream text-[36px] md:text-[48px] leading-[1.05] tracking-[-0.015em]">
                Conflict, Communication &{" "}
                <span className="italic text-gold">Resolution</span>
              </h2>

              <p className="mt-8 text-sand/85 text-[16px] font-light leading-[1.8] max-w-lg">
                Pinkey works at the intersection of conflict, communication, and law—helping individuals, couples, teams, and businesses resolve issues before they escalate into emotional, legal, or relational damage.
              </p>
            </div>

            {/* Right: Approach & Scope */}
            <div className="space-y-8">
              {/* Approach */}
              <div>
                <p className="text-[11px] tracking-[0.32em] uppercase text-gold font-light mb-4">
                  Her Approach
                </p>
                <ul className="space-y-3">
                  {[
                    "Identifying communication patterns",
                    "Reducing escalation",
                    "Improving alignment",
                    "Creating structured, conscious resolution",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-cream/85 text-[15px] font-light">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Scope */}
              <div>
                <p className="text-[11px] tracking-[0.32em] uppercase text-gold font-light mb-4">
                  Her Work Spans
                </p>
                <ul className="space-y-3">
                  {[
                    "Couples & family conflicts",
                    "Workplace communication challenges",
                    "Leadership & team alignment",
                    "Employer–employee and inter-team dynamics",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-cream/85 text-[15px] font-light">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
