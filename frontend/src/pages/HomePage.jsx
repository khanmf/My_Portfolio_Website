import React from 'react';
import Hero from '../components/Hero';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowRight, BookOpen, Briefcase, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = ({ darkMode }) => {
  const highlights = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "PhD in Pharmaceutical Chemistry with 40+ publications and 2080+ citations",
      link: "/academic",
      color: "emerald"
    },
    {
      icon: Briefcase,
      title: "Freelance Services",
      description: "Scientific writing, CADD consulting, and research services for global clients",
      link: "/freelance", 
      color: "slate"
    },
    {
      icon: Award,
      title: "Research Impact",
      description: "Postdoctoral researcher developing AI/ML-driven drug discovery platforms",
      link: "/academic",
      color: "emerald"
    },
    {
      icon: Users,
      title: "Teaching & Mentorship", 
      description: "Assistant Professor experience with curriculum development and student guidance",
      link: "/about",
      color: "slate"
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <Hero darkMode={darkMode} />

      {/* Highlights Section */}
      <section className={`py-20 ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-serif font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-slate-800'
            }`}>
              Dual Identity, Single Excellence
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Bridging the gap between academic research and practical freelance solutions, 
              delivering cutting-edge computational chemistry insights and professional services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className={`group p-6 hover:shadow-lg transition-all duration-300 cursor-pointer ${
                  darkMode ? 'bg-slate-900 border-slate-700 hover:border-emerald-500' 
                           : 'bg-white border-gray-200 hover:border-emerald-500'
                }`}>
                  <Link to={item.link}>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                      item.color === 'emerald' 
                        ? darkMode ? 'bg-emerald-600' : 'bg-emerald-100'
                        : darkMode ? 'bg-slate-700' : 'bg-slate-100'
                    }`}>
                      <Icon className={`h-6 w-6 ${
                        item.color === 'emerald'
                          ? darkMode ? 'text-white' : 'text-emerald-600'
                          : darkMode ? 'text-gray-300' : 'text-slate-600'
                      }`} />
                    </div>
                    <h3 className={`text-xl font-semibold mb-2 ${
                      darkMode ? 'text-white' : 'text-slate-800'
                    }`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {item.description}
                    </p>
                    <div className={`mt-4 flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform ${
                      item.color === 'emerald'
                        ? darkMode ? 'text-emerald-400' : 'text-emerald-600'
                        : darkMode ? 'text-gray-300' : 'text-slate-600'
                    }`}>
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className={`py-20 ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl font-serif font-bold mb-8 ${
            darkMode ? 'text-white' : 'text-slate-800'
          }`}>
            Ready to Collaborate?
          </h2>
          <p className={`text-lg mb-10 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Whether you need academic research collaboration or professional freelance services, 
            I'm here to help bring your projects to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/freelance">
              <Button 
                variant="outline" 
                size="lg"
                className={`px-8 border-2 ${
                  darkMode ? 'border-slate-600 text-slate-300 hover:bg-slate-700' 
                           : 'border-slate-300 text-slate-600 hover:bg-slate-50'
                }`}
              >
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;