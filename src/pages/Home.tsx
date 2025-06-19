import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Award, 
  Clock, 
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Sparkles,
  Zap,
  Shield,
  Star,
  HelpCircle,
  Plus,
  Minus,
  Microscope,
  Globe,
  BarChart3,
  Stethoscope
} from 'lucide-react';
import { useScrollReveal, useCountUp } from '../hooks/useScrollReveal';
import TestimonialCard from '../components/TestimonialCard';
import AnimatedStatsCard from '../components/AnimatedStatsCard';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroReveal = useScrollReveal();
  const aboutReveal = useScrollReveal();
  const aboutGridReveal = useScrollReveal();
  const servicesReveal = useScrollReveal();
  const statsReveal = useScrollReveal();
  const testimonialsReveal = useScrollReveal();
  const faqReveal = useScrollReveal();

  // Count up animations for stats
  const count1 = useCountUp(500);
  const count2 = useCountUp(50);
  const count3 = useCountUp(25);
  const count4 = useCountUp(15);

  const testimonials = [
    {
      quote: "SrivkPharma's expertise in clinical research has been instrumental in advancing our drug development program. Their attention to detail and regulatory compliance is unmatched.",
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      company: "BioPharma Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
      rating: 5
    },
    {
      quote: "Their regulatory guidance and clinical trial management exceeded our expectations in every aspect. The team's professionalism and expertise made our project a success.",
      name: "Michael Chen",
      role: "Research Director",
      company: "MedTech Innovations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      rating: 5
    },
    {
      quote: "Working with SrivkPharma has accelerated our path to market with their comprehensive research solutions. Their data management capabilities are truly exceptional.",
      name: "Dr. Emily Rodriguez",
      role: "VP of Development",
      company: "Global Health Corp",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "What types of clinical trials do you conduct?",
      answer: "We conduct Phase I through Phase IV clinical trials across various therapeutic areas including oncology, cardiology, neurology, and rare diseases. Our expertise spans from first-in-human studies to post-market surveillance."
    },
    {
      question: "How long does a typical clinical trial take?",
      answer: "Timeline varies by phase and complexity, but Phase I trials typically take 6-9 months, Phase II takes 6-24 months, and Phase III can take 1-4 years. We work closely with sponsors to optimize timelines while maintaining quality."
    },
    {
      question: "What regulatory approvals do you handle?",
      answer: "We manage FDA, EMA, and other international regulatory submissions including IND, NDA, BLA, and MAA applications. Our regulatory team has extensive experience with global submissions."
    },
    {
      question: "Do you provide post-market surveillance services?",
      answer: "Yes, we offer comprehensive pharmacovigilance and post-market surveillance services to ensure ongoing safety monitoring and regulatory compliance throughout the product lifecycle."
    },
    {
      question: "What therapeutic areas do you specialize in?",
      answer: "We have expertise across multiple therapeutic areas including oncology, cardiovascular, central nervous system, infectious diseases, immunology, and rare diseases."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-blue-400/5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Side - Content */}
          <div 
            ref={heroReveal.ref as React.RefObject<HTMLDivElement>}
            className={`${heroReveal.isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}
          >
            <div className="mb-8">
              <Sparkles className="h-16 w-16 text-blue-600 mb-6 icon-float" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gradient leading-tight">
              Advancing Medical
              <br />
              <span className="relative">
                Research
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-600 leading-relaxed">
              Leading clinical research organization dedicated to accelerating breakthrough therapies and improving patient outcomes worldwide through innovative scientific excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to="/services" 
                className="shine-button group inline-flex items-center text-lg px-8 py-4"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="premium-card border-2 border-blue-200 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 inline-flex items-center justify-center text-lg"
              >
                <Zap className="mr-2 h-5 w-5" />
                Contact Our Team
              </Link>
            </div>
          </div>

          {/* Right Side - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="premium-card p-0 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop" 
                  alt="Clinical Research" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="premium-card p-0 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=150&fit=crop" 
                  alt="Data Analysis" 
                  className="w-full h-32 object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="premium-card p-0 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=300&h=150&fit=crop" 
                  alt="Laboratory" 
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="premium-card p-0 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=200&fit=crop" 
                  alt="Team Collaboration" 
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={aboutReveal.ref as React.RefObject<HTMLDivElement>}
            className={`grid lg:grid-cols-2 gap-16 items-center ${
              aboutReveal.isVisible ? 'scroll-reveal-left revealed' : 'scroll-reveal-left'
            }`}
          >
            <div className="order-2 lg:order-1">
              <div className="premium-card p-8 h-full">
                <h2 className="text-5xl font-bold text-gray-900 mb-8 text-gradient">
                  Leading Excellence in Clinical Research
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  With over two decades of experience in clinical research, SrivkPharma has established itself as a trusted partner for pharmaceutical companies worldwide. Our commitment to scientific excellence and regulatory compliance has enabled us to successfully manage over 500 clinical trials across diverse therapeutic areas.
                </p>
                <Link 
                  to="/about" 
                  className="shine-button inline-flex items-center group"
                >
                  Discover Our Story
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative premium-card p-8 glow-blue">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                  alt="Clinical Research Excellence" 
                  className="rounded-xl shadow-2xl w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Grid Section */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={aboutGridReveal.ref as React.RefObject<HTMLDivElement>}
            className={`${aboutGridReveal.isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}
          >
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6 text-gradient">Transforming Ideas into Digital Reality</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our expert team combines cutting-edge technology with deep clinical expertise to deliver innovative solutions that advance medical research and improve patient outcomes.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=300&fit=crop",
                "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=300&fit=crop",
                "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop",
                "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=300&h=300&fit=crop"
              ].map((image, index) => (
                <div key={index} className="premium-card p-0 overflow-hidden group">
                  <img 
                    src={image} 
                    alt={`Team ${index + 1}`} 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="premium-card p-8">
                <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
              <div className="premium-card p-8">
                <div className="text-4xl font-bold text-blue-600 mb-2">2000+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="premium-card p-8">
                <div className="text-4xl font-bold text-blue-600 mb-2">99%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>

            <div className="text-center mt-12 premium-card p-8">
              <blockquote className="text-2xl italic text-gray-600 mb-4">
                "Innovation is our passion, excellence is our standard, and patient outcomes are our ultimate goal."
              </blockquote>
              <div className="text-lg font-semibold text-blue-600">Jenny Alexander - CEO</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-24 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={servicesReveal.ref as React.RefObject<HTMLDivElement>}
            className={`text-center mb-16 ${
              servicesReveal.isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'
            }`}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6 text-gradient">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive clinical research solutions designed to accelerate your journey from discovery to market approval
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-12 w-12 text-blue-600 icon-float" />,
                title: "Clinical Trial Management",
                description: "End-to-end management of clinical trials from protocol development to study completion with expert oversight and quality assurance."
              },
              {
                icon: <Shield className="h-12 w-12 text-blue-600 icon-pulse" />,
                title: "Regulatory Affairs",
                description: "Expert navigation of regulatory requirements and submissions to ensure compliance with global standards and accelerated approvals."
              },
              {
                icon: <Award className="h-12 w-12 text-blue-600 icon-float" />,
                title: "Data Management",
                description: "Comprehensive data collection, validation, and analysis services with cutting-edge technology platforms and AI-driven insights."
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className={`premium-card p-8 text-center group glow-blue ${
                  servicesReveal.isVisible ? `scroll-reveal revealed stagger-${index + 1}` : 'scroll-reveal'
                }`}
              >
                <div className="mb-6 flex justify-center">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <Link 
                  to="/services"
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors inline-flex items-center group-hover:translate-x-1 transition-transform"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div 
            ref={statsReveal.ref as React.RefObject<HTMLDivElement>}
            className={`grid grid-cols-2 lg:grid-cols-4 gap-8 text-center ${
              statsReveal.isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'
            }`}
          >
            <div ref={count1.ref as React.RefObject<HTMLDivElement>}>
              <AnimatedStatsCard
                count={count1.count}
                label="Clinical Trials Completed"
                suffix="+"
                icon={Microscope}
                delay={100}
              />
            </div>
            <div ref={count2.ref as React.RefObject<HTMLDivElement>}>
              <AnimatedStatsCard
                count={count2.count}
                label="Pharmaceutical Partners"
                suffix="+"
                icon={Users}
                delay={200}
              />
            </div>
            <div ref={count3.ref as React.RefObject<HTMLDivElement>}>
              <AnimatedStatsCard
                count={count3.count}
                label="Years of Experience"
                suffix="+"
                icon={Award}
                delay={300}
              />
            </div>
            <div ref={count4.ref as React.RefObject<HTMLDivElement>}>
              <AnimatedStatsCard
                count={count4.count}
                label="Therapeutic Areas"
                suffix="+"
                icon={Stethoscope}
                delay={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={testimonialsReveal.ref as React.RefObject<HTMLDivElement>}
            className={`text-center mb-16 ${
              testimonialsReveal.isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'
            }`}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6 text-gradient">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Trusted by leading pharmaceutical companies worldwide</p>
          </div>
          
          <div className="relative">
            <TestimonialCard {...testimonials[currentTestimonial]} />
            
            {/* Navigation */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 premium-card p-4 hover:bg-blue-50 transition-colors group"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600 group-hover:text-blue-600" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16 premium-card p-4 hover:bg-blue-50 transition-colors group"
            >
              <ChevronRight className="h-6 w-6 text-gray-600 group-hover:text-blue-600" />
            </button>
          </div>
          
          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTestimonial === index ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={faqReveal.ref as React.RefObject<HTMLDivElement>}
            className={`text-center mb-16 ${
              faqReveal.isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'
            }`}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6 text-gradient">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions about our clinical research services</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Image */}
            <div className="relative">
              <div className="premium-card p-8 glow-blue h-full bg-gradient-to-br from-blue-50 to-white">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                  alt="Clinical Research Team" 
                  className="w-full h-80 object-cover rounded-2xl shadow-xl mb-6"
                />
                <div className="text-center">
                  <HelpCircle className="h-16 w-16 text-blue-600 mx-auto mb-4 icon-float" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Have Questions?</h3>
                  <p className="text-gray-600 mb-6">
                    Our team of experts is here to help answer your questions about clinical research and our services.
                  </p>
                  <Link 
                    to="/contact"
                    className="shine-button inline-flex items-center"
                  >
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Right Side - FAQ List */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`premium-card border border-blue-100 overflow-hidden ${
                    faqReveal.isVisible ? `scroll-reveal revealed stagger-${index + 1}` : 'scroll-reveal'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-blue-50/50 transition-colors"
                  >
                    <span className="font-semibold text-lg text-gray-900 pr-4">{faq.question}</span>
                    <div className="flex-shrink-0">
                      <ChevronDown className={`h-5 w-5 text-blue-600 transition-transform duration-300 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`} />
                    </div>
                  </button>
                  <div className={`transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}>
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Footer */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }}></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-5xl font-bold mb-8">Ready to Advance Your Research?</h2>
          <p className="text-xl mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto">
            Partner with SrivkPharma for world-class clinical research services that accelerate your path to market and improve patient outcomes worldwide.
          </p>
          <Link 
            to="/contact" 
            className="shine-button text-xl px-12 py-6 inline-flex items-center group"
          >
            <Sparkles className="mr-3 h-6 w-6" />
            Get Started Today
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
