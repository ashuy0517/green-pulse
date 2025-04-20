"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"
import dynamic from "next/dynamic"

const monthlyData = [
  { name: "Jan", trees: 5, carbon: 0.1 },
  { name: "Feb", trees: 8, carbon: 0.16 },
  { name: "Mar", trees: 12, carbon: 0.24 },
  { name: "Apr", trees: 10, carbon: 0.2 },
  { name: "May", trees: 15, carbon: 0.3 },
  { name: "Jun", trees: 25, carbon: 0.5 },
  { name: "Jul", trees: 20, carbon: 0.4 },
  { name: "Aug", trees: 18, carbon: 0.36 },
  { name: "Sep", trees: 22, carbon: 0.44 },
  { name: "Oct", trees: 30, carbon: 0.6 },
  { name: "Nov", trees: 0, carbon: 0 },
  { name: "Dec", trees: 0, carbon: 0 },
]

// Dynamically import chart components with SSR disabled
const ChartComponent = dynamic(() => import("./chart-component"), {
  ssr: false,
  loading: () => <div className="h-[300px] bg-gray-100 flex items-center justify-center">Loading chart...</div>,
})

export function DashboardStats() {
  const [activeTab, setActiveTab] = useState("trees")

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Impact Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-500">Trees Planted</h4>
            <p className="text-3xl font-bold">165</p>
            <div className="flex items-center text-xs text-green-600">
              <span>+12% from last month</span>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-500">CO₂ Offset</h4>
            <p className="text-3xl font-bold">3.3 tons</p>
            <div className="flex items-center text-xs text-green-600">
              <span>+8% from last month</span>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-500">Healing Score</h4>
            <p className="text-3xl font-bold">720</p>
            <Progress value={72} className="h-2" />
            <div className="flex justify-between text-xs text-gray-500">
              <span>0</span>
              <span>1000</span>
            </div>
          </div>
        </div>

        <Tabs defaultValue="trees" onValueChange={setActiveTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="trees">Trees Planted</TabsTrigger>
            <TabsTrigger value="carbon">Carbon Offset</TabsTrigger>
          </TabsList>

          <TabsContent value="trees" className="h-[300px]">
            <ChartComponent data={monthlyData} type="bar" dataKey="trees" />
          </TabsContent>

          <TabsContent value="carbon" className="h-[300px]">
            <ChartComponent data={monthlyData} type="line" dataKey="carbon" />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
