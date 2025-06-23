import { useState } from "react";
import { Link, useLocation } from "wouter";

const Navigation = () => {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Menu Toggle Button - Top Left Corner */}
      <button
        onClick={toggleMenu}
        className="fixed top-6 left-6 z-50 flex flex-col space-y-1 group"
        aria-label="Menu"
      >
        <span className={`block h-0.5 w-5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block h-0.5 w-5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block h-0.5 w-5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Side Menu */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="pt-20 px-8">
          <nav className="space-y-6">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block text-lg font-medium transition-colors duration-200 ${
                  isActive(item.href) 
                    ? 'text-[#7f6a4d] font-semibold' 
                    : 'text-gray-700 hover:text-[#7f6a4d]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;
