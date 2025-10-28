import { Target, Users, Lightbulb } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function About() {
  const photo = useInView<HTMLDivElement>({ threshold: 0.4 });
  const text = useInView<HTMLDivElement>({ threshold: 0.4 });
  const icons = useInView<HTMLDivElement>({ threshold: 0.3 });

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
                Altais Racing - The GOAT (Greatest Of All Time) - is a student-led Formula 1 team established in 2024 at the CRYPT Grammar School. As a development class STEM Racing team, we achieved an impressive 3rd place finish at regionals in our debut season, laying a strong foundation for our ambitious goals.
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
        </div>
      </div>
    </section>
  );
}
