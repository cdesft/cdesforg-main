import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    })
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    })
    setIsSubmitting(false)
  }

  const contacts = [
    {
      location: "Nigeria Office",
      address: "11D Circular Road, Presidential Estate, Port Harcourt, Nigeria",
      phones: ["+234 803 316 8956", "+234 803 390 8540"],
      email: "office-ng@charlesdanielesf.org",
      hours: "Monday - Friday: 9:00 AM - 5:00 PM",
      icon: MapPin,
      color: "text-green-600"
    },
    {
      location: "Canada Office", 
      address: "11540 78 Ave NW, Edmonton AB T6G 0N5, Canada",
      phones: ["+1 587-594-6476"],
      email: "office-cad@charlesdanielesf.org",
      hours: "Monday - Friday: 9:00 AM - 5:00 PM (MST)",
      icon: MapPin,
      color: "text-blue-600"
    }
  ]

  const quickContact = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us an email for general inquiries",
      contact: "hello@charlesdanielesf.org",
      action: "mailto:hello@charlesdanielesf.org"
    },
    {
      icon: Phone,
      title: "Call Nigeria",
      description: "Speak with our Nigeria team",
      contact: "+234 803 316 8956",
      action: "tel:+2348033168956"
    },
    {
      icon: Phone,
      title: "Call Canada",
      description: "Speak with our Canada team",
      contact: "+1 587-594-6476",
      action: "tel:+15875946476"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Quick Contact</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch Quickly</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the most convenient way to reach out to us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {quickContact.map((item, index) => (
              <Card key={index} className="text-center group hover:shadow-primary transition-all duration-300">
                <CardHeader>
                  <item.icon className="h-10 w-10 mx-auto text-brand-primary mb-3 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <a href={item.action}>{item.contact}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Office Info */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <Badge variant="outline" className="mb-4">Send Message</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Leave Us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Your phone number"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us how we can help you..."
                        rows={6}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Information */}
            <div>
              <div className="mb-8">
                <Badge variant="outline" className="mb-4">Our Offices</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Our Offices</h2>
                <p className="text-muted-foreground">
                  We have offices in both Nigeria and Canada to better serve our communities.
                </p>
              </div>

              <div className="space-y-6">
                {contacts.map((contact, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <contact.icon className={`h-6 w-6 ${contact.color}`} />
                        <CardTitle className="text-lg">{contact.location}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-4 w-4 mt-1 text-muted-foreground flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">{contact.address}</p>
                      </div>
                      
                      <div className="space-y-2">
                        {contact.phones.map((phone, phoneIndex) => (
                          <div key={phoneIndex} className="flex items-center space-x-3">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                              {phone}
                            </a>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <a href={`mailto:${contact.email}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                          {contact.email}
                        </a>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">{contact.hours}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Whether you want to support our programs, partner with us, or learn more about our work, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-brand-primary hover:bg-gray-100">
              <a href="/donate">
                Support Our Mission
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-primary">
              <a href="/programs">
                Learn About Programs
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}