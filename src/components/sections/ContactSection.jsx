import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import TermsModal from "@/components/site/TermsModal";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const SUBJECTS = [
  "Couples / Relationship",
  "Corporate / Boardroom",
  "Business",
  "Family / Inheritance",
  "Other",
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: SUBJECTS[0],
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const BUSINESS_SUBJECTS = ["Corporate / Boardroom", "Business"];
  const isBusiness = BUSINESS_SUBJECTS.includes(form.subject);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validateForm = () => {
    const phoneDigits = form.phone.replace(/\D/g, "");
    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.message.trim()
    ) {
      toast.error("Please share your name, email, phone, and a brief message.");
      return false;
    }
    if (phoneDigits.length !== 10) {
      toast.error("Please enter a valid 10-digit phone number.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowTermsModal(true);
    }
  };

  const handleTermsAccepted = async () => {
    setShowTermsModal(false);
    setSubmitting(true);
    const phoneDigits = form.phone.replace(/\D/g, "");
    try {
      const res = await fetch(`${BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, phone: phoneDigits }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.detail || "Submission failed");
      }
      toast.success("Thank you — your request has been received in confidence.", {
        description: "We will reach out within one business day.",
      });
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: SUBJECTS[0],
        message: "",
      });
    } catch (err) {
      toast.error("Something went wrong while sending your request.", {
        description: "Please try again in a moment, or write to pinky@trustbridgecounsel.in.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-28 md:py-36 overflow-hidden grain-overlay text-cream"
      style={{
        background:
          "radial-gradient(ellipse at 25% 100%, #4A3328 0%, #2F2019 55%, #1F1410 100%)",
      }}
    >
      <div
        aria-hidden
        className="absolute -top-32 -right-40 w-[640px] h-[640px] rounded-full blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(closest-side, rgba(176,141,87,0.55), transparent)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-40 w-[520px] h-[520px] rounded-full blur-3xl opacity-25"
        style={{
          background:
            "radial-gradient(closest-side, rgba(216,195,176,0.45), transparent)",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14">
        {/* Left — editorial intro */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-14 h-px bg-gold" />
          </div>
          <h2 className="font-serif font-light text-cream text-[40px] md:text-[58px] leading-[1.04] tracking-[-0.005em]">
            Book a <span className="italic text-gold">Consultation.</span>
          </h2>

          <p className="mt-7 text-sand/85 text-lg leading-relaxed font-light max-w-md">
            Share a little about your situation. Every enquiry is treated with
            full confidentiality. We will respond personally within one
            business day.
          </p>

          <div className="mt-12 space-y-5">
            {[
              ["Confidential", "Conversations stay between us. Always."],
              ["Neutral", "No sides. No advice-giving. Only structure."],
              ["Practical", "Useful within the first session, not the tenth."],
            ].map(([k, v]) => (
              <div key={k} className="flex items-start gap-4">
                <span className="mt-2 w-6 h-px bg-gold shrink-0" />
                <div>
                  <p className="font-serif italic text-cream text-lg">{k}.</p>
                  <p className="text-sand/75 text-sm font-light">{v}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            data-testid="contact-form"
            noValidate
            className="relative backdrop-blur-md rounded-[28px] p-8 md:p-12 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]"
            style={{
              background:
                "linear-gradient(160deg, rgba(216,195,176,0.08) 0%, rgba(90,64,52,0.18) 100%)",
              border: "1px solid rgba(250,248,246,0.10)",
            }}
          >
            <p className="font-serif italic text-sand/70 text-base mb-10">
              In confidence —
            </p>

            <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
              <FieldUnderline
                id="contact-name"
                label="Your name (Individual / Company)"
                value={form.name}
                onChange={update("name")}
                placeholder="Name or company name"
                required
              />
              <FieldUnderline
                id="contact-email"
                label="Email"
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder="you@example.com"
                required
              />
              <div className="flex flex-col">
                <label
                  htmlFor="contact-phone"
                  className="text-[11px] tracking-[0.32em] uppercase text-sand/70 font-light mb-3"
                >
                  Phone
                </label>
                <input
                  id="contact-phone"
                  data-testid="contact-phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  value={form.phone}
                  onChange={(e) => {
                    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                    setForm((f) => ({ ...f, phone: digits }));
                  }}
                  placeholder="10-digit number"
                  required
                  className="bg-transparent border-b border-cream/20 focus:border-gold outline-none py-3 font-light text-cream text-[15px] tracking-[0.05em] placeholder:text-sand/30"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="contact-subject"
                  className="text-[11px] tracking-[0.32em] uppercase text-sand/70 font-light mb-3"
                >
                  Nature of conversation
                </label>
                <select
                  id="contact-subject"
                  data-testid="contact-subject"
                  value={form.subject}
                  onChange={update("subject")}
                  className="bg-transparent border-b border-cream/20 focus:border-gold outline-none py-3 font-light text-cream text-[15px] tracking-wide cursor-pointer"
                >
                  {SUBJECTS.map((s) => (
                    <option key={s} value={s} className="bg-espresso text-cream">
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-10">
              <label
                htmlFor="contact-message"
                className="text-[11px] tracking-[0.32em] uppercase text-sand/70 font-light mb-3 block"
              >
                What would clarity look like for you?
              </label>
              <textarea
                id="contact-message"
                data-testid="contact-message"
                value={form.message}
                onChange={update("message")}
                rows={5}
                required
                placeholder="A short paragraph is plenty."
                className="w-full bg-transparent border-b border-cream/20 focus:border-gold outline-none py-3 font-light text-cream text-[15px] leading-relaxed resize-none placeholder:text-sand/30"
              />
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
              <p className="text-[11px] tracking-[0.28em] uppercase text-sand/70 font-light">
                Confidential · Encrypted · Never shared
              </p>
              <button
                type="submit"
                disabled={submitting}
                data-testid="contact-submit-button"
                className="cta-gold group inline-flex items-center gap-3 font-sans text-[13px] font-medium tracking-[0.14em] rounded-full pl-8 pr-7 py-[16px] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span>{submitting ? "Sending…" : "Request Consultation"}</span>
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-espresso text-cream transition-transform duration-500 group-hover:translate-x-1">
                  <ArrowRight size={12} strokeWidth={1.8} />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <TermsModal
        isOpen={showTermsModal}
        onClose={() => setShowTermsModal(false)}
        onAccept={handleTermsAccepted}
        isBusiness={isBusiness}
      />
    </section>
  );
}

function FieldUnderline({ id, label, value, onChange, placeholder, type = "text", required }) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="text-[11px] tracking-[0.32em] uppercase text-sand/70 font-light mb-3"
      >
        {label}
      </label>
      <input
        id={id}
        data-testid={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="bg-transparent border-b border-cream/20 focus:border-gold outline-none py-3 font-light text-cream text-[15px] tracking-wide placeholder:text-sand/30"
      />
    </div>
  );
}
