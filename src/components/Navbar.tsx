import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ThemeToggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import logo from "@/assets/logo.png"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { 
    name: "Programs", 
    href: "/programs",
    submenu: [
      { name: "Our Programs", href: "/programs" },
      { name: "Awards", href: "/awards" }
    ]
  },
  { name: "Our Team", href: "/team" },
  { name: "Partners", href: "/partners" },
  { name: "Contact", href: "/contact" },
  { name: "Donate", href: "/donate" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (href: string) => location.pathname === href

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <img src={logo} alt="CDESF Logo" className="h-10 w-10" />
            <span className="hidden font-bold sm:inline-block text-brand-primary">
              CDESF
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground/80 hover:text-foreground transition-colors">
                      <span>{item.name}</span>
                      <ChevronDown className="h-3 w-3" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-48">
                      {item.submenu.map((subItem) => (
                        <DropdownMenuItem key={subItem.name} asChild>
                          <Link 
                            to={subItem.href}
                            className={`w-full ${isActive(subItem.href) ? 'bg-accent text-accent-foreground' : ''}`}
                          >
                            {subItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    to={item.href}
                    className={`transition-colors hover:text-foreground/80 ${
                      isActive(item.href) ? 'text-foreground font-semibold' : 'text-foreground/60'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
        
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link
              to="/"
              className="flex items-center space-x-2"
              onClick={() => setIsOpen(false)}
            >
              <img src={logo} alt="CDESF Logo" className="h-8 w-8" />
              <span className="font-bold text-brand-primary">CDESF</span>
            </Link>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <div className="flex flex-col space-y-2">
                        <span className="font-medium text-sm">{item.name}</span>
                        <div className="flex flex-col space-y-2 ml-4">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className={`text-muted-foreground hover:text-foreground transition-colors ${
                                isActive(subItem.href) ? 'text-foreground font-medium' : ''
                              }`}
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className={`text-muted-foreground hover:text-foreground transition-colors ${
                          isActive(item.href) ? 'text-foreground font-medium' : ''
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link to="/" className="flex items-center space-x-2 md:hidden">
              <img src={logo} alt="CDESF Logo" className="h-8 w-8" />
              <span className="font-bold text-brand-primary">CDESF</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-2">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </nav>
  )
}