import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";

interface AboutPageProps {
  onNavigate?: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="pt-20">
      <AboutSection onNavigate={onNavigate} />
      
      {/* Additional About content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl mb-6 text-gradient">Our Team</h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Meet the passionate individuals working to make skin health accessible to everyone.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl mb-6 text-gray-800">40+ Dedicated Team Members</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our team consists of passionate volunteers, healthcare professionals, educators, and advocates 
                from across the country. United by our shared mission, we work together to bring skin health 
                education and resources to communities that need them most.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="mb-4 text-gray-800">Our Volunteers Include:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Healthcare professionals and medical students</li>
                    <li>• Educational outreach coordinators</li>
                    <li>• Community engagement specialists</li>
                    <li>• Social media and content creators</li>
                    <li>• Event planning and logistics team</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="mb-4 text-gray-800">What Unites Us:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Passion for health equity and accessibility</li>
                    <li>• Commitment to evidence-based education</li>
                    <li>• Belief in the power of community action</li>
                    <li>• Dedication to building confidence and self-acceptance</li>
                    <li>• Drive to prevent skin disease through awareness</li>
                  </ul>
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