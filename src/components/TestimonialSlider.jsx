import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CTO, TechFlow Solutions",
      company: "UK",
      content: "Fugeniz transformed our entire data infrastructure. Their FI-powered solutions reduced our processing time by 60% and gave us insights we never had before. The team's expertise in both technology and our industry domain made all the difference.",
      avatar: "/avatars/sarah-johnson.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Operations Director",
      company: "Global Trade Corp",
      content: "The automated documentation system Fugeniz built for us has streamlined our entire trade process. What used to take days now happens in minutes. Their understanding of trade regulations combined with cutting-edge AI is unmatched.",
      avatar: "/avatars/michael-chen.jpg"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      position: "Head of Digital Transformation",
      company: "Retail Innovations Ltd",
      content: "Working with Fugeniz was a game-changer for our retail operations. Their predictive analytics solution helped us optimize inventory across 50+ locations, resulting in a 25% reduction in costs and 40% improvement in customer satisfaction.",
      avatar: "/avatars/emma-rodriguez.jpg"
    },
    {
      id: 4,
      name: "David Thompson",
      position: "CEO, Maritime Solutions",
      company: "Canada",
      content: "The trade portal Fugeniz developed for us has revolutionized how we connect with suppliers and customers. The AI-powered matching system is incredibly accurate, and the real-time analytics give us unprecedented visibility into our operations.",
      avatar: "/avatars/david-thompson.jpg"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Testimonial Cards */}
      <div className="relative h-96">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <div className="card h-full flex flex-col justify-center relative">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary-400 opacity-20">
                <Quote className="w-12 h-12" />
              </div>

              {/* Content */}
              <div className="text-center px-8">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="text-left">
                    <h4 className="text-white font-semibold text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-400">
                      {testimonials[currentIndex].position}
                    </p>
                    <p className="text-primary-400 text-sm font-medium">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center space-x-4 mt-8">
        <button
          onClick={prevTestimonial}
          className="w-12 h-12 bg-dark-700 hover:bg-dark-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-primary-500 scale-125'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextTestimonial}
          className="w-12 h-12 bg-dark-700 hover:bg-dark-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mt-6">
        <div className="w-full bg-dark-700 rounded-full h-1">
          <motion.div
            className="bg-gradient-to-r from-primary-500 to-secondary-500 h-1 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </div>
  )
}

export default TestimonialSlider 