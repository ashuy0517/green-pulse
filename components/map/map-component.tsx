"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { Icon } from "leaflet"
import { useEffect, useState } from "react"

interface Location {
  id: number
  lat: number
  lng: number
  project: string
  count: number
  date: string
}

interface MapComponentProps {
  locations: Location[]
  mapType: "standard" | "satellite"
}

export default function MapComponent({ locations, mapType }: MapComponentProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // This is needed to fix Leaflet's icon paths
    delete (Icon.Default.prototype as any)._getIconUrl
    Icon.Default.mergeOptions({
      iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
      iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    })
    setMounted(true)
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
    <MapContainer center={[0, 0]} zoom={2} style={{ height: "100%", width: "100%" }} scrollWheelZoom={false}>
      {mapType === "standard" ? (
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      ) : (
        <TileLayer
          attribution='&copy; <a href="https://www.esri.com">Esri</a>'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />
      )}

      {locations.map((location) => (
        <Marker key={location.id} position={[location.lat, location.lng]} icon={treeIcon}>
          <Popup>
            <div className="text-sm">
              <p className="font-bold">{location.project}</p>
              <p>Trees: {location.count}</p>
              <p>Planted: {new Date(location.date).toLocaleDateString()}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
