import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Target, 
  Eye, 
  Users, 
  Shield, 
  Lightbulb, 
  CheckCircle,
  Globe,
  Brain,
  Zap
} from 'lucide-react'
import avatar from 'D:/ARAK/freelance-UIUX-main/assets/avatars/sarah-johnson.jpg'

const About = () => {
  const [journeyRef, journeyInView] = useInView({ triggerOnce: true, threshold: 0.3 })
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.3 })

  const journeySteps = [
    {
      year: '2015',
      title: 'Foundation',
      description: 'Started as an export business, building deep understanding of global trade dynamics.',
      icon: Globe
    },
    {
      year: '2018',
      title: 'Digital Evolution',
      description: 'Recognized the need for intelligent solutions in trade and began developing AI capabilities.',
      icon: Brain
    },
    {
      year: '2020',
      title: 'FI Development',
      description: 'Launched Fugen Intelligence (FI) platform, combining AI with domain expertise.',
      icon: Zap
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Established offices in UK, Canada, and Malta, serving clients worldwide.',
      icon: Target
    }
  ]

  const coreValues = [
    {
      icon: Shield,
      title: 'Trust',
      description: 'Building lasting relationships through transparency and reliability.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Continuously pushing boundaries with cutting-edge AI solutions.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: CheckCircle,
      title: 'Delivery',
      description: 'Ensuring exceptional results and exceeding client expectations.',
      color: 'from-green-500 to-green-600'
    }
  ]

  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      expertise: 'AI/ML, Data Science',
      experience: '15+ years in AI research and enterprise solutions'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Trade Solutions',
      expertise: 'International Trade, Supply Chain',
      experience: '12+ years in global trade operations'
    },
    {
      name: 'Emma Thompson',
      role: 'Director of Digital Transformation',
      expertise: 'Process Re-engineering, Cloud Architecture',
      experience: '10+ years in digital transformation'
    },
    {
      name: 'David Kim',
      role: 'Lead Data Architect',
      expertise: 'Data Engineering, Analytics',
      experience: '8+ years in data infrastructure'
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
              Our{' '}
              <span className="gradient-text">Story</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From exports to IT leadership, we've evolved to become a global force in 
              intelligent business solutions, bridging technology and trade expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                Integrate tech into trade with Fugen Intelligence, creating seamless, 
                intelligent solutions that transform how businesses operate globally.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                Redefine intelligence with intuitive, real solutions that make AI 
                so natural, you'll forget it's artificial.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
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
              Our{' '}
              <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A timeline of innovation and growth, from humble beginnings to global AI leadership.
            </p>
          </motion.div>

          <div
            ref={journeyRef}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-secondary-500" />

            {journeySteps.map((step, index) => (
              <motion.div
                key={step.year}
                initial={{ opacity: 0, y: 50 }}
                animate={journeyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="card">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${step.icon === Globe ? 'from-blue-500 to-blue-600' : step.icon === Brain ? 'from-purple-500 to-purple-600' : step.icon === Zap ? 'from-yellow-500 to-orange-500' : 'from-green-500 to-green-600'} rounded-lg flex items-center justify-center mr-4`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-primary-400 font-bold text-lg">{step.year}</span>
                        <h3 className="text-white font-semibold text-xl">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="w-2/12 flex justify-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-4 border-dark-900" />
                </div>

                {/* Empty Space */}
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
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
              Core{' '}
              <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and every solution we create.
            </p>
          </motion.div>

          <div
            ref={valuesRef}
            className="grid md:grid-cols-3 gap-8"
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="card text-center group"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
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
              Meet Our{' '}
              <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experts in both IT and industry domains, working together to deliver 
              exceptional solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="card text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-primary-400 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm mb-3">{member.expertise}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{member.experience}</p>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how our comprehensive solutions can drive your business forward 
              with the power of Fugen Intelligence.
            </p>
            <Link
              to="/services"
              className="btn-primary text-lg px-10 py-4 inline-flex items-center"
            >
              Discover Our Solutions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About 