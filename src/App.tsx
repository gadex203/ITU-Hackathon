import React, { useState } from 'react';
import { Sun, Wind, Droplets, Battery, Menu, ChevronDown, X, Users, Briefcase, BookOpen, GraduationCap, MessageCircle, FileText, HelpCircle, Building } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      {/* App Bar */}
      <header className="bg-green-700 text-white shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Sun className="text-yellow-300" size={28} />
              <h1 className="text-2xl font-bold">EcoSustain</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <div className="relative group">
                <button 
                  className="flex items-center space-x-1 py-2"
                  onClick={() => toggleDropdown('about')}
                >
                  <span>About Us</span>
                  <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'about' && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-green-100">Overview</a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-green-100">Frequently Asked Questions</a>
                  </div>
                )}
              </div>
              
              <div className="relative group">
                <button 
                  className="flex items-center space-x-1 py-2"
                  onClick={() => toggleDropdown('career')}
                >
                  <span>Career Opportunities</span>
                  <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'career' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'career' && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-green-100">Internships</a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-green-100">Job Postings</a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-green-100">Requirements</a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-green-100">Suitable Professionals</a>
                  </div>
                )}
              </div>
              
              <div className="relative group">
                <button 
                  className="flex items-center space-x-1 py-2"
                  onClick={() => toggleDropdown('community')}
                >
                  <span>Community</span>
                  <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'community' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'community' && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-green-100">Career Guide</a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-green-100">Ask the Community</a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-green-100">Questions</a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-green-100">Blog</a>
                  </div>
                )}
              </div>
              
              <div className="relative group">
                <button 
                  className="flex items-center space-x-1 py-2"
                  onClick={() => toggleDropdown('education')}
                >
                  <span>Education</span>
                  <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'education' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'education' && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-green-100">Case Studies</a>
                  </div>
                )}
              </div>
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-green-800 py-2">
            <div className="container mx-auto px-4">
              <div className="space-y-2">
                <div>
                  <button 
                    className="flex items-center justify-between w-full py-2 text-white"
                    onClick={() => toggleDropdown('about')}
                  >
                    <span>About Us</span>
                    <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === 'about' && (
                    <div className="pl-4 space-y-1 mt-1">
                      <a href="#" className="block py-1 text-green-100 hover:text-white">Overview</a>
                      <a href="#" className="block py-1 text-green-100 hover:text-white">Frequently Asked Questions</a>
                    </div>
                  )}
                </div>
                
                <div>
                  <button 
                    className="flex items-center justify-between w-full py-2 text-white"
                    onClick={() => toggleDropdown('career')}
                  >
                    <span>Career Opportunities</span>
                    <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'career' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === 'career' && (
                    <div className="pl-4 space-y-1 mt-1">
                      <a href="#" className="block py-1 text-green-100 hover:text-white">Internships</a>
                      <a href="#" className="block py-1 text-green-100 hover:text-white">Job Postings</a>
                      <a href="#" className="block py-1 text-green-100 hover:text-white">Requirements</a>
                      <a href="#" className="block py-1 text-green-100 hover:text-white">Suitable Professionals</a>
                    </div>
                  )}
                </div>
                
                <div>
                  <button 
                    className="flex items-center justify-between w-full py-2 text-white"
                    onClick={() => toggleDropdown('community')}
                  >
                    <span>Community</span>
                    <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'community' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === 'community' && (
                    <div className="pl-4 space-y-1 mt-1">
                      <a href="#" className="block py-1 text-green-100 hover:text-white">Career Guide</a>
                      <a href="#" className="block py-1 text-green-100 hover:text-white">Ask the Community</a>
                      <a href="#" className="block py-1 text-green-100 hover:text-white">Questions</a>
                      <a href="#" className="block py-1 text-green-100 hover:text-white">Blog</a>
                    </div>
                  )}
                </div>
                
                <div>
                  <button 
                    className="flex items-center justify-between w-full py-2 text-white"
                    onClick={() => toggleDropdown('education')}
                  >
                    <span>Education</span>
                    <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'education' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === 'education' && (
                    <div className="pl-4 space-y-1 mt-1">
                      <a href="#" className="block py-1 text-green-100 hover:text-white">Case Studies</a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Powering a Sustainable Future</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Join the renewable energy revolution and help create a cleaner, greener world for generations to come.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-green-700 hover:bg-green-100 px-6 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-green-700 px-6 py-3 rounded-lg font-semibold transition-colors">
              Get Involved
            </button>
          </div>
        </div>
      </section>

      {/* Energy Types Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Renewable Energy Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-green-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Sun className="text-yellow-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-800">Solar Energy</h3>
              <p className="text-gray-600">
                Harness the power of the sun with photovoltaic systems and solar thermal technologies.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Wind className="text-blue-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-800">Wind Energy</h3>
              <p className="text-gray-600">
                Generate clean electricity from wind turbines both onshore and offshore.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-cyan-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Droplets className="text-cyan-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-800">Hydroelectric</h3>
              <p className="text-gray-600">
                Convert the energy of flowing water into electricity through various hydro technologies.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Battery className="text-purple-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-800">Energy Storage</h3>
              <p className="text-gray-600">
                Store renewable energy for use when needed with advanced battery technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-green-800">About Our Mission</h2>
              <p className="text-gray-700 mb-4">
                At EcoSustain, we're dedicated to accelerating the transition to renewable energy through education, community engagement, and career development.
              </p>
              <p className="text-gray-700 mb-6">
                Our platform connects professionals, students, and enthusiasts with the resources they need to contribute to a sustainable future.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="bg-green-200 p-2 rounded-full mr-3">
                    <Users size={20} className="text-green-700" />
                  </div>
                  <span className="text-gray-800">Community-driven</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-200 p-2 rounded-full mr-3">
                    <Briefcase size={20} className="text-green-700" />
                  </div>
                  <span className="text-gray-800">Career-focused</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-200 p-2 rounded-full mr-3">
                    <BookOpen size={20} className="text-green-700" />
                  </div>
                  <span className="text-gray-800">Educational</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Renewable energy landscape" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Career Opportunities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-green-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                alt="Solar installation" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-green-800">Solar Energy Careers</h3>
                <p className="text-gray-600 mb-4">
                  Explore opportunities in solar panel installation, system design, sales, and project management.
                </p>
                <a href="#" className="text-green-600 hover:text-green-800 font-medium">View Opportunities →</a>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1548337138-e87d889cc369?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                alt="Wind turbines" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-green-800">Wind Energy Careers</h3>
                <p className="text-gray-600 mb-4">
                  Discover roles in wind turbine maintenance, engineering, site assessment, and operations.
                </p>
                <a href="#" className="text-green-600 hover:text-green-800 font-medium">View Opportunities →</a>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                alt="Energy policy" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-green-800">Policy & Research</h3>
                <p className="text-gray-600 mb-4">
                  Find positions in renewable energy policy development, research, and advocacy.
                </p>
                <a href="#" className="text-green-600 hover:text-green-800 font-medium">View Opportunities →</a>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Browse All Career Opportunities
            </button>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Join Our Community</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <MessageCircle className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-green-800">Ask the Community</h3>
                  <p className="text-gray-600">
                    Connect with professionals and experts in the renewable energy field to get answers to your questions.
                  </p>
                </div>
              </div>
              <a href="#" className="text-green-600 hover:text-green-800 font-medium">Join the Discussion →</a>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FileText className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-green-800">Career Guides</h3>
                  <p className="text-gray-600">
                    Access comprehensive guides on how to start and advance your career in renewable energy.
                  </p>
                </div>
              </div>
              <a href="#" className="text-green-600 hover:text-green-800 font-medium">Browse Guides →</a>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <HelpCircle className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-green-800">Questions & Answers</h3>
                  <p className="text-gray-600">
                    Browse through frequently asked questions or post your own to get expert insights.
                  </p>
                </div>
              </div>
              <a href="#" className="text-green-600 hover:text-green-800 font-medium">Explore Q&A →</a>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <BookOpen className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-green-800">Blog</h3>
                  <p className="text-gray-600">
                    Read articles, news, and insights about the latest developments in renewable energy.
                  </p>
                </div>
              </div>
              <a href="#" className="text-green-600 hover:text-green-800 font-medium">Read Articles →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Educational Resources</h2>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Educational resources" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4 text-green-800">Case Studies</h3>
              <p className="text-gray-700 mb-6">
                Explore real-world examples of successful renewable energy projects and learn from their implementation strategies, challenges, and outcomes.
              </p>
              
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800">Community Solar Farm Initiative</h4>
                  <p className="text-gray-600">Learn how a rural community established a shared solar farm that provides clean energy to over 500 homes.</p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800">Corporate Renewable Transition</h4>
                  <p className="text-gray-600">Discover how a major corporation achieved 100% renewable energy use across all its facilities.</p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800">Island Microgrid Project</h4>
                  <p className="text-gray-600">Explore how an island community built a resilient microgrid using multiple renewable sources.</p>
                </div>
              </div>
              
              <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                View All Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news, job opportunities, and educational resources in renewable energy.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              <button className="bg-green-800 hover:bg-green-900 px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-sm mt-3 text-green-100">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sun className="text-yellow-300" size={24} />
                <h3 className="text-xl font-bold">EcoSustain</h3>
              </div>
              <p className="text-green-200 mb-4">
                Empowering the transition to a sustainable future through renewable energy education and community.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-green-200 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-green-200 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-green-200 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-green-200 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-green-200 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-green-200 hover:text-white">Career Opportunities</a></li>
                <li><a href="#" className="text-green-200 hover:text-white">Community</a></li>
                <li><a href="#" className="text-green-200 hover:text-white">Education</a></li>
                <li><a href="#" className="text-green-200 hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-green-200 hover:text-white">Case Studies</a></li>
                <li><a href="#" className="text-green-200 hover:text-white">Blog Articles</a></li>
                <li><a href="#" className="text-green-200 hover:text-white">Career Guides</a></li>
                <li><a href="#" className="text-green-200 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-green-200 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <address className="not-italic text-green-200">
                <p className="mb-2">123 Green Energy Way</p>
                <p className="mb-2">Sustainable City, EC 12345</p>
                <p className="mb-2">United States</p>
              </address>
              <p className="text-green-200 mt-4">
                <a href="mailto:info@ecosustain.com" className="hover:text-white">info@ecosustain.com</a>
              </p>
              <p className="text-green-200">
                <a href="tel:+11234567890" className="hover:text-white">+1 (123) 456-7890</a>
              </p>
            </div>
          </div>
          
          <div className="border-t border-green-700 mt-12 pt-8 text-center text-green-200">
            <p>&copy; 2025 EcoSustain. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;