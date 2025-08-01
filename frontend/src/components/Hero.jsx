import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Mail, Linkedin } from 'lucide-react';
import { Button } from './ui/button';

const Hero = ({ darkMode }) => {
  return (
    <section 
      className="relative flex items-center justify-center"
      style={{
        backgroundImage: "url('/assets/images/molecular_background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '500px'
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
              className="font-serif font-bold mb-8"
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
              className="font-sans italic mb-10"
              style={{ 
                fontFamily: "'Inter', sans-serif", 
                fontSize: '1.75rem', 
                fontStyle: 'italic',
                lineHeight: '1.4',
                marginTop: '1.5rem'
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
                title="Email"
              >
                <Mail className="h-5 w-5 text-white" />
              </a>
              <a 
                href="https://scholar.google.com/citations?user=9JziUvkAAAAJ" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-200"
                title="Google Scholar"
              >
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5.242 13.769L0.5 9.5 12 1l11.5 8.5-4.742 4.269C17.548 12.53 14.978 11.5 12 11.5c-2.977 0-5.548 1.03-6.758 2.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-200"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a 
                href="https://www.researchgate.net/profile/Mohemmed-Faraz-Khan" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-200"
                title="ResearchGate"
              >
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.563.754-.563.754s.563-.377 1.126-.377c.564 0 1.127.377 1.127.377s.564-.377 1.127-.377c.564 0 1.127.19 1.69.565C22.584.944 23.147 1.13 24 1.317v21.366c0 .377-.563.754-1.127.754-.563 0-1.126-.377-1.126-.377s-.564.377-1.127.377c-.564 0-1.127-.377-1.127-.377s-.563.377-1.126.377c-.564 0-1.127-.19-1.69-.565-.565-.377-1.128-.563-1.693-.563-.564 0-1.126.186-1.69.563-.565.374-1.128.564-1.693.564H0V1.317c.853-.188 1.416-.374 1.98-.563C2.544.377 3.107.19 3.67.19c.565 0 1.128.186 1.693.563.564.374 1.127.564 1.69.564.565 0 1.128-.19 1.693-.564C9.31.376 9.875.19 10.44.19c.564 0 1.127.186 1.69.563.565.374 1.128.564 1.693.564.565 0 1.128-.19 1.693-.564.565-.374 1.128-.563 1.693-.563.565 0 1.128.19 1.693.563.564.377 1.127.564 1.69.564z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Professional Headshot */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-96 h-96 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
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