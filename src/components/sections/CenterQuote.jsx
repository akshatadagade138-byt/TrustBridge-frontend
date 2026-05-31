export default function CenterQuote() {
  return (
    <section
      data-testid="center-quote-section"
      className="relative py-32 md:py-44 overflow-hidden grain-overlay hidden md:block"
      style={{
        background:
          "radial-gradient(ellipse at top, #5A4034 0%, #3B2A24 60%, #2A1E19 100%)",
      }}
    >
      {/* Ambient golden glow */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(closest-side, rgba(176,141,87,0.7), transparent)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="flex justify-center items-center gap-4 mb-12">
          <span className="w-10 h-px bg-gold/70" />
          <span className="text-[10px] tracking-[0.4em] uppercase text-sand/80 font-light">
            On Practice
          </span>
          <span className="w-10 h-px bg-gold/70" />
        </div>

        <p className="font-serif text-cream font-light italic text-[34px] sm:text-[44px] md:text-[56px] leading-[1.15] tracking-[-0.005em]">
          “When it comes to <span className="text-gold not-italic">conflict</span> and{" "}
          <span className="text-gold not-italic">communication</span>, how it is handled
          matters as much as what is said.”
        </p>

        <div className="mt-14 flex flex-col items-center gap-3">
          <div className="flex justify-center items-center gap-4">
            <span className="w-12 h-px bg-sand/40" />
            <span className="font-serif italic text-sand/80 text-base">
              TrustBridge Counsel
            </span>
            <span className="w-12 h-px bg-sand/40" />
          </div>
          <span className="text-sand/70 text-sm uppercase tracking-[0.3em]">
            we act, we listen, we deliver
          </span>
        </div>
      </div>
    </section>
  );
}
