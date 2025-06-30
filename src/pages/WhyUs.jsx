import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Users, 
  Target, 
  Globe, 
  Zap, 
  Shield,
  TrendingUp,
  Clock,
  Award,
  CheckCircle,
  Star
} from 'lucide-react'

const WhyUs = () => {
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.3 })
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.3 })

  const usps = [
    {
      icon: null,
      title: 'Fugen Intelligence (FI)',
      description: 'Real-time learning and explainability that makes AI transparent and trustworthy.',
      features: ['Real-time Learning', 'Explainable AI', 'Transparent Decisions', 'Continuous Improvement'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Dual Expertise',
      description: 'Deep IT knowledge combined with industry domain expertise for comprehensive solutions.',
      features: ['Technical Excellence', 'Domain Knowledge', 'Industry Experience', 'Best Practices'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Target,
      title: 'Customized Solutions',
      description: 'Tailored approaches designed specifically for your business needs and challenges.',
      features: ['Personalized Approach', 'Scalable Design', 'Future-proof Architecture', 'Ongoing Support'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Globe,
      title: 'Global Delivery',
      description: 'Worldwide presence with local expertise and 24/7 support across time zones.',
      features: ['Global Reach', 'Local Expertise', '24/7 Support', 'Multi-timezone Coverage'],
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const benefits = [
    {
      metric: '60%',
      label: 'Cost Reduction',
      description: 'Average cost savings through automation and optimization',
      icon: TrendingUp,
      color: 'from-green-500 to-green-600'
    },
    {
      metric: '3x',
      label: 'Faster Implementation',
      description: 'Reduced time to market with our proven methodologies',
      icon: Clock,
      color: 'from-blue-500 to-blue-600'
    },
    {
      metric: '95%',
      label: 'Success Rate',
      description: 'Project success rate across all implementations',
      icon: Award,
      color: 'from-purple-500 to-purple-600'
    },
    {
      metric: '24/7',
      label: 'Support Coverage',
      description: 'Round-the-clock technical support and monitoring',
      icon: Shield,
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const clientLogos = [
    { name: 'TechFlow Solutions', logo: '/logos/techflow.png' },
    { name: 'Global Trade Corp', logo: '/logos/globaltrade.png' },
    { name: 'Retail Innovations', logo: '/logos/retailinnovations.png' },
    { name: 'Maritime Solutions', logo: '/logos/maritimesolutions.png' },
    { name: 'Data Dynamics', logo: '/logos/datadynamics.png' },
    { name: 'Cloud Systems', logo: '/logos/cloudsystems.png' }
  ]

  const testimonials = [
    {
      content: "Fugeniz delivered results that exceeded our expectations. Their FI technology is truly revolutionary.",
      author: "Sarah Johnson",
      position: "CTO, TechFlow Solutions",
      rating: 5
    },
    {
      content: "The combination of technical expertise and industry knowledge sets Fugeniz apart from the competition.",
      author: "Michael Chen",
      position: "Operations Director, Global Trade Corp",
      rating: 5
    },
    {
      content: "Working with Fugeniz has transformed our business operations and given us a competitive edge.",
      author: "Emma Rodriguez",
      position: "Head of Digital Transformation, Retail Innovations",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Why Choose{' '}
              <span className="gradient-text">Fugeniz</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover what makes us the preferred partner for businesses seeking 
              intelligent, transformative solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* USPs Section */}
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
              Our{' '}
              <span className="gradient-text">Competitive Edge</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Four key differentiators that set us apart in the AI and technology landscape.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {usps.map((usp, index) => (
              <motion.div
                key={usp.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="card group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${usp.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {usp.icon ? (
                    <usp.icon className="w-8 h-8 text-white" />
                  ) : (
                    <img src="/assets/vite.svg" alt="Fugeniz Logo" className="w-8 h-8 object-contain" />
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{usp.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{usp.description}</p>
                
                <ul className="space-y-2">
                  {usp.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-primary-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Infographic */}
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
              Measurable{' '}
              <span className="gradient-text">Benefits</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results that drive business growth and operational excellence.
            </p>
          </motion.div>

          <div
            ref={statsRef}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.label}
                initial={{ opacity: 0, y: 50 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="card text-center group"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {statsInView && (
                    <CountUp
                      end={benefit.metric.includes('%') ? parseInt(benefit.metric) : benefit.metric.includes('x') ? 3 : benefit.metric === '24/7' ? 24 : 95}
                      duration={2}
                      suffix={benefit.metric.includes('%') ? '%' : benefit.metric.includes('x') ? 'x' : benefit.metric === '24/7' ? '/7' : ''}
                    />
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{benefit.label}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
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
              Trusted by{' '}
              <span className="gradient-text">Leading Companies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Global organizations that have transformed their operations with Fugen Intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clientLogos.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <div className="w-32 h-16 bg-dark-700 rounded-lg flex items-center justify-center border border-dark-600 hover:border-primary-500 transition-colors duration-200">
                  <span className="text-gray-400 font-semibold text-sm text-center">
                    {client.name}
                  </span>
                </div>
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
          </motion.div>

          <div
            ref={benefitsRef}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 50 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="card"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div>
                  <h4 className="text-white font-semibold">{testimonial.author}</h4>
                  <p className="text-primary-400 text-sm">{testimonial.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join the growing list of companies that have transformed their business 
              with Fugen Intelligence solutions.
            </p>
            <Link
              to="/contact"
              className="btn-primary text-lg px-10 py-4 inline-flex items-center"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default WhyUs 