import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays } from "lucide-react"

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    trees: 45,
    joinDate: "2023-09-15",
    type: "individual",
  },
  {
    id: 2,
    name: "Acme Corporation",
    email: "sustainability@acme.com",
    trees: 250,
    joinDate: "2023-08-22",
    type: "business",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    trees: 30,
    joinDate: "2023-10-05",
    type: "individual",
  },
  {
    id: 4,
    name: "Green School Initiative",
    email: "contact@greenschool.org",
    trees: 120,
    joinDate: "2023-09-30",
    type: "nonprofit",
  },
  {
    id: 5,
    name: "Michael Chen",
    email: "m.chen@example.com",
    trees: 15,
    joinDate: "2023-10-12",
    type: "individual",
  },
]

export function RecentUsers() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Recent Users</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {users.map((user) => (
            <div key={user.id} className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="font-medium">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{user.name}</p>
                      {user.type === "business" && (
                        <Badge variant="outline" className="bg-blue-50 text-blue-700">
                          Business
                        </Badge>
                      )}
                      {user.type === "nonprofit" && (
                        <Badge variant="outline" className="bg-purple-50 text-purple-700">
                          Nonprofit
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{user.email}</p>
                    <p className="text-sm">
                      <span className="font-medium">{user.trees}</span> trees sponsored
                    </p>
                  </div>

                  <div className="flex items-center text-xs text-gray-500">
                    <CalendarDays className="h-3 w-3 mr-1" />
                    Joined {new Date(user.joinDate).toLocaleDateString()}
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
