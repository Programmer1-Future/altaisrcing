import { Trophy, Flag, Zap, Award } from 'lucide-react';
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

export default function Achievements() {
  const stats = [
    {
      icon: Award,
      number: '3rd',
      label: 'Regional Finish 2024',
      description: 'Proclass regionals debut'
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
      year: '2025',
      title: 'Professional Class Advancement',
      description: 'Advanced to pro class with refreshed engineering and entrepreneurial teams, targeting nationals and World Finals.'
    },
    {
      year: '2024',
      title: '3rd Place at Regionals (Proclass)',
      description: 'Achieved an impressive 3rd place finish at the Regional Championship in the Professional class, proving our competitive edge and laying the foundation for future success.'
    },
    {
      year: '2024',
      title: 'Team Founded at CRYPT',
      description: 'Altais Racing - The GOAT - established at CRYPT Grammar School as a STEM Racing team with the vision to leave a lasting impact.'
    }
  ];

  return (
    <section id="achievements" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#01123D] mb-4">
              Our Journey & Success
            </h2>
            <div className="w-24 h-1 bg-[#01123D] mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A track record of excellence, innovation, and competitive success
            </p>
          </div>

          {/* Stats Grid (with reveal) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>

          {/* Timeline (staggered reveal) */}
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <MilestoneCard key={index} milestone={milestone} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
