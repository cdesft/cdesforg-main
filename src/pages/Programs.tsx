import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { 
  BookOpen, 
  Users, 
  Award, 
  School, 
  Laptop, 
  Heart, 
  Megaphone,
  Gift,
  Calendar,
  Trophy,
  Lightbulb,
  HandHeart
} from "lucide-react"

export default function Programs() {
  const programs = [
    {
      icon: Award,
      title: "Scholarship Programs",
      description: "Financial support for deserving students to pursue their education without barriers. We provide comprehensive scholarships covering tuition, books, and other educational expenses.",
      features: ["Full and partial scholarships", "Merit-based awards", "Need-based assistance", "Ongoing support"]
    },
    {
      icon: Users,
      title: "Mentorship and Tutoring",
      description: "One-on-one guidance and academic support from experienced educators and professionals, focusing on Mathematics and Sciences.",
      features: ["Personal mentors", "Subject-specific tutoring", "Career guidance", "Life skills development"]
    },
    {
      icon: School,
      title: "Adopt a School Initiative",
      description: "Comprehensive support for entire schools through infrastructure development, teacher training, and resource provision.",
      features: ["Infrastructure support", "Teacher training", "Educational materials", "Technology integration"]
    },
    {
      icon: Laptop,
      title: "Digital Literacy Program",
      description: "Bridging the digital divide by providing technology access and computer literacy training to underserved communities.",
      features: ["Computer training", "Internet access", "Digital skills workshops", "Technology resources"]
    },
    {
      icon: Gift,
      title: "Grants",
      description: "Direct financial assistance for educational projects, research initiatives, and innovative teaching methods.",
      features: ["Research grants", "Project funding", "Innovation support", "Educational resources"]
    },
    {
      icon: Calendar,
      title: "Conference",
      description: "Educational conferences bringing together students, educators, and professionals to share knowledge and inspire excellence.",
      features: ["Annual conferences", "Expert speakers", "Networking opportunities", "Knowledge sharing"]
    },
    {
      icon: Trophy,
      title: "Exhibition",
      description: "Science and mathematics exhibitions showcasing student projects and innovations to encourage STEM participation.",
      features: ["Student showcases", "Innovation displays", "Competition events", "Public engagement"]
    },
    {
      icon: Gift,
      title: "Raffle Draw",
      description: "Fun fundraising events that also provide prizes and recognition for student achievements and community participation.",
      features: ["Educational prizes", "Community engagement", "Fundraising events", "Student recognition"]
    },
    {
      icon: Lightbulb,
      title: "Entertainment",
      description: "Educational entertainment programs that make learning fun and engaging while promoting STEM subjects.",
      features: ["Educational shows", "Interactive events", "Learning games", "Creative workshops"]
    },
    {
      icon: Megaphone,
      title: "Advocacy and Policy Reform",
      description: "Working with government and organizations to improve educational policies and create systemic change.",
      features: ["Policy advocacy", "Government partnerships", "Educational reform", "Systemic change"]
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              What We Do
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Programs
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Comprehensive initiatives designed to support, inspire, and empower students in their educational journey.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Our Initiatives</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transforming Education Together</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each program is carefully designed to address specific educational needs and create lasting impact in students' lives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="group hover:shadow-primary transition-all duration-300 h-full">
                <CardHeader>
                  <program.icon className="h-10 w-10 text-brand-primary mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-brand-primary mb-3">Key Features:</h4>
                    <ul className="space-y-1">
                      {program.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Our Impact</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Creating Lasting Change
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our programs are designed to create sustainable impact that goes beyond immediate assistance. We focus on building capacity, fostering independence, and creating systems that continue to benefit communities long after our direct involvement.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <HandHeart className="h-6 w-6 text-brand-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Holistic Support</h3>
                    <p className="text-muted-foreground text-sm">We address not just academic needs but also emotional and social development.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-brand-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Community Partnership</h3>
                    <p className="text-muted-foreground text-sm">We work closely with local communities to ensure programs meet real needs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Lightbulb className="h-6 w-6 text-brand-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Innovation Focus</h3>
                    <p className="text-muted-foreground text-sm">We continuously adapt and improve our programs based on feedback and results.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-brand-primary mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Students Supported</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-brand-primary mb-2">8</div>
                  <div className="text-sm text-muted-foreground">Partner Schools</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-brand-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Active Programs</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-brand-primary mb-2">2</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Involved in Our Programs
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Whether you want to support our programs financially, volunteer your time, or partner with us, there are many ways to make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-brand-primary hover:bg-gray-100">
              <Link to="/donate">
                Support Our Programs
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white bg-transparent text-white hover:bg-white hover:text-brand-primary">
              <Link to="/contact">
                Partner With Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}