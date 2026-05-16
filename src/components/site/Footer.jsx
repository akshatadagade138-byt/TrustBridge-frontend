import { Link, useNavigate, useLocation } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

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
          {/* Brand block */}
          <div className="md:col-span-5">
            <h3 className="font-serif text-4xl md:text-5xl font-medium leading-[1.05] tracking-[0.01em]">
              TrustBridge
              <br />
              <span className="italic text-sand">Counsel</span>
            </h3>
            <p className="mt-5 text-sand/80 tracking-[0.28em] uppercase text-[11px]">
              We listen · We act · We deliver
            </p>
            <p className="mt-8 max-w-md text-cream/70 leading-relaxed font-light">
              A private practice for conflict, communication & alignment —
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

          {/* Quick Links */}
          <div className="md:col-span-3">
            <p className="eyebrow text-sand/70 mb-6">Navigate</p>
            <ul className="space-y-3 font-light">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Blogs", to: "/blogs" },
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

          {/* Contact placeholder */}
          <div className="md:col-span-4">
            <p className="eyebrow text-sand/70 mb-6">Reach Us</p>
            <ul className="space-y-4 font-light text-cream/85">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-gold mt-1 shrink-0" />
                <span data-testid="footer-phone">9606938334</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-gold mt-1 shrink-0" />
                <span data-testid="footer-email">pinky@trustbridgecounsel.in</span>
              </li>
            </ul>
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
