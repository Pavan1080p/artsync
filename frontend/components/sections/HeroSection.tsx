"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  title?: string[]
  subtitle?: string
  description?: string
  primaryCTA?: string
  secondaryCTA?: string
  onPrimaryCTA?: () => void
  onSecondaryCTA?: () => void
}

export function HeroSection({
  title = ["Create.", "Collaborate.", "Connect."],
  subtitle = "Welcome to the Future of Art",
  description = "Where artists unite to build the future of creativity",
  primaryCTA = "Get Started",
  secondaryCTA = "Explore Artists",
  onPrimaryCTA,
  onSecondaryCTA,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
        />

        {/* Floating geometric shapes */}
        {[
          { top: "33%", right: "25%", size: "w-2 h-2", color: "bg-pink-500", delay: 0 },
          { top: "66%", left: "25%", size: "w-1 h-1", color: "bg-cyan-400", delay: 1 },
          { top: "50%", right: "33%", size: "w-1.5 h-1.5", color: "bg-violet-500", delay: 2 },
        ].map((shape, index) => (
          <motion.div
            key={index}
            className={`absolute ${shape.size} ${shape.color} rounded-full`}
            style={{ top: shape.top, left: shape.left, right: shape.right }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: shape.delay,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, ease: "easeOut" }}>
          {/* Animated subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-2 rounded-full border border-pink-500/20 bg-pink-500/5 text-pink-300 text-sm font-medium backdrop-blur-sm">
              {subtitle}
            </span>
          </motion.div>

          {/* Main headline with word-by-word animation */}
          <div className="mb-6">
            {title.map((word, wordIndex) => (
              <motion.h1
                key={wordIndex}
                className="text-4xl md:text-7xl font-bold inline-block mr-4 bg-gradient-to-r from-white via-pink-200 to-violet-200 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6 + wordIndex * 0.2,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100,
                }}
              >
                {word}
              </motion.h1>
            ))}
          </div>

          {/* Description with smooth reveal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <motion.p
              className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 1.2 }}
            >
              {description}
            </motion.p>

            {/* Subtle underline animation */}
            <motion.div
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ delay: 2.2, duration: 1.5, ease: "easeInOut" }}
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 60, 172, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button
                size="lg"
                onClick={onPrimaryCTA}
                className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 shadow-2xl shadow-pink-500/25 text-lg px-8 py-6 rounded-full relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-400 to-violet-400 opacity-0 group-hover:opacity-20"
                  initial={false}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                <span className="relative z-10 flex items-center">
                  {primaryCTA}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.div>
                </span>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(56, 249, 215, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button
                size="lg"
                variant="outline"
                onClick={onSecondaryCTA}
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300 shadow-lg shadow-cyan-400/25 text-lg px-8 py-6 rounded-full bg-transparent backdrop-blur-sm relative group"
              >
                <motion.div
                  className="absolute inset-0 border-2 border-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                <span className="relative z-10 flex items-center">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Play className="mr-2 h-5 w-5" />
                  </motion.div>
                  {secondaryCTA}
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
          className="relative"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center relative">
            <motion.div
              className="w-1 h-3 bg-gradient-to-b from-pink-400 to-cyan-400 rounded-full mt-2"
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1, 0.8],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
          <motion.div
            className="absolute inset-0 border-2 border-pink-400/20 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
