import { FileText, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import useInView from '../hooks/useInView';

export default function Partnership() {
  // simplified placeholder partnership draft per request
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { ref, inView } = useInView<HTMLDivElement>();

  useEffect(() => {
    // nothing extra for now; hook toggles classes below
  }, [inView]);

  return (
    <section id="partnership" className="py-20 md:py-32 bg-gradient-to-br from-[#01123D] to-[#010a1a] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(#FFFFFE 1px, transparent 1px), linear-gradient(90deg, #FFFFFE 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#FFFFFE] mb-4">
              Partner With Us
            </h2>
            <div className="w-24 h-1 bg-[#FFFFFE] mx-auto mb-4"></div>
            <p className="text-lg text-[#FFFFFE]/70 max-w-3xl mx-auto">
              Join Altais Racing - The GOAT - in our mission to reach nationals and the World Finals. Your investment drives innovation, education, and competitive excellence while providing exceptional brand visibility and partnership benefits.
            </p>
          </div>

          {/* Simplified placeholder card (single draft) */}
          <div className="mb-16 flex justify-center">
            <div
              ref={ref}
              className={`w-full max-w-3xl rounded-2xl p-8 transition-transform transform hover:-translate-y-1 hover:scale-[1.02] bg-[#FFFFFE]/6 backdrop-blur-sm border border-[#FFFFFE]/12 shadow-md ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              } duration-700 ease-out`}
            >
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#FFFFFE] to-[#E5E5E3] flex items-center justify-center text-[#01123D] font-black text-lg shadow-inner">
                  PR
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#FFFFFE] mb-2">Partner With Us</h3>
                  <p className="text-[#FFFFFE]/75 mb-4">This is a placeholder draft for partnership options. We'll refine packages and details later — for now, a single generic option is shown.</p>
                  <div className="flex gap-3">
                    <button
                      onClick={scrollToContact}
                      className="bg-[#FFFFFE] text-[#01123D] px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform inline-flex items-center gap-2"
                    >
                      Contact Us
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      className="border border-[#FFFFFE]/30 text-[#FFFFFE] px-6 py-2 rounded-full hover:bg-[#FFFFFE]/6 transition-colors"
                    >
                      Placeholder Option
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-[#FFFFFE]/5 backdrop-blur-sm border border-[#FFFFFE]/20 rounded-2xl p-8 md:p-12 text-center">
            <FileText className="w-16 h-16 text-[#FFFFFE] mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-[#FFFFFE] mb-4">
              Interested in a Custom Partnership?
            </h3>
            <p className="text-[#FFFFFE]/70 mb-8 max-w-2xl mx-auto">
              We're open to creating bespoke partnership packages tailored to your organization's goals and budget. Download our full sponsorship deck or schedule a meeting to discuss opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToContact}
                className="bg-[#FFFFFE] text-[#01123D] px-8 py-4 rounded-full font-bold hover:bg-[#FFFFFE]/90 transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                View Sponsorship Deck
                <ArrowRight className="w-5 h-5" />
              </button>
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
