import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useFont } from "@/contexts/FontContext";
import FontSwitcher from "./FontSwitcher";

export default function Navigation() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logoFont } = useFont();

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-aakaara-brown/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <span className={`${logoFont === 'rigot' ? 'font-rigot' : 'font-playfair'} text-2xl font-normal text-aakaara-text hover:text-aakaara-brown transition-colors`}>
              aakaara
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-aakaara-brown border-b-2 border-aakaara-brown pb-1"
                    : "text-aakaara-text hover:text-aakaara-brown"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <FontSwitcher />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-aakaara-text hover:text-aakaara-brown transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-aakaara-brown/20">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-aakaara-brown"
                      : "text-aakaara-text hover:text-aakaara-brown"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <FontSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}