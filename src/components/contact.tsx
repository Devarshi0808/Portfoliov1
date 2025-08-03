'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Mail, Linkedin, Github, Globe, Phone } from 'lucide-react';

export function Contact() {
  // Contact information
  const contactInfo = {
    name: 'Devarshi Portfolio',
    email: 'devarshiw8@gmail.com',
    phone: '+1(608)217-8581',
    socials: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/devarshi8/',
        icon: <Linkedin className="h-5 w-5" />,
        bgColor: '#EDF4FF',
        textColor: '#0A66C2',
      },
      {
        name: 'Github',
        url: 'https://github.com/Devarshi0808',
        icon: <Github className="h-5 w-5" />,
        bgColor: '#F5F5F5',
        textColor: '#333333',
      },
      {
        name: 'Portfolio',
        url: 'https://dwadadkar.me/',
        icon: <Globe className="h-5 w-5" />,
        bgColor: '#E8F5E9',
        textColor: '#1B5E20',
      },
    ],
  };

  // Function to handle opening links
  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div 
      className="mx-auto mt-8 w-full max-w-4xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full overflow-hidden rounded-3xl px-6 py-8 font-sans sm:px-10 md:px-16 md:py-12 border border-gray-200/50 shadow-sm" style={{ backgroundColor: '#F9FAFB' }}>
        {/* Header Section */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-3xl font-bold md:text-4xl" style={{ color: '#111827' }}>
            Let's Connect!
          </h2>
        </div>

        {/* Main Section */}
        <div className="rounded-2xl p-6 mb-6" style={{ backgroundColor: '#E6F0FF' }}>
          {/* Email Section */}
          <div className="mb-6">
            <div
              className="group cursor-pointer rounded-xl p-4 transition-all duration-300 shadow-sm hover:shadow-md"
              onClick={() => openLink(`mailto:${contactInfo.email}`)}
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6" style={{ color: '#1E3A8A' }} />
                <span className="text-lg font-semibold hover:underline" style={{ color: '#1F2937' }}>
                  {contactInfo.email}
                </span>
                <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" style={{ color: '#1E3A8A' }} />
              </div>
              <p className="mt-2 text-sm" style={{ color: '#6B7280' }}>
                Preferred method for professional inquiries
              </p>
            </div>
          </div>

          {/* Phone Section */}
          <div className="mb-6">
            <div
              className="group cursor-pointer rounded-xl p-4 transition-all duration-300 shadow-sm hover:shadow-md"
              onClick={() => openLink(`tel:${contactInfo.phone}`)}
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6" style={{ color: '#1E3A8A' }} />
                <span className="text-lg font-semibold hover:underline" style={{ color: '#1F2937' }}>
                  {contactInfo.phone}
                </span>
                <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" style={{ color: '#1E3A8A' }} />
              </div>
              <p className="mt-2 text-sm" style={{ color: '#6B7280' }}>
                Available for calls and messages
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4">
            {contactInfo.socials.map((social, index) => (
              <motion.button
                key={social.name}
                className="flex items-center gap-2 rounded-xl px-4 py-3 transition-all duration-300 shadow-sm hover:shadow-md"
                onClick={() => openLink(social.url)}
                title={social.name}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                style={{ 
                  backgroundColor: social.bgColor,
                  color: social.textColor
                }}
              >
                <div style={{ color: social.textColor }}>
                  {social.icon}
                </div>
                <span className="font-medium">{social.name}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Quick Info Section */}
        <div className="rounded-xl p-4 shadow-sm" style={{ backgroundColor: '#F3F4F6' }}>
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#374151' }}>Quick Info</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm" style={{ color: '#374151' }}>
            <div>
              <span className="font-medium">Location:</span> United States
            </div>
            <div>
              <span className="font-medium">Response Time:</span> Within 24 hours
            </div>
            <div>
              <span className="font-medium">Availability:</span> Open to opportunities
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
