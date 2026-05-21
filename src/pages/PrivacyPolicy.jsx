export default function PrivacyPolicy() {
  return (
    <main data-testid="privacy-policy-page" className="relative">
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
            Privacy <span className="italic text-walnut">Policy</span>
          </h1>

          <div className="mt-12 space-y-10 text-ink/85 text-[15px] md:text-[16px] font-light leading-[1.85]">
            {/* Section 1 */}
            <div>
              <h2 className="font-serif font-semibold text-espresso text-xl md:text-2xl mb-4">1. Introduction</h2>
              <p>
                In TrustBridge Counsel, We respect your privacy and are committed to protecting the personal
                information shared with us through our website, workshops, consultations, programs,
                forms, and communications.
              </p>
              <p className="mt-3">By using our services, you agree to this Privacy Policy.</p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="font-serif font-semibold text-espresso text-xl md:text-2xl mb-4">2. Information We Collect</h2>
              <p className="mb-3">We may collect:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name, phone number, email address, and organisation details</li>
                <li>Billing and payment information</li>
                <li>Responses shared during workshops, consultations, or assessments</li>
                <li>Website usage data such as IP address, browser type, cookies, and device information</li>
              </ul>
              <p className="mt-3">
                You may choose not to provide certain information; however, some services may then be limited.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="font-serif font-semibold text-espresso text-xl md:text-2xl mb-4">3. How We Use Information</h2>
              <p className="mb-3">We use information to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Deliver workshops, consultations, and services</li>
                <li>Schedule sessions and respond to inquiries</li>
                <li>Process invoices and payments</li>
                <li>Improve participant experience and program quality</li>
                <li>Maintain secure operations and comply with applicable legal requirements</li>
                <li>Send important service-related updates</li>
              </ul>
              <p className="mt-3 font-medium">We do not sell personal information.</p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="font-serif font-semibold text-espresso text-xl md:text-2xl mb-4">4. Confidentiality</h2>
              <p>
                TrustBridge values discretion and confidentiality. Information voluntarily shared during
                sessions or programs is treated responsibly and respectfully.
              </p>
              <p className="mt-3">
                Information may be disclosed only where required by law, necessary to protect safety or
                rights, or with participant consent.
              </p>
              <p className="mt-3">
                Participants are advised not to share highly sensitive personal, medical, financial, or
                legally privileged information unless necessary.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="font-serif font-semibold text-espresso text-xl md:text-2xl mb-4">5. Sharing of Information</h2>
              <p className="mb-3">Information may be shared only with:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Trusted service providers assisting operations or payments</li>
                <li>Trainers, facilitators, or consultants working under confidentiality obligations</li>
                <li>Legal or regulatory authorities where required by law</li>
              </ul>
              <p className="mt-3">All reasonable efforts are taken to protect shared information.</p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="font-serif font-semibold text-espresso text-xl md:text-2xl mb-4">6. Data Security</h2>
              <p>
                We take reasonable technical and organisational measures to protect personal information
                from unauthorised access, misuse, loss, or disclosure.
              </p>
              <p className="mt-3">However, no online system can guarantee absolute security.</p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="font-serif font-semibold text-espresso text-xl md:text-2xl mb-4">7. Retention of Information</h2>
              <p>
                Information is retained only as long as reasonably necessary for service delivery, legal
                obligations, record keeping, or dispute resolution.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="font-serif font-semibold text-espresso text-xl md:text-2xl mb-4">8. Your Rights</h2>
              <p className="mb-3">Subject to applicable laws, you may request to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access or correct your information</li>
                <li>Withdraw consent where applicable</li>
                <li>Opt out of non-essential communications</li>
                <li>Request deletion of information, where legally permissible</li>
              </ul>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="font-serif font-semibold text-espresso text-xl md:text-2xl mb-4">9. Third-Party Platforms</h2>
              <p>
                Our website or communications may contain links to third-party platforms or services.
                TrustBridge is not responsible for their privacy practices.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="font-serif font-semibold text-espresso text-xl md:text-2xl mb-4">10. Policy Updates</h2>
              <p>
                This Privacy Policy may be updated periodically. Continued use of our services after
                updates constitutes acceptance of the revised policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
