import {
  Lock,
  Scale,
  Layers,
  Compass,
  Handshake,
  Eye,
} from "lucide-react";

const VALUES = [
  {
    title: "Confidential & Secure",
    body:
      "Every conversation lives in a closed room. Discretion is not a feature — it is the foundation.",
    icon: Lock,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Neutral & Unbiased",
    body:
      "No sides taken. No agendas planted. Clarity is the only outcome we are loyal to.",
    icon: Scale,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Structured & Solution-Focused",
    body:
      "Sessions follow a clear architecture — diagnose patterns, de-escalate, decide.",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Respectful & Professional",
    body:
      "Adult-to-adult dialogue. No blame work, no theatre — just considered, careful work.",
    icon: Handshake,
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Clarity Over Assumptions",
    body:
      "We replace stories with facts, projections with patterns, and reactions with responses.",
    icon: Eye,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Real Situations, Real Resolution",
    body:
      "From boardroom standoffs to bedroom silences — practical work for the lives you actually live.",
    icon: Compass,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
  },
];

export default function TrustValueGrid() {
  return (
    <section
      data-testid="trust-value-section"
      className="relative py-28 md:py-18 grain-overlay"
      style={{
        background:
          "linear-gradient(180deg, #F7F2EE 0%, #ECE2D6 100%)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-20">
          <h2 className="font-serif font-light text-espresso text-[40px] md:text-[56px] leading-[1.02] tracking-[-0.005em]">
            What You <span className="italic text-walnut">Can</span> Expect.
          </h2>
        </div>

        <div className="max-w-[1100px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {VALUES.map(({ title, body, icon: Icon, image }, idx) => (
              <div
                key={title}
                data-testid={`trust-value-card-${idx}`}
                className="group relative rounded-[20px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_32px_64px_-20px_rgba(59,42,36,0.3)]"
                style={{
                  boxShadow: "0 1px 0 rgba(255,255,255,0.5) inset, 0 8px 32px -8px rgba(59,42,36,0.15)",
                }}
              >
                {/* Background image with light overlay */}
                <div className="absolute inset-0">
                  <img
                    src={image}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ivory/95 via-ivory/80 to-ivory/60" />
                </div>

                {/* Premium glass border effect */}
                <div className="absolute inset-0 rounded-[20px] border border-sand/40 group-hover:border-gold/50 transition-colors" />

                {/* Content */}
                <div className="relative z-10 p-6 md:p-7 min-h-[240px] flex flex-col">
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-full flex items-center justify-center mb-auto bg-espresso/90 shadow-lg">
                    <Icon size={18} strokeWidth={1.8} className="text-gold" />
                  </div>

                  {/* Text content */}
                  <div className="mt-auto">
                    <h3 className="font-serif font-medium text-espresso text-[19px] md:text-[21px] leading-tight mb-2">
                      {title}
                    </h3>
                    <p className="text-walnut/85 text-[13px] leading-relaxed font-light">
                      {body}
                    </p>
                  </div>

                  {/* Bottom gold accent line */}
                  <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
