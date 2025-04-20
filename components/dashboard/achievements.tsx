import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const achievements = [
  {
    id: 1,
    name: "Forest Guardian",
    description: "Plant 50 trees",
    progress: 100,
    earned: true,
    date: "2023-09-20",
  },
  {
    id: 2,
    name: "Carbon Warrior",
    description: "Offset 5 tons of CO₂",
    progress: 66,
    earned: false,
  },
  {
    id: 3,
    name: "Global Planter",
    description: "Plant trees in 3 different regions",
    progress: 67,
    earned: false,
  },
  {
    id: 4,
    name: "Consistent Contributor",
    description: "Sponsor trees for 6 consecutive months",
    progress: 50,
    earned: false,
  },
]

export function Achievements() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Achievements</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium flex items-center gap-2">
                    {achievement.name}
                    {achievement.earned && (
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Earned</Badge>
                    )}
                  </h4>
                  <p className="text-sm text-gray-500">{achievement.description}</p>
                </div>
                {achievement.earned ? (
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m0 0v2m0-2h2m-2 0H9"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <Progress value={achievement.progress} className="h-2" />
              <div className="flex justify-between text-xs text-gray-500">
                <span>{achievement.progress}%</span>
                {achievement.earned && <span>Earned on {new Date(achievement.date).toLocaleDateString()}</span>}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
