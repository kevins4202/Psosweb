import { Heart, MapPin, Users, Calendar, Award, ExternalLink } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ContactSection } from "./ContactSection";
import psosLogo from 'figma:asset/f9d386a3a5ceb09543fa709b38345cea866b2e59.png';

export function ChicagoPage() {
  const achievements = [
    {
      icon: Calendar,
      title: "Founded in 2022",
      description: "The original chapter that started it all"
    },
    {
      icon: Users,
      title: "1000+ Products Donated",
      description: "Making a real impact in our community"
    },
    {
      icon: Award,
      title: "Community Leadership",
      description: "Setting the standard for all future chapters"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section with Chicago Skyline */}
      <section className="py-20 bg-gradient-to-br from-[var(--pink-light)] via-white to-[var(--matcha-light)] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1689794828964-37438657a8c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGljYWdvJTIwc2t5bGluZSUyMGJlYXV0aWZ1bCUyMHN1bnNldHxlbnwxfHx8fDE3NTUyMDUwNTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Chicago Skyline"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-pink-100 rounded-full px-4 py-2 mb-6">
              <div className="w-4 h-4 rounded-full overflow-hidden flex items-center justify-center">
                <img 
                  src={psosLogo} 
                  alt="Project Save Our Skin Logo" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="text-primary">Founding Chapter</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl mb-6 text-gradient">
              Chicago, Illinois
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              The birthplace of Project Save Our Skin, where Sophia's vision first became reality. 
              Our Chicago chapter continues to lead by example, setting the standard for community 
              engagement and innovative programming.
            </p>
            
            <div className="flex items-center justify-center gap-2 text-gray-600 mb-8">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-lg">Chicago, Illinois • Est. 2022</span>
            </div>
            
            {/* Application Link */}
            <Button 
              className="bg-[var(--matcha-primary)] hover:bg-[var(--matcha-dark)] text-white px-8 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScnIIefemONCTetjKFt7pnmcMLoK33TONZMcJunQogWtmRv_Q/viewform?usp=header", "_blank")}
            >
              Apply to Join This Chapter
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl mb-6 text-gradient">Chapter Leadership</h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Meet the dedicated co-presidents leading our founding chapter.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Co-President 1 */}
              <Card className="p-8 border-pink-100 hover:shadow-lg transition-all duration-300">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full p-2">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                      alt="Co-President 1"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  
                  <h3 className="text-xl mb-2 text-gray-800">Co-President Name</h3>
                  <div className="inline-block bg-pink-100 text-primary px-3 py-1 rounded-full text-sm mb-4">
                    Co-President
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    [Brief bio about the co-president's background, involvement with the organization, 
                    and passion for skin health advocacy. This space is reserved for their personal 
                    story and leadership contributions.]
                  </p>
                  
                  <div className="space-y-2 text-sm text-gray-500">
                    <div>• Area of Focus: [Specialty area]</div>
                    <div>• Joined: [Year]</div>
                    <div>• Background: [Brief background]</div>
                  </div>
                </div>
              </Card>
              
              {/* Co-President 2 */}
              <Card className="p-8 border-pink-100 hover:shadow-lg transition-all duration-300">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full p-2">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                      alt="Co-President 2"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  
                  <h3 className="text-xl mb-2 text-gray-800">Co-President Name</h3>
                  <div className="inline-block bg-pink-100 text-primary px-3 py-1 rounded-full text-sm mb-4">
                    Co-President
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    [Brief bio about the co-president's background, involvement with the organization, 
                    and passion for skin health advocacy. This space is reserved for their personal 
                    story and leadership contributions.]
                  </p>
                  
                  <div className="space-y-2 text-sm text-gray-500">
                    <div>• Area of Focus: [Specialty area]</div>
                    <div>• Joined: [Year]</div>
                    <div>• Background: [Brief background]</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Achievements */}
      <section className="py-20 bg-gradient-to-br from-[var(--pink-light)] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl mb-6 text-gradient">Chapter Achievements</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Milestones and accomplishments that define our founding chapter.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-6 text-center border-pink-100 hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-[var(--matcha-light)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="mb-3 text-gray-800">{achievement.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl mb-6 text-gradient">Our Programs</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Community-focused initiatives that make a real difference.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[var(--pink-light)] to-[var(--matcha-light)] rounded-2xl p-8 md:p-12">
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-xl shadow-sm">
                  <h4 className="mb-3 text-gray-800">Community Outreach</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Regular visits to farmers markets, community centers, and public spaces to provide 
                    skin health education and sun safety awareness programs.
                  </p>
                </div>
                
                <div className="p-6 bg-white rounded-xl shadow-sm">
                  <h4 className="mb-3 text-gray-800">Product Donation Drives</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Organizing collection and distribution of essential skincare products to local 
                    shelters and community organizations serving marginalized populations. We've donated 
                    over 1000+ products to our community!
                  </p>
                </div>
                
                <div className="p-6 bg-white rounded-xl shadow-sm">
                  <h4 className="mb-3 text-gray-800">Educational Workshops</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Interactive sessions teaching proper skincare routines, sun protection, and 
                    early detection techniques for skin cancer prevention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}