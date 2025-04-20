import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Leaf, TreePine } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "sponsor",
    project: "Amazon Rainforest",
    trees: 10,
    date: "2023-10-15",
  },
  {
    id: 2,
    type: "growth",
    project: "Borneo Restoration",
    message: "Your trees have grown 5cm this month!",
    date: "2023-10-10",
  },
  {
    id: 3,
    type: "sponsor",
    project: "Kenya Reforestation",
    trees: 15,
    date: "2023-09-28",
  },
  {
    id: 4,
    type: "achievement",
    badge: "Forest Guardian",
    message: "You've planted 50 trees!",
    date: "2023-09-20",
  },
  {
    id: 5,
    type: "growth",
    project: "Amazon Rainforest",
    message: "New photos of your trees are available!",
    date: "2023-09-15",
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {activities.map((activity) => (
            <div key={activity.id} className="flex gap-4">
              <div className="mt-1">
                {activity.type === "sponsor" && (
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <TreePine className="h-4 w-4 text-green-600" />
                  </div>
                )}
                {activity.type === "growth" && (
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Leaf className="h-4 w-4 text-blue-600" />
                  </div>
                )}
                {activity.type === "achievement" && (
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                    <svg className="h-4 w-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 1l2.928 6.377 6.541.95-4.735 4.608 1.12 6.516L10 16.664l-5.853 3.787 1.12-6.516L.53 8.328l6.541-.95L10 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <div>
                    {activity.type === "sponsor" && (
                      <p className="font-medium">
                        Sponsored {activity.trees} trees in {activity.project}
                      </p>
                    )}
                    {activity.type === "growth" && <p className="font-medium">{activity.project} Update</p>}
                    {activity.type === "achievement" && (
                      <p className="font-medium flex items-center gap-2">
                        Earned Badge
                        <Badge variant="outline" className="bg-amber-50 text-amber-700 hover:bg-amber-50">
                          {activity.badge}
                        </Badge>
                      </p>
                    )}

                    {activity.message && <p className="text-sm text-gray-500">{activity.message}</p>}
                  </div>

                  <div className="flex items-center text-xs text-gray-500">
                    <CalendarDays className="h-3 w-3 mr-1" />
                    {new Date(activity.date).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
