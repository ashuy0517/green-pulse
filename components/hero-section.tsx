"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-green-50 to-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Restore Our Forests, <span className="text-green-600">One Tree at a Time</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              GreenPulse connects you directly to reforestation projects worldwide. Sponsor trees, track their growth,
              and measure your environmental impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <Link href="/sponsor">Sponsor Trees</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl"
          >
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Reforestation project"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
