import type { Metadata } from "next"
import { AdminHeader } from "@/components/admin/admin-header"
import { AdminStats } from "@/components/admin/admin-stats"
import { CampaignTable } from "@/components/admin/campaign-table"
import { RecentUsers } from "@/components/admin/recent-users"

export const metadata: Metadata = {
  title: "Admin Dashboard | GreenPulse",
  description: "Manage reforestation campaigns and users",
}

export default function AdminPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <AdminHeader />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-3">
          <AdminStats />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CampaignTable />
        </div>
        <div>
          <RecentUsers />
        </div>
      </div>
    </div>
  )
}
