import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Linkedin, 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp
} from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Why Us', path: '/why-us' },
        { name: 'Case Studies', path: '/case-studies' },
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'FI & Automation', path: '/services#automation' },
        { name: 'Data Solutions', path: '/services#data' },
        { name: 'Digital Transformation', path: '/services#transformation' },
        { name: 'Trade Tech', path: '/services#trade' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact', path: '/contact' },
        { name: 'Documentation', path: '/docs' },
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
      ]
    }
  ]

  const offices = [
    {
      name: 'India Office',
      address: 'Mumbai, Maharashtra, India',
      phone: '+91 22 1234 5678',
      email: 'india@fugeniz.com'
    },
    {
      name: 'Gulf Region Office',
      address: 'Dubai, United Arab Emirates',
      phone: '+971 4 1234 5678',
      email: 'gulf@fugeniz.com'
    }
  ]

  return (
    <footer className="bg-dark-950 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white">
                <img src="/assets/vite.svg" alt="Fugeniz Logo" className="w-10 h-10 object-contain" />
              </div>
              <span className="text-xl font-bold text-white">Fugeniz</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering businesses with Fugen Intelligence (FI) for transformative growth. 
              So real, you'll forget Artificial.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <motion.a
                href="https://linkedin.com/company/fugeniz"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-dark-800 hover:bg-primary-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-dark-800 hover:bg-green-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Office Locations */}
        <div className="mt-12 pt-8 border-t border-dark-800">
          <h3 className="text-white font-semibold mb-6 text-center">Our Offices</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {offices.map((office) => (
              <div key={office.name} className="card">
                <h4 className="text-white font-semibold mb-4">{office.name}</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">{office.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                    <span className="text-gray-400">{office.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                    <span className="text-gray-400">{office.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-dark-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Fugeniz. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow duration-200 z-40"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  )
}

export default Footer 