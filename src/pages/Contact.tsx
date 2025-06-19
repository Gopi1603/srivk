
import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  Facebook,
  Twitter,
  Linkedin,
  MessageSquare,
  Calendar,
  Users
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: ''
    });
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`
        }}></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="flex justify-center mb-6">
            <MessageSquare className="h-16 w-16 text-blue-300" />
          </div>
          <h1 className="text-6xl font-bold mb-6">Let's Connect</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your clinical research needs? Our team of experts is here to help you 
            navigate your next breakthrough. Get in touch to learn how we can support your goals.
          </p>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 -mt-16 relative z-10">
            <div className="premium-card p-8 text-center group glow-blue">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-600 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our experts</p>
              <a href="tel:+15551234567" className="text-blue-600 font-semibold hover:text-blue-700">
                +1 (555) 123-4567
              </a>
            </div>

            <div className="premium-card p-8 text-center group glow-blue">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-600 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email Us</h3>
              <p className="text-gray-600 mb-4">Get detailed responses</p>
              <a href="mailto:info@srivkpharma.com" className="text-blue-600 font-semibold hover:text-blue-700">
                info@srivkpharma.com
              </a>
            </div>

            <div className="premium-card p-8 text-center group glow-blue">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-600 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Schedule Meeting</h3>
              <p className="text-gray-600 mb-4">Book a consultation</p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="premium-card p-8 glow-blue">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="fullName"
                    className="floating-label peer-focus:active peer-[&:not(:placeholder-shown)]:active"
                  >
                    Full Name *
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className="floating-label peer-focus:active peer-[&:not(:placeholder-shown)]:active"
                  >
                    Email Address *
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="phone"
                    className="floating-label peer-focus:active peer-[&:not(:placeholder-shown)]:active"
                  >
                    Phone Number
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-vertical peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="message"
                    className="floating-label peer-focus:active peer-[&:not(:placeholder-shown)]:active"
                  >
                    Message *
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full shine-button py-4 px-6 text-lg font-semibold flex items-center justify-center"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map and Contact Info */}
            <div className="space-y-8">
              {/* Embedded Map */}
              <div className="premium-card p-0 overflow-hidden glow-blue">
                <div className="h-80 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0x6accd3ed92d18e0!2sBangalore%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus"
                    width="100%"
                    height="320"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                  ></iframe>
                </div>
              </div>

              {/* Contact Information */}
              <div className="premium-card p-8 glow-blue">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Office</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">India Office</h4>
                      <p className="text-gray-600">
                        SrivkPharma Research Center<br />
                        Electronic City, Bengaluru<br />
                        Karnataka 560100, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                      <div className="text-gray-600 space-y-1">
                        <div>Mon - Fri: 9:00 AM - 6:00 PM IST</div>
                        <div>Sat: 9:00 AM - 2:00 PM IST</div>
                        <div>Sun: Closed</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Connect With Us</h4>
                      <div className="flex space-x-3 mt-3">
                        {[
                          { icon: <Linkedin className="h-5 w-5" />, href: "#" },
                          { icon: <Twitter className="h-5 w-5" />, href: "#" },
                          { icon: <Facebook className="h-5 w-5" />, href: "#" }
                        ].map((social, index) => (
                          <a
                            key={index}
                            href={social.href}
                            className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
                          >
                            {social.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Emergency Contact</h2>
          <p className="text-xl text-red-100 mb-6">
            For urgent clinical trial matters outside business hours
          </p>
          <a 
            href="tel:+15551234567"
            className="inline-flex items-center bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-red-50 transition-all duration-200 transform hover:scale-105"
          >
            <Phone className="mr-2" size={20} />
            +1 (555) 123-URGENT
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Start the Conversation</h2>
          <p className="text-xl mb-8 opacity-90">
            Every breakthrough begins with a conversation. Contact us today to discover how SrivkPharma 
            can accelerate your clinical research goals.
          </p>
          <a 
            href="mailto:info@srivkpharma.com"
            className="shine-button text-xl px-12 py-6 inline-flex items-center group"
          >
            <Mail className="mr-3 h-6 w-6" />
            Email Us Directly
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
