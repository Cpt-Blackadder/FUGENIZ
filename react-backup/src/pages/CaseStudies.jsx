import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Clock, 
  Target,
  BarChart3,
  Database,
  Globe,
  Zap,
  Eye,
  CheckCircle
} from 'lucide-react'

const CaseStudies = () => {
  const [caseStudiesRef, caseStudiesInView] = useInView({ triggerOnce: true, threshold: 0.3 })

  const caseStudies = [
    {
      id: 1,
      title: 'FI-Powered Trade Portal',
      industry: 'International Trade',
      client: 'Global Trade Corporation',
      problem: 'Manual trade processes causing delays, errors, and high operational costs. Limited visibility into supply chain and market opportunities.',
      solution: 'Developed an AI-powered trade portal with intelligent matching, automated documentation, and real-time analytics.',
      impact: [
        { metric: '40%', label: 'Reduced Processing Time', icon: Clock },
        { metric: '25%', label: 'Cost Reduction', icon: DollarSign },
        { metric: '60%', label: 'Error Reduction', icon: CheckCircle },
        { metric: '3x', label: 'Faster Deal Closure', icon: TrendingUp }
      ],
      technologies: ['Fugen Intelligence (FI)', 'Machine Learning', 'Natural Language Processing', 'Cloud Architecture'],
      image: '/case-studies/trade-portal-dashboard.jpg',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      title: 'Inventory Optimization System',
      industry: 'Retail & E-commerce',
      client: 'Retail Innovations Ltd',
      problem: 'Overstock and stockouts leading to lost sales and increased holding costs. No predictive capabilities for demand forecasting.',
      solution: 'Implemented AI-driven inventory optimization with predictive analytics and automated reordering systems.',
      impact: [
        { metric: '20%', label: 'Reduced Costs', icon: DollarSign },
        { metric: '35%', label: 'Improved Availability', icon: Target },
        { metric: '50%', label: 'Reduced Stockouts', icon: CheckCircle },
        { metric: '40%', label: 'Customer Satisfaction', icon: Users }
      ],
      technologies: ['Predictive Analytics', 'Machine Learning', 'Real-time Monitoring', 'API Integration'],
      image: '/case-studies/inventory-dashboard.jpg',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 3,
      title: 'Predictive Analytics for Retail',
      industry: 'Retail Analytics',
      client: 'Smart Retail Solutions',
      problem: 'Inability to predict customer behavior and optimize pricing strategies. Limited insights into sales patterns and market trends.',
      solution: 'Built comprehensive predictive analytics platform with customer behavior modeling and dynamic pricing optimization.',
      impact: [
        { metric: '30%', label: 'Revenue Increase', icon: TrendingUp },
        { metric: '45%', label: 'Better Pricing', icon: DollarSign },
        { metric: '25%', label: 'Customer Retention', icon: Users },
        { metric: '50%', label: 'Faster Insights', icon: Clock }
      ],
      technologies: ['Advanced Analytics', 'Customer Segmentation', 'Dynamic Pricing', 'Real-time Processing'],
      image: '/case-studies/analytics-dashboard.jpg',
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const stats = [
    { icon: Users, value: 150, label: 'Clients Served', suffix: '+' },
    { icon: TrendingUp, value: 95, label: 'Success Rate', suffix: '%' },
    { icon: DollarSign, value: 40, label: 'Average Cost Reduction', suffix: '%' },
    { icon: Clock, value: 60, label: 'Time Savings', suffix: '%' }
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
              Real-World{' '}
              <span className="gradient-text">Impact</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover how our FI-powered solutions have transformed businesses 
              across industries with measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
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
              Featured{' '}
              <span className="gradient-text">Case Studies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore detailed examples of how our solutions have delivered 
              transformative results for our clients.
            </p>
          </motion.div>

          <div
            ref={caseStudiesRef}
            className="space-y-16"
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                animate={caseStudiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="card"
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Content */}
                  <div>
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${study.color} rounded-lg flex items-center justify-center mr-4`}>
                        <BarChart3 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-primary-400 text-sm font-semibold">{study.industry}</span>
                        <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {/* Problem */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                          <Target className="w-5 h-5 text-red-400 mr-2" />
                          The Challenge
                        </h4>
                        <p className="text-gray-300 leading-relaxed">{study.problem}</p>
                      </div>

                      {/* Solution */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                          <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                          Our Solution
                        </h4>
                        <p className="text-gray-300 leading-relaxed">{study.solution}</p>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                          <Database className="w-5 h-5 text-blue-400 mr-2" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-dark-700 text-gray-300 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Impact & Mockup */}
                  <div>
                    {/* Impact Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {study.impact.map((impact, impactIndex) => (
                        <div key={impactIndex} className="text-center p-4 bg-dark-800 rounded-lg">
                          <div className="text-2xl font-bold text-white mb-1">
                            {impact.metric}
                          </div>
                          <div className="text-sm text-gray-400">{impact.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Dashboard Mockup */}
                    <div className="bg-dark-800 rounded-lg p-4 border border-dark-700">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-white font-semibold">Dashboard Preview</h4>
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="bg-dark-900 rounded-lg p-6 h-48 flex items-center justify-center">
                        <div className="text-center">
                          <Eye className="w-12 h-12 text-gray-600 mx-auto mb-2" />
                          <p className="text-gray-500 text-sm">
                            Interactive Dashboard Mockup
                          </p>
                          <p className="text-gray-600 text-xs mt-1">
                            Real-time analytics and insights
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
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
              Industries We{' '}
              <span className="gradient-text">Transform</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions span across multiple industries, delivering 
              measurable results and competitive advantages.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'International Trade', icon: Globe, description: 'Streamlined trade processes and global market access' },
              { name: 'Retail & E-commerce', icon: Users, description: 'Optimized operations and enhanced customer experience' },
              { name: 'Manufacturing', icon: Database, description: 'Intelligent automation and supply chain optimization' }
            ].map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{industry.name}</h3>
                <p className="text-gray-300">{industry.description}</p>
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
              See How We Can Help You
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Ready to achieve similar results? Let's discuss how our solutions 
              can transform your business operations.
            </p>
            <Link
              to="/contact"
              className="btn-primary text-lg px-10 py-4 inline-flex items-center"
            >
              Start Your Transformation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies 