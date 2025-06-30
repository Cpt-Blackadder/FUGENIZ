import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Database, 
  Zap, 
  Globe, 
  FileText, 
  Search,
  BarChart3,
  Cpu,
  MessageSquare,
  Eye,
  TrendingUp,
  Cloud,
  Settings,
  Code,
  Shield,
  Users,
  Target
} from 'lucide-react'

const Services = () => {
  const [activeTab, setActiveTab] = useState('tech')
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.3 })

  const techSolutions = [
    {
      icon: null,
      title: 'Intelligent Agents',
      description: 'AI-powered autonomous agents that handle complex business processes and decision-making.',
      features: ['Process Automation', 'Smart Decision Making', '24/7 Operation', 'Learning Capabilities'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MessageSquare,
      title: 'Conversational AI',
      description: 'Advanced chatbots and virtual assistants that understand context and provide intelligent responses.',
      features: ['Natural Language Processing', 'Multi-language Support', 'Integration Ready', 'Analytics Dashboard'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Machine learning models that forecast trends and identify opportunities in your data.',
      features: ['Trend Forecasting', 'Risk Assessment', 'Real-time Insights', 'Custom Models'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Visual AI solutions for image recognition, quality control, and automated inspection.',
      features: ['Image Recognition', 'Quality Control', 'Object Detection', 'Video Analysis'],
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const dataSolutions = [
    {
      icon: Database,
      title: 'Data Warehousing',
      description: 'Scalable data infrastructure that consolidates and organizes your business information.',
      features: ['Centralized Storage', 'Real-time Processing', 'Scalable Architecture', 'Security Compliance'],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: BarChart3,
      title: 'Interactive Dashboards',
      description: 'Real-time visualization tools that transform complex data into actionable insights.',
      features: ['Real-time Updates', 'Custom Visualizations', 'Mobile Responsive', 'Drill-down Capabilities'],
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Search,
      title: 'Data Scraping',
      description: 'Intelligent data extraction from multiple sources for comprehensive market intelligence.',
      features: ['Multi-source Extraction', 'Structured Output', 'Scheduled Updates', 'Error Handling'],
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Target,
      title: 'Inventory Optimization',
      description: 'AI-driven inventory management that reduces costs while maintaining service levels.',
      features: ['Demand Forecasting', 'Stock Optimization', 'Cost Reduction', 'Service Level Maintenance'],
      color: 'from-pink-500 to-pink-600'
    }
  ]

  const digitalTransformation = [
    {
      icon: Settings,
      title: 'Process Re-engineering',
      description: 'Complete redesign of business processes for maximum efficiency and effectiveness.',
      features: ['Process Analysis', 'Workflow Design', 'Implementation Support', 'Performance Monitoring'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless transition to cloud infrastructure with minimal disruption to operations.',
      features: ['Migration Planning', 'Data Security', 'Performance Optimization', 'Ongoing Support'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Cpu,
      title: 'RPA Implementation',
      description: 'Robotic Process Automation to eliminate repetitive tasks and increase productivity.',
      features: ['Task Automation', 'Integration Capabilities', 'Monitoring Tools', 'Scalable Solutions'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Code,
      title: 'Custom Applications',
      description: 'Tailored software solutions designed specifically for your business needs.',
      features: ['Custom Development', 'API Integration', 'User Training', 'Maintenance Support'],
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const tradeTech = [
    {
      icon: Globe,
      title: 'Trade Portals',
      description: 'Comprehensive B2B platforms that connect buyers and sellers globally.',
      features: ['Multi-language Support', 'Payment Integration', 'Document Management', 'Analytics Dashboard'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FileText,
      title: 'Automated Documentation',
      description: 'AI-powered document processing and generation for trade compliance.',
      features: ['Document Generation', 'Compliance Checking', 'Multi-format Support', 'Version Control'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Users,
      title: 'Sourcing Platforms',
      description: 'Intelligent supplier discovery and management systems.',
      features: ['Supplier Discovery', 'Quality Assessment', 'Performance Tracking', 'Communication Tools'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: BarChart3,
      title: 'Trade Intelligence',
      description: 'Real-time market insights and competitive intelligence dashboards.',
      features: ['Market Analysis', 'Competitor Tracking', 'Price Monitoring', 'Trend Forecasting'],
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const tabs = [
    { id: 'tech', name: 'Tech Solutions' },
    { id: 'trade', name: 'Trade Tech' }
  ]

  const getServicesByTab = (tab) => {
    if (tab === 'tech') {
      return {
        title: 'Tech Solutions',
        description: 'Cutting-edge AI and technology solutions powered by Fugen Intelligence.',
        services: [
          { title: 'FI & Automation', items: techSolutions },
          { title: 'Data Solutions', items: dataSolutions },
          { title: 'Digital Transformation', items: digitalTransformation }
        ]
      }
    } else {
      return {
        title: 'Trade Tech',
        description: 'Specialized solutions for international trade and commerce.',
        services: [
          { title: 'Trade Solutions', items: tradeTech }
        ]
      }
    }
  }

  const currentServices = getServicesByTab(activeTab)

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
              Comprehensive{' '}
              <span className="gradient-text">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Powered by Fugen Intelligence (FI), our solutions span technology and trade, 
              delivering transformative results across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-12 bg-dark-800 border-b border-dark-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mt-12">
            <div className="flex gap-4 bg-dark-800/70 rounded-xl p-2 max-w-md w-full">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-md font-medium transition-all duration-300 flex-1 text-center ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg scale-105'
                      : 'bg-dark-900 text-gray-300 hover:bg-dark-800'
                  }`}
                  style={{ minWidth: 0 }}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {currentServices.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  {currentServices.description}
                </p>
              </div>

              <div
                ref={servicesRef}
                className="space-y-16"
              >
                {currentServices.services.map((category, categoryIndex) => (
                  <div key={category.title}>
                    <motion.h3
                      initial={{ opacity: 0, y: 30 }}
                      animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                      className="text-3xl font-bold text-white mb-8 text-center"
                    >
                      {category.title}
                    </motion.h3>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {category.items.map((service, index) => (
                        <motion.div
                          key={service.title}
                          initial={{ opacity: 0, y: 50 }}
                          animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: (categoryIndex * 0.1) + (index * 0.1), duration: 0.6 }}
                          className="card group hover:border-primary-500 transition-all duration-300"
                        >
                          <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                            {service.icon ? (
                              <service.icon className="w-8 h-8 text-white" />
                            ) : (
                              <img src="/assets/vite.svg" alt="Fugeniz Logo" className="w-8 h-8 object-contain" />
                            )}
                          </div>
                          
                          <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
                          <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                          
                          <ul className="space-y-2 mb-6">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                                <Shield className="w-4 h-4 text-primary-400 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          
                          <Link
                            to="/contact"
                            className="inline-flex items-center text-primary-400 hover:text-primary-300 font-semibold transition-colors duration-200"
                          >
                            Learn More
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
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
              Transform Your Business Today
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Ready to leverage the power of Fugen Intelligence? Let's discuss how our 
              solutions can drive your business forward.
            </p>
            <Link
              to="/contact"
              className="btn-primary text-lg px-10 py-4 inline-flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services 