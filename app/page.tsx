import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, Download, ArrowRight, Phone, MapPin, Award } from "lucide-react"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center py-20 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Mohammed Ashraf Ali"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-6 border-4 border-primary/20"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Mohammed Ashraf Ali
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">Software Application Developer</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Passionate full-stack developer with expertise in building modern web applications. I specialize
            in React, Next.js, and cloud technologies, creating scalable solutions that drive business growth.
          </p>

          {/* Contact Information */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
              <a href="mailto:mdashra9242@gmail.com">mdashra9242@gmail.com</a>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-5 w-5" />
              <a href="tel:+96892421050">+968 92421050</a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" className="group">
              <Link href="/projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="group">
              <Link href="/resume">
                <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Download Resume
              </Link>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Link
              href="https://github.com/Ashraf9242"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/mohamedashrafali1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:mdashra9242@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 animate-slide-up">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=200&width=300`}
                      alt={`Project ${i}`}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Project {i}</h3>
                  <p className="text-muted-foreground mb-4">
                    A brief description of this amazing project and its key features.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">React</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Next.js</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">TypeScript</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 animate-slide-up">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Certificates & Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold">Certificate {i}</h3>
                  </div>
                  <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                    <Image
                      src={`/certificates/certificate${i}.jpg`}
                      alt={`Certificate ${i}`}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Description of the certificate and its significance.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Issuing Organization</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Date</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
