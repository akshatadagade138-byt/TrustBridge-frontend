export default function Disclaimer() {
  return (
    <main data-testid="disclaimer-page" className="relative">
      <section
        className="min-h-screen w-full relative overflow-hidden grain-overlay pt-32 pb-20"
        style={{
          background:
            "linear-gradient(135deg, #F7F2EE 0%, #ECE2D6 50%, #E5D9CC 100%)",
        }}
      >
        <div
          aria-hidden
          className="absolute top-20 right-10 w-[400px] h-[400px] rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(closest-side, rgba(176,141,87,0.4), transparent)",
          }}
        />

        <div className="relative max-w-[900px] mx-auto px-6 lg:px-10">
          <h1 className="font-serif font-light text-espresso text-[36px] md:text-[48px] leading-[1.1] tracking-[-0.01em]">
            Website <span className="italic text-walnut">Disclaimer</span>
          </h1>

          <div className="mt-12 space-y-10 text-ink/85 text-[15px] md:text-[16px] font-light leading-[1.85]">
            {/* Section 1 */}
            <div>
              <h2 className="font-serif font-semibold text-espresso text-xl md:text-2xl mb-4">1. General Information</h2>
              <p>
                The information, workshops, consultations, programs, content, and materials provided by
                TrustBridge Counsel services are intended for educational, professional development, communication,
                and general guidance purposes only.
              </p>
              <p className="mt-3">
                TrustBridge Counsel does not guarantee specific personal, emotional, legal, business, or
                relationship outcomes from participation in any session, program, workshop, consultation,
                or service.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="font-serif font-semibold text-espresso text-xl md:text-2xl mb-4">2. No Legal, Medical, or Psychological Advice</h2>
              <p className="mb-3">TrustBridge Counsel services do not constitute:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Legal advice</li>
                <li>Medical advice</li>
                <li>Mental health diagnosis or therapy</li>
                <li>Psychiatric or psychological treatment</li>
                <li>Emergency intervention services</li>
              </ul>
              <p className="mt-3">
                Any discussions relating to conflict, communication, relationships, workplace behaviour,
                or emotional dynamics are intended for educational and developmental purposes only.
              </p>
              <p className="mt-3">
                Participants should seek qualified licensed professionals for legal, medical, psychological,
                financial, or clinical concerns.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="font-serif font-semibold text-espresso text-xl md:text-2xl mb-4">3. Personal Responsibility</h2>
              <p>
                Participants are solely responsible for their personal decisions, actions, interpretations,
                and outcomes arising from the use of TrustBridge Counsel services or content.
              </p>
              <p className="mt-3">
                TrustBridge Counsel shall not be liable for decisions or actions taken based on workshops,
                consultations, website content, or communication materials.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="font-serif font-semibold text-espresso text-xl md:text-2xl mb-4">4. External Links and Third-Party Platforms</h2>
              <p>
                Our website or communications may contain links to external websites or third-party platforms.
                TrustBridge Counsel is not responsible for the content, security, accuracy, or practices of
                external services.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="font-serif font-semibold text-espresso text-xl md:text-2xl mb-4">5. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, TrustBridge Counsel shall not be liable for any
                direct, indirect, incidental, consequential, emotional, financial, business, or reputational
                loss arising from the use of our services, website, materials, or programs.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="font-serif font-semibold text-espresso text-xl md:text-2xl mb-4">6. Acceptance</h2>
              <p>
                By using TrustBridge Counsel services or accessing our website, you acknowledge and agree
                to this Disclaimer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
