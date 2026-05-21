import { MessageSquareWarning, ThumbsDown, Theater, Presentation, CalendarClock, BadgeCheck, ShieldOff } from "lucide-react";

/**
 * Corporate Teams Services Section — Home page only
 *
 * Two parts:
 * 1. Pain points grid with 3 images + icons + descriptions (LEFT side)
 * 2. Services cards (3 offerings)
 *
 * Layout: Images on LEFT, "Corporate Teams" heading on RIGHT
 */

const PAIN_POINTS = [
  {
    id: 1,
    image: "/images/corporate/gap.png",
    icon: MessageSquareWarning,
    text: "Communication gaps.",
  },
  {
    id: 2,
    image: "/images/corporate/critism.png",
    icon: ThumbsDown,
    text: "Input lands as criticism.",
  },
  {
    id: 3,
    image: "/images/corporate/trust.png",
    icon: ShieldOff,
    text: "Trust is thinning.",
  },
];

const SERVICES = [
  {
    id: 1,
    number: "01",
    icon: Presentation,
    title: "Strategic Workshop (Entry Level)",
    subtitle: "90-Minute",
    description: "A focused session to identify communication gaps, align expectations, and create actionable next steps for your team.",
  },
  {
    id: 2,
    number: "02",
    icon: CalendarClock,
    title: "Deep-Dive Intervention",
    subtitle: "Half-Day / Full-Day",
    description: "An intensive workshop to address deep-rooted team dynamics, resolve conflicts, and rebuild trust and collaboration.",
  },
  {
    id: 3,
    number: "03",
    icon: BadgeCheck,
    title: "Advisory & Retainer (Premium)",
    subtitle: "Ongoing Strategic Support",
    description: "Continuous guidance and support to maintain team alignment, prevent conflicts, and sustain healthy communication.",
  },
];

function PainPointCard({ item }) {
  const Icon = item.icon;

  return (
    <div className="flex flex-col items-center text-center">
      {/* Image with overlapping icon */}
      <div className="relative w-full mb-8">
        {/* Image - same as Couples */}
        <div className="w-full aspect-[2/3] rounded-2xl overflow-hidden bg-sand/30 border border-sand/40">
          {item.image ? (
            <img
              src={item.image}
              alt={item.text}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-mocha/40 text-sm">
              Image {item.id}
            </div>
          )}
        </div>

        {/* Icon - positioned half on image */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 w-14 h-14 rounded-full bg-ivory border-2 border-gold shadow-md flex items-center justify-center">
          <Icon size={24} strokeWidth={2} className="text-gold" />
        </div>
      </div>

      {/* Text */}
      <p className="text-walnut/85 text-sm leading-relaxed font-light max-w-[160px]">
        {item.text}
      </p>
    </div>
  );
}

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <div className="group relative rounded-xl p-5 text-center transition-all duration-500 hover:-translate-y-2 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #F2DDB6 0%, #E6C892 100%)",
        boxShadow: "0 1px 0 rgba(255,255,255,0.5) inset, 0 4px 20px -4px rgba(176,141,87,0.35)",
      }}
    >
      {/* Premium shine effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-60" />

      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-white/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-espresso/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 pt-1">
        {/* Icon */}
        <div className="w-12 h-12 rounded-full bg-espresso/90 shadow-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-500">
          <Icon size={22} strokeWidth={1.8} className="text-cream" />
        </div>

        {/* Number with dividers */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="w-6 h-px bg-espresso/30" />
          <span className="text-espresso font-bold text-xs tracking-[0.25em]">{service.number}</span>
          <span className="w-6 h-px bg-espresso/30" />
        </div>

        {/* Title - fixed height, top-aligned for row consistency */}
        <div className="h-[60px] flex flex-col items-center justify-start mb-2">
          <h4 className="font-serif text-espresso text-[15px] md:text-base leading-snug px-1 font-medium">
            {service.title}
          </h4>
          {service.subtitle && (
            <span className="text-espresso/70 text-xs font-medium mt-1">{service.subtitle}</span>
          )}
        </div>

        {/* Decorative divider */}
        <div className="w-10 h-0.5 bg-espresso/30 mx-auto mb-3 group-hover:w-14 transition-all duration-500 rounded-full" />

        {/* Description */}
        <p className="text-espresso/75 text-xs leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  );
}

export default function CorporateServices() {
  return (
    <section
      data-testid="corporate-services"
      className="relative pt-16 md:pt-12 pb-28 md:pb-20"
      style={{
        background: "linear-gradient(180deg, #F7F2EE 0%, #ECE2D6 100%)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

        {/* ========== TOP: Pain Points Section (Images LEFT, Heading RIGHT) ========== */}
        <div className="mb-10 md:mb-14">
          {/* Header row - reversed layout */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-12 md:mb-16">
            {/* Left: 3 Pain Point Cards */}
            <div className="lg:col-span-9 lg:order-1">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {PAIN_POINTS.map((item) => (
                  <PainPointCard key={item.id} item={item} />
                ))}
              </div>
            </div>

            {/* Right: Title */}
            <div className="lg:col-span-3 lg:order-2 lg:text-right">
              <h2 className="font-serif font-light text-espresso text-[48px] md:text-[64px] leading-[1] tracking-[-0.02em] italic">
                Corporate Teams.
              </h2>
              <div className="w-12 h-px bg-gold mt-4 mb-6 lg:ml-auto" />
              <p className="text-walnut/85 text-lg md:text-xl leading-relaxed font-light">
                When alignment breaks down,{" "}
                <span className="text-gold italic">structure</span> builds it back.
              </p>
            </div>
          </div>
        </div>

        {/* ========== BOTTOM: Services Section ========== */}
        <div>
          {/* Header with lines */}
          <div className="flex items-center justify-center gap-6 mb-10 md:mb-14">
            <span className="flex-1 max-w-[120px] h-px bg-gradient-to-r from-transparent to-gold/60" />
            <h3 className="font-serif font-light text-espresso text-[28px] md:text-[38px] leading-[1.1] tracking-[0.08em] uppercase">
              Our Services
            </h3>
            <span className="flex-1 max-w-[120px] h-px bg-gradient-to-l from-transparent to-gold/60" />
          </div>

          {/* Service Cards Grid - narrower width */}
          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {SERVICES.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
