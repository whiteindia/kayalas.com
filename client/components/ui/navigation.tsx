import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navigationItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about" },
  { name: "SERVICES", href: "/services" },
  { name: "BLOGS", href: "/blogs" },
  { name: "CONTACT US", href: "/contact" },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <nav className="bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F959f0d90f5e4405f97d4dccc836c94b0%2Fc1c3df1c6d2d4e7cb0196172f731b379?format=webp&width=800"
                alt="Kayala's - Legacy of Prosperity"
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium tracking-wider transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-college-gold"
                      : "text-white hover:text-college-gold"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/franchise"
                className="bg-college-gold text-black px-4 py-2 text-sm font-medium tracking-wider hover:bg-college-gold-dark transition-colors duration-200"
              >
                FRANCHISE PARTNER
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-college-gold"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 text-base font-medium tracking-wider transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-college-gold"
                    : "text-white hover:text-college-gold"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/franchise"
              className="block bg-college-gold text-black px-3 py-2 text-base font-medium tracking-wider mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              FRANCHISE PARTNER
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
