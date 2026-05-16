/**
 * HeroVisual — Pure SVG abstract composition for the right side of the hero.
 * Tuned for a DARK hero background: luminous gold-stroked architecture
 * floating inside a translucent dark glass plate.
 */
export default function HeroVisual() {
  return (
    <div
      data-testid="hero-abstract-visual"
      className="relative w-full aspect-[4/5] md:aspect-[5/6] lg:aspect-[4/5] max-w-[640px]"
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
      <div
        aria-hidden
        className="absolute top-1/3 left-1/4 w-[45%] h-[45%] rounded-full blur-3xl opacity-30 animate-drift-slow"
        style={{
          background:
            "radial-gradient(closest-side, rgba(139,107,92,0.55), rgba(139,107,92,0))",
        }}
      />

      {/* Editorial frame — dark glass */}
      <div
        className="absolute inset-3 md:inset-6 rounded-[36px] border border-cream/15 backdrop-blur-md overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, rgba(90,64,52,0.55) 0%, rgba(59,42,36,0.45) 60%, rgba(42,30,25,0.65) 100%)",
        }}
      >
        <svg
          viewBox="0 0 600 720"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden
        >
          <defs>
            <linearGradient id="goldLine" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#B08D57" stopOpacity="0" />
              <stop offset="50%" stopColor="#E6C28A" stopOpacity="1" />
              <stop offset="100%" stopColor="#B08D57" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="sandLine" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#D8C3B0" stopOpacity="0" />
              <stop offset="50%" stopColor="#D8C3B0" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#D8C3B0" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="archFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#D8C3B0" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#8B6B5C" stopOpacity="0.03" />
            </linearGradient>
            <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F5E6CC" stopOpacity="0.85" />
              <stop offset="60%" stopColor="#B08D57" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#3B2A24" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Two arching fields converging */}
          <path
            d="M-60,520 C120,260 220,180 320,360 C420,540 520,560 660,420"
            stroke="#D8C3B0"
            strokeOpacity="0.22"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M-40,460 C140,220 260,180 320,340 C400,520 520,500 640,360"
            stroke="#D8C3B0"
            strokeOpacity="0.16"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M-20,580 C160,340 260,260 320,400 C400,580 520,600 660,500"
            stroke="#D8C3B0"
            strokeOpacity="0.12"
            strokeWidth="1.2"
            fill="none"
          />

          {/* Sculptural arch */}
          <path
            d="M150,700 L150,360 C150,250 230,180 300,180 C370,180 450,250 450,360 L450,700 Z"
            fill="url(#archFill)"
          />
          <path
            d="M180,700 L180,365 C180,265 245,210 300,210 C355,210 420,265 420,365 L420,700"
            stroke="#D8C3B0"
            strokeOpacity="0.28"
            strokeWidth="1.2"
            fill="none"
          />

          {/* Central luminous bridge — gold thread */}
          <path
            d="M40,520 C180,400 250,380 300,380 C350,380 420,400 560,520"
            stroke="url(#goldLine)"
            strokeWidth="1.8"
            fill="none"
          />
          <path
            d="M40,540 C180,430 250,410 300,410 C350,410 420,430 560,540"
            stroke="url(#sandLine)"
            strokeWidth="1.2"
            fill="none"
          />

          {/* Soft center glow */}
          <circle cx="300" cy="380" r="140" fill="url(#centerGlow)" />

          {/* Editorial dots — small punctuation */}
          <circle cx="300" cy="380" r="5" fill="#E6C28A" />
          <circle cx="300" cy="380" r="14" fill="#E6C28A" opacity="0.18" />
          <circle cx="120" cy="180" r="2" fill="#D8C3B0" opacity="0.6" />
          <circle cx="500" cy="220" r="2" fill="#D8C3B0" opacity="0.6" />
          <circle cx="80" cy="420" r="1.5" fill="#D8C3B0" opacity="0.4" />
          <circle cx="540" cy="460" r="1.5" fill="#D8C3B0" opacity="0.4" />

          {/* Vertical thin grid lines (editorial) */}
          {[120, 240, 360, 480].map((x) => (
            <line
              key={x}
              x1={x}
              y1="40"
              x2={x}
              y2="700"
              stroke="#FAF8F6"
              strokeOpacity="0.05"
              strokeWidth="1"
            />
          ))}

          {/* Top serif label */}
          <text
            x="48"
            y="78"
            fill="#D8C3B0"
            fontFamily="Cormorant Garamond, serif"
            fontStyle="italic"
            fontSize="22"
            opacity="0.8"
          >
            II.
          </text>
          <text
            x="48"
            y="108"
            fill="#B08D57"
            fontFamily="Manrope, sans-serif"
            fontSize="9"
            letterSpacing="3"
            opacity="0.85"
          >
            COMMUNICATION · CLARITY
          </text>

          {/* Bottom serif label removed — caption sits at the bottom row */}
        </svg>

        {/* Floating editorial caption */}
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[10px] tracking-[0.32em] uppercase text-sand/70 font-light">
          <span>Plate 02</span>
          <span className="w-14 h-px bg-gold/70" />
          <span>Bridge Study</span>
        </div>
      </div>

      {/* Outer floating quote chip — editorial pull */}
      <div className="absolute -bottom-10 -left-2 md:-left-8 lg:-left-12 max-w-[300px] bg-espresso/85 backdrop-blur-md border border-cream/10 rounded-2xl px-6 py-5 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.7)]">
        <p className="font-serif italic text-cream text-[17px] leading-[1.4]">
          “Most disputes don’t need a courtroom — they need a{" "}
          <span className="text-gold">bridge.</span>”
        </p>
        <p className="mt-3 text-[10px] tracking-[0.35em] uppercase text-sand/70">
          TrustBridge Counsel
        </p>
      </div>
    </div>
  );
}
