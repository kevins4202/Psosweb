import { Heart, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import psosLogo from 'figma:asset/f9d386a3a5ceb09543fa709b38345cea866b2e59.png';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const scrollToSection = (sectionId: string) => {
    // Only scroll if we're on the home page
    if (currentPage === 'home') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're not on home page, navigate to home first
      onNavigate('home');
      // Then scroll after navigation
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleAboutClick = () => {
    onNavigate('about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHomeClick = () => {
    onNavigate('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBoardApplicationClick = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLScnIIefemONCTetjKFt7pnmcMLoK33TONZMcJunQogWtmRv_Q/viewform?usp=header", "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:projectsaveourskin.nj@gmail.com";
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-pink-100 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <button 
          onClick={handleHomeClick}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center p-1">
            <img 
              src={psosLogo} 
              alt="Project Save Our Skin Logo" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="text-xl text-gradient">Project Save Our Skin</span>
        </button>
        
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={handleAboutClick}
            className={`transition-colors duration-200 ${
              currentPage === 'about' 
                ? 'text-primary border-b-2 border-primary pb-1' 
                : 'text-gray-700 hover:text-primary'
            }`}
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-gray-700 hover:text-primary transition-colors duration-200"
          >
            Chapters
          </button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-gray-700 hover:text-primary transition-colors duration-200">
                Get Involved
                <ChevronDown className="w-4 h-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-56">
              <DropdownMenuItem onClick={() => scrollToSection('get-involved')} className="cursor-pointer">
                Learn More
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleBoardApplicationClick} className="cursor-pointer">
                Apply for a Board Position
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleEmailClick} className="cursor-pointer">
                Contact via Email
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-primary hover:bg-pink-600 text-white px-6 py-2 rounded-full transition-all duration-200"
          >
            Contact
          </Button>
        </nav>
        
        {/* Mobile menu button */}
        <button className="md:hidden p-2">
          <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-600"></div>
        </button>
      </div>
    </header>
  );
}