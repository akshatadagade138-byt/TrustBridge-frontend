import { useState } from "react";

/**
 * Floating WhatsApp CTA — opens wa.me with a pre-filled greeting.
 * No backend, no auto-reply — visitors simply send a message and the
 * practice responds manually. Phone number is set via the WHATSAPP_NUMBER
 * constant below (international format, digits only — e.g. 919876543210).
 */
const WHATSAPP_NUMBER = "919606938334"; // +91 96069 38334
const PREFILLED_MESSAGE =
  "Hello TrustBridge Counsel — I would like to know more about a Clarity-Communication Session.";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    PREFILLED_MESSAGE
  )}`;

  const openWhatsApp = (e) => {
    e.preventDefault();
    // Force a top-level new tab — avoids iframe / preview "blocked by response" errors.
    const win = window.open(href, "_blank", "noopener,noreferrer");
    if (!win) {
      // Popup blocked — fall back to top-frame navigation.
      try {
        window.top.location.href = href;
      } catch {
        window.location.href = href;
      }
    }
  };

  return (
    <a
      href={href}
      onClick={openWhatsApp}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-fab"
      aria-label="Chat with TrustBridge Counsel on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed z-[60] bottom-20 right-5 lg:bottom-24 lg:right-8 group"
    >
      {/* Tooltip */}
      <span
        className={`absolute right-[68px] top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-espresso text-cream text-[12px] tracking-[0.16em] uppercase font-light px-4 py-2 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.5)] border border-gold/30 transition-all duration-300 ${
          hovered
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-2 pointer-events-none"
        }`}
      >
        Chat on WhatsApp
      </span>

      {/* Halo pulse */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-full"
        style={{
          boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.55)",
          animation: "wa-ring 2.4s ease-out infinite",
        }}
      />

      {/* Button */}
      <span
        className="relative flex items-center justify-center w-14 h-14 rounded-full transition-transform duration-300 group-hover:scale-105"
        style={{
          background:
            "linear-gradient(180deg, #25D366 0%, #128C7E 100%)",
          boxShadow:
            "0 1px 0 rgba(255,255,255,0.4) inset, 0 14px 30px -10px rgba(18,140,126,0.6)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="26"
          height="26"
          aria-hidden
          fill="#FFFFFF"
        >
          <path d="M19.11 17.74c-.27-.13-1.59-.78-1.83-.87-.25-.09-.43-.13-.6.13-.18.27-.7.87-.85 1.05-.16.18-.31.2-.58.07-.27-.13-1.13-.42-2.16-1.34-.8-.71-1.34-1.59-1.49-1.86-.16-.27-.02-.41.12-.55.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.13-.6-1.45-.83-1.99-.22-.52-.45-.45-.6-.46-.16-.01-.34-.01-.52-.01-.18 0-.47.07-.71.34-.25.27-.94.92-.94 2.24 0 1.32.96 2.6 1.1 2.78.13.18 1.89 2.88 4.58 4.04.64.28 1.14.44 1.53.57.64.2 1.23.18 1.69.11.52-.08 1.59-.65 1.81-1.27.22-.62.22-1.16.16-1.27-.07-.11-.25-.18-.52-.31zM16.04 5.33c-5.91 0-10.71 4.8-10.71 10.71 0 1.89.5 3.74 1.44 5.37L5.27 26.67l5.42-1.42a10.7 10.7 0 0 0 5.34 1.45h.01c5.91 0 10.71-4.8 10.71-10.71 0-2.86-1.11-5.55-3.13-7.57a10.66 10.66 0 0 0-7.58-3.09zm6.31 17.02a8.86 8.86 0 0 1-6.31 2.61h-.01a8.88 8.88 0 0 1-4.52-1.24l-.32-.19-3.22.85.86-3.14-.21-.33a8.87 8.87 0 0 1-1.36-4.74c0-4.91 4-8.91 8.91-8.91 2.38 0 4.61.93 6.29 2.62 1.68 1.68 2.61 3.92 2.61 6.3 0 4.91-4 8.91-8.91 8.91z" />
        </svg>
      </span>

      <style>{`
        @keyframes wa-ring {
          0%   { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.55); }
          70%  { box-shadow: 0 0 0 16px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
      `}</style>
    </a>
  );
}
