import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const GALLERY_ITEMS = [
  { id: 1, label: "Gallery image 1", src: "/images/gallery/G5.webp" },
  { id: 2, label: "Gallery image 2", src: "/images/gallery/G1.webp" },
  { id: 3, label: "Gallery image 3", src: "/images/gallery/G2.webp" },
  { id: 4, label: "Gallery image 4", src: "/images/gallery/G3.webp" },
  { id: 5, label: "Gallery image 5", src: "/images/gallery/G4.webp" },
  { id: 6, label: "Gallery image 6", src: "/images/gallery/G6.webp" },
];

export default function GallerySection() {
  return (
    <section
      id="gallery"
      data-testid="gallery-section"
      className="relative py-24 md:py-32 overflow-hidden grain-overlay scroll-mt-[90px]"
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

        <div className="md:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="relative"
          >
            <CarouselContent className="-ml-3">
              {GALLERY_ITEMS.map((item) => (
                <CarouselItem key={item.id} className="basis-[84%] pl-3">
                  <GalleryImage item={item} className="aspect-[4/5]" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 h-10 w-10 border-gold/40 bg-ivory/90 text-espresso shadow-lg hover:bg-cream disabled:opacity-40" />
            <CarouselNext className="right-2 h-10 w-10 border-gold/40 bg-ivory/90 text-espresso shadow-lg hover:bg-cream disabled:opacity-40" />
          </Carousel>
        </div>

        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {GALLERY_ITEMS.map((item, index) => (
            <GalleryImage
              key={item.id}
              item={item}
              className={
                index === 0 || index === 5
                  ? "col-span-2 aspect-[16/10]"
                  : "aspect-[4/5]"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryImage({ item, className = "" }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[18px] border border-sand/50 bg-ivory/65 shadow-[0_24px_60px_-44px_rgba(59,42,36,0.45)] ${className}`}
    >
      <img
        src={item.src}
        alt={item.label}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        loading="lazy"
      />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-cream/20" />
    </div>
  );
}
