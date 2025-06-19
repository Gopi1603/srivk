
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  Users,
  FileText,
  BarChart,
  Shield,
  Globe,
  Clock,
  CheckCircle,
  Award,
  TrendingUp,
  Heart,
  Database,
  Sparkles,
  Zap
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Services = () => {
  const heroReveal = useScrollReveal();
  const servicesReveal = useScrollReveal();
  const bannerReveal = useScrollReveal();
  const ctaReveal = useScrollReveal();

  const services = [
    {
      id: 'sas-r-programming',
      icon: <BarChart className="h-8 w-8 text-blue-600 icon-float" />,
      title: "SAS & R Programming",
      description: "Advanced statistical programming and data analysis using industry-standard SAS and R platforms for clinical research excellence.",
    },
    {
      id: 'cro',
      icon: <Users className="h-8 w-8 text-blue-600 icon-pulse" />,
      title: "CRO Services",
      description: "Complete contract research organization services from study design through regulatory submission and beyond.",
    },
    {
      id: 'clinical-staffing',
      icon: <Heart className="h-8 w-8 text-blue-600 icon-float" />,
      title: "Clinical Staffing",
      description: "Expert clinical professionals and specialized staffing solutions for your research and development needs.",
    },
    {
      id: 'cdisc-services',
      icon: <Shield className="h-8 w-8 text-blue-600 icon-pulse" />,
      title: "CDISC Services",
      description: "Comprehensive CDISC implementation and compliance services ensuring regulatory standards across all studies.",
    },
    {
      id: 'sdtm-adam-programming',
      icon: <Database className="h-8 w-8 text-blue-600 icon-float" />,
      title: "SDTM & ADaM Programming",
      description: "Expert SDTM and ADaM dataset creation and programming following CDISC standards and FDA guidelines.",
    },
    {
      id: 'biostatistics-services',
      icon: <TrendingUp className="h-8 w-8 text-blue-600 icon-pulse" />,
      title: "Biostatistics Services",
      description: "Comprehensive biostatistical analysis, study design, and statistical consulting for clinical trials.",
    },
    {
      id: 'statistical-programming',
      icon: <FileText className="h-8 w-8 text-blue-600 icon-float" />,
      title: "Statistical Programming",
      description: "Custom statistical programming solutions for clinical data analysis and regulatory reporting.",
    },
    {
      id: 'pinnacle-21',
      icon: <CheckCircle className="h-8 w-8 text-blue-600 icon-pulse" />,
      title: "Pinnacle 21",
      description: "Data validation and compliance checking using Pinnacle 21 Community and Enterprise solutions.",
    },
    {
      id: 'define-xml',
      icon: <Globe className="h-8 w-8 text-blue-600 icon-float" />,
      title: "Define.XML",
      description: "Define.XML creation and validation services ensuring complete metadata documentation for submissions.",
    },
    {
      id: 'clinical-data-management',
      icon: <Award className="h-8 w-8 text-blue-600 icon-pulse" />,
      title: "Clinical Data Management",
      description: "End-to-end clinical data management from database design through data cleaning and quality control.",
    },
    {
      id: 'project-management',
      icon: <Clock className="h-8 w-8 text-blue-600 icon-float" />,
      title: "Project Management",
      description: "Dedicated project management services with timeline optimization and stakeholder communication.",
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600/10 via-transparent to-blue-400/5 relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div 
          ref={heroReveal.ref as React.RefObject<HTMLDivElement>}
          className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 ${
            heroReveal.isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'
          }`}
        >
          <div className="mb-8">
            <Sparkles className="h-16 w-16 text-blue-600 mx-auto mb-6 icon-float" />
          </div>
          <h1 className="text-6xl font-bold text-gradient mb-8">Our Services</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Comprehensive clinical research solutions designed to accelerate your path from discovery to market. 
            Our integrated approach combines scientific expertise with operational excellence to deliver results that transform lives.
          </p>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={servicesReveal.ref as React.RefObject<HTMLDivElement>}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`premium-card p-8 group h-full flex flex-col ${
                  servicesReveal.isVisible ? `scroll-reveal revealed stagger-${(index % 3) + 1}` : 'scroll-reveal'
                }`}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-blue-50 p-4 rounded-2xl mr-4 group-hover:bg-blue-100 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed flex-grow">{service.description}</p>
                <Link 
                  to={`/services/${service.id}`}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-all duration-300 group-hover:translate-x-1"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Compliance Banner */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div 
            ref={bannerReveal.ref as React.RefObject<HTMLDivElement>}
            className={`${bannerReveal.isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}
          >
            <div className="premium-card bg-white/10 backdrop-blur-sm border-white/20 p-12">
              <div className="flex justify-center mb-8">
                <Shield className="h-16 w-16 text-white icon-pulse" />
              </div>
              <blockquote className="text-3xl italic font-light mb-8 leading-relaxed">
                "Excellence in regulatory compliance is not just our standard—it's our commitment to advancing medical breakthroughs that improve lives worldwide."
              </blockquote>
              <div className="text-xl text-blue-100">
                — SrivkPharma Quality Assurance Team
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-gradient-to-b from-blue-50/30 to-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            ref={ctaReveal.ref as React.RefObject<HTMLDivElement>}
            className={`premium-card p-12 glow-blue ${
              ctaReveal.isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'
            }`}
          >
            <div className="mb-8">
              <Zap className="h-16 w-16 text-blue-600 mx-auto mb-6 icon-float" />
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-8 text-gradient">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how our comprehensive clinical research services can support your development goals and accelerate your timeline to market with precision and excellence.
            </p>
            <Link 
              to="/contact" 
              className="shine-button text-xl px-12 py-6 inline-flex items-center group"
            >
              <Sparkles className="mr-3 h-6 w-6" />
              Contact Our Expert Team
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
