
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Send } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Newsletter Section */}
      <div className="relative py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-blue-100 mb-8 text-lg">
              Stay up to date with the latest insights, updates, and expert tips on clinical research and pharmaceutical development.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <Send className="mr-2 h-5 w-5" />
                Subscribe
              </button>
            </form>
            <p className="text-sm text-blue-200 mt-4">
              By subscribing you agree to our Privacy Policy
            </p>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="relative py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center mb-6">
                <span className="text-2xl font-bold text-white">SrivkPharma</span>
              </Link>
              <p className="text-blue-200 mb-6 leading-relaxed">
                Make your clinical research journey more efficient with our comprehensive solutions and expert guidance.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors duration-300">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors duration-300">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors duration-300">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {[
                  { name: 'Clinical Trials', path: '/services/cro' },
                  { name: 'Data Management', path: '/services/clinical-data-management' },
                  { name: 'Biostatistics', path: '/services/biostatistics-services' },
                  { name: 'Regulatory Affairs', path: '/services/cdisc-services' },
                  { name: 'SAS Programming', path: '/services/sas-r-programming' }
                ].map((service) => (
                  <li key={service.name}>
                    <Link 
                      to={service.path}
                      className="text-blue-200 hover:text-white transition-colors duration-200"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-3">
                {[
                  { name: 'Contact Us', path: '/contact' },
                  { name: 'Careers', path: '/careers' },
                  { name: 'About Us', path: '/about' },
                  { name: 'Privacy Policy', path: '/privacy' },
                  { name: 'Terms of Service', path: '/terms' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.path}
                      className="text-blue-200 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span className="text-blue-200">123 Research Drive, Boston, MA 02115</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span className="text-blue-200">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span className="text-blue-200">info@srivkpharma.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-blue-200">
              © 2024 SrivkPharma. All rights reserved. | Advancing Medical Research Worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
