"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface Testimonial {
  id: number
  name: string
  role: string
  avatar: string
  quote: string
  rating: number
}

interface TestimonialsProps {
  title?: string
  subtitle?: string
  testimonials?: Testimonial[]
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Elena Rodriguez",
    role: "Digital Artist",
    avatar: "/placeholder.svg?height=60&width=60&text=ER",
    quote: "This platform transformed how I collaborate. Found amazing artists and created my best work yet.",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "3D Designer",
    avatar: "/placeholder.svg?height=60&width=60&text=MJ",
    quote:
      "The real-time collaboration tools are incredible. It's like having a virtual studio with artists worldwide.",
    rating: 5,
  },
  {
    id: 3,
    name: "Aria Patel",
    role: "Illustrator",
    avatar: "/placeholder.svg?height=60&width=60&text=AP",
    quote: "I've connected with so many talented creators. The community here is supportive and inspiring.",
    rating: 5,
  },
]

export function Testimonials({
  title = "What Artists Say",
  subtitle = "Hear from our community of creative professionals",
  testimonials = defaultTestimonials,
}: TestimonialsProps) {
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="bg-gradient-to-br from-gray-900/80 to-cyan-900/40 border-gray-700 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm h-full">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>

                  <div className="flex items-center space-x-3">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-cyan-400"
                    />
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
