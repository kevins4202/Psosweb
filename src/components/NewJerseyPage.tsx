import { Users, MapPin, Award, Calendar, Heart, ExternalLink, Instagram, Mail, Newspaper } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ContactSection } from "./ContactSection";
import psosLogo from 'figma:asset/f9d386a3a5ceb09543fa709b38345cea866b2e59.png';
import madelinePhoto from 'figma:asset/10e565bff0d4b87b99cc7baf90f1d982a14a45cb.png';
import audreyPhoto from 'figma:asset/5bdda714431962b66be6ee407d417335809b8bc9.png';

export function NewJerseyPage() {
  const achievements = [
    {
      icon: Award,
      title: "East Coast Expansion",
      description: "Bringing our mission to the Atlantic region"
    },
    {
      icon: Users,
      title: "Community Partnerships",
      description: "Building strong local relationships"
    },
    {
      icon: Heart,
      title: "Regional Programs",
      description: "Tailored initiatives for local communities"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--matcha-light)] via-white to-[var(--pink-light)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[var(--matcha-light)] rounded-full px-4 py-2 mb-6">
              <div className="w-4 h-4 rounded-full overflow-hidden flex items-center justify-center">
                <img 
                  src={psosLogo} 
                  alt="Project Save Our Skin Logo" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="text-[var(--matcha-primary)]">East Coast Chapter</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl mb-6">
              <span className="text-gradient">Union County, </span>
              <span className="text-[var(--matcha-primary)]">New Jersey</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Our East Coast expansion brings Project Save Our Skin's mission to New Jersey communities. 
              With dedicated leadership and regional focus, this chapter serves as a model for 
              growth and community engagement.
            </p>
            
            <div className="flex items-center justify-center gap-6 text-gray-600 mb-8 flex-wrap">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[var(--matcha-primary)]" />
                <span className="text-lg">Union County, New Jersey</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[var(--matcha-primary)]" />
                <a href="mailto:projectsaveourskin.nj@gmail.com" className="hover:text-[var(--matcha-primary)] transition-colors">projectsaveourskin.nj@gmail.com</a>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                className="bg-[var(--matcha-primary)] hover:bg-[var(--matcha-dark)] text-white px-8 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
                onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScnIIefemONCTetjKFt7pnmcMLoK33TONZMcJunQogWtmRv_Q/viewform?usp=header", "_blank")}
              >
                Apply to Join This Chapter
                <ExternalLink className="w-4 h-4" />
              </Button>
              
              <Button 
                variant="outline"
                className="border-[var(--matcha-primary)] text-[var(--matcha-primary)] hover:bg-[var(--matcha-light)] px-8 py-3 rounded-full transition-all duration-200 inline-flex items-center gap-2"
                onClick={() => window.open("https://instagram.com/projectsaveourskin.nj", "_blank")}
              >
                <Instagram className="w-4 h-4" />
                Follow Us @projectsaveourskin.nj
              </Button>
            </div>
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
                Meet the dedicated leaders spearheading our mission in Union County.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* President */}
              <Card className="p-8 border-[var(--matcha-medium)] hover:shadow-lg transition-all duration-300">
                <div className="text-center">
                  <div className="w-40 h-52 mx-auto mb-6 rounded-2xl overflow-hidden shadow-md">
                    <img
                      src={madelinePhoto}
                      alt="Madeline Yong"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <h3 className="text-xl mb-2 text-gray-800">Madeline Yong</h3>
                  <div className="inline-block bg-[var(--matcha-light)] text-[var(--matcha-primary)] px-3 py-1 rounded-full text-sm mb-4">
                    President
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Madeline is a high school senior at the Academy for Allied Health Sciences who is passionate 
                    about healthcare and community service. Since joining in 2024, she has led the Union 
                    County chapter's expansion and local advocacy efforts.
                  </p>
                  
                  <div className="space-y-2 text-sm text-gray-500">
                    <div>• School: Academy for Allied Health Sciences</div>
                    <div>• Joined: 2024</div>
                    <div>• Role: President & High School Senior</div>
                  </div>
                </div>
              </Card>
              
              {/* Vice President */}
              <Card className="p-8 border-[var(--matcha-medium)] hover:shadow-lg transition-all duration-300">
                <div className="text-center">
                  <div className="w-40 h-52 mx-auto mb-6 rounded-2xl overflow-hidden shadow-md">
                    <img
                      src={audreyPhoto}
                      alt="Audrey Lin"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <h3 className="text-xl mb-2 text-gray-800">Audrey Lin</h3>
                  <div className="inline-block bg-[var(--matcha-light)] text-[var(--matcha-primary)] px-3 py-1 rounded-full text-sm mb-4">
                    Vice President
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Audrey is a high school senior at Westfield High School who joined Project Save Our Skin 
                    in 2025. She works closely with the leadership team to organize educational workshops 
                    and community outreach programs.
                  </p>
                  
                  <div className="space-y-2 text-sm text-gray-500">
                    <div>• School: Westfield High School</div>
                    <div>• Joined: 2025</div>
                    <div>• Role: Vice President & High School Senior</div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Additional Leadership Roles */}
            <div className="mt-16">
              <h3 className="text-2xl mb-8 text-center text-gray-800">Chapter Board</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Mai Kim */}
                <Card className="p-6 border-[var(--matcha-medium)] hover:shadow-md transition-all duration-300 bg-white/50">
                  <h4 className="text-lg mb-1 text-gray-800">Mai Kim</h4>
                  <div className="text-[var(--matcha-primary)] text-sm font-medium mb-3">Director of Public Relations</div>
                  <p className="text-sm text-gray-600 mb-4">
                    Junior high school student at Academy for Allied Health Sciences
                  </p>
                  <div className="text-xs text-gray-400 font-medium tracking-wider uppercase">Academy for Allied Health Sciences</div>
                </Card>

                {/* Kelly Zheng */}
                <Card className="p-6 border-[var(--matcha-medium)] hover:shadow-md transition-all duration-300 bg-white/50">
                  <h4 className="text-lg mb-1 text-gray-800">Kelly Zheng</h4>
                  <div className="text-[var(--matcha-primary)] text-sm font-medium mb-3">Social Media Manager</div>
                  <p className="text-sm text-gray-600 mb-4">
                    Junior high school student at Academy for Allied Health Sciences
                  </p>
                  <div className="text-xs text-gray-400 font-medium tracking-wider uppercase">Academy for Allied Health Sciences</div>
                </Card>

                {/* Emma Legaspi */}
                <Card className="p-6 border-[var(--matcha-medium)] hover:shadow-md transition-all duration-300 bg-white/50">
                  <h4 className="text-lg mb-1 text-gray-800">Emma Legaspi</h4>
                  <div className="text-[var(--matcha-primary)] text-sm font-medium mb-3">Director of Events</div>
                  <p className="text-sm text-gray-600 mb-4">
                    Junior high school student at Westfield High School
                  </p>
                  <div className="text-xs text-gray-400 font-medium tracking-wider uppercase">Westfield High School</div>
                </Card>

                {/* Keilani Calugay */}
                <Card className="p-6 border-[var(--matcha-medium)] hover:shadow-md transition-all duration-300 bg-white/50">
                  <h4 className="text-lg mb-1 text-gray-800">Keilani Calugay</h4>
                  <div className="text-[var(--matcha-primary)] text-sm font-medium mb-3">Graphic Designer</div>
                  <p className="text-sm text-gray-600 mb-4">
                    Junior high school student at Westfield High School
                  </p>
                  <div className="text-xs text-gray-400 font-medium tracking-wider uppercase">Westfield High School</div>
                </Card>

                {/* Keisha Kinyanjui */}
                <Card className="p-6 border-[var(--matcha-medium)] hover:shadow-md transition-all duration-300 bg-white/50">
                  <h4 className="text-lg mb-1 text-gray-800">Keisha Kinyanjui</h4>
                  <div className="text-[var(--matcha-primary)] text-sm font-medium mb-3">Marketing and Partnerships Coordinator</div>
                  <p className="text-sm text-gray-600 mb-4">
                    Junior high school student at Westfield High School
                  </p>
                  <div className="text-xs text-gray-400 font-medium tracking-wider uppercase">Westfield High School</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Story */}
      <section className="py-20 bg-gradient-to-br from-[var(--matcha-light)] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl mb-6 text-gradient">Our East Coast Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                How Project Save Our Skin expanded to serve New Jersey communities.
              </p>
            </div>
            
            <Card className="p-8 md:p-12 border-[var(--matcha-medium)] bg-white/90 backdrop-blur-sm">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  The establishment of our Union County chapter represents a significant milestone in 
                  Project Save Our Skin's growth from a local Chicago initiative to a nationwide movement. 
                  Recognizing the need for skin health advocacy on the East Coast, our organization 
                  expanded to New Jersey to serve diverse communities with unique needs and challenges.
                </p>
                
                <p>
                  Our New Jersey chapter focuses on building strong community partnerships, developing 
                  culturally sensitive programming, and establishing sustainable outreach initiatives 
                  that can serve as a model for future East Coast expansion.
                </p>
                
                <p>
                  Through dedicated leadership and community engagement, this chapter has quickly 
                  established itself as a vital resource for skin health education and advocacy in 
                  the Union County area and beyond.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Chapter Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl mb-6 text-gradient">Chapter Achievements</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Building impact and community connections across New Jersey.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-6 text-center border-[var(--matcha-medium)] hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--matcha-light)] to-[var(--matcha-medium)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-[var(--matcha-primary)]" />
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
      <section className="py-20 bg-gradient-to-br from-[var(--matcha-light)] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl mb-6 text-gradient">Our Programs</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Regional initiatives designed for New Jersey communities.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[var(--pink-light)] to-[var(--matcha-light)] rounded-2xl p-8 md:p-12">
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-xl shadow-sm">
                  <h4 className="mb-3 text-gray-800">Community Health Fairs</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Partnering with local organizations to provide skin health screenings, education, 
                    and resources at community events throughout Union County.
                  </p>
                </div>
                
                <div className="p-6 bg-white rounded-xl shadow-sm">
                  <h4 className="mb-3 text-gray-800">School Partnerships</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Working with local schools to provide age-appropriate skin health education and 
                    sun safety programs for students of all ages.
                  </p>
                </div>
                
                <div className="p-6 bg-white rounded-xl shadow-sm">
                  <h4 className="mb-3 text-gray-800">Cultural Outreach</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Developing culturally sensitive programming that addresses the unique skin health 
                    needs of New Jersey's diverse communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Events Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl mb-6 text-gradient">Recent Events</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Stay updated with our latest initiatives and community impact.
              </p>
            </div>
            
            <Card className="overflow-hidden border-[var(--matcha-medium)] hover:shadow-xl transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/3 h-48 md:h-auto relative">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1766933161369-415de1c4e69c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHByb2R1Y3RzJTIwZG9uYXRpb24lMjBjaGFyaXR5fGVufDF8fHx8MTc3MDUzMzE2OXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Skincare Product Collection"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-[var(--matcha-primary)] shadow-sm">
                    Featured News
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>Recent Activity</span>
                  </div>
                  <h3 className="text-2xl mb-4 text-gray-800 leading-tight">
                    Project Save Our Skin: Westfield Teens Collecting Skincare Products for People in Need
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Our dedicated chapter members in Westfield are making a tangible difference by collecting essential skincare products for underserved communities, ensuring everyone has access to basic skin protection and care.
                  </p>
                  <Button 
                    variant="outline"
                    className="border-[var(--matcha-primary)] text-[var(--matcha-primary)] hover:bg-[var(--matcha-light)] rounded-full inline-flex items-center gap-2"
                    onClick={() => window.open("https://www.tapinto.net/towns/westfield/sections/giving-back/articles/project-save-our-skin-westfield-teens-collecting-skincare-products-for-people-in-need", "_blank")}
                  >
                    <Newspaper className="w-4 h-4" />
                    Read Full Article
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <ContactSection 
        email="projectsaveourskin.nj@gmail.com" 
        instagram="projectsaveourskin.nj"
        location="Union County, New Jersey"
      />
    </div>
  );
}