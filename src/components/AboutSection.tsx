import { Heart, Award, MapPin, Users, GraduationCap } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import sophiaImage from 'figma:asset/0c8f957bf79c691101496d40a0573b1ce6356ccb.png';

interface AboutSectionProps {
  onNavigate?: (page: string) => void;
}

export function AboutSection({ onNavigate }: AboutSectionProps) {
  const locations = [
    {
      id: "chicago",
      name: "Chicago, IL",
      type: "Founding Chapter",
      icon: Heart,
      description: "Where it all began. Our founding chapter continues to lead innovative programs and community outreach.",
      highlights: ["First chapter established", "2 Co-Presidents", "Community partnerships"],
      color: "from-pink-100 to-pink-200"
    },
    {
      id: "michigan",
      name: "Ann Arbor, MI", 
      type: "Collegiate Chapter",
      icon: GraduationCap,
      description: "University of Michigan collegiate chapter bringing skin health awareness to campus and beyond.",
      highlights: ["University of Michigan", "Student-led initiatives", "Campus outreach"],
      color: "from-blue-100 to-blue-200"
    },
    {
      id: "newjersey",
      name: "Union County, NJ",
      type: "Founding Chapter",
      icon: Users,
      description: "Expanding our mission to the East Coast with dedicated leadership and community focus.",
      highlights: ["East Coast expansion", "2 Co-Presidents", "Regional programs"],
      color: "from-green-100 to-green-200"
    }
  ];

  const handleLocationClick = (locationId: string) => {
    if (onNavigate) {
      onNavigate(locationId);
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-pink-25 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-6 text-gradient">Our Founding Story</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Every great mission starts with a personal story. Here's how Project Save Our Skin began.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Founder Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="w-full max-w-md mx-auto">
                  <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl p-8 shadow-lg">
                    <img
                      src={sophiaImage}
                      alt="Sophia, Founder of Project Save Our Skin"
                      className="w-full h-80 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
            
            {/* Founder Story */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-pink-100 rounded-full px-4 py-2">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-primary">Meet Our Founder</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl text-gray-800">
                  Sophia's Journey
                </h3>
                
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Sophia founded Project Save Our Skin in 2022 as a junior in high school with one simple mission: 
                    to provide essential skincare access to marginalized communities and advance confidence for all people.
                  </p>
                  
                  <p>
                    As a middle schooler, Sophia struggled with confidence as she battled acne. After going through 
                    a long and challenging skincare journey and learning extensively about skin health, she realized 
                    that all people deserved access to the resources needed to take care of our body's largest organ.
                  </p>
                  
                  <p>
                    After months of careful planning, Project Save Our Skin's first event was a donation drive at the 
                    Deerfield Public Library in Illinois, where over 400 products were collected and donated within 
                    three weeks to a local domestic violence shelter.
                  </p>
                  
                  <p>
                    Since then, Project Save Our Skin has expanded into a nationwide initiative with 40+ dedicated 
                    team members. We visit public places like farmers markets, beaches, and summer camps to conduct 
                    skincare workshops and sun safety education. We also volunteer with large-scale skin cancer 
                    research fundraising agencies, collect and donate products, and so much more!
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Chapter Locations */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl mb-6 text-gray-800">Our Chapter Locations</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Discover our dedicated chapters across the country, each with unique leadership and community focus.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {locations.map((location, index) => (
                <Card key={index} className="p-6 border-pink-100 hover:shadow-xl transition-all duration-300 hover:border-pink-200 bg-white/90 backdrop-blur-sm group cursor-pointer" onClick={() => handleLocationClick(location.id)}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${location.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <location.icon className="w-8 h-8 text-gray-700" />
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <h4 className="text-gray-800">{location.name}</h4>
                    </div>
                    
                    <div className="inline-block bg-pink-100 text-primary px-3 py-1 rounded-full text-sm mb-4">
                      {location.type}
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {location.description}
                    </p>
                    
                    <div className="space-y-1 mb-6">
                      {location.highlights.map((highlight, idx) => (
                        <div key={idx} className="text-xs text-gray-500 flex items-center justify-center gap-1">
                          <div className="w-1 h-1 bg-primary rounded-full"></div>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className="w-full bg-primary hover:bg-pink-600 text-white rounded-full transition-all duration-200 group-hover:shadow-lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLocationClick(location.id);
                      }}
                    >
                      Learn More
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}