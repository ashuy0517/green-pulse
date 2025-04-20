"use client"

import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { Icon } from "leaflet"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface Project {
  id: number
  name: string
  location: string
  coordinates: [number, number]
  description: string
  trees: {
    planted: number
    target: number
  }
  area: number
  startDate: string
  image: string
}

interface FullMapComponentProps {
  projects: Project[]
  mapType: string
  selectedProject: number | null
  onSelectProject: (id: number) => void
}

function MapController({ selectedProject, projects }: { selectedProject: number | null; projects: Project[] }) {
  const map = useMap()

  useEffect(() => {
    if (selectedProject !== null) {
      const project = projects.find((p) => p.id === selectedProject)
      if (project) {
        map.flyTo(project.coordinates as [number, number], 8)
      }
    }
  }, [selectedProject, map, projects])

  return null
}

export default function FullMapComponent({
  projects,
  mapType,
  selectedProject,
  onSelectProject,
}: FullMapComponentProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Fix for Leaflet's icon issues with webpack
    delete (Icon.Default.prototype as any)._getIconUrl
    Icon.Default.mergeOptions({
      iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
      iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    })
  }, [])

  if (!mounted) return null

  // Custom icon for tree markers
  const treeIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/490/490091.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  })

  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: "100%", width: "100%" }} scrollWheelZoom={true}>
      {mapType === "standard" && (
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      )}

      {mapType === "satellite" && (
        <TileLayer
          attribution='&copy; <a href="https://www.esri.com">Esri</a>'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />
      )}

      {mapType === "terrain" && (
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
              onSelectProject(project.id)
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

      <MapController selectedProject={selectedProject} projects={projects} />
    </MapContainer>
  )
}
