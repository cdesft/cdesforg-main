import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Award, Users, Star, Trophy } from "lucide-react"
import awardCeremony from "@/assets/award-ceremony.jpg"

export default function Awards() {
  const awards = [
    {
      school: "Graceland International School",
      title: "Special Awards in recognition of High Performance in Extracurricular STEM Activities",
      description: "Special Awards in recognition of High Performance in Extracurricular STEM Activities to deserving students of Graceland International School in Port Harcourt Nigeria by Charles Daniel Educational Support Foundation during the Class of 2024 Graduation and Awards Ceremony on the 24th July, 2024",
      date: "July 24, 2024",
      location: "Port Harcourt, Nigeria",
      type: "Student Awards",
      icon: Trophy,
      images: [
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop&crop=center"
      ]
    },
    {
      school: "Aladumo International School",
      title: "CHARLES DANIEL EDUCATIONAL SUPPORT FOUNDATION AWARD 2024",
      description: "CHARLES DANIEL EDUCATIONAL SUPPORT FOUNDATION AWARD 2024 to deserving students of Aladumo International School. The school was also specially awarded for Special Recognition. One of the pictures shows the Executive Director receiving award on behalf of the school.",
      date: "2024",
      location: "Nigeria",
      type: "School & Student Recognition",
      icon: Award,
      images: [
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop&crop=center"
      ]
    },
    {
      school: "Nigerian Airforce Secondary School",
      title: "2024 Speech, Award and Graduation Ceremony Recognition",
      description: "In furtherance of our partnership with educational institutions, the Executive Director of Charles Daniel Educational Support Foundation was a Special Guest in the 2024 Nigerian Airforce Secondary school Speech, Award and Graduation Ceremony CDESF awarded some graduating students as well as the school.",
      date: "2024",
      location: "Nigeria",
      type: "Partnership Award",
      icon: Star,
      images: [
        "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop&crop=center"
      ]
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              Recognition & Excellence
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Awards & Recognition
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Celebrating academic excellence and recognizing outstanding achievements in education.
            </p>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Our Recognition Programs</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Honoring Excellence</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Through our award programs, we celebrate and encourage academic excellence, recognizing both individual student achievements and institutional contributions to education.
            </p>
          </div>

          <div className="space-y-16">
            {awards.map((award, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center space-x-3 mb-4">
                      <award.icon className="h-8 w-8 text-brand-primary" />
                      <Badge variant="outline">{award.type}</Badge>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                      {award.school}
                    </h3>
                    
                    <h4 className="text-lg font-semibold text-brand-primary mb-4">
                      {award.title}
                    </h4>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {award.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{award.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{award.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Image Gallery */}
                  <div className="grid grid-cols-2 gap-2 p-4">
                    {award.images.map((image, imageIndex) => (
                      <div key={imageIndex} className="aspect-square overflow-hidden rounded-lg">
                        <img 
                          src={image} 
                          alt={`${award.school} award ceremony ${imageIndex + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Award Categories */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Award Categories</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Types of Recognition</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive award system recognizes various forms of excellence and contribution to education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center group hover:shadow-primary transition-all duration-300">
              <CardHeader>
                <Trophy className="h-12 w-12 mx-auto text-brand-primary mb-3 group-hover:scale-110 transition-transform" />
                <CardTitle>Student Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Recognizing outstanding academic performance in Mathematics and Sciences
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-primary transition-all duration-300">
              <CardHeader>
                <Award className="h-12 w-12 mx-auto text-brand-primary mb-3 group-hover:scale-110 transition-transform" />
                <CardTitle>School Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Honoring institutions that demonstrate exceptional commitment to education
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-primary transition-all duration-300">
              <CardHeader>
                <Star className="h-12 w-12 mx-auto text-brand-primary mb-3 group-hover:scale-110 transition-transform" />
                <CardTitle>STEM Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Special recognition for exceptional performance in extracurricular STEM activities
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-primary transition-all duration-300">
              <CardHeader>
                <Users className="h-12 w-12 mx-auto text-brand-primary mb-3 group-hover:scale-110 transition-transform" />
                <CardTitle>Partnership Awards</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Celebrating successful collaborations in educational advancement
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Nominate Outstanding Students and Schools
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Know a student or school that deserves recognition? Help us celebrate excellence by nominating them for our awards program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-brand-primary hover:bg-gray-100">
              <a href="mailto:charlesdanielfoundation@gmail.com">
                Submit Nomination
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-primary">
              <a href="/contact">
                Learn More
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}