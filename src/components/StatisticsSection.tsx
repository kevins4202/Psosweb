import { TrendingUp, Users, Shield } from "lucide-react";

export function StatisticsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-500 to-pink-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8" />
              <span className="text-xl opacity-90">Critical Statistics</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl mb-6 leading-tight">
              1 in 5 Americans will be diagnosed with skin cancer in their lifetime
            </h2>
            
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Let's change that together.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <div className="text-3xl mb-2">9,500+</div>
              <p className="opacity-90">Daily diagnoses in the US</p>
            </div>
            
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <div className="text-3xl mb-2">99%</div>
              <p className="opacity-90">Survival rate when caught early</p>
            </div>
            
            <div className="text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <div className="text-3xl mb-2">2x</div>
              <p className="opacity-90">Risk increases with one sunburn</p>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
            <p className="text-lg leading-relaxed">
              Early detection saves lives. Through education, awareness, and community outreach, 
              we're working to reduce these numbers and protect families across America.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}