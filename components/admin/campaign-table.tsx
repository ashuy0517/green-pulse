"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Edit, MoreHorizontal, Search, Trash2 } from "lucide-react"

const campaigns = [
  {
    id: 1,
    name: "Amazon Rainforest Restoration",
    location: "Brazil",
    trees: 12500,
    target: 25000,
    status: "active",
    startDate: "2023-01-15",
    endDate: "2023-12-31",
  },
  {
    id: 2,
    name: "Borneo Mangrove Planting",
    location: "Indonesia",
    trees: 8200,
    target: 15000,
    status: "active",
    startDate: "2023-03-10",
    endDate: "2023-11-30",
  },
  {
    id: 3,
    name: "Kenya Drought Resistance",
    location: "Kenya",
    trees: 6700,
    target: 10000,
    status: "active",
    startDate: "2023-05-22",
    endDate: "2024-05-22",
  },
  {
    id: 4,
    name: "Madagascar Reforestation",
    location: "Madagascar",
    trees: 0,
    target: 20000,
    status: "planned",
    startDate: "2024-01-15",
    endDate: "2024-12-31",
  },
  {
    id: 5,
    name: "Costa Rica Cloud Forest",
    location: "Costa Rica",
    trees: 5000,
    target: 5000,
    status: "completed",
    startDate: "2022-06-10",
    endDate: "2023-06-10",
  },
]

export function CampaignTable() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCampaigns = campaigns.filter(
    (campaign) =>
      campaign.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      campaign.location.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Campaigns</CardTitle>
        <div className="relative w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search campaigns..."
            className="pl-8 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Progress</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Timeline</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCampaigns.map((campaign) => (
              <TableRow key={campaign.id}>
                <TableCell className="font-medium">{campaign.name}</TableCell>
                <TableCell>{campaign.location}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-green-600 h-2.5 rounded-full"
                        style={{ width: `${Math.min(100, (campaign.trees / campaign.target) * 100)}%` }}
                      ></div>
                    </div>
                    <span className="text-xs whitespace-nowrap">
                      {campaign.trees.toLocaleString()} / {campaign.target.toLocaleString()}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  {campaign.status === "active" && (
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Active</Badge>
                  )}
                  {campaign.status === "planned" && (
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Planned</Badge>
                  )}
                  {campaign.status === "completed" && (
                    <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100">Completed</Badge>
                  )}
                </TableCell>
                <TableCell>
                  <div className="text-xs">
                    <p>Start: {new Date(campaign.startDate).toLocaleDateString()}</p>
                    <p>End: {new Date(campaign.endDate).toLocaleDateString()}</p>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        <span>Edit</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>View Details</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="mr-2 h-4 w-4" />
                        <span>Delete</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
