/**
 * HeroPortrait — YouTube video inside an editorial dark-glass frame
 */

export default function HeroPortrait() {
  return (
    <div
      data-testid="hero-portrait"
      className="relative w-full aspect-[3/4] md:aspect-[4/5] max-w-[560px]"
    >
      {/* Soft drifting blobs behind */}
      <div
        aria-hidden
        className="absolute -top-10 -left-10 w-[55%] h-[55%] rounded-full blur-3xl opacity-50 animate-drift-slow"
        style={{
          background:
            "radial-gradient(closest-side, rgba(216,195,176,0.55), rgba(216,195,176,0))",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 w-[60%] h-[60%] rounded-full blur-3xl opacity-50 animate-drift-reverse"
        style={{
          background:
            "radial-gradient(closest-side, rgba(176,141,87,0.55), rgba(176,141,87,0))",
        }}
      />

      {/* Editorial frame — dark glass */}
      <div
        className="absolute inset-3 md:inset-6 rounded-[28px] border border-cream/15 backdrop-blur-md overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)]"
        style={{
          background:
            "linear-gradient(160deg, rgba(90,64,52,0.55) 0%, rgba(59,42,36,0.45) 60%, rgba(42,30,25,0.65) 100%)",
        }}
      >
        {/* YouTube Video Embed */}
        <iframe
          className="absolute inset-0 w-full h-full border-0"
          src="https://www.youtube.com/embed/Mcj9ZpEsp18?si=U3cP2KEyPghobrP0"
          title="TrustBridge Counsel"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
