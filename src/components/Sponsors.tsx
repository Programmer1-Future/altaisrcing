interface Sponsor {
  name: string;
  imagePath?: string; // Optional for now until you add the actual images
  website?: string;   // Optional sponsor website URL
}

export default function Sponsors() {
  const sponsors: Sponsor[] = [
    { 
      name: 'Porsche',
      imagePath: '/sponsors/porsche.png'
    },
    { 
      name: 'Renishaw',
      imagePath: '/sponsors/renisahw.png'
    },
    { 
      name: 'Lakes Showering Spaces',
      imagePath: '/sponsors/lakes-removebg-preview.png'
    },
    { 
      name: 'F1 Bearings',
      imagePath: '/sponsors/F1 Bearings.png'
    },
    { 
      name: 'Bennetts Coaches',
      imagePath: '/sponsors/bennetts-coaches-removebg-preview.png'
    },
    {
      name: 'RAF Youth & STEM',
      imagePath: '/sponsors/raf-youth-stem.png'
    },
    {
      name: 'Aircold Panel Solutions',
      imagePath: '/sponsors/aircold.png'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#01123D] mb-4">
              Our Sponsors
            </h2>
            <div className="w-24 h-1 bg-[#01123D] mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proud to be supported by these incredible partners who believe in our vision
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:scale-105"
              >
                {sponsor.imagePath ? (
                  // If there's an image, show it
                  <div className="aspect-video flex items-center justify-center mb-6 overflow-hidden rounded-xl">
                    <img 
                      src={sponsor.imagePath} 
                      alt={`${sponsor.name} logo`}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                ) : (
                  // If no image, show company name in a styled container
                  <div className="bg-gradient-to-br from-[#01123D] to-[#012051] rounded-xl aspect-video flex items-center justify-center mb-6">
                    <p className="text-[#FFFFFE] font-bold text-xl px-6 text-center">{sponsor.name}</p>
                  </div>
                )}
                
                {/* Company name as title if there's an image */}
                {sponsor.imagePath && (
                  <h3 className="text-center text-lg font-bold text-[#01123D]">{sponsor.name}</h3>
                )}

                {/* Optional website link */}
                {sponsor.website && (
                  <div className="text-center mt-2">
                    <a 
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#01123D]/60 hover:text-[#01123D] transition-colors"
                    >
                      Visit Website
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">
              Interested in becoming a sponsor? We'd love to discuss partnership opportunities.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#01123D] text-[#FFFFFE] px-8 py-4 rounded-full font-bold hover:bg-[#01123D]/90 transition-all hover:scale-105"
            >
              Contact Us About Sponsorship
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
