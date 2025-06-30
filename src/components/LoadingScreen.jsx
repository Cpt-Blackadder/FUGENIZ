import { motion } from 'framer-motion'
import { Globe, Zap } from 'lucide-react'

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-dark-950 flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 mx-auto border-4 border-primary-500 border-t-transparent rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <img src="/assets/vite.svg" alt="Fugeniz Logo" className="w-12 h-12 object-contain" />
            </motion.div>
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-3xl font-bold text-white mb-4"
        >
          Fugeniz
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-primary-400 text-lg mb-8"
        >
          So real, you'll forget Artificial
        </motion.p>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ delay: 0.7, duration: 1 }}
          className="h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex justify-center space-x-4 mt-8"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
          >
            <Globe className="w-6 h-6 text-primary-400" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          >
            <Zap className="w-6 h-6 text-secondary-400" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          >
            <img src="/assets/vite.svg" alt="Fugeniz Logo" className="w-6 h-6 object-contain" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default LoadingScreen 