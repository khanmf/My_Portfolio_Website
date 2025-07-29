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
      title: "Scientific Editing",
      description: "Proofreading, compliance formatting, and ESL polishing for theses, manuscripts, and journal submissions.",
      tools: "Grammarly, Trinka, LaTeX",
      price: "From $30/hr",
      color: "#2C6E49"
    },
    {
      title: "STEM Test Prep Content",
      description: "Passage and question writing for MCAT, GAMSAT, NEET, IB with detailed explanations and distractor rationale.",
      tools: "ChatGPT, Claude, BioRender",
      price: "From $30/hr",
      color: "#2C6E49"
    },
    {
      title: "CADD Consulting",
      description: "Protein-ligand prep, molecular docking, AI/ML screening, and virtual screening pipeline development.",
      tools: "Schrödinger, RDKit, OpenEye, Python",
      price: "$40-150/hr",
      color: "#2C6E49"
    },
    {
      title: "Grant Writing",
      description: "Research funding proposals for NIH, Horizon, SFI with budget narratives and multi-PI coordination.",
      tools: "Dimensions.ai, Grantable, Notion",
      price: "From $30/hr",
      color: "#2C6E49"
    },
    {
      title: "Medical Writing",
      description: "Clinical study reports, CME content, regulatory submissions (eCTD, EMA), and disease explainers.",
      tools: "ClinOne, Extedo, EMA Templates",
      price: "From $30/hr",
      color: "#2C6E49"
    },
    {
      title: "Research Consulting",
      description: "Study design, data interpretation, publication planning, and pharma chemistry SME services.",
      tools: "PubMed, SPSS, Excel, R",
      price: "$25-175/hr",
      color: "#2C6E49"
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

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className={`py-20 ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
      </div>

      {/* Freelancing Section - Following Block 3 Specifications */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-3xl font-serif mb-6"
            style={{ color: '#2F3E46' }}
          >
            💼 Freelancing & Services
          </h2>
          <p 
            className="text-base mb-8"
            style={{ color: '#2F3E46' }}
          >
            I offer specialized services for biotech companies, researchers, educators, and startups. Every service listed below reflects years of domain expertise and precision.
          </p>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="rounded-2xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition"
              >
                <h3 
                  className="text-xl font-semibold mb-2"
                  style={{ color: '#2C6E49' }}
                >
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {service.description}
                </p>
                <p className="text-xs text-gray-500 italic mb-2">
                  Tools: {service.tools}
                </p>
                <p 
                  className="text-sm font-medium text-right mt-2"
                  style={{ color: '#6C757D' }}
                >
                  {service.price}
                </p>
              </div>
            ))}
          </div>

          {/* Portfolio Placeholder */}
          <div className="mt-16">
            <h3 
              className="text-2xl font-serif mb-4"
              style={{ color: '#2F3E46' }}
            >
              🧾 Portfolio Highlights (Coming Soon)
            </h3>
            <p className="text-sm text-gray-700">
              Soon you'll be able to explore featured case studies from MCAT prep, computational drug design, and scientific documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services by Category */}
      <section className={`py-16 ${darkMode ? 'bg-slate-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-serif font-bold mb-8 ${
            darkMode ? 'text-white' : 'text-slate-800'
          }`}>
            Service Categories in Detail
          </h2>
          
          <div className="space-y-12">
            {/* Scientific Writing & Editing */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 bg-emerald-100">
                  <PenTool className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className={`text-2xl font-serif font-bold ${
                  darkMode ? 'text-white' : 'text-slate-800'
                }`}>
                  Scientific Writing & Editing
                </h3>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className={`p-6 ${
                  darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-200'
                }`}>
                  <h4 className={`font-semibold mb-3 ${
                    darkMode ? 'text-white' : 'text-slate-800'
                  }`}>
                    STEM Test Prep Content Development
                  </h4>
                  <p className={`text-sm mb-4 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Passage and question writing for MCAT, GAMSAT, NEET, IB with detailed explanations
                  </p>
                  <div className={`text-sm font-medium text-emerald-600 mb-2`}>
                    Beginner $30/hr | Expert $150/hr
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {['ChatGPT', 'Claude', 'BioRender', 'QGen'].map((tool, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </Card>

                <Card className={`p-6 ${
                  darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-200'
                }`}>
                  <h4 className={`font-semibold mb-3 ${
                    darkMode ? 'text-white' : 'text-slate-800'
                  }`}>
                    Academic Publishing Support
                  </h4>
                  <p className={`text-sm mb-4 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Journal manuscript formatting, submission systems, cover letters
                  </p>
                  <div className={`text-sm font-medium text-emerald-600 mb-2`}>
                    Beginner $30/hr | Expert $90/hr
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {['EndNote', 'Zotero', 'LaTeX', 'Grammarly'].map((tool, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </Card>

                <Card className={`p-6 ${
                  darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-200'
                }`}>
                  <h4 className={`font-semibold mb-3 ${
                    darkMode ? 'text-white' : 'text-slate-800'
                  }`}>
                    Academic Editing (STEM Focus)
                  </h4>
                  <p className={`text-sm mb-4 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Theses, grants, CVs, research documents with ESL polishing
                  </p>
                  <div className={`text-sm font-medium text-emerald-600 mb-2`}>
                    Beginner $20/hr | Expert $70/hr
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {['PerfectIt', 'Trinka', 'TeXstudio', 'Edifix'].map((tool, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            </div>

            {/* Research Consulting */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 bg-slate-100">
                  <Microscope className="h-6 w-6 text-slate-600" />
                </div>
                <h3 className={`text-2xl font-serif font-bold ${
                  darkMode ? 'text-white' : 'text-slate-800'
                }`}>
                  Research Consulting
                </h3>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className={`p-6 ${
                  darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-200'
                }`}>
                  <h4 className={`font-semibold mb-3 ${
                    darkMode ? 'text-white' : 'text-slate-800'
                  }`}>
                    CADD / Drug Design Consultant
                  </h4>
                  <p className={`text-sm mb-4 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Protein-ligand preparation, molecular docking, AI/ML virtual screening
                  </p>
                  <div className={`text-sm font-medium text-emerald-600 mb-2`}>
                    $40–150/hr
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {['Schrödinger', 'RDKit', 'OpenEye', 'Python'].map((tool, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </Card>

                <Card className={`p-6 ${
                  darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-200'
                }`}>
                  <h4 className={`font-semibold mb-3 ${
                    darkMode ? 'text-white' : 'text-slate-800'
                  }`}>
                    Research Study Design
                  </h4>
                  <p className={`text-sm mb-4 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Data interpretation, statistical analysis, publication planning
                  </p>
                  <div className={`text-sm font-medium text-emerald-600 mb-2`}>
                    $40–150/hr
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {['PubMed', 'SPSS', 'Excel', 'R'].map((tool, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </Card>

                <Card className={`p-6 ${
                  darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-200'
                }`}>
                  <h4 className={`font-semibold mb-3 ${
                    darkMode ? 'text-white' : 'text-slate-800'
                  }`}>
                    Pharma Chemistry SME
                  </h4>
                  <p className={`text-sm mb-4 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Literature review, formulation consulting, regulatory guidance
                  </p>
                  <div className={`text-sm font-medium text-emerald-600 mb-2`}>
                    $25–100/hr
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {['PubChem', 'Patents DB', 'ChEMBL'].map((tool, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
        </div>
      </section>
    </div>
  );
};

export default FreelancePage;