import { Link } from "react-router-dom";

/**
 * Editorial placeholder shell for routed pages.
 * Used by About / Services / Blogs until full content arrives.
 */
export default function PageShell({
  eyebrow,
  title,
  italicWord,
  intro,
  body,
  testId,
}) {
  return (
    <main
      data-testid={testId}
      className="relative min-h-[100vh] pt-[140px] pb-32 grain-overlay"
      style={{
        background:
          "linear-gradient(180deg, #F7F2EE 0%, #F2EBE3 60%, #ECE2D6 100%)",
      }}
    >
      <div
        aria-hidden
        className="absolute -top-32 -right-40 w-[640px] h-[640px] rounded-full blur-3xl opacity-50"
        style={{
          background:
            "radial-gradient(closest-side, rgba(176,141,87,0.22), transparent)",
        }}
      />

      <div className="relative max-w-[1100px] mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="gold-divider" />
          <span className="eyebrow">{eyebrow}</span>
        </div>

        <h1 className="font-serif font-light text-espresso text-[48px] sm:text-[64px] md:text-[80px] leading-[1.02] tracking-[-0.01em]">
          {title.split(italicWord).map((part, i, arr) => (
            <span key={i}>
              {part}
              {i < arr.length - 1 && (
                <span className="italic text-walnut">{italicWord}</span>
              )}
            </span>
          ))}
        </h1>

        <p className="mt-10 max-w-2xl text-walnut/85 text-xl leading-relaxed font-light">
          {intro}
        </p>

        <div className="editorial-divider opacity-50 my-16" />

        <div className="grid md:grid-cols-12 gap-10">
          <p className="md:col-span-7 text-ink/70 text-[16px] leading-[1.85] font-light">
            {body}
          </p>
          <aside className="md:col-span-5">
            <div className="bg-cream/80 backdrop-blur-md border border-sand/60 rounded-[24px] p-8">
              <p className="font-serif italic text-espresso text-2xl leading-snug">
                Full content for this section is being prepared with the same
                care as the practice itself.
              </p>
              <p className="mt-5 text-walnut/70 text-sm font-light">
                In the meantime, you are welcome to begin a quiet conversation.
              </p>
              <Link
                to="/#contact"
                data-testid="page-shell-cta"
                className="cta-gold inline-flex items-center gap-3 mt-8 font-sans text-[12px] tracking-[0.22em] uppercase rounded-full px-6 py-3"
              >
                Book Consultation <span aria-hidden>→</span>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
