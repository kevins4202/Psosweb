import { Heart } from "lucide-react";

export function MissionSection() {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-6 text-gradient">Our Mission</h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Project Save Our Skin is dedicated to advocating for prevention of skin disease through education, 
            providing access to essential products for skin health, and empowering individuals to find 
            confidence in their own skin.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl mb-6 text-gray-800">Our Vision</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A world where skin cancer is no longer a leading cause of preventable death, and where every 
              individual feels confident and empowered in their own skin—regardless of acne, skin conditions, 
              scars, or any other appearance concerns. Through our community-centered approach, we envision 
              empowered individuals who understand the importance of skin health and have access to the 
              resources they need for prevention, early detection, and self-acceptance.
            </p>
            <div className="flex items-center justify-center gap-2 text-primary">
              <Heart className="w-5 h-5" />
              <span>Together, we save lives and build confidence</span>
              <Heart className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}