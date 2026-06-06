import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/#gallery" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleBookConsultation = (e) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/#contact");
    } else {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      else window.location.hash = "#contact";
    }
  };

  // On Home, Services, About — the page top is dark — use light text.
  const overDarkHero =
    !scrolled &&
    (location.pathname === "/" ||
      location.pathname === "/services" ||
      location.pathname === "/about");

  const brandColor = overDarkHero ? "text-cream" : "text-espresso";
  const brandItalicColor = overDarkHero ? "text-sand" : "text-walnut";
  const taglineColor = overDarkHero ? "text-gold/95" : "text-gold";
  const linkBase = overDarkHero
    ? "text-cream/80 hover:text-gold"
    : "text-walnut hover:text-espresso";
  const linkActive = overDarkHero ? "text-gold" : "text-espresso";
  const toggleColor = overDarkHero ? "text-cream" : "text-espresso";

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-ivory/75 border-b border-espresso/10 shadow-[0_1px_30px_-12px_rgba(59,42,36,0.18)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[78px]">
        {/* Brand */}
        <Link to="/" data-testid="nav-brand" className="flex items-center">
          <div className="flex flex-col leading-none">
            <span
              className={`font-serif text-[22px] md:text-[26px] font-semibold tracking-[0.02em] transition-colors duration-300 ${brandColor}`}
            >
              TrustBridge <span className={`italic transition-colors duration-300 ${brandItalicColor}`}>Counsel</span>
            </span>
            <span
              className={`text-[9px] md:text-[10px] mt-[4px] tracking-[0.24em] uppercase font-bold transition-colors duration-300 ${taglineColor}`}
            >
              We listen · We act · We deliver
            </span>
          </div>
          <img
            src="/images/logo/logo.png"
            alt="TrustBridge Counsel"
            className="h-8 md:h-10 w-auto -ml-1"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const active =
              link.to.includes("#")
                ? location.pathname === "/" && location.hash === "#gallery"
                : location.pathname === link.to && !location.hash;
            return (
              <Link
                key={link.to}
                to={link.to}
                data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={`relative font-sans text-[13px] tracking-[0.18em] uppercase transition-colors duration-300 ${
                  active ? linkActive : linkBase
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-2 left-0 right-0 mx-auto w-1 h-1 rounded-full bg-gold" />
                )}
              </Link>
            );
          })}
          <a
            href="#contact"
            onClick={handleBookConsultation}
            data-testid="nav-cta-book"
            className="cta-gold font-sans text-[13px] tracking-[0.18em] uppercase rounded-full px-7 py-3"
          >
            Book Consultation
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          data-testid="nav-mobile-toggle"
          className={`lg:hidden p-2 transition-colors duration-300 ${toggleColor}`}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 backdrop-blur-xl bg-ivory/95 border-t border-espresso/10 ${
          open ? "max-h-[420px]" : "max-h-0"
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-testid={`nav-mobile-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setOpen(false)}
              className="font-sans text-sm tracking-[0.22em] uppercase text-walnut hover:text-espresso transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#contact"
            onClick={handleBookConsultation}
            data-testid="nav-mobile-cta-book"
            className="cta-gold inline-flex justify-center font-sans text-[13px] tracking-[0.18em] uppercase rounded-full px-6 py-3 w-fit"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </header>
  );
}
