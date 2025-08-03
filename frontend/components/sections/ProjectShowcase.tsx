"use client"

import { motion } from "framer-motion"
import { Users, Eye, Heart, Search, Filter } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

interface Project {
  id: number
  title: string
  category: string
  creator: string
  collaborators: number
  image: string
  tags: string[]
  likes: number
  views: string
}

interface ProjectShowcaseProps {
  title?: string
  subtitle?: string
  projects?: Project[]
  showSearch?: boolean
}

const defaultProjects: Project[] = [
  {
    id: 1,
    title: "Cyberpunk City Concept",
    category: "3D Environment",
    creator: "Maya Chen",
    collaborators: 3,
    image: "/placeholder.svg?height=200&width=300&text=Cyberpunk",
    tags: ["3D", "Concept Art", "Sci-Fi"],
    likes: 234,
    views: "1.2K",
  },
  {
    id: 2,
    title: "Brand Identity System",
    category: "Design",
    creator: "Sam Taylor",
    collaborators: 2,
    image: "/placeholder.svg?height=200&width=300&text=Brand",
    tags: ["Branding", "Logo", "Identity"],
    likes: 189,
    views: "856",
  },
  {
    id: 3,
    title: "Character Animation Reel",
    category: "Animation",
    creator: "Jordan Kim",
    collaborators: 4,
    image: "/placeholder.svg?height=200&width=300&text=Animation",
    tags: ["Animation", "Character", "2D"],
    likes: 312,
    views: "2.1K",
  },
  {
    id: 4,
    title: "Documentary Short Film",
    category: "Film",
    creator: "Alex Rivera",
    collaborators: 5,
    image: "/placeholder.svg?height=200&width=300&text=Film",
    tags: ["Film", "Documentary", "Editing"],
    likes: 445,
    views: "3.4K",
  },
]

export function ProjectShowcase({
  title = "Collaboration Projects",
  subtitle = "Join exciting projects or start your own creative journey",
  projects = defaultProjects,
  showSearch = true,
}: ProjectShowcaseProps) {
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">{subtitle}</p>

          {showSearch && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search projects..."
                  className="pl-10 bg-gray-900/50 border-gray-700 text-white placeholder-gray-400"
                />
              </div>
              <Button
                variant="outline"
                size="icon"
                className="border-gray-700 text-gray-400 hover:text-white bg-transparent"
              >
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          )}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <Card className="bg-gradient-to-br from-gray-900/80 to-purple-900/40 border-gray-700 hover:border-violet-500/50 transition-all duration-300 backdrop-blur-sm overflow-hidden">
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-violet-500 to-pink-500 text-white">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <div className="bg-black/50 backdrop-blur-sm rounded-full p-2 flex items-center space-x-1">
                      <Eye className="h-3 w-3 text-white" />
                      <span className="text-xs text-white">{project.views}</span>
                    </div>
                    <div className="bg-black/50 backdrop-blur-sm rounded-full p-2 flex items-center space-x-1">
                      <Heart className="h-3 w-3 text-pink-400" />
                      <span className="text-xs text-white">{project.likes}</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">by {project.creator}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="border-gray-600 text-gray-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Users className="h-4 w-4" />
                      <span>{project.collaborators} collaborators</span>
                    </div>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-violet-500 to-pink-500 hover:from-violet-600 hover:to-pink-600 shadow-lg shadow-violet-500/25"
                    >
                      Join Project
                    </Button>
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
