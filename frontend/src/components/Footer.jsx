import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Academic Portfolio', path: '/academic' },
    { label: 'Freelancing & Services', path: '/freelance' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  const services = [
    'Scientific Writing',
    'CADD Consulting', 
    'Research Support',
    'Grant Writing',
    'Medical Writing',
    'Technical Writing'
  ];

  return (
    <footer className={`border-t ${
      darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                darkMode ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-white'
              }`}>
                FK
              </div>
              <div>
                <h3 className={`font-serif text-lg font-bold ${
                  darkMode ? 'text-white' : 'text-slate-800'
                }`}>
                  Dr. Faraz Khan
                </h3>
                <p className={`text-xs ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  PhD • Researcher • Freelancer
                </p>
              </div>
            </div>
            <p className={`text-sm leading-relaxed mb-4 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Bridging academic excellence with practical freelance solutions in computational chemistry and scientific communication.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              <a 
                href="mailto:faraz91khan@gmail.com"
                className={`p-2 rounded-lg transition-colors ${
                  darkMode ? 'hover:bg-slate-700 text-gray-400 hover:text-white' 
                           : 'hover:bg-gray-100 text-gray-600 hover:text-slate-800'
                }`}
              >
                <Mail className="h-4 w-4" />
              </a>
              <a 
                href="#"
                className={`p-2 rounded-lg transition-colors ${
                  darkMode ? 'hover:bg-slate-700 text-gray-400 hover:text-white' 
                           : 'hover:bg-gray-100 text-gray-600 hover:text-slate-800'
                }`}
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="#"
                className={`p-2 rounded-lg transition-colors ${
                  darkMode ? 'hover:bg-slate-700 text-gray-400 hover:text-white' 
                           : 'hover:bg-gray-100 text-gray-600 hover:text-slate-800'
                }`}
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`font-semibold text-sm mb-4 ${
              darkMode ? 'text-white' : 'text-slate-800'
            }`}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className={`text-sm transition-colors ${
                      darkMode ? 'text-gray-400 hover:text-white' 
                               : 'text-gray-600 hover:text-slate-800'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className={`font-semibold text-sm mb-4 ${
              darkMode ? 'text-white' : 'text-slate-800'
            }`}>
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={`font-semibold text-sm mb-4 ${
              darkMode ? 'text-white' : 'text-slate-800'
            }`}>
              Contact
            </h3>
            <div className="space-y-3">
              <div className={`flex items-start text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <MapPin className="mr-2 h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>Dublin, Ireland</span>
              </div>
              <div className={`flex items-center text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <Phone className="mr-2 h-4 w-4 flex-shrink-0" />
                <span>+353 899745166</span>
              </div>
              <div className={`flex items-center text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <Mail className="mr-2 h-4 w-4 flex-shrink-0" />
                <a href="mailto:faraz91khan@gmail.com" className="hover:text-emerald-500">
                  faraz91khan@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center ${
          darkMode ? 'border-slate-700' : 'border-gray-200'
        }`}>
          <p className={`text-sm ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            © {currentYear} Dr. Mohemmed Faraz Khan. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link 
              to="/contact"
              className={`text-sm transition-colors ${
                darkMode ? 'text-gray-400 hover:text-white' 
                         : 'text-gray-600 hover:text-slate-800'
              }`}
            >
              Privacy Policy
            </Link>
            <Link 
              to="/contact"
              className={`text-sm transition-colors ${
                darkMode ? 'text-gray-400 hover:text-white' 
                         : 'text-gray-600 hover:text-slate-800'
              }`}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;