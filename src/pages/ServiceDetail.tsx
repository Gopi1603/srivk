import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, BarChart, Users, TrendingUp, Sparkles, Shield } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const heroReveal = useScrollReveal();
  const descriptionReveal = useScrollReveal();
  const featuresReveal = useScrollReveal();
  const highlightsReveal = useScrollReveal();
  const ctaReveal = useScrollReveal();

  const serviceData: Record<string, any> = {
    'sas-r-programming': {
      title: 'SAS & R Programming',
      tagline: 'Advanced Statistical Programming for Clinical Research Excellence',
      description: [
        'Our SAS & R Programming services provide comprehensive statistical programming solutions tailored for the pharmaceutical and biotech industries. We leverage the power of both SAS and R to deliver robust, scalable, and compliant programming solutions that meet the highest regulatory standards.',
        'With extensive experience in clinical trial data analysis, our team of certified programmers ensures accurate and efficient processing of complex datasets. We specialize in creating reproducible analyses that support regulatory submissions and accelerate your path to market approval.',
        'From exploratory data analysis to sophisticated statistical modeling, our programming expertise covers the full spectrum of clinical research needs. We maintain strict adherence to industry best practices while delivering innovative solutions that drive meaningful insights from your clinical data.'
      ],
      features: [
        {
          icon: <BarChart className="h-8 w-8 text-blue-600 icon-float" />,
          title: 'Advanced Analytics',
          description: 'Sophisticated statistical modeling and analysis using cutting-edge SAS and R techniques with AI-enhanced capabilities.'
        },
        {
          icon: <CheckCircle className="h-8 w-8 text-blue-600 icon-pulse" />,
          title: 'Regulatory Compliance',
          description: 'All programming follows FDA, EMA, and ICH guidelines ensuring submission readiness and accelerated approval pathways.'
        },
        {
          icon: <TrendingUp className="h-8 w-8 text-blue-600 icon-float" />,
          title: 'Scalable Solutions',
          description: 'Flexible programming frameworks that adapt to studies of any size or complexity with cloud-native architecture.'
        }
      ],
      highlights: [
        'Compliance-focused programming approach with 21 CFR Part 11 validation',
        'Efficient and optimized code delivery with automated testing pipelines',
        'Scalable solutions for Phase I through Phase IV studies',
        'Expert validation and quality control with independent review processes',
        'Comprehensive documentation standards exceeding regulatory requirements'
      ]
    },
    'cro': {
      title: 'CRO Services',
      tagline: 'Complete Contract Research Organization Solutions',
      description: [
        'Our comprehensive CRO services provide end-to-end support for clinical trials across all phases of development. From protocol design and regulatory strategy to study execution and data management, we deliver integrated solutions that accelerate your clinical development timeline.',
        'With a global network of experienced clinical professionals, we offer flexible engagement models tailored to your specific needs. Whether you require full-service CRO support or specialized functional services, our team provides the expertise and infrastructure necessary for successful trial execution.',
        'We combine deep therapeutic expertise with operational excellence to deliver high-quality results on time and within budget. Our commitment to quality and regulatory compliance ensures that your studies meet the highest standards while advancing your development goals.'
      ],
      features: [
        {
          icon: <Users className="h-6 w-6 text-blue-600" />,
          title: 'Expert Team',
          description: 'Experienced clinical professionals with deep therapeutic area expertise.'
        },
        {
          icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
          title: 'Global Reach',
          description: 'Worldwide network enabling multi-regional trial execution and management.'
        },
        {
          icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
          title: 'Flexible Models',
          description: 'Customizable service offerings from full-service to functional partnerships.'
        }
      ],
      highlights: [
        'Full-service clinical trial management',
        'Regulatory expertise and guidance',
        'Global operational capabilities',
        'Quality-focused delivery approach',
        'Flexible engagement models'
      ]
    },
    'clinical-staffing': {
      title: 'Clinical Staffing',
      tagline: 'Expert Clinical Professionals for Your Research Needs',
      description: [
        'Our clinical staffing solutions provide access to top-tier clinical research professionals who bring specialized expertise to your projects. We understand that successful clinical trials depend on having the right people with the right skills at the right time.',
        'From clinical data managers and biostatisticians to regulatory affairs specialists and clinical monitors, our talent pool includes experienced professionals across all functional areas. We offer both contract and permanent placement services to meet your specific staffing requirements.',
        'Our rigorous vetting process ensures that all candidates possess the necessary qualifications, experience, and cultural fit for your organization. We provide ongoing support to ensure successful integration and project outcomes.'
      ],
      features: [
        {
          icon: <Users className="h-6 w-6 text-blue-600" />,
          title: 'Specialized Talent',
          description: 'Access to experienced clinical research professionals across all disciplines.'
        },
        {
          icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
          title: 'Rigorous Vetting',
          description: 'Comprehensive screening process ensuring qualified and suitable candidates.'
        },
        {
          icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
          title: 'Flexible Terms',
          description: 'Contract, permanent, and project-based staffing solutions available.'
        }
      ],
      highlights: [
        'Experienced clinical professionals',
        'Comprehensive skill assessment',
        'Flexible staffing arrangements',
        'Ongoing placement support',
        'Cultural fit evaluation'
      ]
    },
    'cdisc-services': {
      title: 'CDISC Services',
      tagline: 'Comprehensive CDISC Implementation and Compliance',
      description: [
        'Our CDISC services ensure full compliance with Clinical Data Interchange Standards Consortium requirements across all aspects of your clinical data management. We provide expert guidance and implementation support for SDTM, ADaM, and Define.xml standards.',
        'With deep expertise in CDISC implementation, our team helps organizations establish robust data standards that facilitate regulatory submissions and improve data quality. We work closely with your teams to develop customized solutions that align with your specific therapeutic areas and study designs.',
        'From initial planning and mapping through final validation and submission, we provide comprehensive support throughout the CDISC implementation lifecycle. Our approach ensures seamless integration with existing systems while maintaining the highest standards of data integrity and compliance.'
      ],
      features: [
        {
          icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
          title: 'Full Compliance',
          description: 'Complete CDISC standard implementation ensuring regulatory submission readiness.'
        },
        {
          icon: <BarChart className="h-6 w-6 text-blue-600" />,
          title: 'Expert Mapping',
          description: 'Precise data mapping and transformation following CDISC best practices.'
        },
        {
          icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
          title: 'Quality Assurance',
          description: 'Rigorous validation processes ensuring data accuracy and completeness.'
        }
      ],
      highlights: [
        'Complete CDISC standard compliance',
        'Expert implementation guidance',
        'Regulatory submission readiness',
        'Quality-focused approach',
        'Seamless system integration'
      ]
    },
    'sdtm-adam-programming': {
      title: 'SDTM & ADaM Programming',
      tagline: 'Expert Dataset Creation Following CDISC Standards',
      description: [
        'Our SDTM and ADaM programming services deliver high-quality, compliant datasets that meet all regulatory requirements for clinical trial submissions. We specialize in transforming raw clinical data into standardized formats that facilitate regulatory review and approval processes.',
        'With extensive experience in CDISC implementation, our programming team creates robust, well-documented datasets that adhere to FDA and international regulatory guidelines. We ensure data traceability, accuracy, and completeness throughout the transformation process.',
        'From complex therapeutic area datasets to standard safety and efficacy analyses, we provide comprehensive programming solutions that support your regulatory submission timeline. Our quality-focused approach includes thorough validation and documentation to ensure submission readiness.'
      ],
      features: [
        {
          icon: <BarChart className="h-6 w-6 text-blue-600" />,
          title: 'Expert Programming',
          description: 'Sophisticated SDTM and ADaM dataset creation using advanced programming techniques.'
        },
        {
          icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
          title: 'Regulatory Ready',
          description: 'Fully compliant datasets meeting FDA and international submission requirements.'
        },
        {
          icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
          title: 'Quality Focus',
          description: 'Comprehensive validation and quality control processes ensuring data integrity.'
        }
      ],
      highlights: [
        'CDISC-compliant dataset creation',
        'Regulatory submission readiness',
        'Comprehensive validation processes',
        'Expert programming expertise',
        'Complete documentation standards'
      ]
    },
    'biostatistics-services': {
      title: 'Biostatistics Services',
      tagline: 'Comprehensive Statistical Analysis for Clinical Research',
      description: [
        'Our biostatistics services provide comprehensive statistical support throughout the clinical development process. From study design and sample size calculations to final statistical analysis and reporting, we deliver expert statistical guidance that supports regulatory submissions and clinical decision-making.',
        'Our team of experienced biostatisticians brings deep expertise in clinical trial methodology, adaptive designs, and regulatory requirements. We work closely with clinical teams to develop appropriate statistical analysis plans and ensure robust, interpretable results that support your development objectives.',
        'With expertise across multiple therapeutic areas and study phases, we provide tailored statistical solutions that address the unique challenges of your clinical program. Our approach emphasizes scientific rigor while maintaining practical feasibility for successful study execution.'
      ],
      features: [
        {
          icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
          title: 'Expert Analysis',
          description: 'Sophisticated statistical analysis using advanced methodologies and techniques.'
        },
        {
          icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
          title: 'Study Design',
          description: 'Comprehensive study design support including power calculations and methodology.'
        },
        {
          icon: <BarChart className="h-6 w-6 text-blue-600" />,
          title: 'Regulatory Support',
          description: 'Statistical analysis plans and reports meeting regulatory submission standards.'
        }
      ],
      highlights: [
        'Comprehensive statistical expertise',
        'Study design optimization',
        'Regulatory compliance focus',
        'Advanced analytical methods',
        'Scientific rigor and quality'
      ]
    },
    'statistical-programming': {
      title: 'Statistical Programming',
      tagline: 'Custom Programming Solutions for Clinical Data Analysis',
      description: [
        'Our statistical programming services deliver custom solutions for clinical data analysis, reporting, and visualization. We combine programming expertise with statistical knowledge to create efficient, reliable, and maintainable code that supports your analytical needs.',
        'From automated reporting systems to complex analytical workflows, our programming team develops solutions that streamline your data analysis processes while ensuring accuracy and compliance. We specialize in creating reusable programming frameworks that adapt to multiple studies and therapeutic areas.',
        'Our approach emphasizes code quality, documentation, and validation to ensure that all programming deliverables meet the highest standards for regulatory submissions. We provide comprehensive testing and quality assurance to guarantee reliable and reproducible results.'
      ],
      features: [
        {
          icon: <BarChart className="h-6 w-6 text-blue-600" />,
          title: 'Custom Solutions',
          description: 'Tailored programming solutions designed for your specific analytical requirements.'
        },
        {
          icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
          title: 'Quality Code',
          description: 'Well-documented, validated programming following industry best practices.'
        },
        {
          icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
          title: 'Automation',
          description: 'Automated workflows and reporting systems improving efficiency and accuracy.'
        }
      ],
      highlights: [
        'Custom programming solutions',
        'Automated workflow development',
        'Quality-focused code delivery',
        'Comprehensive validation processes',
        'Reusable framework creation'
      ]
    },
    'pinnacle-21': {
      title: 'Pinnacle 21',
      tagline: 'Data Validation and Compliance Checking Excellence',
      description: [
        'Our Pinnacle 21 services provide comprehensive data validation and compliance checking to ensure your clinical datasets meet all regulatory requirements. We leverage both Pinnacle 21 Community and Enterprise solutions to deliver thorough validation and quality control processes.',
        'With extensive experience in regulatory submission requirements, our team provides expert guidance on data validation best practices and compliance standards. We help identify and resolve data issues early in the development process, reducing submission delays and regulatory queries.',
        'From routine validation checks to complex custom rule development, we provide comprehensive Pinnacle 21 services that ensure your data meets the highest quality standards. Our approach includes detailed documentation and remediation support to facilitate smooth regulatory submissions.'
      ],
      features: [
        {
          icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
          title: 'Comprehensive Validation',
          description: 'Thorough data validation using Pinnacle 21 Community and Enterprise tools.'
        },
        {
          icon: <BarChart className="h-6 w-6 text-blue-600" />,
          title: 'Custom Rules',
          description: 'Development of custom validation rules tailored to your specific requirements.'
        },
        {
          icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
          title: 'Quality Assurance',
          description: 'Expert quality control processes ensuring regulatory submission readiness.'
        }
      ],
      highlights: [
        'Expert Pinnacle 21 implementation',
        'Comprehensive validation processes',
        'Custom rule development',
        'Regulatory compliance focus',
        'Quality assurance excellence'
      ]
    },
    'define-xml': {
      title: 'Define.XML',
      tagline: 'Complete Metadata Documentation for Regulatory Submissions',
      description: [
        'Our Define.XML services provide comprehensive metadata documentation that meets all regulatory requirements for clinical trial submissions. We create detailed, accurate Define.XML files that facilitate regulatory review and demonstrate compliance with data standards.',
        'With deep expertise in CDISC metadata requirements, our team ensures that all Define.XML deliverables are complete, accurate, and submission-ready. We provide thorough documentation of dataset structures, variables, and controlled terminology to support regulatory understanding and approval.',
        'From initial planning through final validation, we provide end-to-end Define.XML services that integrate seamlessly with your data management processes. Our quality-focused approach ensures that all metadata documentation meets the highest standards for regulatory submissions.'
      ],
      features: [
        {
          icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
          title: 'Complete Documentation',
          description: 'Comprehensive Define.XML creation covering all dataset and metadata requirements.'
        },
        {
          icon: <BarChart className="h-6 w-6 text-blue-600" />,
          title: 'Regulatory Compliance',
          description: 'Full compliance with FDA and international Define.XML submission standards.'
        },
        {
          icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
          title: 'Quality Validation',
          description: 'Thorough validation processes ensuring accuracy and completeness of metadata.'
        }
      ],
      highlights: [
        'Complete metadata documentation',
        'Regulatory submission readiness',
        'CDISC compliance expertise',
        'Quality validation processes',
        'Integration with data standards'
      ]
    },
    'clinical-data-management': {
      title: 'Clinical Data Management',
      tagline: 'End-to-End Data Management Excellence',
      description: [
        'Our clinical data management services provide comprehensive support throughout the entire data lifecycle, from study start-up through database lock and archival. We deliver high-quality, compliant data management solutions that ensure data integrity and regulatory compliance.',
        'With extensive experience across therapeutic areas and study phases, our data management team provides expert guidance on database design, data collection strategies, and quality control processes. We leverage leading EDC platforms and data management technologies to optimize efficiency and accuracy.',
        'From protocol-specific database development to complex data integration and reporting, we provide tailored solutions that meet your specific requirements. Our quality-focused approach includes comprehensive validation, monitoring, and documentation to ensure submission-ready data deliverables.'
      ],
      features: [
        {
          icon: <BarChart className="h-6 w-6 text-blue-600" />,
          title: 'Database Design',
          description: 'Expert database design and development using leading EDC platforms and technologies.'
        },
        {
          icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
          title: 'Quality Control',
          description: 'Comprehensive quality control processes ensuring data accuracy and completeness.'
        },
        {
          icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
          title: 'Data Integration',
          description: 'Seamless integration of multiple data sources and complex dataset management.'
        }
      ],
      highlights: [
        'End-to-end data management',
        'Expert database development',
        'Comprehensive quality control',
        'Regulatory compliance focus',
        'Advanced technology platforms'
      ]
    },
    'project-management': {
      title: 'Project Management',
      tagline: 'Expert Project Leadership for Clinical Success',
      description: [
        'Our project management services provide dedicated leadership and coordination to ensure successful clinical trial execution. We combine deep clinical research expertise with proven project management methodologies to deliver projects on time, within scope, and on budget.',
        'With extensive experience managing complex clinical programs, our project managers provide strategic guidance, risk mitigation, and stakeholder coordination throughout the project lifecycle. We adapt our approach to meet the unique requirements of each study while maintaining consistent quality standards.',
        'From project initiation through closeout, we provide comprehensive project management support that includes timeline development, resource coordination, and performance monitoring. Our proactive approach identifies and addresses potential issues before they impact project success.'
      ],
      features: [
        {
          icon: <Users className="h-6 w-6 text-blue-600" />,
          title: 'Expert Leadership',
          description: 'Experienced project managers with deep clinical research and regulatory expertise.'
        },
        {
          icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
          title: 'Risk Management',
          description: 'Proactive risk identification and mitigation strategies ensuring project success.'
        },
        {
          icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
          title: 'Stakeholder Coordination',
          description: 'Effective communication and coordination across all project stakeholders.'
        }
      ],
      highlights: [
        'Expert project leadership',
        'Proactive risk management',
        'Stakeholder coordination excellence',
        'Timeline optimization',
        'Quality-focused delivery'
      ]
    }
  };

  const service = serviceData[serviceId || ''];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
        <div className="text-center premium-card p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-gradient">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
          <Link to="/services" className="shine-button inline-flex items-center">
            <ArrowRight className="mr-2 h-5 w-5" />
            Return to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }}></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div 
          ref={heroReveal.ref as React.RefObject<HTMLDivElement>}
          className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 ${
            heroReveal.isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'
          }`}
        >
          <div className="mb-8">
            <Shield className="h-16 w-16 text-white mx-auto mb-6 icon-pulse" />
          </div>
          <h1 className="text-6xl font-bold mb-8">{service.title}</h1>
          <p className="text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">{service.tagline}</p>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={descriptionReveal.ref as React.RefObject<HTMLDivElement>}
            className={`premium-card p-12 glow-blue ${
              descriptionReveal.isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'
            }`}
          >
            {service.description.map((paragraph: string, index: number) => (
              <p key={index} className={`text-lg text-gray-600 leading-relaxed mb-8 last:mb-0 ${
                descriptionReveal.isVisible ? `stagger-${index + 1}` : ''
              }`}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-24 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={featuresReveal.ref as React.RefObject<HTMLDivElement>}
            className={`text-center mb-16 ${
              featuresReveal.isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'
            }`}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6 text-gradient">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive capabilities designed to exceed your clinical research expectations
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {service.features.map((feature: any, index: number) => (
              <div 
                key={index} 
                className={`premium-card p-8 text-center group ${
                  featuresReveal.isVisible ? `scroll-reveal revealed stagger-${index + 1}` : 'scroll-reveal'
                }`}
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-blue-50 p-4 rounded-2xl group-hover:bg-blue-100 transition-colors">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose This Service */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={highlightsReveal.ref as React.RefObject<HTMLDivElement>}
            className={`premium-card p-12 ${
              highlightsReveal.isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'
            }`}
          >
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 text-gradient">
              Why Choose This Service
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.highlights.map((highlight: string, index: number) => (
                <div 
                  key={index} 
                  className={`flex items-start group ${
                    highlightsReveal.isVisible ? `stagger-${index + 1}` : ''
                  }`}
                >
                  <div className="bg-green-50 p-2 rounded-lg mr-4 group-hover:bg-green-100 transition-colors flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <span className="text-gray-700 leading-relaxed">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div 
            ref={ctaReveal.ref as React.RefObject<HTMLDivElement>}
            className={`${ctaReveal.isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}
          >
            <div className="premium-card bg-white/10 backdrop-blur-sm border-white/20 p-12">
              <div className="mb-8">
                <Sparkles className="h-16 w-16 text-white mx-auto mb-6 icon-float" />
              </div>
              <h2 className="text-5xl font-bold mb-8">Ready to Streamline Your Clinical Data Analysis?</h2>
              <p className="text-xl mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto">
                Transform your clinical research capabilities with our advanced {service.title.toLowerCase()} solutions. 
                Let's discuss how we can accelerate your path to breakthrough discoveries.
              </p>
              <Link 
                to="/contact" 
                className="shine-button bg-white text-blue-600 hover:bg-gray-50 text-xl px-12 py-6 inline-flex items-center group"
              >
                Contact Our Experts
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
