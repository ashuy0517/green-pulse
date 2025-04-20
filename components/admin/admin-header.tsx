"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search } from "lucide-react"

export function AdminHeader() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-500">Manage reforestation campaigns and users</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input type="search" placeholder="Search..." className="pl-8 w-full sm:w-[260px]" />
        </div>

        <Button className="bg-green-600 hover:bg-green-700">
          <Plus className="mr-2 h-4 w-4" />
          New Campaign
        </Button>
      </div>
    </div>
  )
}
