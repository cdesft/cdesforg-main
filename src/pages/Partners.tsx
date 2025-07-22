import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { 
  School, 
  Building, 
  Users, 
  Handshake, 
  Target, 
  Globe,
  Heart,
  BookOpen,
  Award,
  Lightbulb
} from "lucide-react"

export default function Partners() {
  const partnerCategories = [
    {
      icon: School,
      title: "Local Schools",
      description: "Educational institutions that collaborate with us to implement programs and support student development.",
      examples: [
        "Graceland International School",
        "Aladumo International School", 
        "Nigerian Airforce Secondary School"
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/30"
    },
    {
      icon: Users,
      title: "Community Organizations",
      description: "Local community groups and NGOs that help us reach underserved populations and implement grassroots programs.",
      examples: [
        "Local Education Committees",
        "Parent-Teacher Associations",
        "Youth Development Organizations"
      ],
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-950/30"
    },
    {
      icon: Building,
      title: "Government Agencies",
      description: "Federal, state, and local government departments that support policy reform and program implementation.",
      examples: [
        "Ministry of Education (Nigeria)",
        "Department of Education (Canada)",
        "Local Education Authorities"
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/30"
    },
    {
      icon: Heart,
      title: "Corporate Sponsors",
      description: "Private sector partners who provide financial support, resources, and expertise to advance our mission.",
      examples: [
        "Technology Companies",
        "Financial Institutions",
        "Educational Publishers"
      ],
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/30"
    }
  ]

  const benefits = [
    {
      icon: Target,
      title: "Shared Impact",
      description: "Work together to create meaningful change in education and student outcomes."
    },
    {
      icon: Globe,
      title: "Expanded Reach",
      description: "Leverage combined networks and resources to support more students and communities."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Collaborate on innovative solutions to educational challenges and opportunities."
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Gain recognition for your commitment to educational excellence and social responsibility."
    }
  ]

  const partnershipTypes = [
    {
      title: "Program Partnership",
      description: "Collaborate directly in implementing and delivering educational programs to students.",
      commitment: "Medium to Long-term",
      involvement: "High"
    },
    {
      title: "Financial Sponsorship",
      description: "Provide financial support for scholarships, infrastructure, or program development.",
      commitment: "Flexible",
      involvement: "Low to Medium"
    },
    {
      title: "Resource Sharing",
      description: "Share facilities, equipment, expertise, or other resources to support our mission.",
      commitment: "Short to Medium-term",
      involvement: "Medium"
    },
    {
      title: "Advocacy Partnership",
      description: "Join us in advocating for policy changes and educational reforms.",
      commitment: "Ongoing",
      involvement: "Medium to High"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              Collaboration & Partnership
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Partners
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Building strong partnerships to amplify our impact and create sustainable change in education.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Who We Work With</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Partnership Categories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We collaborate with diverse organizations and institutions to create comprehensive educational support systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnerCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-primary transition-all duration-300">
                <CardHeader className={`${category.bgColor} rounded-t-lg`}>
                  <div className="flex items-center space-x-3">
                    <category.icon className={`h-8 w-8 ${category.color}`} />
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base mt-3">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wide">
                    Examples:
                  </h4>
                  <ul className="space-y-2">
                    {category.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-center text-sm">
                        <div className={`w-2 h-2 rounded-full mr-3 flex-shrink-0 ${category.color.replace('text-', 'bg-')}`} />
                        {example}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Why Partner With Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Partnership Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the mutual benefits of partnering with CDESF to advance education and create lasting impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center group hover:shadow-primary transition-all duration-300">
                <CardHeader>
                  <benefit.icon className="h-12 w-12 mx-auto text-brand-primary mb-3 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Partnership Options</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Types of Partnership</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Flexible partnership models to match your organization's capacity and interests.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {partnershipTypes.map((type, index) => (
              <Card key={index} className="group hover:shadow-primary transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-brand-primary transition-colors">
                    {type.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-muted-foreground">Commitment:</span>
                      <p className="text-foreground">{type.commitment}</p>
                    </div>
                    <div>
                      <span className="font-medium text-muted-foreground">Involvement:</span>
                      <p className="text-foreground">{type.involvement}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Getting Started</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Partnership Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A simple and transparent process to establish meaningful partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Initial Contact",
                description: "Reach out to discuss your interest and explore partnership opportunities."
              },
              {
                step: "2", 
                title: "Needs Assessment",
                description: "We work together to identify mutual goals and partnership structure."
              },
              {
                step: "3",
                title: "Agreement",
                description: "Formalize the partnership with clear objectives and expectations."
              },
              {
                step: "4",
                title: "Implementation",
                description: "Begin collaboration and work together to achieve shared goals."
              }
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                    {item.step}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Become Our Partner
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Join us in our mission to transform education and create opportunities for students worldwide. Together, we can make a greater impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-brand-primary hover:bg-gray-100">
              <Link to="/contact">
                Start Partnership Discussion
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white bg-transparent text-white hover:bg-white hover:text-brand-primary">
              <a href="mailto:charlesdanielfoundation@gmail.com">
                Email Us Directly
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}