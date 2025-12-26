import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Sparkles, Users, CheckCircle2, Gift, TrendingUp, Share2 } from "lucide-react";
import { Navigation } from "./Navigation";

interface DashboardProps {
  onNavigate: (page: string) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  const [crystals] = useState(2450);
  const [level] = useState(7);
  const [nextLevelCrystals] = useState(3000);

  const tasks = [
    {
      id: 1,
      title: "Complete your profile",
      description: "Add profile picture and bio",
      reward: 50,
      type: "Profile",
      completed: true,
    },
    {
      id: 2,
      title: "Refer 3 friends",
      description: "Share your referral link with friends",
      reward: 150,
      type: "Referral",
      completed: false,
      progress: 1,
      total: 3,
    },
    {
      id: 3,
      title: "Join the Alpha Project",
      description: "Early access to our new project launch",
      reward: 500,
      type: "Project",
      completed: false,
      featured: true,
    },
    {
      id: 4,
      title: "Daily check-in",
      description: "Log in for 7 consecutive days",
      reward: 100,
      type: "Daily",
      completed: false,
      progress: 4,
      total: 7,
    },
    {
      id: 5,
      title: "Complete 10 tasks",
      description: "Finish any 10 tasks to unlock this reward",
      reward: 200,
      type: "Achievement",
      completed: false,
      progress: 6,
      total: 10,
    },
  ];

  const recentActivity = [
    { id: 1, action: "Completed profile setup", crystals: 50, time: "2 hours ago" },
    { id: 2, action: "Referred a friend", crystals: 50, time: "1 day ago" },
    { id: 3, action: "Daily check-in streak", crystals: 25, time: "2 days ago" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      {/* Navigation */}
      <Navigation onNavigate={onNavigate} currentPage="dashboard" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 dark:text-white">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">Track your progress and earn more crystals</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Crystals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Sparkles className="size-8 text-purple-600 dark:text-purple-400" />
                <div>
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">{crystals.toLocaleString()}</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Level {level}</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600 dark:text-gray-400">Progress to Level {level + 1}</span>
                  <span className="font-medium dark:text-gray-300">{crystals}/{nextLevelCrystals}</span>
                </div>
                <Progress value={(crystals / nextLevelCrystals) * 100} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Tasks Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-8 text-green-600 dark:text-green-400" />
                <div>
                  <div className="text-3xl font-bold dark:text-white">12</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">This month</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm">
                <TrendingUp className="size-4 text-green-600 dark:text-green-400" />
                <span className="text-green-600 dark:text-green-400 font-medium">+25%</span>
                <span className="text-gray-600 dark:text-gray-400">from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Referrals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Users className="size-8 text-blue-600 dark:text-blue-400" />
                <div>
                  <div className="text-3xl font-bold dark:text-white">8</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Friends joined</p>
                </div>
              </div>
              <div className="mt-4">
                <Button variant="outline" size="sm" className="w-full dark:border-white/20 dark:hover:bg-white/10">
                  <Share2 className="size-4 mr-2" />
                  Share Referral Link
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Available Tasks */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Available Tasks</CardTitle>
                <CardDescription>Complete tasks to earn crystals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className={`p-4 border rounded-lg ${
                      task.completed ? "bg-gray-50 dark:bg-white/5 opacity-75" : "bg-white/50 dark:bg-white/5 hover:border-purple-300 dark:hover:border-purple-500/40 border-white/20 dark:border-white/10"
                    } transition-colors backdrop-blur-sm`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold dark:text-white">{task.title}</h3>
                          {task.featured && (
                            <Badge variant="default" className="bg-purple-600 dark:bg-purple-500">
                              Featured
                            </Badge>
                          )}
                          {task.completed && (
                            <CheckCircle2 className="size-5 text-green-600 dark:text-green-400" />
                          )}
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{task.description}</p>
                        <Badge variant="outline" className="dark:border-white/20 dark:text-gray-300">{task.type}</Badge>
                      </div>
                      <div className="flex items-center gap-1 text-purple-600 dark:text-purple-400 font-semibold ml-4">
                        <Sparkles className="size-4" />
                        <span>{task.reward}</span>
                      </div>
                    </div>
                    {task.progress !== undefined && task.total && (
                      <div className="mt-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600 dark:text-gray-400">Progress</span>
                          <span className="font-medium dark:text-gray-300">
                            {task.progress}/{task.total}
                          </span>
                        </div>
                        <Progress value={(task.progress / task.total) * 100} className="h-2" />
                      </div>
                    )}
                    {!task.completed && (
                      <div className="mt-3">
                        <Button
                          size="sm"
                          className="w-full dark:border-white/20"
                          variant={task.featured ? "default" : "outline"}
                          onClick={() => {
                            if (task.id === 3) {
                              onNavigate("task");
                            }
                          }}
                        >
                          {task.id === 3 ? "View Project" : "Start Task"}
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest achievements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 size-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="size-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium dark:text-white">{activity.action}</p>
                      <div className="flex items-center gap-1 text-purple-600 dark:text-purple-400 text-sm font-medium mt-1">
                        <Sparkles className="size-3" />
                        <span>+{activity.crystals}</span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Rewards Preview */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="size-5 text-purple-600 dark:text-purple-400" />
                  Upcoming Rewards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-500/20">
                    <p className="font-medium mb-1 dark:text-white">VIP Badge</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Unlock at 5,000 crystals</p>
                    <Progress value={49} className="h-2" />
                  </div>
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-500/20">
                    <p className="font-medium mb-1 dark:text-white">Premium Access</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Unlock at Level 10</p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full mt-3 dark:border-white/20 dark:hover:bg-white/10"
                    onClick={() => onNavigate("rewards")}
                  >
                    View All Rewards
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}