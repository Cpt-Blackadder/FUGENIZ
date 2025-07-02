import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { Link } from 'react-router-dom'
import { 
  Globe, 
  Brain, 
  Zap, 
  ArrowRight, 
  Users, 
  Award, 
  Clock,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import WorldMap from '../components/WorldMap'
import TestimonialSlider from '../components/TestimonialSlider'

const Home = () => {
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.3 })
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.3 })

  const stats = [
    { icon: Users, value: 150, label: 'Global Clients', suffix: '+' },
    { icon: Award, value: 8, label: 'Years Experience', suffix: '+' },
    { icon: Clock, value: 24, label: 'Hours Support', suffix: '/7' },
    { icon: Brain, value: 95, label: 'Success Rate', suffix: '%' },
  ]

  const featuredServices = [
    {
      icon: Brain,
      title: 'FI & Automation',
      description: 'Intelligent agents and conversational AI for seamless business automation.',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Globe,
      title: 'Data Solutions',
      description: 'Comprehensive data warehousing, analytics, and optimization solutions.',
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'End-to-end process re-engineering and cloud migration services.',
      color: 'from-accent-500 to-accent-600'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 hero-pattern opacity-30" />
        
        {/* Animated World Map */}
        <div className="absolute inset-0 opacity-20">
          <WorldMap />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Tagline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight"
            >
              So real, you'll{' '}
              <span className="gradient-text">forget</span>
              <br />
              <span className="text-primary-400">Artificial</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              Empowering businesses with{' '}
              <span className="text-primary-400 font-semibold">Fugen Intelligence (FI)</span>{' '}
              for transformative growth across global markets.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/contact"
                className="btn-primary text-lg px-10 py-4 flex items-center justify-center whitespace-nowrap"
                style={{ minWidth: 'max-content' }}
              >
                <span className="flex items-center">
                  Let's Build the Future Together
                  <ArrowRight className="ml-2 w-5 h-5" />
                </span>
              </Link>
              <Link
                to="/services"
                className="btn-secondary text-lg px-10 py-4 flex items-center justify-center whitespace-nowrap"
                style={{ minWidth: 'max-content' }}
              >
                Explore Our Solutions
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-primary-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Dual Expertise,{' '}
              <span className="gradient-text">Global Impact</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge IT expertise with deep industry domain knowledge 
              to deliver solutions that drive real business transformation.
            </p>
          </motion.div>

          {/* Stats */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {statsInView && (
                    <CountUp
                      end={stat.value}
                      duration={2}
                      suffix={stat.suffix}
                    />
                  )}
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured{' '}
              <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our core offerings powered by Fugen Intelligence technology.
            </p>
          </motion.div>

          <div
            ref={servicesRef}
            className="grid md:grid-cols-3 gap-8"
          >
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="card group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-primary-400 hover:text-primary-300 font-semibold transition-colors duration-200"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our{' '}
              <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted by businesses worldwide for transformative AI solutions.
            </p>
          </motion.div>

          <TestimonialSlider />
        </div>
      </section>
    </div>
  )
}

export default Home 