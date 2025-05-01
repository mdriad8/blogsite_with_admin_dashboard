import React, { useState, useEffect } from "react";
import { ChevronRight, Menu, X, Rocket } from "lucide-react";
import Button from "../ui/Button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center text-red-600 font-bold text-xl"
            >
              <Rocket className="mr-2" size={28} />
              <span>LOS Technologies</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/about"
              className="text-slate-800 hover:text-red-600 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              to="/companies"
              className="text-slate-800 hover:text-red-600 transition-colors font-medium"
            >
              Companies
            </Link>
            <Link
              to="/jobs"
              className="text-slate-800 hover:text-red-600 transition-colors font-medium"
            >
              Startup Jobs
            </Link>
            <Link
              to="/resources"
              className="text-slate-800 hover:text-red-600 transition-colors font-medium"
            >
              Resources
            </Link>
            <Link
              to="/contact"
              className="text-slate-800 hover:text-red-600 transition-colors font-medium"
            >
              Contact
            </Link>
            <Button>
              Join <ChevronRight size={16} className="ml-1" />
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 border-t border-gray-100">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              to="/about"
              className="text-slate-800 hover:text-red-600 py-2 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/companies"
              className="text-slate-800 hover:text-red-600 py-2 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Companies
            </Link>
            <Link
              to="/jobs"
              className="text-slate-800 hover:text-red-600 py-2 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Startup Jobs
            </Link>
            <Link
              to="/resources"
              className="text-slate-800 hover:text-red-600 py-2 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              to="/contact"
              className="text-slate-800 hover:text-red-600 py-2 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button fullWidth>
              Join <ChevronRight size={16} className="ml-1" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
