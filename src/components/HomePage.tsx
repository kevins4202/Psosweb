import { HeroSection } from "./HeroSection";
import { StatisticsSection } from "./StatisticsSection";
import { MissionSection } from "./MissionSection";
import { ImpactSection } from "./ImpactSection";
import { ContactSection } from "./ContactSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <StatisticsSection />
      <MissionSection />
      <ImpactSection />
      <div id="get-involved" className="py-20 bg-gradient-to-br from-[var(--pink-light)] to-[var(--matcha-light)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-gradient">Get Involved</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            There are many ways to support our mission and make a difference in your community. 
            From volunteering at screening events to spreading awareness, every action counts.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-white rounded-xl shadow-lg border border-pink-100">
              <h4 className="mb-3">Volunteer</h4>
              <p className="text-gray-600 mb-4">Help us organize events, educate communities, and support screening programs.</p>
              <button className="text-primary hover:underline">Learn More →</button>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg border border-[var(--matcha-medium)]">
              <h4 className="mb-3">Donate</h4>
              <p className="text-gray-600 mb-4">Support our programs and help us reach more communities in need.</p>
              <button className="text-[var(--matcha-primary)] hover:underline">Donate Now →</button>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg border border-pink-100">
              <h4 className="mb-3">Spread Awareness</h4>
              <p className="text-gray-600 mb-4">Share our message and help educate others about skin cancer prevention.</p>
              <button className="text-primary hover:underline">Share →</button>
            </div>
          </div>
        </div>
      </div>
      <ContactSection />
    </>
  );
}