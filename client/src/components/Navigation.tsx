import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Menu icon top-left fixed */}
      <button 
        aria-label="Menu" 
        className="fixed top-6 left-6 z-50 flex flex-col w-5 h-4 justify-between" 
        type="button"
        onClick={toggleMobileMenu}
      >
        <span className="block h-0.5 w-5 bg-black rounded-sm"></span>
        <span className="block h-0.5 w-5 bg-black rounded-sm"></span>
        <span className="block h-0.5 w-5 bg-black rounded-sm"></span>
      </button>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="fixed top-0 left-0 h-full w-64 bg-white p-6 z-50" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="mt-16 space-y-4">
              <a
                href="#home"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-quicksand text-gray-900 block py-2 text-base font-medium hover:text-[#7f6a4d] transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-quicksand text-gray-600 hover:text-gray-900 block py-2 text-base font-medium hover:text-[#7f6a4d] transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-quicksand text-gray-600 hover:text-gray-900 block py-2 text-base font-medium hover:text-[#7f6a4d] transition-colors"
              >
                Projects
              </a>
              <a
                href="#pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-quicksand text-gray-600 hover:text-gray-900 block py-2 text-base font-medium hover:text-[#7f6a4d] transition-colors"
              >
                Pricing
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-quicksand text-gray-600 hover:text-gray-900 block py-2 text-base font-medium hover:text-[#7f6a4d] transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
