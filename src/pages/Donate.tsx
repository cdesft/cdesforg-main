import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, CreditCard, Coins, Heart, Users, BookOpen, Award, Check } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function Donate() {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null)
  const { toast } = useToast()

  const bankAccounts = [
    {
      bank: "First Bank of Nigeria",
      accountName: "Charles Daniel Educational Support Foundation",
      accountNumber: "3147893456",
      sortCode: "",
      currency: "NGN"
    },
    {
      bank: "Royal Bank of Canada (RBC)",
      accountName: "Charles Daniel Educational Support Foundation",
      accountNumber: "1002-345-6789",
      transitNumber: "",
      institutionNumber: "",
      currency: "CAD"
    }
  ]

  const cryptoAddresses = [
    {
      currency: "Bitcoin (BTC)",
      address: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
      network: "Bitcoin Network"
    },
    {
      currency: "Ethereum (ETH)",
      address: "0x742d35Cc6669B432c4a7e89cd8b1a8c7A1D8e12a",
      network: "Ethereum Network"
    },
    {
      currency: "USDT",
      address: "0x742d35Cc6669B432c4a7e89cd8b1a8c7A1D8e12a",
      network: "Ethereum Network (ERC-20)"
    }
  ]

  const donationImpact = [
    {
      amount: "$25",
      impact: "Provides textbooks for one student for a semester",
      icon: BookOpen
    },
    {
      amount: "$50",
      impact: "Funds one month of tutoring for a struggling student",
      icon: Users
    },
    {
      amount: "$100",
      impact: "Sponsors a student's examination fees and materials",
      icon: Award
    },
    {
      amount: "$250",
      impact: "Covers a partial scholarship for one term",
      icon: Heart
    }
  ]

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedAccount(type)
      toast({
        title: "Copied!",
        description: `${type} copied to clipboard`,
      })
      setTimeout(() => setCopiedAccount(null), 2000)
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive"
      })
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              Make a Difference
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Support Our Mission
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Your generous donation helps us provide quality education and opportunities to underprivileged students worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Your Impact</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Your Donation Helps</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every contribution, no matter the size, makes a meaningful difference in a student's life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {donationImpact.map((item, index) => (
              <Card key={index} className="text-center group hover:shadow-primary transition-all duration-300">
                <CardHeader>
                  <item.icon className="h-10 w-10 mx-auto text-brand-primary mb-3 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-2xl font-bold text-brand-primary">{item.amount}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.impact}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Methods */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Donation Methods</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Preferred Method</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer multiple secure ways to make your donation convenient and accessible.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="bank" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="bank" className="flex items-center space-x-2">
                  <CreditCard className="h-4 w-4" />
                  <span>Bank Transfer</span>
                </TabsTrigger>
                <TabsTrigger value="crypto" className="flex items-center space-x-2">
                  <Coins className="h-4 w-4" />
                  <span>Cryptocurrency</span>
                </TabsTrigger>
                <TabsTrigger value="card" className="flex items-center space-x-2">
                  <CreditCard className="h-4 w-4" />
                  <span>Credit Card</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="bank" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {bankAccounts.map((account, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <CreditCard className="h-5 w-5 text-brand-primary" />
                          <span>{account.bank}</span>
                        </CardTitle>
                        <CardDescription>Direct bank transfer ({account.currency})</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Account Name</p>
                            <p className="font-mono text-sm bg-muted p-2 rounded">{account.accountName}</p>
                          </div>
                          
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Account Number</p>
                            <div className="flex items-center space-x-2">
                              <p className="font-mono text-lg font-bold bg-muted p-2 rounded flex-1">{account.accountNumber}</p>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => copyToClipboard(account.accountNumber, `${account.bank} Account`)}
                              >
                                {copiedAccount === `${account.bank} Account` ? (
                                  <Check className="h-4 w-4" />
                                ) : (
                                  <Copy className="h-4 w-4" />
                                )}
                              </Button>
                            </div>
                          </div>

                          {account.sortCode && (
                            <div>
                              <p className="text-sm font-medium text-muted-foreground">Sort Code</p>
                              <p className="font-mono text-sm bg-muted p-2 rounded">{account.sortCode}</p>
                            </div>
                          )}

                          {account.transitNumber && (
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <p className="text-sm font-medium text-muted-foreground">Transit Number</p>
                                <p className="font-mono text-sm bg-muted p-2 rounded">{account.transitNumber}</p>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-muted-foreground">Institution</p>
                                <p className="font-mono text-sm bg-muted p-2 rounded">{account.institutionNumber}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="crypto" className="space-y-6">
                <div className="grid gap-6">
                  {cryptoAddresses.map((crypto, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Coins className="h-5 w-5 text-brand-primary" />
                          <span>{crypto.currency}</span>
                        </CardTitle>
                        <CardDescription>{crypto.network}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-2">Wallet Address</p>
                          <div className="flex items-center space-x-2">
                            <p className="font-mono text-sm bg-muted p-3 rounded flex-1 break-all">{crypto.address}</p>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => copyToClipboard(crypto.address, `${crypto.currency} Address`)}
                            >
                              {copiedAccount === `${crypto.currency} Address` ? (
                                <Check className="h-4 w-4" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <Card className="bg-yellow-50 dark:bg-yellow-950/30 border-yellow-200 dark:border-yellow-800">
                  <CardContent className="p-4">
                    <p className="text-sm text-yellow-800 dark:text-yellow-200">
                      <strong>Important:</strong> Please ensure you're sending to the correct network. Double-check the address before sending your donation.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="card" className="space-y-6">
                <Card>
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">Credit Card Donations</CardTitle>
                    <CardDescription>
                      Secure online payment processing coming soon
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div className="p-8 border-2 border-dashed border-muted-foreground/30 rounded-lg">
                      <CreditCard className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Online Payment Portal</h3>
                      <p className="text-muted-foreground mb-4">
                        We're currently setting up our secure online payment system to accept credit card donations.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        In the meantime, please use bank transfer or cryptocurrency options above.
                      </p>
                    </div>
                    
                    <Button variant="outline" asChild>
                      <a href="mailto:charlesdanielfoundation@gmail.com?subject=Credit Card Donation Inquiry">
                        Get Notified When Available
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Why Your Support Matters</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transforming Lives Through Education
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Your donation directly supports students who face financial barriers to quality education. Every contribution helps us bridge the educational gap and create opportunities for academic excellence.
                </p>
                <p>
                  We focus on Mathematics and Sciences education, providing scholarships, mentorship, tutoring, and resources to students in Nigeria, Canada, and beyond.
                </p>
                <p>
                  As a registered non-profit organization in both Nigeria (RC: 7343716) and Canada (CN: 1602688-5), we ensure transparency and accountability in how we use your generous donations.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-brand-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Transparent Use of Funds</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-brand-primary mb-2">2</div>
                  <div className="text-sm text-muted-foreground">Countries Served</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-brand-primary mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Students Supported</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-brand-primary mb-2">3+</div>
                  <div className="text-sm text-muted-foreground">Partner Schools</div>
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
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Your support helps us continue our mission of providing quality education to students who need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-brand-primary hover:bg-gray-100">
              <a href="mailto:receipts@charlesdanielesf.org?subject=Donation Receipt Request">
                Get Donation Receipt
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white bg-transparent text-white hover:bg-white hover:text-brand-primary">
              <a href="/contact">
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}