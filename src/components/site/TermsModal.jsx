import { useState } from "react";
import { X } from "lucide-react";

const GENERIC_TERMS = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing the TrustBridge website, programs, workshops, consultations, sessions, materials, or services, you agree to comply with these Terms & Conditions. If you do not agree with these terms, you should discontinue use of our services and website.",
  },
  {
    title: "2. Services",
    content:
      "TrustBridge provides communication, conflict management, behavioural, leadership, relationship, coaching, educational, and professional development services. All services are provided on a best-effort and professional guidance basis.",
  },
  {
    title: "3. Bookings and Payments",
    content:
      "Session or workshop bookings may require advance payment. Fees once paid may be non-refundable unless otherwise stated. TrustBridge reserves the right to reschedule, modify, or cancel services where necessary. Any refund, rescheduling, or cancellation decisions shall be subject to applicable service terms communicated at the time of booking.",
  },
  {
    title: "4. Participant Conduct",
    content:
      "Users and participants agree to provide accurate information, not to misuse, disrupt, copy, or exploit TrustBridge content or services, and not to engage in abusive, defamatory, threatening, unlawful, or inappropriate conduct during sessions or communications. TrustBridge reserves the right to refuse or discontinue services in cases of misconduct or misuse.",
  },
  {
    title: "5. Intellectual Property",
    content:
      "All TrustBridge content including workshop materials, frameworks, presentations, branding, logos, written content, videos and digital resources remain the intellectual property of TrustBridge unless otherwise stated. No material may be copied, reproduced, distributed, recorded, or commercially used without prior written permission.",
  },
  {
    title: "6. Confidentiality",
    content:
      "TrustBridge makes reasonable efforts to maintain confidentiality during programs and consultations. However, participants acknowledge that complete confidentiality cannot be guaranteed in group workshops, online platforms, or third-party digital communication systems.",
  },
  {
    title: "7. Limitation of Liability",
    content:
      "TrustBridge shall not be responsible for personal decisions or outcomes arising from participation, indirect or consequential losses, technical interruptions or website downtime, or third-party platform failures. Use of TrustBridge services is at the participant's own discretion and responsibility.",
  },
  {
    title: "8. Website Usage",
    content:
      "Users agree not to attempt unauthorised access to the website, introduce harmful software or malicious activity, use the website for unlawful purposes, or misrepresent identity or information.",
  },
  {
    title: "9. Modifications",
    content:
      "TrustBridge may update these Terms & Conditions or website content at any time without prior notice. Continued use of the website or services constitutes acceptance of revised terms.",
  },
  {
    title: "10. Governing Law",
    content:
      "These Terms & Conditions shall be governed in accordance with the laws of India. Any disputes shall be subject to the jurisdiction of the appropriate courts in Bangalore, Karnataka.",
  },
];

const BUSINESS_TERMS = {
  title: "Business / Service Disclaimer",
  content: `TrustBridge Counsel provides communication, conflict-management, behavioural, leadership, relationship, educational, and professional development services intended to support personal and professional growth.

All workshops, consultations, coaching sessions, interventions, training programs, and related services offered by TrustBridge Counsel are provided for educational, developmental, communication-support, and professional guidance purposes only.

TrustBridge Counsel does not provide:
• Legal representation or legal advice
• Medical or psychiatric services
• Psychological diagnosis or therapy
• Emergency intervention
• Licensed clinical treatment services

Any information, guidance, frameworks, discussions, observations, or recommendations shared during sessions are intended to support reflection, communication awareness, and professional or personal development. Individual outcomes may vary, and no specific emotional, personal, relationship, workplace, or business result is guaranteed.

Participants and clients remain fully responsible for their personal decisions, actions, interpretations, communications, and outcomes arising from participation in TrustBridge Counsel services.

TrustBridge Counsel encourages individuals to seek appropriately licensed professionals where legal, medical, psychological, financial, or clinical assistance may be required.

Information voluntarily shared during sessions is treated with professionalism and reasonable confidentiality. However, confidentiality may be limited where disclosure is required by law, safety concerns, prevention of harm, or legal obligations.

By engaging with TrustBridge Counsel services, programs, workshops, consultations, or interventions, participants acknowledge and accept this disclaimer.`,
};

export default function TermsModal({ isOpen, onClose, onAccept, isBusiness }) {
  const [accepted, setAccepted] = useState(false);

  if (!isOpen) return null;

  const handleAccept = () => {
    if (accepted) {
      onAccept();
      setAccepted(false);
    }
  };

  const handleClose = () => {
    setAccepted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-espresso/80 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-3xl max-h-[85vh] bg-ivory rounded-[24px] shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-sand/30">
          <h2 className="font-serif text-espresso text-2xl md:text-3xl">
            Terms & <span className="italic text-walnut">Conditions</span>
          </h2>
          <button
            onClick={handleClose}
            className="p-2 rounded-full hover:bg-sand/20 transition-colors"
            aria-label="Close"
          >
            <X size={24} className="text-espresso" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-8 py-6 space-y-8">
          {/* Generic Terms */}
          <div>
            <h3 className="font-serif font-semibold text-espresso text-lg mb-4">
              General Terms & Conditions
            </h3>
            <div className="space-y-6 text-ink/85 text-[14px] font-light leading-[1.8]">
              {GENERIC_TERMS.map((term) => (
                <div key={term.title}>
                  <h4 className="font-semibold text-espresso text-[15px] mb-2">
                    {term.title}
                  </h4>
                  <p>{term.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Business Terms - only show for business subjects */}
          {isBusiness && (
            <div className="pt-6 border-t border-sand/30">
              <h3 className="font-serif font-semibold text-espresso text-lg mb-4">
                {BUSINESS_TERMS.title}
              </h3>
              <div className="text-ink/85 text-[14px] font-light leading-[1.8] whitespace-pre-line">
                {BUSINESS_TERMS.content}
              </div>
            </div>
          )}
        </div>

        {/* Footer with checkbox */}
        <div className="px-8 py-5 border-t border-sand/30 bg-sand/10">
          <label className="flex items-start gap-3 cursor-pointer mb-4">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className="mt-1 w-5 h-5 rounded border-2 border-espresso/40 text-gold focus:ring-gold cursor-pointer"
            />
            <span className="text-ink/85 text-sm font-light leading-relaxed">
              I have read and agree to the Terms & Conditions
              {isBusiness && " and Business/Service Disclaimer"}. I understand
              that TrustBridge Counsel services are for educational and
              developmental purposes only.
            </span>
          </label>

          <div className="flex justify-end gap-4">
            <button
              onClick={handleClose}
              className="px-6 py-3 text-espresso text-sm font-medium hover:bg-sand/20 rounded-full transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleAccept}
              disabled={!accepted}
              className="cta-gold px-8 py-3 text-sm font-medium rounded-full disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Accept & Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
