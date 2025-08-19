"use client"

import { motion } from "framer-motion"
import { Users, Palette, Zap, type LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

interface FeatureSectionProps {
  title?: string
  subtitle?: string
  features?: Feature[]
}

const defaultFeatures: Feature[] = [
  {
    icon: Users,
    title: "Real-time Collaboration",
    description: "Work together seamlessly with artists worldwide using our advanced collaboration tools",
  },
  {
    icon: Palette,
    title: "Artist Portfolios",
    description: "Showcase your work with stunning portfolio layouts designed for creative professionals",
  },
  {
    icon: Zap,
    title: "Project Creation",
    description: "Start new projects & find collaborators, and bring your creative visions to life",
  },
]

export function FeatureSection({
  title = "Revolutionizing Creative Collaboration",
  subtitle = "Join a global community of artists, designers, and creators working together to push the boundaries of digital art",
  features = defaultFeatures,
}: FeatureSectionProps) {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <Card className="bg-gradient-to-br from-gray-900/50 to-purple-900/30 border-gray-700 hover:border-pink-500/50 transition-all duration-300 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full mb-4 group-hover:shadow-lg group-hover:shadow-pink-500/25 transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="h-8 w-8" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
