'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle');
  const [errorDetails, setErrorDetails] = useState('');
  const [activeSlide, setActiveSlide] = useState(0);

  const changeSlide = (index) => {
    setActiveSlide(index);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all required fields.");
      return;
    }
    setFormStatus('submitting');

    try {
      // Get the form element
      const form = e.target;
      const formData = new FormData(form);
      
      // Use the Netlify Forms submission endpoint
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });
      
      if (response.ok) {
        setFormStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-blue-900 text-white py-1 px-2 sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/images/lovas-logo.png" alt="lovas energy services logo" width={106} height={106} className="mr-4" />
            <div className="hidden sm:block overflow-hidden">
              <h1 className="text-xl md:text-2xl font-bold relative">
                <span className="animate-reveal-text">Lovas Energy Services</span>
              </h1>
            </div>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-blue-200">About</a>
            <a href="#services" className="hover:text-blue-200">Services</a>
            <a href="#contact" className="hover:text-blue-200">Contact</a>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-blue-900 p-4">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="hover:text-blue-200" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#services" className="hover:text-blue-200" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#contact" className="hover:text-blue-200" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </header>
      <main>
        <section className="relative bg-blue-900 text-white py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-0"></div>
          <div className="absolute inset-0 bg-[url('/images/main-banner2.png')] bg-cover bg-center z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center mb-8">
              <div className="bg-gradient-to-r from-blue-900/80 via-blue-800/90 to-blue-900/80 backdrop-blur-sm p-8 rounded-lg max-w-3xl mx-auto text-center border-l-4 border-blue-400 animate-fade-in-up">
                <h2 className="text-5xl font-bold mb-6 text-white drop-shadow-md">Innovative Energy Solutions</h2>
                <p className="text-xl mb-8 text-white/90 animate-pulse-slow">Transforming the way we power the world</p>
                <a href="#contact" className="btn-primary">Get Started</a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-blue-900 mb-6">About Us</h3>
                <p className="text-gray-700 mb-6">
                  Lovas Energy Services specializes in burner management and combustion control for the oil and gas industry. 
                  With decades of experience, we provide powerful, reliable, and safe solutions that meet the highest industry standards.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-2">Experience</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Decades of industry experience</li>
                      <li>• Industry certified systems</li>
                      <li>• Established industry presence</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-2">Expertise</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Industry-specific knowledge</li>
                      <li>• Custom solutions</li>
                      <li>• Advanced technology</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-2">Reliability</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 24/7 support availability</li>
                      <li>• Quality assurance</li>
                      <li>• Long-term partnerships</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-2">Innovation</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Industry-leading solutions</li>
                      <li>• Continuous improvement</li>
                      <li>• Forward-thinking approaches</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gray-100 border border-gray-200">
                  <iframe 
                    src="https://player.vimeo.com/video/918951646?h=e65e25a932&color=0d6ef2&title=0&byline=0&portrait=0" 
                    className="absolute inset-0 w-full h-full" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowFullScreen
                    title="Lovas Energy Services"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <h3 className="text-3xl font-bold text-blue-900 mb-6">Our Services</h3>
                <p className="text-gray-700 max-w-xl">
                  Lovas Energy Services offers a comprehensive range of solutions for the oil and gas industry. 
                  Our expertise spans from equipment and components to specialized services and engineering.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="carousel relative overflow-hidden rounded-lg shadow-xl h-[250px]">
                  <div className="carousel-inner flex">
                    <div className={`absolute inset-0 w-full carousel-item ${activeSlide === 0 ? 'active' : ''}`}>
                      <Image 
                        src="/images/lovas-equipment-1.jpeg" 
                        alt="Lovas Energy Equipment" 
                        fill={true}
                        className="object-cover" 
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 to-transparent p-4">
                        <p className="text-white text-sm font-semibold">Advanced Equipment</p>
                      </div>
                    </div>
                    <div className={`absolute inset-0 w-full carousel-item ${activeSlide === 1 ? 'active' : ''}`}>
                      <Image 
                        src="/images/lovas-equipment-2.jpeg" 
                        alt="Lovas Energy Field Services" 
                        fill={true}
                        className="object-cover" 
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 to-transparent p-4">
                        <p className="text-white text-sm font-semibold">Field Services</p>
                      </div>
                    </div>
                  </div>
                  <button className="carousel-prev absolute top-1/2 left-2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-blue-900 p-1 rounded-full" onClick={() => changeSlide(+!activeSlide === 0)}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button className="carousel-next absolute top-1/2 right-2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-blue-900 p-1 rounded-full" onClick={() => changeSlide(+!(activeSlide === 1))}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <div className="carousel-indicators absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                    <button onClick={() => changeSlide(0)} className={`carousel-indicator w-2 h-2 rounded-full bg-white hover:opacity-100 ${activeSlide === 0 ? 'opacity-100' : 'opacity-50'}`}></button>
                    <button onClick={() => changeSlide(1)} className={`carousel-indicator w-2 h-2 rounded-full bg-white hover:opacity-100 ${activeSlide === 1 ? 'opacity-100' : 'opacity-50'}`}></button>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md service-card">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-2">Burner Management</h4>
                <p className="text-gray-600">Comprehensive burner management systems with intuitive controls for monitoring and safely managing your industrial heating equipment.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md service-card">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-2">Combustion Control</h4>
                <p className="text-gray-600">Advanced combustion control products and services designed for optimal performance, safety, and compliance in industrial applications.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md service-card">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-2">Field Services</h4>
                <p className="text-gray-600">Expert installation, maintenance, startup, and commissioning services for all your energy equipment needs across WTX, STX, and SENM regions.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h4 className="text-2xl font-bold text-blue-900 mb-6 text-center">Complete Service Offerings</h4>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h5 className="text-lg font-bold text-blue-900 mb-4 border-b pb-2">Equipment</h5>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="flex-shrink-0 h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <svg className="h-3 w-3 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                      <span className="text-gray-700">Burners</span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex-shrink-0 h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <svg className="h-3 w-3 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                      <span className="text-gray-700">Controllers</span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex-shrink-0 h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <svg className="h-3 w-3 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                      <span className="text-gray-700">Valves and Solenoids</span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex-shrink-0 h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <svg className="h-3 w-3 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                      <span className="text-gray-700">Fuel Trains</span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex-shrink-0 h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <svg className="h-3 w-3 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                      <span className="text-gray-700">New/Used Equipment</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h5 className="text-lg font-bold text-blue-900 mb-4 border-b pb-2">Components</h5>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="flex-shrink-0 h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <svg className="h-3 w-3 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                      <span className="text-gray-700">Pilots and Flare Pilots</span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex-shrink-0 h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <svg className="h-3 w-3 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                      <span className="text-gray-700">Flame Arrestors</span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex-shrink-0 h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <svg className="h-3 w-3 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                      <span className="text-gray-700">Power Distribution</span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex-shrink-0 h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <svg className="h-3 w-3 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                      <span className="text-gray-700">Instrumentation</span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex-shrink-0 h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <svg className="h-3 w-3 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                      <span className="text-gray-700">Installation Components</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h5 className="text-lg font-bold text-blue-900 mb-4 border-b pb-2">Professional Services</h5>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="flex-shrink-0 h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <svg className="h-3 w-3 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                      <span className="text-gray-700">Engineering and Design</span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex-shrink-0 h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <svg className="h-3 w-3 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                      <span className="text-gray-700">Consulting</span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex-shrink-0 h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <svg className="h-3 w-3 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                      <span className="text-gray-700">Monitoring and Safety</span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex-shrink-0 h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <svg className="h-3 w-3 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                      <span className="text-gray-700">Preventative Maintenance</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h5 className="text-lg font-bold text-blue-900 mb-4 border-b pb-2">Field Operations</h5>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="flex-shrink-0 h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <svg className="h-3 w-3 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                      <span className="text-gray-700">Installation</span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex-shrink-0 h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <svg className="h-3 w-3 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                      <span className="text-gray-700">Startup and Commissioning</span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex-shrink-0 h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <svg className="h-3 w-3 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                      <span className="text-gray-700">Field Services</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-blue-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full opacity-20 -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-800 rounded-full opacity-20 -ml-32 -mb-32"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h3 className="text-3xl font-bold text-white mb-2 text-center">What Our Clients Say</h3>
            <p className="text-center text-blue-200 mb-8 max-w-2xl mx-auto">Hear from industry leaders who've experienced the Lovas Energy difference</p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-md">
                <div className="mb-4">
                  <svg className="w-8 h-8 text-blue-200 mb-2" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-gray-700 italic mb-4 leading-relaxed text-sm">Lovas Energy Services transformed our operations with their burner management systems. Their expertise in the oil and gas industry is unmatched, and their responsive support has saved us countless hours of downtime.</p>
                </div>
                <div className="flex items-center border-t pt-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 font-bold text-sm mr-3">
                    JT
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">James Thompson</h4>
                    <p className="text-xs text-gray-600">Operations Manager</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md">
                <div className="mb-4">
                  <svg className="w-8 h-8 text-blue-200 mb-2" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-gray-700 italic mb-4 leading-relaxed text-sm">We've partnered with Lovas Energy for over five years, and their combustion control solutions have consistently delivered reliability and efficiency. Their field services team responds quickly and solves problems the first time.</p>
                </div>
                <div className="flex items-center border-t pt-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 font-bold text-sm mr-3">
                    SR
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Sarah Rodriguez</h4>
                    <p className="text-xs text-gray-600">Technical Director</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md">
                <div className="mb-4">
                  <svg className="w-8 h-8 text-blue-200 mb-2" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-gray-700 italic mb-4 leading-relaxed text-sm">As a safety-focused operation, we appreciate Lovas Energy's commitment to quality and industry standards. Their engineering team designed a custom solution for our SENM operations that improved safety and cut maintenance costs by 30%.</p>
                </div>
                <div className="flex items-center border-t pt-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 font-bold text-sm mr-3">
                    MR
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Michael Reyes</h4>
                    <p className="text-xs text-gray-600">CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-blue-900 mb-12 text-center">Connect With Us</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="bg-white shadow-lg rounded-lg p-8 border-t-4 border-blue-900">
                  <h4 className="text-2xl font-bold text-blue-900 mb-4">Contact Information</h4>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="mr-3 text-blue-900">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <a href="tel:7134494847" className="text-gray-700 hover:text-blue-900">713-449-4847</a>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-3 text-blue-900">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <a href="mailto:Sales@lovasenergy.com" className="text-gray-700 hover:text-blue-900">Sales@lovasenergy.com</a>
                    </div>
                  </div>
                  <div className="flex space-x-4 mt-6">
                    <a href="https://m.facebook.com/100093978468700/" className="bg-blue-900 bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition">
                      <svg className="w-5 h-5 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="https://linkedin.com/company/lovas-energy-services" className="bg-blue-900 bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition">
                      <svg className="w-5 h-5 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                  <hr className="my-6 border-gray-200" />
                  <h4 className="text-xl font-bold text-blue-900 mb-4">Service Areas</h4>
                  <p className="text-gray-700 mb-3">We proudly serve the following regions:</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-100 text-blue-900 mr-2">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                      <span className="text-gray-700">West Texas (WTX)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-100 text-blue-900 mr-2">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                      <span className="text-gray-700">South Texas (STX)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-100 text-blue-900 mr-2">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                      <span className="text-gray-700">Southeast New Mexico (SENM)</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="bg-white shadow-lg rounded-lg p-8 border-t-4 border-blue-900">
                  <h4 className="text-2xl font-bold text-blue-900 mb-4">Send a Message</h4>
                  <form 
                    name="contact" 
                    data-netlify="true" 
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <p className="hidden">
                      <label>
                        Don't fill this out if you're human: <input name="bot-field" />
                      </label>
                    </p>
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-1">Name*</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-1">Email*</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-gray-700 mb-1">Message*</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full bg-blue-900 hover:bg-blue-800 text-white py-2 px-4 rounded-md transition duration-300 disabled:opacity-50"
                    >
                      {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                    </button>
                    {formStatus === 'success' && (
                      <div className="p-3 bg-green-100 text-green-700 rounded-md">
                        Your message has been sent successfully!
                      </div>
                    )}
                    {formStatus === 'error' && (
                      <div className="p-3 bg-red-100 text-red-700 rounded-md">
                        There was an error sending your message. Please try again.
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-blue-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="md:flex md:justify-between">
              <div className="mb-8 md:mb-0">
                <div className="flex items-center">
                  <Image src="/images/lovas-logo.png" alt="Lovas Energy Services Logo" width={80} height={80} className="mr-4" />
                  <div>
                    <h3 className="text-xl font-bold">Lovas Energy Services</h3>
                    <p className="text-blue-200 text-sm">Innovative Energy Solutions</p>
                  </div>
                </div>
                <p className="mt-4 max-w-md text-blue-200 text-sm">
                  Providing specialized burner management and combustion control services for the oil and gas industry with a focus on quality, safety, and innovation.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2 text-blue-200">
                    <li><a href="#about" className="hover:text-white">About Us</a></li>
                    <li><a href="#services" className="hover:text-white">Services</a></li>
                    <li><a href="#contact" className="hover:text-white">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Services</h4>
                  <ul className="space-y-2 text-blue-200">
                    <li>Burner Management</li>
                    <li>Combustion Control</li>
                    <li>Field Services</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Connect</h4>
                  <div className="flex space-x-4">
                    <a href="https://m.facebook.com/100093978468700/" className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition">
                      <svg className="w-5 h-5 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="https://linkedin.com/company/lovas-energy-services" className="bg-blue-900 bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition">
                      <svg className="w-5 h-5 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-8 border-blue-800" />
            <div className="text-center text-blue-200 text-sm">
              <p>&copy; {new Date().getFullYear()} Lovas Energy Services. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
