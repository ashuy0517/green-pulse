"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import dynamic from "next/dynamic"

// Sample data for reforestation projects
const projects = [
  {
    id: 1,
    name: "Amazon Rainforest Restoration",
    location: "Brazil",
    coordinates: [-3.4653, -62.2159],
    description: "Restoring deforested areas in the Amazon rainforest with native tree species.",
    trees: {
      planted: 12500,
      target: 25000,
    },
    area: 75,
    startDate: "2023-01-15",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Borneo Mangrove Planting",
    location: "Indonesia",
    coordinates: [0.5557, 101.0384],
    description: "Reforesting areas affected by palm oil plantations with diverse native trees.",
    trees: {
      planted: 8200,
      target: 15000,
    },
    area: 45,
    startDate: "2023-03-10",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Kenya Drought Resistance",
    location: "Kenya",
    coordinates: [0.1768, 37.9083],
    description: "Planting trees to combat desertification and provide sustainable livelihoods.",
    trees: {
      planted: 6700,
      target: 10000,
    },
    area: 30,
    startDate: "2023-05-22",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "Madagascar Reforestation",
    location: "Madagascar",
    coordinates: [-18.7669, 46.8691],
    description: "Restoring biodiversity in one of the world's most unique ecosystems.",
    trees: {
      planted: 0,
      target: 20000,
    },
    area: 60,
    startDate: "2024-01-15",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    name: "Costa Rica Cloud Forest",
    location: "Costa Rica",
    coordinates: [9.7489, -83.7534],
    description: "Protecting and expanding the cloud forest ecosystem.",
    trees: {
      planted: 5000,
      target: 5000,
    },
    area: 25,
    startDate: "2022-06-10",
    image: "/placeholder.svg?height=200&width=300",
  },
]

// Dynamically import the full map component with SSR disabled
const FullMapComponent = dynamic(() => import("./full-map-component"), {
  ssr: false,
  loading: () => (
    <div className="h-[600px] bg-gray-100 flex items-center justify-center">
      <p>Loading map...</p>
    </div>
  ),
})

export function InteractiveMap() {
  const [mapView, setMapView] = useState("standard")
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <Card className="overflow-hidden">
      <div className="p-4 border-b">
        <Tabs defaultValue="standard" onValueChange={setMapView}>
          <TabsList>
            <TabsTrigger value="standard">Standard</TabsTrigger>
            <TabsTrigger value="satellite">Satellite</TabsTrigger>
            <TabsTrigger value="terrain">Terrain</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="h-[600px]">
        <FullMapComponent
          projects={projects}
          mapType={mapView}
          selectedProject={selectedProject}
          onSelectProject={setSelectedProject}
        />
      </div>
    </Card>
  )
}
