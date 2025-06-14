"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Github, ExternalLink, Search } from "lucide-react"

// Mock data - in real app, this would come from Supabase
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/johndoe/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
    githubUrl: "https://github.com/johndoe/task-manager",
    liveUrl: "https://taskmanager-demo.vercel.app",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather dashboard with location-based forecasts and interactive charts.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Vuetify"],
    githubUrl: "https://github.com/johndoe/weather-dashboard",
    liveUrl: "https://weather-demo.vercel.app",
    featured: false,
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "Analytics dashboard for social media metrics with data visualization and reporting features.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
    githubUrl: "https://github.com/johndoe/social-analytics",
    liveUrl: "https://analytics-demo.vercel.app",
    featured: false,
  },
  {
    id: 5,
    title: "Mobile Fitness App",
    description: "Cross-platform mobile app for fitness tracking with workout plans and progress monitoring.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    githubUrl: "https://github.com/johndoe/fitness-app",
    liveUrl: "https://fitness-demo.vercel.app",
    featured: false,
  },
  {
    id: 6,
    title: "AI Chat Assistant",
    description: "Intelligent chat assistant powered by OpenAI with context awareness and conversation memory.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "OpenAI API", "Vercel AI SDK", "Supabase"],
    githubUrl: "https://github.com/johndoe/ai-chat",
    liveUrl: "https://aichat-demo.vercel.app",
    featured: true,
  },
]

const allTechnologies = Array.from(new Set(projects.flatMap((project) => project.technologies))).sort()

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTech, setSelectedTech] = useState<string | null>(null)

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTech = !selectedTech || project.technologies.includes(selectedTech)
    return matchesSearch && matchesTech
  })

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I've worked on, showcasing different technologies and problem-solving approaches
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 animate-slide-up">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedTech === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTech(null)}
            >
              All
            </Button>
            {allTechnologies.map((tech) => (
              <Button
                key={tech}
                variant={selectedTech === tech ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
              >
                {tech}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="p-0">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.featured && <Badge className="absolute top-2 left-2 bg-primary">Featured</Badge>}
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2 group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button asChild size="sm" variant="outline" className="flex-1">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  <Button asChild size="sm" className="flex-1">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
