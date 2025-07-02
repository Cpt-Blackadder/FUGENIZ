import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const WorldMap = () => {
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(prev => prev + 0.01)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const locations = [
    { name: 'UK', x: 45, y: 25, delay: 0 },
    { name: 'Canada', x: 20, y: 20, delay: 0.5 },
    { name: 'Malta', x: 50, y: 35, delay: 1 },
  ]

  return (
    <div className="relative w-full h-full">
      {/* World Map Background */}
      <svg
        viewBox="0 0 100 50"
        className="w-full h-full opacity-30"
        style={{ filter: 'drop-shadow(0 0 10px rgba(14, 165, 233, 0.3))' }}
      >
        {/* Simplified world map paths */}
        <path
          d="M20,20 Q30,15 40,20 Q50,25 60,20 Q70,15 80,20 L80,30 Q70,35 60,30 Q50,25 40,30 Q30,35 20,30 Z"
          fill="none"
          stroke="rgba(14, 165, 233, 0.5)"
          strokeWidth="0.5"
        />
        <path
          d="M10,25 Q15,20 25,25 Q35,30 45,25 Q55,20 65,25 Q75,30 85,25 L85,35 Q75,40 65,35 Q55,30 45,35 Q35,40 25,35 Q15,30 10,35 Z"
          fill="none"
          stroke="rgba(14, 165, 233, 0.3)"
          strokeWidth="0.3"
        />
      </svg>

      {/* Animated Connection Lines */}
      <svg
        viewBox="0 0 100 50"
        className="absolute inset-0 w-full h-full"
      >
        {locations.map((location, index) => (
          <motion.circle
            key={location.name}
            cx={location.x}
            cy={location.y}
            r="0.8"
            fill="url(#gradient)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 0.8] }}
            transition={{
              delay: location.delay,
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3
            }}
          />
        ))}

        {/* Connection lines between locations */}
        <motion.path
          d="M45 25 Q32.5 22.5 20 20"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2
          }}
        />
        <motion.path
          d="M45 25 Q47.5 30 50 35"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            delay: 1,
            repeat: Infinity,
            repeatDelay: 2
          }}
        />
        <motion.path
          d="M20 20 Q35 17.5 50 35"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            delay: 2,
            repeat: Infinity,
            repeatDelay: 2
          }}
        />

        {/* Gradients */}
        <defs>
          <radialGradient id="gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="1" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0" />
            <stop offset="50%" stopColor="#0ea5e9" stopOpacity="1" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating AI particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Location labels */}
      {locations.map((location) => (
        <motion.div
          key={location.name}
          className="absolute text-xs text-primary-400 font-semibold"
          style={{
            left: `${location.x}%`,
            top: `${location.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: location.delay + 0.5, duration: 0.5 }}
        >
          {location.name}
        </motion.div>
      ))}
    </div>
  )
}

export default WorldMap 