import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Mail, Linkedin, Github } from 'lucide-react';
import { Button } from './ui/button';

const Hero = ({ darkMode }) => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/assets/images/molecular_background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '700px'
      }}
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left text-white">
            <h1 
              className="font-serif font-bold mb-6"
              style={{ 
                fontFamily: "'Playfair Display', serif", 
                fontSize: '3.5rem', 
                fontWeight: 'bold',
                lineHeight: '1.1'
              }}
            >
              Dr. Mohemmed Faraz Khan
            </h1>
            
            <h2 
              className="font-sans italic mb-8"
              style={{ 
                fontFamily: "'Inter', sans-serif", 
                fontSize: '1.75rem', 
                fontStyle: 'italic',
                lineHeight: '1.3'
              }}
            >
              From Molecules to Manuscripts — I Design, Analyze, and Deliver Scientific Solutions
            </h2>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a 
                href="/assets/resume.pdf" 
                download
                className="inline-flex items-center px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors duration-200"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-slate-800 font-medium rounded-lg transition-colors duration-200"
              >
                Hire Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start space-x-4">
              <a 
                href="mailto:faraz91khan@gmail.com" 
                className="p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-200"
              >
                <Mail className="h-5 w-5 text-white" />
              </a>
              <a 
                href="#" 
                className="p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-200"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a 
                href="#" 
                className="p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-200"
              >
                <Github className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Right Column - Professional Headshot */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/assets/images/headshot.png" 
                  alt="Dr. Mohemmed Faraz Khan - Professional Headshot"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;