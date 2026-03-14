import { Trophy, Flag, Zap, Award, Handshake } from 'lucide-react';
import useInView from '../hooks/useInView';

function StatCard({ stat, index }: { stat: any; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } duration-600 ease-out`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="bg-gradient-to-br from-[#01123D] to-[#012051] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
        <stat.icon className="w-7 h-7 text-[#FFFFFE]" />
      </div>
      <div className="text-4xl font-black text-[#01123D] mb-2">{stat.number}</div>
      <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
      <div className="text-sm text-gray-500">{stat.description}</div>
    </div>
  );
}

function MilestoneCard({ milestone, index }: { milestone: any; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`flex gap-6 group transition-all transform ${
        inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
      } duration-700 ease-out`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col items-center">
        <div className="bg-[#01123D] text-[#FFFFFE] font-black text-xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          {milestone.year}
        </div>
        <div className="w-1 h-full bg-[#01123D]/30 mt-2"></div>
      </div>
      <div className="flex-1 bg-white rounded-xl p-6 shadow-lg group-hover:shadow-2xl transition-all mb-4">
        <h3 className="text-xl font-bold text-[#01123D] mb-2">{milestone.title}</h3>
        <p className="text-gray-600">{milestone.description}</p>
      </div>
    </div>
  );
}

export default function Highlights() {
  const stats = [
    {
      icon: Award,
      number: '3rd',
      label: 'Regional Finish 2026',
      description: '3rd place in Proclass'
    },
    {
      icon: Trophy,
      number: 'Pro',
      label: 'Class Status 2025',
      description: 'Advanced to professional'
    },
    {
      icon: Flag,
      number: '2025',
      label: 'Target: Nationals',
      description: 'Strong national finish'
    },
    {
      icon: Zap,
      number: 'World',
      label: 'Finals Goal',
      description: 'Lasting STEM Racing impact'
    }
  ];

  const milestones = [
    {
      year: '2026',
      title: '3rd Place at Regionals (Proclass)',
      description:
        'Achieved 3rd place at Regionals in the Professional class, marking a major step forward for the team and strengthening our push toward nationals and the World Finals.'
    },
    {
      year: '2025',
      title: 'Professional Class Advancement',
      description:
        'Advanced to pro class with refreshed engineering and entrepreneurial teams, targeting nationals and World Finals.'
    },
    {
      year: '2024',
      title: '3rd Place at Regionals',
      description:
        'Strong debut finish in development class, laying the foundation for future success and ambitious goals.'
    },
    {
      year: '2024',
      title: 'Team Founded at CRYPT',
      description:
        'Altais Racing - The GOAT - established at CRYPT Grammar School as a STEM Racing team with the vision to leave a lasting impact.'
    }
  ];

  const { ref: pRef, inView: pInView } = useInView<HTMLDivElement>();

  

  return (
    <section id="highlights" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-[#01123D] mb-3">Our Journey & Partnership</h2>
            <div className="w-28 h-1 bg-[#01123D] mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">A snapshot of our milestones, achievements, and a placeholder for partnership opportunities — polished and ready for refinement.</p>
          </div>

          {/* Two-column layout: left = stats, right = timeline + partnership CTA */}
          <div className="grid lg:grid-cols-3 gap-8 items-start mb-12">
            <div className="lg:col-span-1 grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <StatCard key={i} stat={stat} index={i} />
              ))}
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-2xl font-bold text-[#01123D] mb-4">Milestones</h3>
                <div className="space-y-6">
                  {milestones.map((m, i) => (
                    <MilestoneCard key={i} milestone={m} index={i} />
                  ))}
                </div>
              </div>

              <div
                ref={pRef}
                className={`rounded-2xl p-8 transition-transform transform hover:-translate-y-1 hover:scale-[1.01] bg-[#01123D] text-[#FFFFFE] shadow-lg ${
                  pInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                } duration-700 ease-out`}
              >
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-[#FFFFFE] to-[#E5E5E3] flex items-center justify-center text-[#01123D] font-black text-lg">
                    <Handshake className="w-8 h-8 text-[#01123D]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold mb-2">Partner With Us</h4>
                    <p className="text-[#FFFFFE]/80 mb-4">Invest in the future of motorsport and engineering. Explore our newly released partnership packages featuring exclusive brand visibility and unique benefits.</p>
                    <div className="flex gap-3">
                      <a
                        href="#partnership"
                        className="bg-[#7EC8FF] text-[#01123D] px-6 py-2 rounded-full font-bold hover:bg-[#9BD7FF] transition-colors shadow-md"
                      >
                        View Sponsorship Tiers
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
