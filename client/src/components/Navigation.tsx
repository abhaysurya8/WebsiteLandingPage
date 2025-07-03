import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <>
      {/* Hamburger Menu Button - Fixed Position with more left spacing */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-6 left-2 z-50 p-3 text-aakaara-text hover:text-aakaara-brown transition-colors"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Slide-out Menu */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="pt-20 px-6 flex flex-col h-full">
          <nav className="space-y-6 flex-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`group block text-lg font-medium transition-colors py-2 relative ${
                  isActive(item.href)
                    ? "text-aakaara-brown border-l-4 border-aakaara-brown pl-4"
                    : "text-aakaara-text hover:text-aakaara-brown hover:pl-2"
                }`}
              >
                {item.name}
                {/* Drafting-style animated underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-aakaara-brown transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
          {/* Architectural icon at the bottom */}
          <div className="flex justify-center items-end pb-8 pt-4">
            {/* Minimal column SVG icon */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="12" y="6" width="8" height="20" rx="2" fill="#8B6A4F"/>
              <rect x="10" y="26" width="12" height="2" rx="1" fill="#8B6A4F"/>
              <rect x="10" y="4" width="12" height="2" rx="1" fill="#8B6A4F"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}