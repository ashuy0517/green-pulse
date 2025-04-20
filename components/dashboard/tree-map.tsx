"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { Icon } from "leaflet"

// Sample data for tree locations
const treeLocations = [
  { id: 1, lat: -3.4653, lng: -62.2159, project: "Amazon Rainforest", count: 25, date: "2023-05-15" },
  { id: 2, lat: 0.5557, lng: 101.0384, project: "Borneo Restoration", count: 40, date: "2023-07-22" },
  { id: 3, lat: 0.1768, lng: 37.9083, project: "Kenya Reforestation", count: 30, date: "2023-09-10" },
  { id: 4, lat: -3.0982, lng: -61.3297, project: "Amazon Rainforest", count: 20, date: "2023-10-05" },
  { id: 5, lat: 0.6231, lng: 100.8234, project: "Borneo Restoration", count: 50, date: "2023-11-18" },
]

export function TreeMap() {
  const [isMounted, setIsMounted] = useState(false)

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
      <Card>
        <CardHeader>
          <CardTitle>Your Trees Map</CardTitle>
        </CardHeader>
        <CardContent className="h-[400px] bg-gray-100 flex items-center justify-center">
          <p>Loading map...</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Your Trees Map</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="map">
          <TabsList className="mb-4">
            <TabsTrigger value="map">Map View</TabsTrigger>
            <TabsTrigger value="satellite">Satellite View</TabsTrigger>
          </TabsList>

          <TabsContent value="map" className="h-[400px]">
            <MapContainer center={[0, 0]} zoom={2} style={{ height: "100%", width: "100%" }} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {treeLocations.map((location) => (
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
          </TabsContent>

          <TabsContent value="satellite" className="h-[400px]">
            <MapContainer center={[0, 0]} zoom={2} style={{ height: "100%", width: "100%" }} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.esri.com">Esri</a>'
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              />
              {treeLocations.map((location) => (
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
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
