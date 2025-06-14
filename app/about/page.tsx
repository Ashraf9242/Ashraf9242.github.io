import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Code, Database, Cloud, Smartphone } from "lucide-react"

const skills = [
  { category: "Frontend", icon: Code, skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"] },
  { category: "Backend", icon: Database, skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"] },
  { category: "Cloud", icon: Cloud, skills: ["AWS", "Vercel", "Firebase", "Docker", "Kubernetes"] },
  { category: "Mobile", icon: Smartphone, skills: ["React Native", "Flutter", "iOS", "Android"] },
]

const timeline = [
  {
    year: "2024",
    title: "Senior Full-Stack Developer",
    company: "Tech Innovations Inc.",
    description: "Leading development of enterprise web applications using React and Node.js.",
  },
  {
    year: "2022",
    title: "Full-Stack Developer",
    company: "Digital Solutions Ltd.",
    description: "Developed and maintained multiple client projects using modern web technologies.",
  },
  {
    year: "2020",
    title: "Frontend Developer",
    company: "StartupXYZ",
    description: "Built responsive web applications and improved user experience across platforms.",
  },
  {
    year: "2019",
    title: "Computer Science Graduate",
    company: "University of Technology",
    description: "Bachelor of Science in Computer Science with focus on software engineering.",
  },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-muted-foreground">
            Get to know more about my journey, skills, and passion for development
          </p>
        </div>

        {/* Biography */}
        <Card className="mb-12 animate-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              My Story
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed mb-4">
              Hello! I'm Mohammed Ashraf Ali, a passionate software developer with a strong background in full-stack development. My journey into programming began with a curiosity for building impactful digital solutions.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Over the years, I have honed my skills in React, Next.js, TypeScript, and cloud technologies, delivering scalable and efficient applications. I enjoy working on challenging projects that drive business growth and innovation.
            </p>
            <p className="text-lg leading-relaxed">
              Outside of coding, I am committed to continuous learning and exploring new technologies to stay ahead in the fast-evolving tech landscape.
            </p>
          </CardContent>
        </Card>

        {/* Skills */}
        <div className="mb-12 animate-slide-up">
          <h2 className="text-3xl font-bold text-center mb-8">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillGroup) => (
              <Card key={skillGroup.category}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <skillGroup.icon className="h-5 w-5" />
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="animate-slide-up">
          <h2 className="text-3xl font-bold text-center mb-8">Career Journey</h2>
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <Card key={index} className="relative">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full font-bold">
                        {item.year.slice(-2)}
                      </div>
                      <Calendar className="h-4 w-4 text-muted-foreground md:hidden" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <span className="text-sm text-muted-foreground font-medium">{item.year}</span>
                      </div>
                      <p className="text-primary font-medium mb-2">{item.company}</p>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
