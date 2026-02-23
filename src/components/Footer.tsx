import { Heart, Mail, MapPin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Organization Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary rounded-full">
                <Heart className="w-6 h-6" />
              </div>
              <span className="text-xl">Project Save Our Skin</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Dedicated to advocating for prevention of skin disease through education, providing access 
              to essential products for skin health, and empowering individuals to find confidence in their own skin.
            </p>
            <div className="space-y-2 text-gray-400 mb-6">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>projectsaveourskin@gmail.com</span>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com/projectsaveourskin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a
                href="https://tiktok.com/@projectsaveourskin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </div>
                <span>TikTok</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#mission" className="hover:text-white transition-colors">Our Mission</a></li>
              <li><a href="#impact" className="hover:text-white transition-colors">Our Impact</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Chapter Locations */}
          <div>
            <h4 className="mb-4">Our Chapters</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Chicago, IL</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Ann Arbor, MI</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Union County, NJ</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Project Save Our Skin. All rights reserved.</p>
          <p className="mt-2 text-sm">
            This website is for educational purposes. Always consult with healthcare professionals for medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}