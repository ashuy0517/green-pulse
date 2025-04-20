"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const projects = [
  {
    id: "amazon",
    name: "Amazon Rainforest",
    location: "Brazil",
    description: "Restore deforested areas in the Amazon rainforest with native tree species.",
    image: "/placeholder.svg?height=200&width=300",
    price: 5,
  },
  {
    id: "borneo",
    name: "Borneo Restoration",
    location: "Indonesia",
    description: "Reforest areas affected by palm oil plantations with diverse native trees.",
    image: "/placeholder.svg?height=200&width=300",
    price: 6,
  },
  {
    id: "kenya",
    name: "Kenya Reforestation",
    location: "Kenya",
    description: "Plant trees to combat desertification and provide sustainable livelihoods.",
    image: "/placeholder.svg?height=200&width=300",
    price: 4,
  },
]

export function ProjectSelector() {
  const [selectedProject, setSelectedProject] = useState(projects[0].id)

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Select a Project</h2>
      <RadioGroup value={selectedProject} onValueChange={setSelectedProject}>
        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.id} className="relative">
              <RadioGroupItem value={project.id} id={project.id} className="peer sr-only" />
              <Label htmlFor={project.id} className="block cursor-pointer">
                <Card className="overflow-hidden transition-all peer-data-[state=checked]:border-green-600 peer-data-[state=checked]:ring-1 peer-data-[state=checked]:ring-green-600">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-40 object-cover"
                  />
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold">{project.name}</h3>
                      <span className="text-green-600 font-semibold">${project.price}/tree</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-1">{project.location}</p>
                    <p className="text-sm">{project.description}</p>
                  </CardContent>
                </Card>
              </Label>
            </div>
          ))}
        </div>
      </RadioGroup>
    </div>
  )
}
