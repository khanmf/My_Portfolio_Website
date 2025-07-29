import React from 'react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Calendar, MapPin, ExternalLink, BookOpen, Award, Users, Microscope } from 'lucide-react';

const AcademicPage = ({ darkMode }) => {
  const experiences = [
    {
      title: "Postdoctoral Researcher – Computational Chemistry",
      institution: "Maynooth University",
      location: "Kildare, Ireland",
      period: "Jun 2024 – Mar 2025",
      description: [
        "Developed an AI/ML-driven CADD platform to enhance drug design efficiency",
        "Performed docking, pharmacophore, and shape-based virtual screening",
        "Collaborated with industry and academic partners; mentored graduate students"
      ]
    },
    {
      title: "Assistant Professor – Computational & Medicinal Chemistry",
      institution: "Integral University",
      location: "Lucknow, India", 
      period: "Mar 2023 – May 2024",
      description: [
        "Conducted research using docking, QSAR, molecular dynamics, and virtual screening",
        "Supervised UG/PG research projects; published in peer-reviewed journals",
        "Integrated AI in computational workflows and served as journal reviewer"
      ]
    },
    {
      title: "Postdoctoral Researcher – Computational Chemistry",
      institution: "Trinity College Dublin",
      location: "Dublin, Ireland",
      period: "Oct 2020 – Sep 2022", 
      description: [
        "Developed 'DataPype,' a unified Python-based CADD automation platform",
        "Enabled high-throughput GPU/CPU computing; validated hits against AR targets",
        "Mentored postgraduates and contributed to peer-reviewed publications"
      ]
    }
  ];

  const keyPublications = [
    {
      title: "FDA-approved Kinase Inhibitors",
      journal: "European Journal of Pharmacology",
      year: "2024",
      impact: "IF: 5.0"
    },
    {
      title: "DataPype CADD Platform",
      journal: "ACS Omega",
      year: "2023", 
      impact: "IF: 4.1"
    },
    {
      title: "Fluoroazetidinones as Anticancer Agents",
      journal: "Pharmaceuticals",
      year: "2022",
      impact: "IF: 4.6"
    },
    {
      title: "p38α MAPK Inhibitors",
      journal: "Computers in Biology & Medicine", 
      year: "2019",
      impact: "IF: 7.7"
    }
  ];

  const awards = [
    "Government of Ireland Postdoctoral Fellowship – Irish Research Council (2020)",
    "SERB-ITS Travel Grant – Kazan Chemoinformatics School, Russia (2017)",
    "Best Poster Award – Kazan Summer School, Russia (2017)",
    "Maulana Azad National Fellowship – UGC, India (2016)",
    "GPAT Scholarship – AICTE, India (2013)"
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className={`py-20 ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-5xl font-serif font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-slate-800'
          }`}>
            Academic Portfolio
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Over a decade of research excellence in computational chemistry, drug discovery, 
            and AI/ML applications in pharmaceutical sciences.
          </p>
        </div>
      </div>

      {/* Academic Portfolio Section - Following Block 3 Specifications */}
      <section 
        className="py-16 px-8"
        style={{ backgroundColor: '#F8F9FA' }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-3xl font-serif mb-6"
            style={{ color: '#2F3E46' }}
          >
            📚 Academic Portfolio
          </h2>
          <p 
            className="text-base mb-8"
            style={{ color: '#2F3E46' }}
          >
            Explore my academic journey — from cutting-edge computational drug discovery projects to mentoring and publishing in high-impact journals.
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 text-center bg-white border-gray-200">
              <div className="text-3xl font-bold mb-2 text-emerald-600">40+</div>
              <div className="text-sm text-gray-600">Publications</div>
            </Card>
            <Card className="p-6 text-center bg-white border-gray-200">
              <div className="text-3xl font-bold mb-2 text-emerald-600">2080+</div> 
              <div className="text-sm text-gray-600">Citations</div>
            </Card>
            <Card className="p-6 text-center bg-white border-gray-200">
              <div className="text-3xl font-bold mb-2 text-emerald-600">18</div>
              <div className="text-sm text-gray-600">h-index</div>
            </Card>
            <Card className="p-6 text-center bg-white border-gray-200">
              <div className="text-3xl font-bold mb-2 text-emerald-600">133.2</div>
              <div className="text-sm text-gray-600">Total IF</div>
            </Card>
          </div>

          {/* Subsections Grid */}
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 
                className="font-semibold mb-2"
                style={{ color: '#2C6E49' }}
              >
                Research Experience
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                <li>Postdoctoral Researcher, Maynooth University</li>
                <li>Postdoc, Trinity College Dublin – CADD & AI integration</li>
                <li>Assistant Professor, Integral University</li>
              </ul>
            </div>

            <div>
              <h3 
                className="font-semibold mb-2"
                style={{ color: '#2C6E49' }}
              >
                Teaching Experience
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                <li>Medicinal Chemistry, Cheminformatics, Principles of Drug Design</li>
                <li>Graduate/Postgraduate level instruction</li>
              </ul>
            </div>

            <div>
              <h3 
                className="font-semibold mb-2"
                style={{ color: '#2C6E49' }}
              >
                Publications & Citations
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                <li>40+ peer-reviewed publications</li>
                <li>h-index: 18 | Citations: 2000+</li>
                <li>Link: <a href="https://scholar.google.com/citations?user=9JziUvkAAAAJ" className="text-blue-600 underline">Google Scholar</a></li>
              </ul>
            </div>

            <div>
              <h3 
                className="font-semibold mb-2"
                style={{ color: '#2C6E49' }}
              >
                Awards & Fellowships
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                <li>Senior Research Fellowship (CSIR-UGC)</li>
                <li>ICMR Travel Grant</li>
                <li>Research Excellence Awards</li>
              </ul>
            </div>

            <div>
              <h3 
                className="font-semibold mb-2"
                style={{ color: '#2C6E49' }}
              >
                Skills & Tools
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                <li>Docking, QSAR, Pharmacophore, AI/ML</li>
                <li>Python, Schrödinger, RDKit, OpenEye</li>
                <li>Zotero, EndNote, LaTeX</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Research Experience */}
      <section className={`py-16 ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-serif font-bold mb-8 flex items-center ${
            darkMode ? 'text-white' : 'text-slate-800'
          }`}>
            <Microscope className="mr-3 h-8 w-8" />
            Research Experience Details
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className={`p-6 ${
                darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-200'
              }`}>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${
                      darkMode ? 'text-white' : 'text-slate-800'
                    }`}>
                      {exp.title}
                    </h3>
                    <div className={`flex items-center text-sm mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      <span className="font-medium">{exp.institution}</span>
                      <MapPin className="mx-2 h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className={`flex items-center ${
                    darkMode ? 'border-gray-600 text-gray-300' : 'border-gray-300 text-gray-600'
                  }`}>
                    <Calendar className="mr-1 h-3 w-3" />
                    {exp.period}
                  </Badge>
                </div>
                <ul className={`space-y-2 text-sm ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 mt-1.5 w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Publications */}
      <section className={`py-16 ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-serif font-bold mb-8 flex items-center ${
            darkMode ? 'text-white' : 'text-slate-800'
          }`}>
            <BookOpen className="mr-3 h-8 w-8" />
            Selected Publications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyPublications.map((pub, index) => (
              <Card key={index} className={`p-6 ${
                darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
              }`}>
                <h3 className={`font-semibold mb-2 ${
                  darkMode ? 'text-white' : 'text-slate-800'
                }`}>
                  {pub.title}
                </h3>
                <p className={`text-sm mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {pub.journal}
                </p>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {pub.year}
                  </Badge>
                  <Badge className="text-xs bg-emerald-100 text-emerald-800">
                    {pub.impact}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" className={`${
              darkMode ? 'border-gray-600 text-gray-300 hover:bg-slate-700' 
                       : 'border-gray-300 text-gray-600 hover:bg-gray-50'
            }`}>
              View All Publications
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className={`py-16 ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-serif font-bold mb-8 flex items-center ${
            darkMode ? 'text-white' : 'text-slate-800'
          }`}>
            <Award className="mr-3 h-8 w-8" />
            Awards & Recognition
          </h2>
          <Card className={`p-6 ${
            darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-200'
          }`}>
            <ul className="space-y-3">
              {awards.map((award, index) => (
                <li key={index} className={`flex items-start text-sm ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <Award className="mr-3 h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  {award}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default AcademicPage;