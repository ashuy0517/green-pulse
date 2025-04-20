import type { Metadata } from "next"
import { SponsorshipForm } from "@/components/sponsorship-form"
import { ProjectSelector } from "@/components/project-selector"

export const metadata: Metadata = {
  title: "Sponsor Trees | GreenPulse",
  description: "Sponsor trees and make a positive impact on the environment",
}

export default function SponsorPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Sponsor Trees</h1>
        <p className="text-gray-600 mb-8">
          Choose a reforestation project and the number of trees you'd like to sponsor.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectSelector />
          <SponsorshipForm />
        </div>
      </div>
    </div>
  )
}
