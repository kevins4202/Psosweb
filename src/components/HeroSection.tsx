import { Heart, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import psosLogo from 'figma:asset/f9d386a3a5ceb09543fa709b38345cea866b2e59.png';

export function HeroSection() {
  const chapters = [
    { name: "Chicago, IL", location: "Chicago", route: "chicago" },
    { name: "Ann Arbor, MI", location: "Ann Arbor", route: "michigan", affiliation: "University of Michigan" },
    { name: "Union County, NJ", location: "Union County", route: "newjersey" },
    { name: "Iowa City, IA", location: "Iowa", route: "iowa", comingSoon: true, affiliation: "University of Iowa" }
  ];

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-[var(--pink-light)] via-white to-[var(--matcha-light)] min-h-screen flex items-center">
      <div className="container mx-auto px-4 text-center">
        <div className="fade-in">
          {/* Logo and organization name */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center p-2">
              <img 
                src={psosLogo} 
                alt="Project Save Our Skin Logo" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl mb-6 text-gradient">
            Project Save Our Skin
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Empowering communities through skin cancer awareness, prevention, and early detection. 
            Together, we can save lives and protect the ones we love.
          </p>
          
          {/* Chapter location buttons */}
          <div id="projects" className="mb-8">
            <h3 className="text-xl mb-6 text-gray-700">Find Your Local Chapter</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {chapters.map((chapter, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-pink-100 hover:border-pink-200 bg-white/80 backdrop-blur-sm flex flex-col justify-between">
                  <div className="flex items-start gap-3 mb-4 text-left">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-lg font-medium leading-tight">{chapter.name}</div>
                      {chapter.affiliation && (
                        <div className="text-sm text-gray-500 mt-1">{chapter.affiliation}</div>
                      )}
                    </div>
                  </div>
                  <Button 
                    className={`w-full rounded-full transition-all duration-200 ${
                      chapter.comingSoon 
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed hover:bg-gray-100" 
                        : "bg-primary hover:bg-[var(--pink-dark)] text-white"
                    }`}
                    onClick={() => {
                      if (!chapter.comingSoon) {
                        window.dispatchEvent(new CustomEvent('navigate', { detail: chapter.route }));
                      }
                    }}
                    disabled={chapter.comingSoon}
                  >
                    {chapter.comingSoon ? "Coming Soon" : `Visit ${chapter.location}`}
                  </Button>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-[var(--pink-dark)] text-white px-8 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
              onClick={() => document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn Our Mission
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-[var(--matcha-primary)] text-[var(--matcha-primary)] hover:bg-[var(--matcha-light)] px-8 py-3 rounded-full transition-all duration-200"
              onClick={() => document.getElementById('get-involved')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Involved
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
