"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function ProjectFilter() {
  const [projectType, setProjectType] = useState("all")
  const [treeRange, setTreeRange] = useState([0, 25000])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Filter Projects</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <Label>Project Type</Label>
          <RadioGroup defaultValue="all" onValueChange={setProjectType}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="all" />
              <Label htmlFor="all">All Projects</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="active" id="active" />
              <Label htmlFor="active">Active Only</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="upcoming" id="upcoming" />
              <Label htmlFor="upcoming">Upcoming</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="completed" id="completed" />
              <Label htmlFor="completed">Completed</Label>
            </div>
          </RadioGroup>
        </div>

        <Separator />

        <div className="space-y-3">
          <Label>Regions</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="south-america" />
              <Label htmlFor="south-america">South America</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="africa" />
              <Label htmlFor="africa">Africa</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="asia" />
              <Label htmlFor="asia">Asia</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="central-america" />
              <Label htmlFor="central-america">Central America</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="oceania" />
              <Label htmlFor="oceania">Oceania</Label>
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-3">
          <div className="flex justify-between">
            <Label>Trees Planted Range</Label>
            <span className="text-sm text-gray-500">
              {treeRange[0].toLocaleString()} - {treeRange[1].toLocaleString()}
            </span>
          </div>
          <Slider defaultValue={[0, 25000]} max={25000} step={1000} onValueChange={setTreeRange} />
        </div>

        <Separator />

        <div className="space-y-3">
          <Label>Project Features</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="carbon-certified" />
              <Label htmlFor="carbon-certified">Carbon Certified</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="community-led" />
              <Label htmlFor="community-led">Community Led</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="biodiversity" />
              <Label htmlFor="biodiversity">Biodiversity Focus</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="endangered" />
              <Label htmlFor="endangered">Endangered Species Protection</Label>
            </div>
          </div>
        </div>

        <Button className="w-full bg-green-600 hover:bg-green-700">Apply Filters</Button>
      </CardContent>
    </Card>
  )
}
