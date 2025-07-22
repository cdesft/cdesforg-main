import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"
import { ArrowRight, Users, Award, BookOpen, Heart, Target, Eye } from "lucide-react"

export default function Home() {
  const stats = [
    { number: "2023", label: "Founded in Nigeria" },
    { number: "2024", label: "Registered in Canada" },
    { number: "3+", label: "Partner Schools" },
    { number: "100+", label: "Students Supported" },
  ]

  const values = [
    { icon: Users, title: "Equity", description: "Ensuring fair access to educational opportunities" },
    { icon: Heart, title: "Inclusion", description: "Embracing diversity in all our programs" },
    { icon: Target, title: "Empowerment", description: "Building confidence and capabilities" },
    { icon: BookOpen, title: "Excellence", description: "Striving for the highest standards" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://i.ibb.co/7JwcyFYB/15-1280x963.jpg')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/60 to-brand-secondary/60" />
        </div>
        
        <div className="relative z-10 container text-center text-white">
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
            Empowering Education Since 2023
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Charles Daniel Educational <br />
            <span className="text-yellow-300">Support Foundation</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            Bridging educational gaps and inspiring excellence in Mathematics and Sciences for underprivileged students worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-brand-primary hover:bg-gray-100">
              <Link to="/about">
                Learn About Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white bg-transparent text-white hover:bg-white hover:text-brand-primary">
              <Link to="/donate">
                Support Our Mission
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Our Purpose</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transforming Lives Through Education
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Target className="h-5 w-5 mr-2 text-brand-primary" />
                    Mission
                  </h3>
                  <p className="text-muted-foreground">
                    To bridge the educational gap for underprivileged students by providing resources, support, and opportunities for success.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Eye className="h-5 w-5 mr-2 text-brand-primary" />
                    Vision
                  </h3>
                  <p className="text-muted-foreground">
                    To create a world where every student has access to quality education, regardless of their background or circumstances and encourage hard work and dedication.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <Card key={index} className="text-center">
                  <CardHeader className="pb-4">
                    <value.icon className="h-8 w-8 mx-auto text-brand-primary mb-2" />
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription>{value.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">What We Do</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Programs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive initiatives designed to support and inspire students in their educational journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-primary transition-all duration-300">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-brand-primary mb-2" />
                <CardTitle>Scholarship Programs</CardTitle>
                <CardDescription>
                  Financial support for deserving students to pursue their education without barriers.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="group hover:shadow-primary transition-all duration-300">
              <CardHeader>
                <Users className="h-8 w-8 text-brand-primary mb-2" />
                <CardTitle>Mentorship & Tutoring</CardTitle>
                <CardDescription>
                  One-on-one guidance and academic support from experienced educators and professionals.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="group hover:shadow-primary transition-all duration-300">
              <CardHeader>
                <Award className="h-8 w-8 text-brand-primary mb-2" />
                <CardTitle>Recognition Awards</CardTitle>
                <CardDescription>
                  Celebrating excellence and encouraging high performance in STEM subjects.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/programs">
                View All Programs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Your support can transform lives and create opportunities for the next generation of leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-brand-primary hover:bg-gray-100">
              <Link to="/donate">
                Donate Now
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white bg-transparent text-white hover:bg-white hover:text-brand-primary">
              <Link to="/contact">
                Get Involved
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}