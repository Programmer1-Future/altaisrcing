import { User } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  imagePath?: string;
  linkedIn?: string;
}

export default function Team() {
  const header = useInView<HTMLDivElement>({ threshold: 0.5 });
  const groupPhoto = useInView<HTMLDivElement>({ threshold: 0.4 });
  const grid = useInView<HTMLDivElement>({ threshold: 0.1 });

  const members: TeamMember[] = [
    {
      name: 'Thomas',
      role: 'Team Leader & Engineer',
      description: 'Leading the team and technical development',
      imagePath: '/members/Thomas.jpeg'
    },
    {
      name: 'Niall',
      role: 'Engineer',
      description: 'Technical engineering and development',
      imagePath: '/members/Niall.jpeg'
    },
    {
      name: 'Shlok',
      role: 'Engineer',
      description: 'Engineering systems and optimization',
      imagePath: '/members/Shlock.jpeg'
    },
    {
      name: 'Horia',
      role: 'Graphics Designer',
      description: 'Visual identity and brand design',
      imagePath: '/members/Horia.jpeg'
    },
    {
      name: 'Logesh',
      role: 'Enterprise Lead',
      description: 'Sponsorship and finance management',
      imagePath: '/members/Logesh.jpeg'
    },
    {
      name: 'Callum',
      role: 'Marketing Director',
      description: 'Marketing and social media strategy',
      imagePath: '/members/Callum.jpeg'
    }
  ];

  return (
    <section id="team" className="py-20 md:py-32 bg-[#FFFFFE]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={header.ref}
            className={`
              text-center mb-8 transition-all duration-1000 transform
              ${header.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            <h2 className="text-4xl md:text-5xl font-black text-[#01123D] mb-4 hover:scale-105 transition-transform duration-500">
              Meet The Team
            </h2>
            <div className="w-24 h-1 bg-[#01123D] mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate individuals united by a common goal: racing excellence
            </p>
          </div>

          {/* Group placeholder image (single team photo). If the file isn't present it will hide itself. */}
          <div 
            ref={groupPhoto.ref}
            className={`
              max-w-4xl mx-auto mb-12 transition-all duration-1000 delay-300 transform
              ${groupPhoto.inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
            `}
          >
            <img
              src="/team-photos/regionals.jpg"
              alt="Altais Racing team at Regionals"
              className="w-full rounded-2xl object-cover shadow-lg hover:shadow-2xl transition-all duration-500"
              onError={(e) => {
                // hide the element if the group image isn't available
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>

          <div 
            ref={grid.ref}
            className={`
              grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-500 transform
              ${grid.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
            `}
          >
            {members.map((member, index) => (
              <div
                key={index}
                className={`
                  group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg 
                  transition-all duration-500 hover:shadow-2xl hover:scale-105
                  opacity-0 translate-y-8 animate-[fade-slide-up_500ms_ease-out_forwards]
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="rounded-xl aspect-square mb-6 overflow-hidden group-hover:scale-105 transition-transform">
                  {member.imagePath ? (
                    <img
                      src={member.imagePath}
                      alt={`${member.name} - ${member.role}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // If an individual image is missing, fall back to the group photo
                        (e.currentTarget as HTMLImageElement).src = '/team-photos/teamphoto2.jpg';
                        (e.currentTarget as HTMLImageElement).alt = `${member.name} - ${member.role}`;
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#01123D] to-[#012051] flex items-center justify-center">
                      <User className="w-20 h-20 text-[#FFFFFE]/50" />
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-[#01123D] mb-2">
                  {member.name}
                </h3>

                <div className="text-[#01123D]/70 font-semibold mb-2">
                  {member.role}
                </div>

                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
