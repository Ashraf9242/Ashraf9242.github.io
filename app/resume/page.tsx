import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Eye, FileText } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Resume</h1>
          <p className="text-xl text-muted-foreground">Download my resume or view it online</p>
        </div>

        {/* Resume Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
          <Button size="lg" className="group">
            <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Download PDF
          </Button>
          <Button size="lg" variant="outline" className="group">
            <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            View Online
          </Button>
        </div>

        {/* Resume Preview */}
        <Card className="mb-8 animate-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Resume Preview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-[8.5/11] bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <FileText className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground">Resume preview will be displayed here</p>
                <p className="text-sm text-muted-foreground mt-2">Click "View Online" to see the full resume</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resume Summary */}
        <div className="grid md:grid-cols-2 gap-6 animate-slide-up">
          <Card>
            <CardHeader>
              <CardTitle>Quick Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• 5+ years of full-stack development experience</li>
                <li>• Expertise in React, Next.js, and Node.js</li>
                <li>• Cloud technologies (AWS, GCP, Azure)</li>
                <li>• Led teams of 3-5 developers</li>
                <li>• 15+ successful project deliveries</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Reduced application load time by 40%</li>
                <li>• Implemented CI/CD pipelines saving 20 hours/week</li>
                <li>• Mentored 10+ junior developers</li>
                <li>• AWS Certified Solutions Architect</li>
                <li>• Speaker at 3 tech conferences</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
