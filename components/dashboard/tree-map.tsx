"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import dynamic from "next/dynamic"

// Sample data for tree locations
const treeLocations = [
  { id: 1, lat: -3.4653, lng: -62.2159, project: "Amazon Rainforest", count: 25, date: "2023-05-15" },
  { id: 2, lat: 0.5557, lng: 101.0384, project: "Borneo Restoration", count: 40, date: "2023-07-22" },
  { id: 3, lat: 0.1768, lng: 37.9083, project: "Kenya Reforestation", count: 30, date: "2023-09-10" },
  { id: 4, lat: -3.0982, lng: -61.3297, project: "Amazon Rainforest", count: 20, date: "2023-10-05" },
  { id: 5, lat: 0.6231, lng: 100.8234, project: "Borneo Restoration", count: 50, date: "2023-11-18" },
]

// Dynamically import the map component with SSR disabled
const MapComponent = dynamic(() => import("../map/map-component"), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] bg-gray-100 flex items-center justify-center">
      <p>Loading map...</p>
    </div>
  ),
})

export function TreeMap() {
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
            <MapComponent locations={treeLocations} mapType="standard" />
          </TabsContent>

          <TabsContent value="satellite" className="h-[400px]">
            <MapComponent locations={treeLocations} mapType="satellite" />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
