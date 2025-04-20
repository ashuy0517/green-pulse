import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { TreeMap } from "@/components/dashboard/tree-map"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { Achievements } from "@/components/dashboard/achievements"

export const metadata: Metadata = {
  title: "Dashboard | GreenPulse",
  description: "Track your reforestation impact and tree growth",
}

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <DashboardHeader />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <DashboardStats />
        </div>
        <div>
          <Achievements />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TreeMap />
        </div>
        <div>
          <RecentActivity />
        </div>
      </div>
    </div>
  )
}
