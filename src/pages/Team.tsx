import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Mail, Linkedin, Users, Award, BookOpen, Heart } from "lucide-react"

export default function Team() {
  const teamMembers = [
    {
      name: "Diepreye David Charles-Daniel",
      role: "President & Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Nigerian born Nigeria and Global Mathematics Champion and multiple awards Winner. Graduated from Graceland International Schools, Port Harcourt Nigeria, and is currently a Software Engineering student at the University of Alberta, Canada.",
      achievements: [
        "Global Mathematics Champion",
        "Multiple Award Winner",
        "Software Engineering Student - University of Alberta",
        "Graceland International Schools Graduate"
      ],
      email: "president@charlesdanielfoundation.com"
    }
  ]

  const supportTeam = [
    {
      category: "Educators",
      description: "Experienced teachers and professors who provide academic guidance and curriculum development support.",
      icon: BookOpen,
      color: "text-blue-600"
    },
    {
      category: "Consultants",
      description: "Educational consultants who help design and implement effective programs and strategies.",
      icon: Users,
      color: "text-green-600"
    },
    {
      category: "Social Entrepreneurs",
      description: "Innovative leaders who bring creative solutions to educational challenges and community development.",
      icon: Heart,
      color: "text-purple-600"
    },
    {
      category: "Volunteers",
      description: "Dedicated individuals who contribute their time and skills to support our mission and programs.",
      icon: Award,
      color: "text-orange-600"
    }
  ]

  const values = [
    {
      title: "Passion for Education",
      description: "Every team member shares a deep commitment to transforming lives through education."
    },
    {
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, from program delivery to student support."
    },
    {
      title: "Collaboration",
      description: "We believe in the power of working together to achieve greater impact and reach more students."
    },
    {
      title: "Innovation",
      description: "We continuously seek new and better ways to address educational challenges and opportunities."
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              Meet Our Team
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Dedicated professionals, educators, and volunteers working together to transform education and empower students worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Leadership</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Founder & President</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The visionary leader who founded CDESF with a passion for giving back to society and transforming education.
            </p>
          </div>

          {teamMembers.map((member, index) => (
            <Card key={index} className="max-w-4xl mx-auto overflow-hidden">
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Photo */}
                <div className="lg:col-span-1">
                  <div className="aspect-square lg:aspect-auto lg:h-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="lg:col-span-2 p-8 lg:p-12">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold mb-2">{member.name}</h3>
                    <p className="text-xl text-brand-primary font-semibold">{member.role}</p>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {member.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-brand-primary rounded-full mr-3 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={`mailto:${member.email}`}>
                        <Mail className="h-4 w-4 mr-2" />
                        Contact
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Support Team */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Support Network</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Extended Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              CDESF is supported by a diverse network of professionals who contribute their expertise and passion to our mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportTeam.map((team, index) => (
              <Card key={index} className="text-center group hover:shadow-primary transition-all duration-300">
                <CardHeader>
                  <team.icon className={`h-12 w-12 mx-auto ${team.color} mb-3 group-hover:scale-110 transition-transform`} />
                  <CardTitle className="text-lg">{team.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{team.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">What Unites Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Shared Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our team and drive our collective commitment to educational excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-primary transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-brand-primary transition-colors">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Are you passionate about education and want to make a difference? We're always looking for dedicated individuals to join our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-brand-primary hover:bg-gray-100">
              <Link to="/contact">
                Get Involved
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-primary">
              <a href="mailto:charlesdanielfoundation@gmail.com">
                Volunteer With Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}