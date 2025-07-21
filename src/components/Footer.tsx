import { Link } from "react-router-dom"
import { Mail, Phone, MapPin } from "lucide-react"
import logo from "@/assets/logo.png"

export function Footer() {
  return (
    <footer className="bg-brand-primary text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="CDESF Logo" className="h-10 w-10" />
              <span className="font-bold text-lg">CDESF</span>
            </div>
            <p className="text-sm text-gray-300">
              Supporting underprivileged students and encouraging excellence in Mathematics and Sciences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-white transition-colors">Programs</Link></li>
              <li><Link to="/awards" className="text-gray-300 hover:text-white transition-colors">Awards</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-white transition-colors">Our Team</Link></li>
              <li><Link to="/donate" className="text-gray-300 hover:text-white transition-colors">Donate</Link></li>
            </ul>
          </div>

          {/* Contact Nigeria */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Nigeria Office</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>11D Circular Road, Presidential Estate, Port Harcourt, Nigeria</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+234 803 316 8956</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+234 803 390 8540</span>
              </li>
            </ul>
          </div>

          {/* Contact Canada */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Canada Office</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>11540 78 Ave NW, Edmonton AB T6G 0N5, Canada</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 587-594-6476</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>charlesdanielfoundation@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-300">
              RC: 7343716 (Nigeria) | CN: 1602688-5 (Canada)
            </p>
            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} Charles Daniel Educational Support Foundation - All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}