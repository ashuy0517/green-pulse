"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts"
import { ArrowUpRight, Users, TreePine, DollarSign, Globe } from "lucide-react"

const monthlyData = [
  { name: "Jan", trees: 1200, revenue: 6000 },
  { name: "Feb", trees: 1800, revenue: 9000 },
  { name: "Mar", trees: 2400, revenue: 12000 },
  { name: "Apr", trees: 2000, revenue: 10000 },
  { name: "May", trees: 2800, revenue: 14000 },
  { name: "Jun", trees: 3600, revenue: 18000 },
  { name: "Jul", trees: 3200, revenue: 16000 },
  { name: "Aug", trees: 3000, revenue: 15000 },
  { name: "Sep", trees: 3400, revenue: 17000 },
  { name: "Oct", trees: 4000, revenue: 20000 },
  { name: "Nov", trees: 0, revenue: 0 },
  { name: "Dec", trees: 0, revenue: 0 },
]

const projectData = [
  { name: "Amazon Rainforest", value: 45 },
  { name: "Borneo Restoration", value: 30 },
  { name: "Kenya Reforestation", value: 25 },
]

const COLORS = ["#22c55e", "#3b82f6", "#f59e0b"]

export function AdminStats() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-500">Total Trees</p>
                <p className="text-3xl font-bold">27,400</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <TreePine className="h-5 w-5 text-green-600" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm text-green-600">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span>12% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-500">Total Revenue</p>
                <p className="text-3xl font-bold">$137,000</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm text-green-600">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span>18% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-500">Active Users</p>
                <p className="text-3xl font-bold">3,240</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <Users className="h-5 w-5 text-purple-600" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm text-green-600">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span>8% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-500">Active Projects</p>
                <p className="text-3xl font-bold">3</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                <Globe className="h-5 w-5 text-amber-600" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm text-green-600">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span>No change from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardContent className="p-6">
            <Tabs defaultValue="trees">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Performance</h3>
                <TabsList>
                  <TabsTrigger value="trees">Trees</TabsTrigger>
                  <TabsTrigger value="revenue">Revenue</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="trees" className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="trees" fill="#22c55e" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </TabsContent>

              <TabsContent value="revenue" className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`$${value}`, "Revenue"]} />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Project Distribution</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={projectData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {projectData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend />
                  <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
