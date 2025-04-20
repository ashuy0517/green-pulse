"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b bg-background">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-green-600">GreenPulse</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-green-600">
              About
            </Link>
            <Link href="/projects" className="text-sm font-medium transition-colors hover:text-green-600">
              Projects
            </Link>
            <Link href="/map" className="text-sm font-medium transition-colors hover:text-green-600">
              Map
            </Link>
            <Link href="/dashboard" className="text-sm font-medium transition-colors hover:text-green-600">
              Dashboard
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ModeToggle />
            <Button asChild variant="outline" size="sm">
              <Link href="/login">Log In</Link>
            </Button>
            <Button asChild size="sm" className="bg-green-600 hover:bg-green-700">
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            <ModeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/about"
              className="block py-2 text-sm font-medium hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/projects"
              className="block py-2 text-sm font-medium hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/map"
              className="block py-2 text-sm font-medium hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Map
            </Link>
            <Link
              href="/dashboard"
              className="block py-2 text-sm font-medium hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <div className="pt-4 flex flex-col space-y-2">
              <Button asChild variant="outline">
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  Log In
                </Link>
              </Button>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                  Sign Up
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
