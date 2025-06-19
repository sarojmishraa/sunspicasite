import React from 'react';
import { motion } from 'framer-motion';
import { PiHexagonThin } from "react-icons/pi";

const socialIcons = [
  {
    src: 'https://img.icons8.com/?size=100&id=12599&format=png&color=000000',
    alt: 'GitHub',
    link: 'https://github.com/sarojmishraa'
  },
  {
    src: 'https://img.icons8.com/?size=100&id=fJp7hepMryiw&format=png&color=000000',
    alt: 'X (Twitter)',
    link: 'https://twitter.com/sarojmishraa'
  },
  {
    src: 'https://img.icons8.com/?size=100&id=13930&format=png&color=000000',
    alt: 'LinkedIn',
    link: 'https://linkedin.com/sarojmishraa'
  },
  {
    src: 'https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000',
    alt: 'Instagram',
    link: 'https://instagram.com/mishra.yuvrajj'
  },
  {
    src: 'https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000',
    alt: 'Gmail',
    link: 'mailto:isarojmishraa@gmail.com'
  }
];

const FooterLine = () => {
  return (
    <motion.footer 
      className="relative text-white  transition-all duration-500 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      
      <div className="container mx-auto px-4 text-center md:text-left">
        <motion.div 
          className="flex flex-col md:flex-row justify-center md:justify-between items-center border-b border-gray-700 pb-4 mb-8" 
          initial={{ y: -20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 md:mb-0 text-sm md:text-base">
            <span className='text-xl'>Get connected with us on social networks:</span>
          </div>
          <div className="flex flex-wrap justify-center space-x-4 md:space-x-6">
            {socialIcons.map((icon, index) => (
              <motion.a 
                key={index} 
                href={icon.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                whileHover={{ scale: 1.2, rotate: 10 }} 
                className="text-white p-2 rounded-full transition-transform"
              >
                <img src={icon.src} alt={icon.alt} className="h-10 w-10" />
              </motion.a>
            ))}
          </div>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <h6 className="text-uppercase font-bold mb-4">sarojmishra</h6>
            <p>We offer top-notch services to elevate your digital presence. Join us to experience innovation at its best.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <h6 className="text-uppercase text-xl font-bold mb-4">Services</h6>
            <ul>
              {['Web Development', 'App Development', 'Cyber Security', 'Cloud Solutions', 'UI/UX Design','Software Development'].map((service) => (
                <li key={service} className="mb-1">
                  <a href="#" className="hover:underline hover:text-gray-400 transition-all duration-300">{service}</a>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            <h6 className="text-uppercase font-bold mb-4 text-xl">Resources</h6>
            <ul>
              {['Home', 'Portfolio', 'Blog', 'Testimonials','Case Studies'].map((link) => (
                <li key={link} className="mb-1">
                  <a href="#" className="hover:underline hover:text-gray-400 transition-all duration-300">{link}</a>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className='pb-6'>
            <h6 className="text-uppercase font-bold mb-4 text-xl">Support</h6>
            <p>Contact Me
            </p>
            <p>Terms & Condition</p>
            <p>Cookie Policy
            </p>
            <p>Privacy Policy
            </p>
            <p>About Me</p>
            <p></p>
          </motion.div>
        </div>
        <motion.div className="text-center mt-8 border-t border-gray-700 pt-4 text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <p>&copy; 2025 SarojMishraSite. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );

};

export default FooterLine;
