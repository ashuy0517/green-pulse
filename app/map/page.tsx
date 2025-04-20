import type { Metadata } from "next"
import { InteractiveMap } from "@/components/map/interactive-map"
import { ProjectFilter } from "@/components/map/project-filter"

export const metadata: Metadata = {
  title: "Reforestation Map | GreenPulse",
  description: "Explore our global reforestation projects",
}

export default function MapPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Reforestation Map</h1>
        <p className="text-gray-500">
          Explore our active reforestation projects around the world. Click on a marker to learn more about each
          project.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <ProjectFilter />
        </div>
        <div className="lg:col-span-3">
          <InteractiveMap />
        </div>
      </div>
    </div>
  )
}
