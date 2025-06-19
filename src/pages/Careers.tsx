
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  Users,
  Award,
  TrendingUp,
  Heart,
  Shield,
  Globe,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Careers = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const jobs = [
    {
      title: "Senior Clinical Research Associate",
      location: "New York, NY",
      type: "Full-time",
      department: "Clinical Operations"
    },
    {
      title: "Regulatory Affairs Manager",
      location: "San Francisco, CA",
      type: "Full-time",
      department: "Regulatory Affairs"
    },
    {
      title: "Biostatistician",
      location: "Boston, MA",
      type: "Full-time",
      department: "Data & Analytics"
    },
    {
      title: "Clinical Data Manager",
      location: "Chicago, IL",
      type: "Full-time",
      department: "Data Management"
    },
    {
      title: "Project Manager",
      location: "Austin, TX",
      type: "Full-time",
      department: "Project Management"
    },
    {
      title: "Quality Assurance Specialist",
      location: "Remote",
      type: "Full-time",
      department: "Quality Assurance"
    }
  ];

  const employeeStories = [
    {
      name: "Sarah Johnson",
      role: "Senior Clinical Research Associate",
      quote: "Working at SrivkPharma has allowed me to contribute to groundbreaking research while developing my career in a supportive, innovative environment.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Regulatory Affairs Manager",
      quote: "The collaborative culture here is incredible. Every day brings new challenges and opportunities to make a real impact on patient lives.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Principal Biostatistician",
      quote: "SrivkPharma provides the perfect balance of cutting-edge research opportunities and work-life balance that allows me to thrive both professionally and personally.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % employeeStories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + employeeStories.length) % employeeStories.length);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Join Our Mission</h1>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Build a rewarding career at the forefront of clinical research innovation. Help us accelerate the development 
            of life-changing therapies while growing your expertise in a collaborative, cutting-edge environment.
          </p>
          <a 
            href="#open-roles" 
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 transform hover:scale-105"
          >
            View Open Positions <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose SrivkPharma?</h2>
            <p className="text-xl text-gray-600">Discover what makes our workplace exceptional</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-12 w-12 text-blue-600" />,
                title: "Collaborative Culture",
                description: "Work alongside world-class researchers and clinicians in an environment that values teamwork, innovation, and continuous learning. Our collaborative approach ensures every voice is heard and every contribution matters."
              },
              {
                icon: <TrendingUp className="h-12 w-12 text-blue-600" />,
                title: "Career Growth",
                description: "Accelerate your professional development with comprehensive training programs, mentorship opportunities, and clear career advancement paths. We invest in your success and provide the tools you need to reach your potential."
              },
              {
                icon: <Heart className="h-12 w-12 text-blue-600" />,
                title: "Meaningful Impact",
                description: "Make a real difference in patients' lives by contributing to breakthrough medical research. Every project you work on has the potential to bring life-changing therapies to those who need them most."
              }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section id="open-roles" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">Join our team of clinical research professionals</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                  <div className="text-gray-600 mb-1">{job.location}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-600 font-medium">{job.department}</span>
                    <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">{job.type}</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Employee Benefits</h2>
            <p className="text-xl text-gray-600">Comprehensive benefits package designed to support your success</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="h-10 w-10 text-blue-600" />,
                title: "Health & Wellness",
                description: "Comprehensive medical, dental, and vision coverage"
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-blue-600" />,
                title: "Retirement Planning",
                description: "401(k) with company matching and financial planning"
              },
              {
                icon: <Globe className="h-10 w-10 text-blue-600" />,
                title: "Flexible Work",
                description: "Remote work options and flexible scheduling"
              },
              {
                icon: <Award className="h-10 w-10 text-blue-600" />,
                title: "Professional Development",
                description: "Training programs and conference attendance support"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Timeline */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600">Our streamlined hiring process</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Submit Application",
                description: "Submit your resume and cover letter through our careers portal"
              },
              {
                step: "2", 
                title: "Initial Review",
                description: "Our hiring team reviews your application and qualifications"
              },
              {
                step: "3",
                title: "Interview Process",
                description: "Virtual or in-person interviews with hiring managers and team members"
              },
              {
                step: "4",
                title: "Offer & Onboarding",
                description: "Receive your offer and begin your journey with comprehensive onboarding"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Stories */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Employee Stories</h2>
            <p className="text-xl text-gray-600">Hear from our team members about their experience</p>
          </div>
          <div className="relative">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <img 
                    src={employeeStories[currentStory].image} 
                    alt={employeeStories[currentStory].name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"
                  />
                  <div className="font-semibold text-gray-900">{employeeStories[currentStory].name}</div>
                  <div className="text-blue-600 font-medium">{employeeStories[currentStory].role}</div>
                </div>
                <div className="md:col-span-2">
                  <blockquote className="text-xl italic text-gray-700 leading-relaxed">
                    "{employeeStories[currentStory].quote}"
                  </blockquote>
                </div>
              </div>
            </div>
            <button 
              onClick={prevStory}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button 
              onClick={nextStory}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action Footer */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our team of dedicated professionals and help advance the future of medical research.
          </p>
          <a 
            href="#open-roles"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 transform hover:scale-105"
          >
            Explore Opportunities <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Careers;
