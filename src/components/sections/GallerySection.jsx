import { Image } from "lucide-react";

const GALLERY_ITEMS = [
  { id: 1, label: "Gallery image 1" },
  { id: 2, label: "Gallery image 2" },
  { id: 3, label: "Gallery image 3" },
  { id: 4, label: "Gallery image 4" },
  { id: 5, label: "Gallery image 5" },
  { id: 6, label: "Gallery image 6" },
];

export default function GallerySection() {
  return (
    <section
      data-testid="gallery-section"
      className="relative py-24 md:py-32 overflow-hidden grain-overlay"
      style={{
        background: "linear-gradient(180deg, #ECE2D6 0%, #F7F2EE 100%)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end mb-14">
          <div className="lg:col-span-5">
            <div className="w-12 h-px bg-gold mb-6" />
            <h2 className="font-serif font-light text-espresso text-[42px] md:text-[58px] leading-[1.04] tracking-[-0.005em]">
              Gallery.
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 text-walnut/80 text-lg md:text-xl leading-relaxed font-light">
            Moments from conversations, workshops, and spaces created for clarity.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-[18px] border border-sand/50 bg-ivory/65 shadow-[0_24px_60px_-44px_rgba(59,42,36,0.45)] ${
                index === 0 || index === 5
                  ? "col-span-2 aspect-[16/10]"
                  : "aspect-[4/5]"
              }`}
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(176,141,87,0.18),rgba(250,248,246,0.86),rgba(90,64,52,0.12))]" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-cream/25" />
              <div className="relative h-full flex flex-col items-center justify-center gap-3 text-mocha/45">
                <Image size={26} strokeWidth={1.5} />
                <span className="text-[10px] md:text-[11px] tracking-[0.24em] uppercase font-light">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
