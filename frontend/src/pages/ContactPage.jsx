import React, { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Linkedin, 
  Github,
  MessageSquare,
  Calendar,
  DollarSign
} from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const ContactPage = ({ darkMode }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. I'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      projectType: '',
      budget: '',
      timeline: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "faraz91khan@gmail.com",
      action: "mailto:faraz91khan@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+353 899745166",
      action: "tel:+353899745166"
    },
    {
      icon: MapPin,
      label: "Location", 
      value: "Dublin, Ireland",
      action: null
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      action: null
    }
  ];

  const projectTypes = [
    "Scientific Writing & Editing",
    "CADD/Drug Design Consulting", 
    "Research Consulting",
    "Grant Writing",
    "Medical Writing",
    "Technical Writing",
    "Curriculum Development",
    "Other"
  ];

  const budgetRanges = [
    "Under $500",
    "$500 - $1,000",
    "$1,000 - $5,000", 
    "$5,000 - $10,000",
    "Over $10,000",
    "Discuss in consultation"
  ];

  return (
    <div className={`min-h-screen py-20 ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className={`text-5xl font-serif font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-slate-800'
          }`}>
            Let's Work Together
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Ready to start your next project? Get in touch to discuss how I can help bring 
            your research, writing, or consulting needs to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className={`p-8 ${
              darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
            }`}>
              <div className="flex items-center mb-6">
                <MessageSquare className={`mr-3 h-6 w-6 ${
                  darkMode ? 'text-emerald-400' : 'text-emerald-600'
                }`} />
                <h2 className={`text-2xl font-serif font-bold ${
                  darkMode ? 'text-white' : 'text-slate-800'
                }`}>
                  Project Inquiry Form
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className={`text-sm font-medium ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={`mt-1 ${
                        darkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-gray-300'
                      }`}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className={`text-sm font-medium ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={`mt-1 ${
                        darkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-gray-300'
                      }`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <Label htmlFor="subject" className={`text-sm font-medium ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className={`mt-1 ${
                      darkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-gray-300'
                    }`}
                    placeholder="Brief project title or inquiry subject"
                  />
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="projectType" className={`text-sm font-medium ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Project Type
                    </Label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className={`mt-1 w-full px-3 py-2 border rounded-md text-sm ${
                        darkMode ? 'bg-slate-700 border-slate-600 text-white' 
                                 : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="budget" className={`text-sm font-medium ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Budget Range
                    </Label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className={`mt-1 w-full px-3 py-2 border rounded-md text-sm ${
                        darkMode ? 'bg-slate-700 border-slate-600 text-white' 
                                 : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <Label htmlFor="timeline" className={`text-sm font-medium ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Project Timeline
                  </Label>
                  <Input
                    id="timeline"
                    name="timeline"
                    type="text"
                    value={formData.timeline}
                    onChange={handleChange}
                    className={`mt-1 ${
                      darkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-gray-300'
                    }`}
                    placeholder="e.g., 2-3 weeks, by end of month, flexible"
                  />
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message" className={`text-sm font-medium ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Project Description *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className={`mt-1 ${
                      darkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-gray-300'
                    }`}
                    placeholder="Please describe your project in detail, including specific requirements, deliverables, and any relevant background information..."
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className={`p-6 ${
              darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
            }`}>
              <h3 className={`text-lg font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-slate-800'
              }`}>
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <Icon className={`mr-3 h-5 w-5 flex-shrink-0 mt-0.5 ${
                        darkMode ? 'text-emerald-400' : 'text-emerald-600'
                      }`} />
                      <div>
                        <div className={`text-sm font-medium ${
                          darkMode ? 'text-white' : 'text-slate-800'
                        }`}>
                          {item.label}
                        </div>
                        {item.action ? (
                          <a 
                            href={item.action}
                            className={`text-sm hover:text-emerald-500 ${
                              darkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className={`text-sm ${
                            darkMode ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            {item.value}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Social Links */}
            <Card className={`p-6 ${
              darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
            }`}>
              <h3 className={`text-lg font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-slate-800'
              }`}>
                Connect Online
              </h3>
              <div className="flex space-x-3">
                <a 
                  href="mailto:faraz91khan@gmail.com"
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

            {/* Quick Actions */}
            <Card className={`p-6 ${
              darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
            }`}>
              <h3 className={`text-lg font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-slate-800'
              }`}>
                Quick Actions
              </h3>
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className={`w-full justify-start ${
                    darkMode ? 'border-slate-600 text-slate-300 hover:bg-slate-700' 
                             : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Consultation
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className={`w-full justify-start ${
                    darkMode ? 'border-slate-600 text-slate-300 hover:bg-slate-700' 
                             : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <DollarSign className="mr-2 h-4 w-4" />
                  Request Quote
                </Button>
              </div>
            </Card>

            {/* Response Time */}
            <Card className={`p-6 ${
              darkMode ? 'bg-emerald-900/20 border-emerald-700' : 'bg-emerald-50 border-emerald-200'
            }`}>
              <div className="text-center">
                <Clock className={`mx-auto h-8 w-8 mb-2 ${
                  darkMode ? 'text-emerald-400' : 'text-emerald-600'
                }`} />
                <h3 className={`font-semibold mb-2 ${
                  darkMode ? 'text-emerald-300' : 'text-emerald-800'
                }`}>
                  Quick Response
                </h3>
                <p className={`text-sm ${
                  darkMode ? 'text-emerald-200' : 'text-emerald-700'
                }`}>
                  I typically respond to all inquiries within 24 hours during business days.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;