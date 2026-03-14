import { FileText, ArrowRight, Check } from 'lucide-react';
import useInView from '../hooks/useInView';

const tiers = [
  {
    name: 'Alrakis Sponsor',
    price: 'Up to £99',
    benefits: [
      'Company logo added on our website',
      'Post on our social media platforms'
    ],
    featured: false
  },
  {
    name: 'Thuban Sponsor',
    price: '£100 - £499',
    benefits: [
      'Company logo added on our website',
      'Post on our social media platforms',
      'Company logo on our car',
      'Company logo on our pit display'
    ],
    featured: false
  },
  {
    name: 'Eltanin Sponsor',
    price: '£500 - £999',
    benefits: [
      'Company logo + info added on our website',
      'Post on our social media platforms + dedicated short form video',
      'Company logo on our car',
      'Company logo on our pit display',
      'Company logo on our uniform (small size on front/sleeves)'
    ],
    featured: false
  },
  {
    name: 'Altais Sponsor',
    price: '£1000+',
    benefits: [
      'Company logo + info added on our website',
      'Post on our social media platforms + dedicated long form video',
      'Company logo on our car',
      'Company logo on our pit display',
      'Company logo on our uniform (large size on front/back)',
      '3D printed scale model of our car',
      'Company mentioned in Headmaster\'s letter'
    ],
    featured: true
  }
];

export default function Partnership() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="partnership" className="py-20 md:py-32 bg-gradient-to-br from-[#01123D] to-[#010a1a] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(#FFFFFE 1px, transparent 1px), linear-gradient(90deg, #FFFFFE 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#FFFFFE] mb-4">
              Sponsorship Tiers
            </h2>
            <div className="w-24 h-1 bg-[#FFFFFE] mx-auto mb-4"></div>
            <p className="text-lg text-[#FFFFFE]/70 max-w-3xl mx-auto">
              Join Altais Racing in our mission to reach nationals and the World Finals. Choose a sponsorship tier to drive innovation and gain exceptional brand visibility.
            </p>
          </div>

          {/* Pricing Cards */}
          <div
             ref={ref} 
             className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 transition-all duration-1000 ease-out ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {tiers.map((tier, index) => (
              <div 
                key={index}
                className={`relative flex flex-col rounded-2xl p-6 transition-transform transform hover:-translate-y-2 hover:scale-[1.02] shadow-xl ${
                  tier.featured 
                    ? 'bg-gradient-to-b from-[#1a2f63] to-[#01123D] border-2 border-[#7EC8FF]' 
                    : 'bg-[#FFFFFE]/5 backdrop-blur-sm border border-[#FFFFFE]/15'
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#7EC8FF] text-[#01123D] px-4 py-1 rounded-full text-sm font-black tracking-wider uppercase">
                    Premium Partner
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-[#FFFFFE] mb-2 mt-2">{tier.name}</h3>
                <div className="text-xl font-bold text-[#7EC8FF] mb-6 pb-6 border-b border-[#FFFFFE]/10">
                  {tier.price}
                </div>
                
                <ul className="flex-1 space-y-4 mb-8">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                      <span className="text-[#FFFFFE]/80 text-sm leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={scrollToContact}
                  className={`w-full py-3 rounded-xl font-bold transition-all ${
                    tier.featured
                      ? 'bg-[#7EC8FF] text-[#01123D] hover:bg-[#9BD7FF] shadow-[0_0_20px_rgba(126,200,255,0.35)]'
                      : 'bg-[#FFFFFE]/10 text-[#FFFFFE] hover:bg-[#FFFFFE]/20'
                  }`}
                >
                  Select Tier
                </button>
              </div>
            ))}
          </div>

          {/* Custom CTA Section */}
          <div className="bg-[#FFFFFE]/5 backdrop-blur-sm border border-[#FFFFFE]/20 rounded-2xl p-8 md:p-12 text-center">
            <FileText className="w-16 h-16 text-[#FFFFFE] mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-[#FFFFFE] mb-4">
              Interested in a Custom Partnership?
            </h3>
            <p className="text-[#FFFFFE]/70 mb-8 max-w-2xl mx-auto">
              We're open to creating bespoke partnership packages tailored to your organization's goals and budget. Schedule a meeting to discuss opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/Sponsorship Tiers.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFFFFE] text-[#01123D] px-8 py-4 rounded-full font-bold hover:bg-[#FFFFFE]/90 transition-all hover:scale-105 inline-flex items-center justify-center gap-2 shadow-lg"
              >
                Download Full Deck
                <ArrowRight className="w-5 h-5" />
              </a>
              <button
                onClick={scrollToContact}
                className="border-2 border-[#FFFFFE] text-[#FFFFFE] px-8 py-4 rounded-full font-bold hover:bg-[#FFFFFE]/10 transition-all inline-flex items-center justify-center"
              >
                Discuss Opportunities
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
