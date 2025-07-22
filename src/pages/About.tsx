import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Calendar, MapPin, Award, Users, Target, Eye, Heart, BookOpen } from "lucide-react"

export default function About() {
  const objectives = [
    "To Promote Educational Advancement Of The Underprivileged In Our Society",
    "To Bring, Stimulate And Inspire Hope To Underprivileged Children",
    "To promote and provide platforms for Encouraging Children and youth to study mathematics and sciences",
    "To Encourage And Provide Platforms For Children To Engage In Extracurricular Academic Activities",
    "To Increase The Awareness Of Children On The Need To Participate In Community Service Initiatives",
    "To Raise A Generation Of Change Agents/Nation Builders",
    "To Encourage And Provide Valuable And Life Changing Mentorship To Underprivileged And Privileged Children",
    "To Promote And Improve The Educational Outcomes Of Underprivileged Children By Enhancing Teachers Quality Through Appropriate Professional Development",
    "To Collaborate With The Government, Non-Governmental Agencies And Organizations To Partnership In Academic And Educational Advancement"
  ]

  const values = [
    { icon: Users, title: "Equity", description: "Ensuring fair access to educational opportunities for all students" },
    { icon: Heart, title: "Inclusion", description: "Embracing diversity and creating welcoming environments" },
    { icon: Target, title: "Empowerment", description: "Building confidence and capabilities in every student" },
    { icon: BookOpen, title: "Collaboration", description: "Working together with communities and partners" },
    { icon: Award, title: "Excellence", description: "Striving for the highest standards in everything we do" }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              Our Story
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Our Foundation
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Founded with passion and driven by purpose to transform education for underprivileged students worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Foundation Story */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Our Beginning</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Charles Daniel Educational Support Foundation
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2023 in Nigeria and 2024 in Canada by the family of Charles Daniel and supported by educators, consultants, and social entrepreneurs, CDESF was established to support the course of reaching out to the less privileged child and encourage the gifted and high-performing children in basic and high schools around the world in general, specifically in Nigeria and Canada in Mathematics and Sciences.
                </p>
                <p>
                  The establishment of the Charles Daniel Educational Support Foundation was stimulated by the drive, passion, and urge of Diepreye David Charles-Daniel; Nigerian born Nigeria and Global Mathematics Champion and multiple awards Winner to give back to society from his wealth of experience and other resources.
                </p>
                <p>
                  Diepreye David Charles-Daniel; the organization's President, graduated from Graceland International Schools, Port Harcourt Nigeria, and is currently a Software Engineering student of the University of Alberta, Canada.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader className="flex flex-row items-center space-y-0 space-x-4">
                  <Calendar className="h-8 w-8 text-brand-primary" />
                  <div>
                    <CardTitle>Established</CardTitle>
                    <CardDescription>2023 in Nigeria, 2024 in Canada</CardDescription>
                  </div>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center space-y-0 space-x-4">
                  <MapPin className="h-8 w-8 text-brand-primary" />
                  <div>
                    <CardTitle>Registration</CardTitle>
                    <CardDescription>RC: 7343716 (Nigeria) | CN: 1602688-5 (Canada)</CardDescription>
                  </div>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center space-y-0 space-x-4">
                  <Award className="h-8 w-8 text-brand-primary" />
                  <div>
                    <CardTitle>Legal Status</CardTitle>
                    <CardDescription>Registered under Nigerian Corporate Affairs Commission and Canada Not-for-Profit Corporation Act</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-l-4 border-l-brand-primary">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Target className="h-6 w-6 mr-3 text-brand-primary" />
                  Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  To bridge the educational gap for underprivileged students by providing resources, support, and opportunities for success.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-brand-primary">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Eye className="h-6 w-6 mr-3 text-brand-primary" />
                  Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  To create a world where every student has access to quality education, regardless of their background or circumstances and encourage hard work and dedication.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Our Goals</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Objectives & Programs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive approach to educational support and community development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((objective, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <p className="text-sm">{objective}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Drives Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The core principles that guide our work and shape our impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-primary transition-all duration-300">
                <CardHeader>
                  <value.icon className="h-10 w-10 mx-auto text-brand-primary mb-3 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Group */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Who We Serve</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Target Group</h2>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <p className="text-lg text-center text-muted-foreground">
                <strong>Disadvantaged and high-performing students, schools, and communities.</strong>
              </p>
              <p className="text-center text-muted-foreground mt-4">
                We focus on supporting students who face financial barriers to education while also recognizing and encouraging those who demonstrate exceptional academic performance in Mathematics and Sciences.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Be Part of Our Story
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Join us in our mission to transform education and create opportunities for students worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-brand-primary hover:bg-gray-100">
              <Link to="/donate">
                Support Our Mission
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white bg-transparent text-white hover:bg-white hover:text-brand-primary">
              <Link to="/contact">
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}