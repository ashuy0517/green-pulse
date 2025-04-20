"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { Icon } from "leaflet"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

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

function MapController({ selectedProject }: { selectedProject: number | null }) {
  const map = useMap()

  useEffect(() => {
    if (selectedProject !== null) {
      const project = projects.find((p) => p.id === selectedProject)
      if (project) {
        map.flyTo(project.coordinates as [number, number], 8)
      }
    }
  }, [selectedProject, map])

  return null
}

export function InteractiveMap() {
  const [isMounted, setIsMounted] = useState(false)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [mapView, setMapView] = useState("standard")

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Custom icon for tree markers
  const treeIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/490/490091.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  })

  if (!isMounted) {
    return (
      <Card className="h-[600px] bg-gray-100 flex items-center justify-center">
        <p>Loading map...</p>
      </Card>
    )
  }

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
        <MapContainer center={[0, 0]} zoom={2} style={{ height: "100%", width: "100%" }} scrollWheelZoom={true}>
          {mapView === "standard" && (
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          )}

          {mapView === "satellite" && (
            <TileLayer
              attribution='&copy; <a href="https://www.esri.com">Esri</a>'
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />
          )}

          {mapView === "terrain" && (
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
            />
          )}

          {projects.map((project) => (
            <Marker
              key={project.id}
              position={project.coordinates as [number, number]}
              icon={treeIcon}
              eventHandlers={{
                click: () => {
                  setSelectedProject(project.id)
                },
              }}
            >
              <Popup minWidth={300} maxWidth={300}>
                <div className="space-y-3">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-32 object-cover rounded-md"
                  />
                  <h3 className="font-bold text-lg">{project.name}</h3>
                  <p className="text-sm">{project.description}</p>

                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Progress:</span>
                      <span>{Math.round((project.trees.planted / project.trees.target) * 100)}%</span>
                    </div>
                    <Progress value={(project.trees.planted / project.trees.target) * 100} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-gray-500">Trees Planted</p>
                      <p className="font-medium">
                        {project.trees.planted.toLocaleString()} / {project.trees.target.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Area</p>
                      <p className="font-medium">{project.area} hectares</p>
                    </div>
                  </div>

                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <Link href={`/sponsor?project=${project.id}`}>
                      Sponsor This Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Popup>
            </Marker>
          ))}

          <MapController selectedProject={selectedProject} />
        </MapContainer>
      </div>
    </Card>
  )
}
