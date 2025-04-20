"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function ImpactCounter() {
  const [count, setCount] = useState({
    trees: 0,
    carbon: 0,
    area: 0,
  })

  const targetCount = {
    trees: 125000,
    carbon: 2500,
    area: 75,
  }

  useEffect(() => {
    const duration = 2000 // ms
    const interval = 20 // ms
    const steps = duration / interval

    const incrementTrees = targetCount.trees / steps
    const incrementCarbon = targetCount.carbon / steps
    const incrementArea = targetCount.area / steps

    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++

      setCount({
        trees: Math.min(Math.round(incrementTrees * currentStep), targetCount.trees),
        carbon: Math.min(Math.round(incrementCarbon * currentStep * 10) / 10, targetCount.carbon),
        area: Math.min(Math.round(incrementArea * currentStep * 10) / 10, targetCount.area),
      })

      if (currentStep >= steps) {
        clearInterval(timer)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <h3 className="text-5xl font-bold text-green-600 mb-2">{count.trees.toLocaleString()}</h3>
        <p className="text-xl text-gray-600">Trees Planted</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <h3 className="text-5xl font-bold text-green-600 mb-2">{count.carbon.toLocaleString()}</h3>
        <p className="text-xl text-gray-600">Tons of CO₂ Offset</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <h3 className="text-5xl font-bold text-green-600 mb-2">{count.area.toLocaleString()}</h3>
        <p className="text-xl text-gray-600">Hectares Restored</p>
      </motion.div>
    </div>
  )
}
