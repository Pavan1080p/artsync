"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Navigation } from "@/components/layout/Navigation"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { FeatureSection } from "@/components/sections/FeatureSection"
import { Testimonials } from "@/components/sections/Testimonials"
import { ProjectShowcase } from "@/components/sections/ProjectShowcase"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div style={{ y: backgroundY }} className="absolute -top-1/2 -left-1/2 w-full h-full opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </motion.div>
      </div>

      <Navigation />

      <main>
        <HeroSection />
        <FeatureSection />
        <ProjectShowcase />
        <Testimonials />
      </main>

      <Footer />
    </div>
  )
}
