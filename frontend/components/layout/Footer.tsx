"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Instagram, Twitter, Github, Dribbble } from "lucide-react"
import { AnimatedLogo } from "@/components/layout/AnimatedLogo"

interface FooterProps {
  companyName?: string
  description?: string
  socialLinks?: { icon: React.ReactNode; href: string }[]
  sections?: {
    title: string
    links: { label: string; href: string }[]
  }[]
}

const defaultSocialLinks = [
  { icon: <Instagram className="h-5 w-5" />, href: "#" },
  { icon: <Twitter className="h-5 w-5" />, href: "#" },
  { icon: <Dribbble className="h-5 w-5" />, href: "#" },
  { icon: <Github className="h-5 w-5" />, href: "#" },
]

const defaultSections = [
  {
    title: "Platform",
    links: [
      { label: "Browse Artists", href: "#" },
      { label: "Find Projects", href: "#" },
      { label: "Create Portfolio", href: "#" },
      { label: "Collaboration Tools", href: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Discord", href: "#" },
      { label: "Forums", href: "#" },
      { label: "Events", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
]

export function Footer({
  companyName = "Artsync",
  description = "Empowering artists to collaborate and create the future of digital art.",
  socialLinks = defaultSocialLinks,
  sections = defaultSections,
}: FooterProps) {
  return (
    <footer className="py-12 border-t border-gray-800 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <AnimatedLogo className="mb-4" />
            <p className="text-gray-400 mb-4">{description}</p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2 text-gray-400">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="hover:text-pink-400 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 {companyName}. All rights reserved. Built for creators, by creators.</p>
        </div>
      </div>
    </footer>
  )
}
