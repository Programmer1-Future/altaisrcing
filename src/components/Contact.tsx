import { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { ContactFormData } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const { error: supabaseError } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            company: formData.company,
            email: formData.email,
            message: formData.message,
            status: 'new'
          }
        ]);

      if (supabaseError) throw supabaseError;

      setSubmitted(true);
      setFormData({ name: '', company: '', email: '', message: '' });
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('There was an error submitting your message. Please try again.');
      setTimeout(() => setError(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    const el = document.getElementById('contact-form');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#01123D] mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-[#01123D] mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to partner with us? We'd love to hear from you. Fill out the form below and we'll get back to you shortly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              {!submitted ? (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#01123D] mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#01123D] focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-[#003366] mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#01123D] focus:outline-none transition-colors"
                      placeholder="Your organization"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#003366] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#01123D] focus:outline-none transition-colors"
                      placeholder="your.email@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#003366] mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FFD700] focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your interest in partnering with Altais Racing..."
                    />
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 text-red-500 mb-4">
                      <AlertCircle className="w-5 h-5" />
                      <p className="text-sm">{error}</p>
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`
                      w-full bg-[#01123D] text-[#FFFFFE] py-4 rounded-full font-bold 
                      transition-all flex items-center justify-center gap-2 shadow-lg
                      ${isSubmitting 
                        ? 'opacity-70 cursor-not-allowed' 
                        : 'hover:bg-[#01123D]/90 hover:scale-105'
                      }
                    `}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className={`w-5 h-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <CheckCircle className="w-20 h-20 text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold text-[#01123D] mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600">
                    We've received your message and will get back to you soon.
                  </p>
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[#01123D] to-[#012051] rounded-2xl p-8 text-[#FFFFFE] shadow-xl">
                <Mail className="w-12 h-12 text-[#FFFFFE] mb-4" />
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-300 text-sm mb-1">Email</p>
                    <a href="mailto:Altais@crypt.gloucs.sch.uk" className="text-[#FFFFFE] font-semibold hover:underline">
                      Altais@crypt.gloucs.sch.uk
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm mb-1">Response Time</p>
                    <p className="font-semibold">Within 24-48 hours</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-[#01123D] mb-4">Follow Us</h3>
                <p className="text-gray-600 mb-6">
                  Stay updated with our latest news, race results, and team developments
                </p>
                <div className="flex gap-4">
                  {/* PLACEHOLDER: Replace with actual social media links */}
                  <a
                    href="https://www.instagram.com/altais_racing?igsh=MXBmZHFocXR0aDMwZg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-br from-[#01123D] to-[#012051] text-[#FFFFFE] py-3 rounded-lg font-semibold hover:scale-105 transition-all text-center"
                  >
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="flex-1 bg-gradient-to-br from-[#01123D] to-[#012051] text-[#FFFFFE] py-3 rounded-lg font-semibold hover:scale-105 transition-all text-center"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* Partnership blurb moved here from Highlights */}
              <div className="bg-gradient-to-br from-[#01123D] to-[#012051] rounded-2xl p-6 text-[#FFFFFE] shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-lg bg-[#FFFFFE] flex items-center justify-center text-[#01123D] font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12l8-6M12 12l8 6M12 12L4 6m8 6l-8 6" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold mb-2">Partnership Opportunities</h4>
                    <p className="text-[#FFFFFE]/80 mb-4">We offer tailored sponsorship packages to support our engineering and competition goals. Download our deck to explore tiers and benefits, or contact our partnerships team to discuss a custom package.</p>
                    <div className="flex gap-3">
                      <button onClick={scrollToForm} className="bg-[#FFFFFE] text-[#01123D] px-4 py-2 rounded-full font-semibold hover:scale-105 transition-transform">Contact Partnerships</button>
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
