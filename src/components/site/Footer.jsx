import { Link, useNavigate, useLocation } from "react-router-dom";
import { Mail, Phone, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBook = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/#contact");
      return;
    }
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      data-testid="site-footer"
      className="relative bg-espresso text-cream overflow-hidden grain-overlay"
    >
      {/* Decorative arc */}
      <svg
        aria-hidden
        className="absolute -top-1 left-0 right-0 w-full opacity-30"
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
      >
        <path
          d="M0,80 C300,0 900,0 1200,80"
          fill="none"
          stroke="#B08D57"
          strokeWidth="0.6"
        />
      </svg>

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 pt-24 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10">
          {/* Brand block - Hidden on mobile */}
          <div className="hidden md:block md:col-span-5">
            <h3 className="font-serif text-4xl md:text-5xl font-medium leading-[1.05] tracking-[0.01em] whitespace-nowrap">
              TrustBridge <span className="italic text-sand">Counsel</span>
            </h3>
            <p className="mt-5 text-sand/80 tracking-[0.28em] uppercase text-[11px]">
              We listen · We act · We deliver
            </p>
            <p className="mt-8 max-w-md text-cream/70 leading-relaxed font-light">
              A private practice for conflict, communication & alignment,
              built for the moments where clarity matters most.
            </p>

            <a
              href="#contact"
              onClick={handleBook}
              data-testid="footer-cta-book"
              className="cta-gold inline-flex items-center gap-3 mt-10 font-sans text-[13px] tracking-[0.18em] uppercase rounded-full px-7 py-3"
            >
              Book a Consultation
              <span aria-hidden>→</span>
            </a>
          </div>

          {/* Quick Links - Full width on mobile */}
          <div className="md:col-span-3 col-span-full">
            <p className="eyebrow text-sand/70 mb-6">Navigate</p>
            <ul className="space-y-3 font-light">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Privacy Policy", to: "/privacy-policy" },
                { label: "Disclaimer", to: "/disclaimer" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    data-testid={`footer-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-cream/85 hover:text-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - Full width on mobile */}
          <div className="md:col-span-4 col-span-full">
            <p className="eyebrow text-sand/70 mb-6">Reach Us</p>
            <ul className="space-y-4 font-light text-cream/85">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-gold mt-1 shrink-0" />
                <div className="flex flex-col gap-1">
                  <span data-testid="footer-phone">9606938334</span>
                  <span data-testid="footer-phone-2">9113985201</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-gold mt-1 shrink-0" />
                <span data-testid="footer-email">pinkeybas@gmail.com</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-8">
              <p className="eyebrow text-sand/70 mb-4">Follow Us</p>
              <div className="flex gap-4">
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/pinkey-basnet-890783404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ backgroundColor: '#0077B5' }}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} className="text-white" />
                </a>
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/trustbridgecounsel?utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}
                  aria-label="Instagram"
                >
                  <Instagram size={18} className="text-white" />
                </a>
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/19as3pqTbW/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ backgroundColor: '#1877F2' }}
                  aria-label="Facebook"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor"/>
                  </svg>
                </a>
                {/* YouTube */}
                <a
                  href="https://youtube.com/@trustbridgecounsel?si=H3fOkTprHesFc9cf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ backgroundColor: '#FF0000' }}
                  aria-label="YouTube"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="currentColor"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="editorial-divider opacity-30 my-12" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-cream/60 text-xs tracking-[0.28em] uppercase">
            Confidential · Respectful · Solution Focused
          </p>
          <p className="text-cream/40 text-xs tracking-[0.18em]">
            © {new Date().getFullYear()} TrustBridge Counsel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
