import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navigation = ({ darkMode, toggleDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/academic', label: 'Academic Portfolio' },
    { path: '/freelance', label: 'Freelancing & Services' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      darkMode ? 'bg-slate-900/95 border-slate-700' : 'bg-white/95 border-gray-200'
    } backdrop-blur-sm border-b`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center space-x-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
              darkMode ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-white'
            }`}>
              FK
            </div>
            <div className="hidden sm:block">
              <h1 className={`font-serif text-xl font-bold ${
                darkMode ? 'text-white' : 'text-slate-800'
              }`}>
                Dr. Faraz Khan
              </h1>
              <p className={`text-xs ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                PhD • Researcher • Freelancer
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActivePath(item.path)
                    ? darkMode
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-800 text-white'
                    : darkMode
                    ? 'text-gray-300 hover:text-white hover:bg-slate-700'
                    : 'text-gray-600 hover:text-slate-800 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Dark Mode Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className={`rounded-full ${
                darkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-100'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-slate-600" />
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost" 
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden border-t ${
            darkMode ? 'border-slate-700 bg-slate-900' : 'border-gray-200 bg-white'
          }`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActivePath(item.path)
                      ? darkMode
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-800 text-white'
                      : darkMode
                      ? 'text-gray-300 hover:text-white hover:bg-slate-700'
                      : 'text-gray-600 hover:text-slate-800 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;