import React from 'react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  PenTool, 
  Microscope, 
  DollarSign, 
  FileText, 
  BookOpen, 
  Brain,
  Users,
  ExternalLink,
  Mail,
  Clock
} from 'lucide-react';

const FreelancePage = ({ darkMode }) => {
  const services = [
    {
      category: "Scientific Writing & Editing",
      icon: PenTool,
      color: "emerald",
      services: [
        {
          title: "STEM Test Prep Content Development",
          description: "Passage and question writing for MCAT, GAMSAT, NEET, IB with detailed explanations",
          rates: "Beginner $30/hr | Intermediate $75/hr | Expert $150/hr",
          tools: ["ChatGPT", "Claude", "Overleaf", "BioRender", "QGen"]
        },
        {
          title: "Academic Publishing Support", 
          description: "Journal manuscript formatting, submission systems, cover letters, review responses",
          rates: "Beginner $30/hr | Intermediate $60/hr | Expert $90/hr",
          tools: ["EndNote", "Zotero", "LaTeX", "Grammarly", "Typeset.io"]
        },
        {
          title: "Academic Editing (STEM Focus)",
          description: "Theses, grants, CVs, research documents with language polishing for ESL authors",
          rates: "Beginner $20/hr | Intermediate $45/hr | Expert $70/hr", 
          tools: ["PerfectIt", "Trinka", "TeXstudio", "Edifix"]
        }
      ]
    },
    {
      category: "Research Consulting",
      icon: Microscope,
      color: "slate",
      services: [
        {
          title: "CADD / Drug Design Consultant",
          description: "Protein-ligand preparation, molecular docking, AI/ML virtual screening",
          rates: "$40–150/hr",
          tools: ["Schrödinger", "RDKit", "OpenEye", "Python"]
        },
        {
          title: "Research Study Design",
          description: "Data interpretation, statistical analysis, publication planning and strategy",
          rates: "$40–150/hr", 
          tools: ["PubMed", "SPSS", "Excel", "R"]
        },
        {
          title: "Pharma Chemistry SME",
          description: "Literature review, formulation consulting, regulatory guidance",
          rates: "$25–100/hr",
          tools: ["PubChem", "Patents DB", "ChEMBL"]
        }
      ]
    },
    {
      category: "Science Communication",
      icon: Users,
      color: "emerald",
      services: [
        {
          title: "STEM Journalism & Outreach",
          description: "Social media posts, blogs, research explainers, science interviews",
          rates: "Beginner $20/hr | Intermediate $50/hr | Expert $80/hr",
          tools: ["Canva Pro", "Hemingway", "BuzzSumo", "Scite.ai"]
        },
        {
          title: "SEO for Scientific Content",
          description: "SEO research for academic blogs, keyword alignment, outreach strategy",
          rates: "Beginner $25/hr | Intermediate $50/hr | Expert $90/hr",
          tools: ["SEMRush", "SurferSEO", "Yoast", "Jasper AI"]
        }
      ]
    },
    {
      category: "Grant & Medical Writing",
      icon: DollarSign,
      color: "slate", 
      services: [
        {
          title: "Research Funding & Grant Writing",
          description: "Grant writing for NIH, Horizon, SFI with budget narratives and multi-PI coordination",
          rates: "Beginner $30/hr | Intermediate $50/hr | Expert $75/hr",
          tools: ["Dimensions.ai", "Grantable", "Notion", "Otter.ai"]
        },
        {
          title: "Medical & Regulatory Writing",
          description: "Clinical study reports, CME content, regulatory submissions (eCTD, EMA)",
          rates: "Beginner $30/hr | Intermediate $60/hr | Expert $100/hr",
          tools: ["ClinOne", "Extedo", "EMA Templates", "ClinicalKey"]
        }
      ]
    },
    {
      category: "Technical Writing & Education",
      icon: BookOpen,
      color: "emerald",
      services: [
        {
          title: "Technical & Instructional Writing",
          description: "SOPs, manuals, whitepapers, user guides, e-Learning content",
          rates: "Beginner $25/hr | Intermediate $60/hr | Expert $100/hr",
          tools: ["MadCap Flare", "FrameMaker", "Camtasia", "MarkdownPad"]
        },
        {
          title: "Curriculum Development",
          description: "Syllabus design, lab manuals, LMS integration, educational resources",
          rates: "$30–120/hr",
          tools: ["Moodle", "Canva", "Google Docs", "PowerPoint"]
        }
      ]
    }
  ];

  const expertise = [
    "AI/ML in Drug Discovery",
    "Computational Chemistry",
    "Scientific Writing", 
    "Academic Publishing",
    "Grant Writing",
    "STEM Education",
    "Medical Writing",
    "Research Consulting"
  ];

  const getColorClasses = (color, darkMode) => {
    if (color === 'emerald') {
      return {
        bg: darkMode ? 'bg-emerald-600' : 'bg-emerald-100',
        text: darkMode ? 'text-white' : 'text-emerald-600',
        border: darkMode ? 'border-emerald-500' : 'border-emerald-300'
      };
    } else {
      return {
        bg: darkMode ? 'bg-slate-700' : 'bg-slate-100', 
        text: darkMode ? 'text-gray-300' : 'text-slate-600',
        border: darkMode ? 'border-slate-600' : 'border-slate-300'
      };
    }
  };

  return (
    <div className={`min-h-screen py-20 ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className={`text-5xl font-serif font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-slate-800'
          }`}>
            Freelancing & Services
          </h1>
          <p className={`text-xl max-w-3xl mx-auto mb-8 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Leveraging over a decade of academic and industry experience to deliver high-quality, 
            impactful work in STEM writing, research consulting, and scientific communication.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className={`text-2xl font-bold ${
                darkMode ? 'text-emerald-400' : 'text-emerald-600'
              }`}>$20-200</div>
              <div className={`text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>Hourly Rates</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${
                darkMode ? 'text-emerald-400' : 'text-emerald-600'
              }`}>25+</div>
              <div className={`text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>Tools & Platforms</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${
                darkMode ? 'text-emerald-400' : 'text-emerald-600'
              }`}>8+</div>
              <div className={`text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>Service Categories</div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="space-y-12">
          {services.map((category, categoryIndex) => {
            const Icon = category.icon;
            const colors = getColorClasses(category.color, darkMode);
            
            return (
              <section key={categoryIndex}>
                <div className="flex items-center mb-8">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${colors.bg}`}>
                    <Icon className={`h-6 w-6 ${colors.text}`} />
                  </div>
                  <h2 className={`text-3xl font-serif font-bold ${
                    darkMode ? 'text-white' : 'text-slate-800'
                  }`}>
                    {category.category}
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <Card key={serviceIndex} className={`p-6 h-full ${
                      darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
                    }`}>
                      <div className="flex flex-col h-full">
                        <h3 className={`text-lg font-semibold mb-3 ${
                          darkMode ? 'text-white' : 'text-slate-800'
                        }`}>
                          {service.title}
                        </h3>
                        
                        <p className={`text-sm mb-4 flex-grow ${
                          darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {service.description}
                        </p>

                        <div className="space-y-3">
                          <div className={`flex items-center text-sm ${
                            darkMode ? 'text-emerald-400' : 'text-emerald-600'
                          }`}>
                            <DollarSign className="h-4 w-4 mr-1" />
                            <span className="font-medium">{service.rates}</span>
                          </div>

                          <div>
                            <div className={`text-xs font-medium mb-2 ${
                              darkMode ? 'text-gray-400' : 'text-gray-500'
                            }`}>
                              Tools & Platforms:
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {service.tools.slice(0, 4).map((tool, toolIndex) => (
                                <Badge key={toolIndex} variant="outline" className={`text-xs ${
                                  darkMode ? 'border-gray-600 text-gray-400' : 'border-gray-300 text-gray-600'
                                }`}>
                                  {tool}
                                </Badge>
                              ))}
                              {service.tools.length > 4 && (
                                <Badge variant="outline" className={`text-xs ${
                                  darkMode ? 'border-gray-600 text-gray-400' : 'border-gray-300 text-gray-600'
                                }`}>
                                  +{service.tools.length - 4} more
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Expertise Section */}
        <section className="mt-20">
          <h2 className={`text-3xl font-serif font-bold mb-8 flex items-center ${
            darkMode ? 'text-white' : 'text-slate-800'
          }`}>
            <Brain className="mr-3 h-8 w-8" />
            Core Expertise
          </h2>
          <Card className={`p-6 ${
            darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
          }`}>
            <div className="flex flex-wrap gap-3">
              {expertise.map((skill, index) => (
                <Badge key={index} className={`text-sm py-2 px-4 ${
                  index % 2 === 0 
                    ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                    : darkMode ? 'bg-slate-700 text-gray-300' : 'bg-slate-100 text-slate-700'
                }`}>
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </section>

        {/* CTA Section */}
        <section className={`mt-20 p-8 rounded-2xl text-center ${
          darkMode ? 'bg-slate-800' : 'bg-white'
        }`}>
          <h2 className={`text-3xl font-serif font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-slate-800'
          }`}>
            Ready to Start Your Project?
          </h2>
          <p className={`text-lg mb-8 max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Whether you need scientific content creation, research consulting, or technical writing services, 
            I'm here to help bring your vision to life with precision and expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get a Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className={`px-8 border-2 ${
                darkMode ? 'border-slate-600 text-slate-300 hover:bg-slate-700' 
                         : 'border-slate-300 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Clock className="mr-2 h-4 w-4" />
              Schedule Consultation
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FreelancePage;