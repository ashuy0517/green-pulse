"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { useToast } from "@/components/ui/use-toast"
import { Leaf, CreditCard } from "lucide-react"

export function SponsorshipForm() {
  const [treeCount, setTreeCount] = useState(10)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const pricePerTree = 5
  const totalPrice = treeCount * pricePerTree

  // Calculate environmental impact
  const co2Offset = treeCount * 0.02 // Tons of CO2 per tree per year
  const landRestored = treeCount * 0.0006 // Hectares per tree

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Trees sponsored successfully!",
        description: `You've sponsored ${treeCount} trees. Thank you for your contribution!`,
      })
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="tree-count">Number of Trees</Label>
              <div className="flex items-center gap-4">
                <Slider
                  id="tree-count"
                  min={1}
                  max={100}
                  step={1}
                  value={[treeCount]}
                  onValueChange={(value) => setTreeCount(value[0])}
                  className="flex-1"
                />
                <Input
                  type="number"
                  value={treeCount}
                  onChange={(e) => setTreeCount(Number(e.target.value))}
                  min={1}
                  max={100}
                  className="w-20"
                />
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 flex items-center">
                <Leaf className="h-5 w-5 mr-2 text-green-600" />
                Your Environmental Impact
              </h3>
              <ul className="space-y-1 text-sm">
                <li className="flex justify-between">
                  <span>CO₂ Offset:</span>
                  <span className="font-medium">{co2Offset.toFixed(2)} tons/year</span>
                </li>
                <li className="flex justify-between">
                  <span>Land Restored:</span>
                  <span className="font-medium">{landRestored.toFixed(4)} hectares</span>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold flex items-center">
                <CreditCard className="h-5 w-5 mr-2 text-green-600" />
                Payment Summary
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span>{treeCount} Trees</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>Processing Fee</span>
                  <span>$0.00</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-bold">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isLoading}>
            {isLoading ? "Processing..." : `Sponsor ${treeCount} Trees`}
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}
