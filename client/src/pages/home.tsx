import { useState, useEffect } from "react";
import { ChevronUp, Menu, X } from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="brand-font text-2xl text-[#7f6a4d]">aakaara</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" className="text-[#5a3a22] hover:text-[#7f6a4d] px-3 py-2 text-sm font-medium">Home</a>
                <a href="#" className="text-[#5a3a22] hover:text-[#7f6a4d] px-3 py-2 text-sm font-medium">About</a>
                <a href="#" className="text-[#5a3a22] hover:text-[#7f6a4d] px-3 py-2 text-sm font-medium">Projects</a>
                <a href="#" className="text-[#5a3a22] hover:text-[#7f6a4d] px-3 py-2 text-sm font-medium">Pricing</a>
                <a href="#" className="text-[#5a3a22] hover:text-[#7f6a4d] px-3 py-2 text-sm font-medium">Contact</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#5a3a22] hover:text-[#7f6a4d] p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="text-[#5a3a22] hover:text-[#7f6a4d] block px-3 py-2 text-base font-medium">Home</a>
              <a href="#" className="text-[#5a3a22] hover:text-[#7f6a4d] block px-3 py-2 text-base font-medium">About</a>
              <a href="#" className="text-[#5a3a22] hover:text-[#7f6a4d] block px-3 py-2 text-base font-medium">Projects</a>
              <a href="#" className="text-[#5a3a22] hover:text-[#7f6a4d] block px-3 py-2 text-base font-medium">Pricing</a>
              <a href="#" className="text-[#5a3a22] hover:text-[#7f6a4d] block px-3 py-2 text-base font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-[#f8f6f3] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#5a3a22] mb-6">
              Transform Your Vision Into Reality
            </h1>
            <p className="text-xl md:text-2xl text-[#7f6a4d] mb-8 max-w-3xl mx-auto">
              Discover innovative design solutions that bring your architectural dreams to life with precision and creativity
            </p>
            <div className="space-x-4">
              <button className="bg-[#7f6a4d] hover:bg-[#5a3a22] text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors">
                Get Started
              </button>
              <button className="border-2 border-[#7f6a4d] text-[#7f6a4d] hover:bg-[#7f6a4d] hover:text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5a3a22] mb-4">
              Why Choose aakaara?
            </h2>
            <p className="text-lg text-[#7f6a4d] max-w-2xl mx-auto">
              We combine cutting-edge technology with timeless design principles to create spaces that inspire and endure
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg bg-[#f8f6f3] hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#7f6a4d] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#5a3a22] mb-4">Innovative Design</h3>
              <p className="text-[#7f6a4d]">
                Push the boundaries of traditional architecture with our forward-thinking design approach
              </p>
            </div>

            <div className="text-center p-8 rounded-lg bg-[#f8f6f3] hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#7f6a4d] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#5a3a22] mb-4">Quality Assured</h3>
              <p className="text-[#7f6a4d]">
                Every project undergoes rigorous quality checks to ensure excellence in every detail
              </p>
            </div>

            <div className="text-center p-8 rounded-lg bg-[#f8f6f3] hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#7f6a4d] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#5a3a22] mb-4">Timely Delivery</h3>
              <p className="text-[#7f6a4d]">
                We respect your timeline and deliver projects on schedule without compromising quality
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#f8f6f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#5a3a22] mb-6">
                Creating Spaces That Tell Stories
              </h2>
              <p className="text-lg text-[#7f6a4d] mb-6">
                At aakaara, we believe architecture is more than just buildings—it's about creating environments that enhance human experience and reflect the unique vision of each client.
              </p>
              <p className="text-lg text-[#7f6a4d] mb-8">
                Our team of experienced architects and designers work collaboratively to transform your ideas into tangible, functional, and beautiful spaces that stand the test of time.
              </p>
              <button className="bg-[#7f6a4d] hover:bg-[#5a3a22] text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Learn More About Us
              </button>
            </div>
            <div className="bg-[#7f6a4d] h-96 rounded-lg flex items-center justify-center">
              <div className="text-white text-center">
                <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <p className="text-lg">Architectural Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#5a3a22]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-[#d4c4b0] mb-8">
            Let's discuss how we can bring your architectural vision to life with our expert team and innovative approach.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-[#5a3a22] hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-medium transition-colors">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#5a3a22] px-8 py-3 rounded-lg text-lg font-medium transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2a1810] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="brand-font text-2xl text-[#d4c4b0] mb-4">aakaara</h3>
              <p className="text-gray-400">
                Transforming visions into architectural reality with innovation and excellence.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Residential Design</a></li>
                <li><a href="#" className="hover:text-white">Commercial Projects</a></li>
                <li><a href="#" className="hover:text-white">Interior Design</a></li>
                <li><a href="#" className="hover:text-white">Consultation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Our Team</a></li>
                <li><a href="#" className="hover:text-white">Portfolio</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@aakaara.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Design Street<br />Architecture City, AC 12345</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 aakaara. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#7f6a4d] hover:bg-[#5a3a22] text-white p-3 rounded-full shadow-lg transition-colors z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
}