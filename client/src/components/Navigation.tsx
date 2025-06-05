import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <h1 className="font-rigot text-2xl md:text-3xl text-gray-900 font-bold">
                aakaara
              </h1>
            </div>
            
            {/* Desktop Navigation - Hidden for minimalist design */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {/* Menu items hidden to match the minimalist design */}
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brown-500"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <a
                href="#home"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-quicksand text-gray-900 block px-3 py-2 text-base font-medium hover:text-brown-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-quicksand text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium hover:text-brown-600 transition-colors"
              >
                Services
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-quicksand text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium hover:text-brown-600 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
      
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
