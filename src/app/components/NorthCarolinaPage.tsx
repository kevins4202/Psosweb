import { MapPin, ExternalLink, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { ContactSection } from "./ContactSection";
import psosLogo from '../../imports/58DE67EF-9F2A-4EBC-801D-9740E0F22DE5.JPG';

export function NorthCarolinaPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[var(--pink-light)] via-white to-[var(--matcha-light)] relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-pink-100 rounded-full px-4 py-2 mb-6">
              <img src={psosLogo} alt="PSOS Logo" className="w-5 h-5 object-contain rounded-full" />
              <span className="text-primary font-semibold text-sm">New Chapter</span>
            </div>

            <h1 className="text-5xl md:text-7xl mb-6 text-gradient">
              North Carolina
            </h1>

            <div className="flex items-center justify-center gap-2 text-gray-500 mb-8">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-lg">North Carolina</span>
            </div>

            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Project Save Our Skin is expanding to North Carolina! We're building a passionate
              team of community health advocates dedicated to skin cancer prevention and
              education across the region.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-primary hover:bg-[var(--pink-dark)] text-white px-8 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
                onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScnIIefemONCTetjKFt7pnmcMLoK33TONZMcJunQogWtmRv_Q/viewform?usp=header", "_blank")}
              >
                Apply to Join
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Body */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-pink-100 to-[var(--matcha-light)] rounded-full flex items-center justify-center mx-auto mb-8">
              <Heart className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl mb-6 text-gradient">Coming Soon</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our North Carolina chapter is actively forming. If you're a student or community
              member passionate about skin health, dermatology education, and making a real
              difference — we want to hear from you.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Reach out to us at{" "}
              <a href="mailto:projectsaveourskin@gmail.com" className="text-primary hover:underline">
                projectsaveourskin@gmail.com
              </a>{" "}
              to get involved with the founding team.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
