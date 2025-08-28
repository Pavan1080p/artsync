"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"; // Import Link from Next.js
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedLogo } from "@/components/layout/AnimatedLogo"

interface NavigationProps {
  links?: { href: string; label: string }[]
}

const defaultLinks = [
  { href: "#portfolios", label: "Portfolio" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
]

export function Navigation({ links = defaultLinks }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <AnimatedLogo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-pink-400 transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Buttons - Updated with Link */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/auth?tab=login">
            <Button variant="ghost" className="text-white hover:text-pink-400">
              Sign In
            </Button>
          </Link>
          <Link href="/auth?tab=register">
            <Button className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 shadow-lg shadow-pink-500/25">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block hover:text-pink-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              {/* Mobile Buttons - Updated with Link */}
              <div className="pt-4 space-y-2">
                <Link href="/auth?tab=login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full text-white hover:text-pink-400">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth?tab=register" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
