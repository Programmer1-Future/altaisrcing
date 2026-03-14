import { useEffect, useRef, useState } from 'react';
import { Target, Users, Lightbulb, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const galleryImages = [
  {
    src: '/brand/car-with-sponsors.png',
    alt: 'Altais Racing car with sponsor logos on a road',
    caption: 'Our sponsor-branded race car showcase'
  },
  {
    src: '/team-photos/regionals.jpg',
    alt: 'Altais Racing team at regional event',
    caption: 'Competition moments from regionals'
  },
  {
    src: '/team-photos/teamphoto2.jpeg',
    alt: 'Altais Racing team portrait',
    caption: 'The team behind Altais Racing'
  }
];

export default function About() {
  const photo = useInView<HTMLDivElement>({ threshold: 0.4 });
  const text = useInView<HTMLDivElement>({ threshold: 0.4 });
  const icons = useInView<HTMLDivElement>({ threshold: 0.3 });
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isGalleryPaused, setIsGalleryPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (isGalleryPaused) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [isGalleryPaused]);

  const showNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const showPreviousImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) {
      return;
    }

    const deltaX = (event.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
    const swipeThreshold = 40;

    if (deltaX > swipeThreshold) {
      showPreviousImage();
    } else if (deltaX < -swipeThreshold) {
      showNextImage();
    }

    touchStartX.current = null;
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-[#FFFFFE]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#01123D] mb-4 transition-all duration-700 hover:scale-105">
              Who We Are
            </h2>
            <div className="w-24 h-1 bg-[#01123D] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Team group photo (single image placed in public/team-photos). Hides itself if not present. */}
            <div 
              ref={photo.ref}
              className={`
                relative rounded-2xl overflow-hidden shadow-2xl 
                transition-all duration-1000 transform
                ${photo.inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}
              `}
            >
              <img
                src="/team-photos/teamphoto.jpg"
                alt="Altais Racing team photo — CRYPT School"
                className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  // hide the image element if the file isn't available
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                }}
              />

              {/* Overlay blended on top of the image so the gradient merges into the photo */}
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent text-center">
                <p className="text-white text-sm mb-2">Team Photo from CRYPT School</p>
              </div>
            </div>

            <div 
              ref={text.ref}
              className={`
                space-y-6 transition-all duration-1000 delay-300 transform
                ${text.inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}
              `}
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                Altais Racing - The GOAT (Greatest Of All Time) - is a student-led Formula 1 team established in 2024 at the CRYPT Grammar School. As a STEM Racing team, we achieved an impressive 3rd place finish at regionals in our debut season, laying a strong foundation for our ambitious goals.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Now advanced to the professional class for 2025, we're focused on reaching the nationals and even the World Finals. We combine classroom knowledge with real-world racing competition to develop the next generation of automotive engineers, entrepreneurs, and innovators who embody the spirit of being the greatest.
              </p>

              <div 
                ref={icons.ref}
                className={`
                  grid grid-cols-3 gap-6 mt-8 transition-all duration-1000 delay-500
                  ${icons.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
              >
                <div className="text-center">
                  <div className="bg-[#01123D]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 transform hover:scale-110 transition-all duration-300 hover:shadow-lg">
                    <Target className="w-8 h-8 text-[#01123D]" />
                  </div>
                  <p className="font-semibold text-[#01123D]">Excellence</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#FFD700]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 transform hover:scale-110 transition-all duration-300 hover:shadow-lg">
                    <Users className="w-8 h-8 text-[#003366]" />
                  </div>
                  <p className="font-semibold text-[#003366]">Teamwork</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#FFD700]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 transform hover:scale-110 transition-all duration-300 hover:shadow-lg">
                    <Lightbulb className="w-8 h-8 text-[#003366]" />
                  </div>
                  <p className="font-semibold text-[#003366]">Innovation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Car showcase with sponsors */}
          <div className="mt-16">
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              onMouseEnter={() => setIsGalleryPaused(true)}
              onMouseLeave={() => setIsGalleryPaused(false)}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="relative aspect-video bg-[#01123D]">
                {galleryImages.map((image, index) => (
                  <img
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                      index === activeImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                    }}
                  />
                ))}

                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/70 to-transparent text-center">
                  <p className="text-white text-sm md:text-base">
                    {galleryImages[activeImageIndex].caption}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={showPreviousImage}
                  aria-label="Previous gallery image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/35 text-white backdrop-blur-sm border border-white/20 hover:bg-black/55 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 mx-auto" />
                </button>
                <button
                  type="button"
                  onClick={showNextImage}
                  aria-label="Next gallery image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/35 text-white backdrop-blur-sm border border-white/20 hover:bg-black/55 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 mx-auto" />
                </button>
              </div>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {galleryImages.map((image, index) => (
                  <button
                    key={`${image.src}-dot`}
                    type="button"
                    aria-label={`Go to image ${index + 1}`}
                    onClick={() => setActiveImageIndex(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      index === activeImageIndex ? 'w-6 bg-[#7EC8FF]' : 'w-2.5 bg-white/55 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
