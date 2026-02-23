import { Users, Package, MapPin, Heart } from "lucide-react";
import { Card } from "./ui/card";

export function ImpactSection() {
  const impactStats = [
    {
      icon: Users,
      number: "800,000+",
      label: "People Reached",
      description: "Through in-person and social media awareness campaigns, social media, and workshops"
    },
    {
      icon: Package,
      number: "1,000+",
      label: "Products Donated",
      description: "Essential skin health products donated to community shelters"
    },
    {
      icon: MapPin,
      number: "4",
      label: "Chapter Locations",
      description: "Active chapters serving communities nationwide"
    },
    {
      icon: Heart,
      number: "80+",
      label: "Dedicated Team Members",
      description: "Passionate volunteers and staff making a difference"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-gray-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-6 text-gradient">Our Impact</h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Since our founding, Project Save Our Skin has made a measurable difference in communities 
            nationwide. Here's how we're changing lives together.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((stat, index) => (
            <Card key={index} className="p-6 text-center bg-white border-pink-100 hover:shadow-lg transition-all duration-300 hover:border-pink-200">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl text-primary mb-2">{stat.number}</div>
              <h4 className="mb-2">{stat.label}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{stat.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}