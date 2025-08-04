"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroSectionProps {
  subtitle?: string;
  description?: string;

  secondaryCTA?: string;
}

export function HeroSection({
  subtitle = "Welcome to the Future of Art",
  description = "Where artists unite to build the future of creativity",

  secondaryCTA = "Explore Artists",
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
        />

        {/* Floating geometric shapes */}
        {[
          {
            top: "33%",
            right: "25%",
            size: "w-2 h-2",
            color: "bg-pink-500",
            delay: 0,
          },
          {
            top: "66%",
            left: "25%",
            size: "w-1 h-1",
            color: "bg-cyan-400",
            delay: 1,
          },
          {
            top: "50%",
            right: "33%",
            size: "w-1.5 h-1.5",
            color: "bg-violet-500",
            delay: 2,
          },
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
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
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 1, ease: "easeOut" }}
              className="text-4xl md:text-7xl font-bold inline-block text-balance"
            >
              Create. Collaborate. <br /> Connect.
            </motion.h1>
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
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
          >
            <Link
              href="/explore"
              className="group bg-gradient-to-r from-pink-500 to-violet-500 text-lg px-8 py-3 rounded-full relative flex items-center"
            >
              <span>Get Started</span>
              <ArrowRight
                className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1
                "
              />
            </Link>

            <Link
              href="/artrist"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300 shadow-lg shadow-cyan-400/25 text-lg px-8 py-3 rounded-full bg-transparent backdrop-blur-sm relative group flex items-center"
            >
              <Play className="mr-2 h-5 w-5" />
              <span>Explore Artist</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
