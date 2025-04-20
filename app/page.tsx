import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Leaf, BarChart3, Award } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { FeatureCard } from "@/components/feature-card"
import { ImpactCounter } from "@/components/impact-counter"

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />

      {/* Impact Counter */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto">
          <ImpactCounter />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How GreenPulse Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<MapPin className="h-10 w-10 text-green-600" />}
              title="Choose Location"
              description="Select from our active reforestation zones around the world."
            />
            <FeatureCard
              icon={<Leaf className="h-10 w-10 text-green-600" />}
              title="Sponsor Trees"
              description="Choose how many trees you want to plant and make a difference."
            />
            <FeatureCard
              icon={<BarChart3 className="h-10 w-10 text-green-600" />}
              title="Track Progress"
              description="Monitor the growth of your trees and your environmental impact."
            />
            <FeatureCard
              icon={<Award className="h-10 w-10 text-green-600" />}
              title="Earn Rewards"
              description="Get badges and increase your Healing Score as your trees grow."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-green-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Community Says</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center mr-4">
                    <span className="text-green-700 font-bold">{["JD", "SM", "AK"][i - 1]}</span>
                  </div>
                  <div>
                    <h4 className="font-bold">{["John Doe", "Sarah Miller", "Alex Kim"][i - 1]}</h4>
                    <p className="text-sm text-gray-500">
                      {["Business Owner", "Environmental Activist", "Student"][i - 1]}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600">
                  {
                    [
                      "GreenPulse made it incredibly easy for our company to offset our carbon footprint. The dashboard is intuitive and the impact metrics are impressive.",
                      "I've been looking for a transparent way to contribute to reforestation efforts. GreenPulse provides exactly that with their real-time tracking.",
                      "As someone concerned about climate change, I love how GreenPulse lets me see the actual impact of my contribution. The before/after images are powerful.",
                    ][i - 1]
                  }
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of individuals and organizations who are actively restoring our planet's forests.
          </p>
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
            <Link href="/sponsor">Start Planting Trees</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
