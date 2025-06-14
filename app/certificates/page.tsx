import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Award } from "lucide-react"

const certificateFiles = [
  "2012 class4.png",
  "2013 quran.png",
  "2014 quran.png",
  "2015 class8.png",
  "2018 calss10.png",
  "2019 class11.png",
  "2022 cas depait.png",
  "2022 cas depait2.jpeg",
  "2022 casibri.png",
  "2022 casibri2.png",
  "2022 sharqiyah.png",
  "2023 casibri.png",
  "2023 Utasibri.png",
  "2023 Utasibri2.png",
  "2024 cas.png",
  "2024 casMath.png",
  "2024 end final year project.png",
  "2024 final year project.png",
  "2024 omantel.png",
  "2024 training.png",
  "2024 UTAS.png",
  "2025 UAE.png",
  "2025 Utas.png",
  "certificate (1).png",
  "certificate (2).png",
  "certificate (3).png",
  "certificate (4).png",
  "certificate (5).png",
  "certificate satr.png",
  "certificate.png",
  "Conference Shinas 2024.png",
  "international Ai 2025.png",
  "oct2024.png",
  "OSHA 2024.png",
  "python 2024.png",
  "Spf2025.jpg",
  "UTAS2025.png",
  "محمد اشرف علي.JPG",
]

export default function CertificatesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Certificates & Achievements</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements that demonstrate my expertise and commitment to continuous learning
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {certificateFiles.map((filename, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="p-0">
                <div className="aspect-video relative overflow-hidden rounded-t-lg bg-gradient-to-br from-primary/10 to-primary/5">
                  <Image
                    src={`/certificates/${filename}`}
                    alt={filename}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2 text-lg leading-tight">{filename}</CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
