import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Sparkles,
  Mail,
  Calendar,
  Award,
  TrendingUp,
  Users,
  Edit2,
  Save,
  X,
} from "lucide-react";
import { Navigation } from "./Navigation";

interface UserProfileProps {
  onNavigate: (page: string) => void;
}

export function UserProfile({ onNavigate }: UserProfileProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    bio: "Passionate about earning crystals and completing challenges!",
    joinDate: "January 2025",
    avatarUrl: "",
  });

  const stats = {
    totalCrystals: 2450,
    level: 7,
    tasksCompleted: 12,
    referrals: 8,
    rank: 156,
    totalUsers: 50000,
  };

  const achievements = [
    { id: 1, name: "Early Adopter", description: "Joined in the first month", icon: "🌟", unlocked: true },
    { id: 2, name: "Social Butterfly", description: "Referred 5+ friends", icon: "🦋", unlocked: true },
    { id: 3, name: "Task Master", description: "Completed 10 tasks", icon: "✅", unlocked: true },
    { id: 4, name: "Streak Keeper", description: "7-day login streak", icon: "🔥", unlocked: false },
    { id: 5, name: "Crystal Collector", description: "Earned 5,000 crystals", icon: "💎", unlocked: false },
    { id: 6, name: "VIP Member", description: "Reached Level 10", icon: "👑", unlocked: false },
  ];

  const crystalHistory = [
    { id: 1, date: "Dec 20, 2025", action: "Completed profile setup", amount: 50, type: "earned" },
    { id: 2, date: "Dec 19, 2025", action: "Referred a friend", amount: 50, type: "earned" },
    { id: 3, date: "Dec 18, 2025", action: "Daily check-in", amount: 25, type: "earned" },
    { id: 4, date: "Dec 17, 2025", action: "Completed survey task", amount: 75, type: "earned" },
    { id: 5, date: "Dec 16, 2025", action: "Joined project campaign", amount: 200, type: "earned" },
  ];

  const handleSaveProfile = () => {
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-black">
      <Navigation onNavigate={onNavigate} currentPage="profile" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-semibold mb-2 text-neutral-900 dark:text-white">Profile</h1>
          <p className="text-neutral-600 dark:text-neutral-400">Manage your account and view your progress</p>
        </div>

        {/* Profile Header */}
        <Card className="mb-12">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <Avatar className="size-24 border-4 border-neutral-100 dark:border-neutral-800">
                <AvatarImage src={profile.avatarUrl} />
                <AvatarFallback className="bg-blue-600 dark:bg-blue-500 text-white text-2xl">
                  {profile.name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-semibold text-neutral-900 dark:text-white">{profile.name}</h1>
                  <Badge className="bg-blue-600 dark:bg-blue-500">Level {stats.level}</Badge>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Mail className="size-4" />
                    <span>{profile.email}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="size-4" />
                    <span>Joined {profile.joinDate}</span>
                  </div>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400">{profile.bio}</p>
              </div>
              <Button
                variant={isEditing ? "outline" : "default"}
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? (
                  <>
                    <X className="size-4 mr-2" />
                    Cancel
                  </>
                ) : (
                  <>
                    <Edit2 className="size-4 mr-2" />
                    Edit Profile
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {isEditing ? (
                  <Card>
                    <CardHeader>
                      <CardTitle>Edit Profile</CardTitle>
                      <CardDescription>Update your profile information</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          value={profile.name}
                          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={profile.email}
                          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea
                          id="bio"
                          value={profile.bio}
                          onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                          rows={4}
                        />
                      </div>
                      <Button onClick={handleSaveProfile} className="w-full">
                        <Save className="size-4 mr-2" />
                        Save Changes
                      </Button>
                    </CardContent>
                  </Card>
                ) : (
                  <>
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="size-12 rounded-xl bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center">
                              <Sparkles className="size-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                              <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">Total Crystals</div>
                              <div className="text-2xl font-semibold text-neutral-900 dark:text-white">
                                {stats.totalCrystals.toLocaleString()}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="size-12 rounded-xl bg-green-50 dark:bg-green-950/30 flex items-center justify-center">
                              <Award className="size-6 text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                              <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">Global Rank</div>
                              <div className="text-2xl font-semibold text-neutral-900 dark:text-white">#{stats.rank}</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="size-12 rounded-xl bg-purple-50 dark:bg-purple-950/30 flex items-center justify-center">
                              <TrendingUp className="size-6 text-purple-600 dark:text-purple-400" />
                            </div>
                            <div>
                              <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">Tasks Completed</div>
                              <div className="text-2xl font-semibold text-neutral-900 dark:text-white">{stats.tasksCompleted}</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="size-12 rounded-xl bg-orange-50 dark:bg-orange-950/30 flex items-center justify-center">
                              <Users className="size-6 text-orange-600 dark:text-orange-400" />
                            </div>
                            <div>
                              <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">Referrals</div>
                              <div className="text-2xl font-semibold text-neutral-900 dark:text-white">{stats.referrals}</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Level Progress</CardTitle>
                        <CardDescription>
                          Earn 550 more crystals to reach Level {stats.level + 1}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Progress value={81.67} className="h-3 mb-2" />
                        <div className="flex justify-between text-sm text-neutral-600 dark:text-neutral-400">
                          <span>Level {stats.level}</span>
                          <span>Level {stats.level + 1}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </>
                )}
              </TabsContent>

              <TabsContent value="achievements">
                <Card>
                  <CardHeader>
                    <CardTitle>Achievements</CardTitle>
                    <CardDescription>Track your accomplishments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {achievements.map((achievement) => (
                        <div
                          key={achievement.id}
                          className={`p-5 border rounded-xl ${
                            achievement.unlocked
                              ? "bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900/50"
                              : "bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 opacity-50"
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className="text-3xl">{achievement.icon}</div>
                            <div className="flex-1">
                              <h3 className="font-semibold mb-1 text-neutral-900 dark:text-white">{achievement.name}</h3>
                              <p className="text-sm text-neutral-600 dark:text-neutral-400">{achievement.description}</p>
                              {achievement.unlocked && (
                                <Badge variant="outline" className="mt-2 border-green-600 text-green-600 dark:border-green-400 dark:text-green-400">
                                  Unlocked
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="history">
                <Card>
                  <CardHeader>
                    <CardTitle>Crystal History</CardTitle>
                    <CardDescription>Your recent crystal transactions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {crystalHistory.map((item) => (
                        <div key={item.id} className="flex items-center justify-between pb-4 border-b border-neutral-200 dark:border-neutral-700 last:border-0">
                          <div className="flex-1">
                            <p className="font-medium text-neutral-900 dark:text-white">{item.action}</p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">{item.date}</p>
                          </div>
                          <div className="flex items-center gap-1 text-green-600 dark:text-green-400 font-semibold">
                            <Sparkles className="size-4" />
                            <span>+{item.amount}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600 dark:text-neutral-400">This Week</span>
                  <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold">
                    <Sparkles className="size-4" />
                    <span>+325</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600 dark:text-neutral-400">This Month</span>
                  <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold">
                    <Sparkles className="size-4" />
                    <span>+1,250</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600 dark:text-neutral-400">All Time</span>
                  <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold">
                    <Sparkles className="size-4" />
                    <span>{stats.totalCrystals.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Badges</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3">
                  {achievements
                    .filter((a) => a.unlocked)
                    .slice(0, 3)
                    .map((achievement) => (
                      <div
                        key={achievement.id}
                        className="flex flex-col items-center p-3 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 rounded-xl"
                      >
                        <div className="text-2xl mb-1">{achievement.icon}</div>
                        <p className="text-xs text-center font-medium text-neutral-900 dark:text-white">{achievement.name}</p>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
