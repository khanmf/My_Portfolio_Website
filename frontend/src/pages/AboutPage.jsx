import React from 'react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { MapPin, Calendar, Phone, Mail, Linkedin, Github } from 'lucide-react';

const AboutPage = ({ darkMode }) => {
  const personalInfo = {
    name: "Dr. Mohemmed Faraz Khan",
    title: "PhD in Pharmaceutical Chemistry",
    location: "18 Liffey Park, Lucan, Co. Dublin, Ireland",
    phone: "+353 899745166", 
    email: "faraz91khan@gmail.com"
  };

  const certifications = [
    "Python for Machine Learning & Data Science Masterclass – Udemy (Ongoing)",
    "Complete Python Bootcamp: From Zero to Hero – Udemy (2021)",
    "Programming for Everybody (Python) – University of Michigan, Coursera (2020)",
    "STEM Teaching & Assessment Strategies – CIRTL (Ongoing)",
    "Professional Skills for Research Leaders (PSRL) – Epigeum Global Universities Program (2021)"
  ];

  const affiliations = [
    {
      organization: "Madhya Pradesh State Pharmacy Council",
      role: "Registered Pharmacist",
      registration: "Reg. No. 82163",
      period: "2013–2027"
    },
    {
      organization: "Association of Pharmaceutical Teachers of India (APTI)", 
      role: "Lifetime Member",
      registration: "Reg. No. UP/LM-1104",
      period: "Active"
    }
  ];

  const interests = [
    "Computational Chemistry & Drug Discovery",
    "AI/ML Applications in Pharmaceutical Sciences", 
    "Cheminformatics & Bioinformatics",
    "Virtual Screening & Molecular Modeling",
    "Scientific Writing & Communication",
    "STEM Education & Curriculum Development",
    "Open Source Scientific Software",
    "High-Performance Computing"
  ];

  return (
    <div className={`min-h-screen py-20 ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className={`text-5xl font-serif font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-slate-800'
          }`}>
            About Me
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Bridging academic excellence with practical freelance solutions in computational chemistry and scientific communication.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section with Photo Placeholder */}
            <Card className={`p-8 ${
              darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
            }`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <div className={`w-full aspect-square rounded-xl overflow-hidden ${
                    darkMode ? 'bg-slate-700' : 'bg-gray-200'
                  }`}>
                    {/* Placeholder for aboutme_section_photo.png */}
                    <div className={`w-full h-full flex items-center justify-center ${
                      darkMode ? 'text-gray-500' : 'text-gray-400'
                    }`}>
                      <div className="text-center">
                        <div className="text-4xl mb-2">👨‍🔬</div>
                        <div className="text-sm">About Me Photo</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h2 className={`text-2xl font-serif font-bold mb-4 ${
                    darkMode ? 'text-white' : 'text-slate-800'
                  }`}>
                    Professional Journey
                  </h2>
                  <div className={`space-y-4 text-sm leading-relaxed ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <p>
                      With over a decade of experience in computational chemistry and pharmaceutical research, 
                      I have dedicated my career to advancing drug discovery through cutting-edge AI/ML technologies 
                      and innovative computational approaches.
                    </p>
                    <p>
                      My academic journey has taken me from New Delhi to Dublin and beyond, working with 
                      leading research institutions and developing platforms that bridge the gap between 
                      theoretical research and practical drug development solutions.
                    </p>
                    <p>
                      As an independent freelancer, I leverage this extensive academic background to provide 
                      high-quality scientific writing, research consulting, and technical services to clients 
                      worldwide, helping them navigate the complex landscape of modern pharmaceutical research.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Research Philosophy */}
            <Card className={`p-6 ${
              darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
            }`}>
              <h2 className={`text-2xl font-serif font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-slate-800'
              }`}>
                Research Philosophy
              </h2>
              <p className={`text-sm leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I believe in the transformative power of computational chemistry when combined with artificial intelligence. 
                My approach integrates traditional medicinal chemistry principles with modern machine learning techniques 
                to accelerate drug discovery processes. Through platforms like DataPype and various AI-driven screening 
                methodologies, I strive to make computational drug design more accessible and efficient for researchers worldwide.
              </p>
            </Card>

            {/* Research Interests */}
            <Card className={`p-6 ${
              darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
            }`}>
              <h2 className={`text-2xl font-serif font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-slate-800'
              }`}>
                Research Interests
              </h2>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <Badge key={index} variant="secondary" className={`text-sm py-2 px-4 ${
                    darkMode ? 'bg-slate-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {interest}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Certifications */}
            <Card className={`p-6 ${
              darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
            }`}>
              <h2 className={`text-2xl font-serif font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-slate-800'
              }`}>
                Professional Certifications
              </h2>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className={`flex items-start text-sm ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <span className="mr-3 mt-1.5 w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></span>
                    {cert}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className={`p-6 ${
              darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
            }`}>
              <h3 className={`text-lg font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-slate-800'
              }`}>
                Contact Information
              </h3>
              <div className="space-y-3">
                <div className={`flex items-start text-sm ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <MapPin className="mr-2 h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className={`flex items-center text-sm ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <Phone className="mr-2 h-4 w-4 flex-shrink-0" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className={`flex items-center text-sm ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <Mail className="mr-2 h-4 w-4 flex-shrink-0" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-emerald-500">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className={`p-6 ${
              darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
            }`}>
              <h3 className={`text-lg font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-slate-800'
              }`}>
                Connect With Me
              </h3>
              <div className="flex space-x-3">
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className={`p-3 rounded-lg transition-colors ${
                    darkMode ? 'bg-slate-700 hover:bg-slate-600 text-gray-300' 
                             : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                  }`}
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a 
                  href="#"
                  className={`p-3 rounded-lg transition-colors ${
                    darkMode ? 'bg-slate-700 hover:bg-slate-600 text-gray-300' 
                             : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                  }`}
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="#"
                  className={`p-3 rounded-lg transition-colors ${
                    darkMode ? 'bg-slate-700 hover:bg-slate-600 text-gray-300' 
                             : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                  }`}
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </Card>

            {/* Professional Affiliations */}
            <Card className={`p-6 ${
              darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
            }`}>
              <h3 className={`text-lg font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-slate-800'
              }`}>
                Professional Affiliations
              </h3>
              <div className="space-y-4">
                {affiliations.map((affiliation, index) => (
                  <div key={index} className="space-y-1">
                    <h4 className={`font-medium text-sm ${
                      darkMode ? 'text-white' : 'text-slate-800'
                    }`}>
                      {affiliation.role}
                    </h4>
                    <p className={`text-xs ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {affiliation.organization}
                    </p>
                    <p className={`text-xs ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {affiliation.registration} • {affiliation.period}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className={`p-6 ${
              darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
            }`}>
              <h3 className={`text-lg font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-slate-800'
              }`}>
                At a Glance
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className={`text-xl font-bold ${
                    darkMode ? 'text-emerald-400' : 'text-emerald-600'
                  }`}>10+</div>
                  <div className={`text-xs ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>Years Experience</div>
                </div>
                <div className="text-center">
                  <div className={`text-xl font-bold ${
                    darkMode ? 'text-emerald-400' : 'text-emerald-600'
                  }`}>3</div>
                  <div className={`text-xs ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>Countries</div>
                </div>
                <div className="text-center">
                  <div className={`text-xl font-bold ${
                    darkMode ? 'text-emerald-400' : 'text-emerald-600'
                  }`}>40+</div>
                  <div className={`text-xs ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>Publications</div>
                </div>
                <div className="text-center">
                  <div className={`text-xl font-bold ${
                    darkMode ? 'text-emerald-400' : 'text-emerald-600'
                  }`}>PhD</div>
                  <div className={`text-xs ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>Doctorate</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;