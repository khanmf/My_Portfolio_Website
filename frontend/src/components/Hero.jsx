import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Mail, Linkedin, Github } from 'lucide-react';
import { Button } from './ui/button';

const Hero = ({ darkMode }) => {
  return (
    <section className={`min-h-screen flex items-center py-20 ${
      darkMode ? 'bg-slate-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className={`text-5xl lg:text-6xl font-serif font-bold leading-tight ${
                darkMode ? 'text-white' : 'text-slate-800'
              }`}>
                Dr. Mohemmed Faraz Khan
              </h1>
              <div className={`text-xl ${
                darkMode ? 'text-emerald-400' : 'text-emerald-600'
              }`}>
                PhD in Pharmaceutical Chemistry
              </div>
              <p className={`text-lg leading-relaxed max-w-xl ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Academic Researcher specializing in Computational Chemistry & AI/ML-driven Drug Discovery, 
                and Independent Freelancer offering STEM writing, CADD consulting, and scientific communication services.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className={`p-4 rounded-lg ${
                darkMode ? 'bg-slate-800' : 'bg-white'
              } shadow-sm`}>
                <div className={`text-2xl font-bold ${
                  darkMode ? 'text-emerald-400' : 'text-emerald-600'
                }`}>40+</div>
                <div className={`text-sm ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>Publications</div>
              </div>
              <div className={`p-4 rounded-lg ${
                darkMode ? 'bg-slate-800' : 'bg-white'
              } shadow-sm`}>
                <div className={`text-2xl font-bold ${
                  darkMode ? 'text-emerald-400' : 'text-emerald-600'
                }`}>10+</div>
                <div className={`text-sm ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>Book Chapters</div>
              </div>
              <div className={`p-4 rounded-lg ${
                darkMode ? 'bg-slate-800' : 'bg-white'
              } shadow-sm`}>
                <div className={`text-2xl font-bold ${
                  darkMode ? 'text-emerald-400' : 'text-emerald-600'
                }`}>2080+</div>
                <div className={`text-sm ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>Citations</div>
              </div>
              <div className={`p-4 rounded-lg ${
                darkMode ? 'bg-slate-800' : 'bg-white'
              } shadow-sm`}>
                <div className={`text-2xl font-bold ${
                  darkMode ? 'text-emerald-400' : 'text-emerald-600'
                }`}>18</div>
                <div className={`text-sm ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>h-index</div>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/academic">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white"
                >
                  View Academic Portfolio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/freelance">
                <Button 
                  variant="outline" 
                  size="lg"
                  className={`w-full sm:w-auto border-2 ${
                    darkMode ? 'border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900' 
                             : 'border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white'
                  }`}
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a 
                href="mailto:faraz91khan@gmail.com" 
                className={`p-2 rounded-full transition-colors ${
                  darkMode ? 'hover:bg-slate-700 text-gray-400 hover:text-white' 
                           : 'hover:bg-gray-100 text-gray-600 hover:text-slate-800'
                }`}
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className={`p-2 rounded-full transition-colors ${
                  darkMode ? 'hover:bg-slate-700 text-gray-400 hover:text-white' 
                           : 'hover:bg-gray-100 text-gray-600 hover:text-slate-800'
                }`}
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className={`p-2 rounded-full transition-colors ${
                  darkMode ? 'hover:bg-slate-700 text-gray-400 hover:text-white' 
                           : 'hover:bg-gray-100 text-gray-600 hover:text-slate-800'
                }`}
              >
                <Github className="h-5 w-5" />
              </a>
              <Button 
                variant="ghost" 
                size="sm" 
                className={`ml-4 ${
                  darkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-100'
                }`}
              >
                <Download className="h-4 w-4 mr-2" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className={`w-80 h-80 rounded-2xl overflow-hidden ${
                darkMode ? 'bg-slate-800' : 'bg-gray-200'
              } shadow-2xl transform hover:scale-105 transition-transform duration-300`}>
                {/* Placeholder for headshot.png */}
                <div className={`w-full h-full flex items-center justify-center ${
                  darkMode ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  <div className="text-center">
                    <div className="text-6xl mb-2">👨‍🔬</div>
                    <div className="text-sm">Dr. Faraz Khan</div>
                    <div className="text-xs">Professional Headshot</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className={`absolute -top-4 -right-4 w-24 h-24 ${
                darkMode ? 'bg-emerald-600' : 'bg-emerald-500'
              } rounded-full opacity-20 animate-pulse`}></div>
              <div className={`absolute -bottom-4 -left-4 w-16 h-16 ${
                darkMode ? 'bg-slate-600' : 'bg-slate-400'
              } rounded-full opacity-30 animate-pulse`}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;