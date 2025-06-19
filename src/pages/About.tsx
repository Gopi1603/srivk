
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Target, 
  Eye, 
  Heart,
  Users,
  Award,
  Globe,
  TrendingUp,
  Shield,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Lightbulb,
  Rocket,
  Star,
  Calendar,
  Building
} from 'lucide-react';

const About = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const milestones = [
    {
      year: "1999",
      title: "The Beginning",
      description: "Founded by visionary researchers with a dream to transform clinical research",
      icon: <Lightbulb className="h-8 w-8" />
    },
    {
      year: "2005",
      title: "First Breakthrough",
      description: "Successfully completed our first Phase III trial, establishing credibility in the industry",
      icon: <Target className="h-8 w-8" />
    },
    {
      year: "2012",
      title: "Global Expansion",
      description: "Opened international offices and began conducting multi-national clinical trials",
      icon: <Globe className="h-8 w-8" />
    },
    {
      year: "2018",
      title: "Digital Innovation",
      description: "Launched our proprietary clinical data management platform and AI-driven analytics",
      icon: <Rocket className="h-8 w-8" />
    },
    {
      year: "2024",
      title: "Industry Leadership",
      description: "Recognized as a top-tier CRO with 500+ successful trials and cutting-edge solutions",
      icon: <Award className="h-8 w-8" />
    }
  ];

  const testimonials = [
    {
      quote: "SrivkPharma's dedication to quality and innovation has made them our preferred partner for critical clinical trials.",
      name: "Dr. James Wilson",
      role: "VP Clinical Development",
      company: "GlobalPharma Inc.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Their regulatory expertise and attention to detail have been instrumental in our successful FDA submissions.",
      name: "Lisa Thompson",
      role: "Chief Regulatory Officer",
      company: "BioTech Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Working with SrivkPharma feels like having an extension of our own team - they truly understand our goals.",
      name: "Dr. Robert Chang",
      role: "Research Director",
      company: "Innovative Therapeutics",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-white">
      {/* Hero Section - Story Opening */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`
        }}></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <BookOpen className="h-12 w-12 text-blue-300 mr-4" />
                <span className="text-blue-300 text-lg font-semibold">Our Story</span>
              </div>
              <h1 className="text-6xl font-bold mb-8 leading-tight">
                A Journey of 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                  Scientific Excellence
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                From a small team of passionate researchers to a global leader in clinical research, 
                our story is one of unwavering dedication to advancing medical science and improving patient lives.
              </p>
            </div>
            <div className="relative">
              <div className="premium-card p-0 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                  alt="Clinical Research Excellence" 
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 1: The Beginning */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-lg">Chapter 1</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Where It All Began</h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="premium-card p-8 text-center group">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-600 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                In 1999, a group of experienced clinical researchers shared a common vision: to create a research 
                organization that would bridge the gap between scientific discovery and patient access to breakthrough treatments.
              </p>
            </div>

            <div className="premium-card p-8 text-center group">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-600 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Our mission was clear: accelerate the development of innovative therapies through world-class clinical 
                research services, ensuring the highest standards of quality, compliance, and patient safety.
              </p>
            </div>

            <div className="premium-card p-8 text-center group">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-600 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Eye className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Future</h3>
              <p className="text-gray-600 leading-relaxed">
                We envisioned a future where breakthrough therapies would reach patients faster through our collaborative 
                partnerships, innovative technology, and unwavering commitment to scientific excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: The Journey - Timeline */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-lg">Chapter 2</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Milestones of Excellence</h2>
            <p className="text-xl text-gray-600">Key moments that shaped our journey to becoming an industry leader</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-1 bg-blue-200"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}>
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Content Card */}
                <div className={`premium-card p-8 max-w-md ${
                  index % 2 === 0 ? 'mr-8 lg:mr-16' : 'ml-8 lg:ml-16'
                }`}>
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-xl mr-4">
                      <div className="text-blue-600">{milestone.icon}</div>
                    </div>
                    <span className="text-3xl font-bold text-blue-600">{milestone.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter 3: Our Impact - Stats */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-200 font-semibold text-lg">Chapter 3</span>
          <h2 className="text-4xl font-bold mb-6">Our Impact Today</h2>
          <p className="text-xl text-blue-100 mb-12">The numbers tell our story of growth and excellence</p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Clinical Trials", icon: <Award className="h-8 w-8" /> },
              { number: "50+", label: "Global Partners", icon: <Users className="h-8 w-8" /> },
              { number: "25+", label: "Years Experience", icon: <Calendar className="h-8 w-8" /> },
              { number: "15+", label: "Therapeutic Areas", icon: <Building className="h-8 w-8" /> }
            ].map((stat, index) => (
              <div key={index} className="premium-card bg-white/10 backdrop-blur-sm border-white/20 p-8 text-center">
                <div className="flex justify-center mb-4 text-blue-200">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter 4: Our Team Culture */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-lg">Chapter 4</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The People Behind the Science</h2>
            <p className="text-xl text-gray-600">Our diverse team of experts united by a common purpose</p>
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

          <div className="premium-card p-8 text-center bg-gradient-to-br from-blue-50 to-white">
            <blockquote className="text-2xl italic text-gray-600 mb-6">
              "At SrivkPharma, we don't just conduct clinical trials—we craft stories of hope, innovation, and scientific breakthrough. Every protocol we develop, every patient we serve, and every milestone we achieve is part of a larger narrative: advancing medicine for a healthier tomorrow."
            </blockquote>
            <div className="text-lg font-semibold text-blue-600">Jenny Alexander - CEO & Founder</div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-lg">Chapter 5</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Stories from Our Partners</h2>
            <p className="text-xl text-gray-600">Hear from our valued partners about their experience working with us</p>
          </div>
          <div className="relative">
            <div className="premium-card p-8 bg-gradient-to-br from-white to-blue-50">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg border-4 border-white"
                  />
                  <div className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</div>
                  <div className="text-blue-600 font-medium">{testimonials[currentTestimonial].role}</div>
                  <div className="text-gray-600 text-sm">{testimonials[currentTestimonial].company}</div>
                </div>
                <div className="md:col-span-2">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-2xl italic text-gray-700 leading-relaxed">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                </div>
              </div>
            </div>
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 premium-card p-3 hover:bg-blue-50 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 premium-card p-3 hover:bg-blue-50 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  currentTestimonial === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Write the Next Chapter Together?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the growing number of pharmaceutical companies that trust SrivkPharma with their most critical clinical research programs. Let's advance medicine together.
          </p>
          <Link 
            to="/contact" 
            className="shine-button text-xl px-12 py-6 inline-flex items-center group"
          >
            Start Your Partnership
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
