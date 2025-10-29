"use client"

import { motion } from "framer-motion"

interface AnimatedLogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function AnimatedLogo({ className = "", size = "md" }: AnimatedLogoProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl",
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`relative font-bold cursor-pointer ${sizeClasses[size]} ${className}`}
    >
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Main logo text with animated gradient */}
        <motion.span
          className="bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_100%]"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: "linear-gradient(45deg, #ff3cac, #845ec2, #38f9d7, #9f44d3, #ff3cac)",
            backgroundSize: "300% 100%",
          }}
        >
          Artsync
        </motion.span>

        {/* Animated glow effect behind text */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-violet-500/20 to-cyan-400/20 blur-lg -z-10"
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Sparkle effects */}
        <motion.div
          className="absolute -top-1 -right-1 w-2 h-2 bg-pink-400 rounded-full"
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            delay: 0,
          }}
        />
        <motion.div
          className="absolute top-1 left-8 w-1 h-1 bg-cyan-400 rounded-full"
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute -bottom-1 left-12 w-1.5 h-1.5 bg-violet-400 rounded-full"
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            delay: 1,
          }}
        />
      </motion.div>
    </motion.div>
  )
}
