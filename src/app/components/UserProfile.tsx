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
    // Here you would typically save to backend
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      {/* Navigation */}
      <Navigation onNavigate={onNavigate} currentPage="profile" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 dark:text-white">Profile</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage your account and view your progress</p>
        </div>

        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <Avatar className="size-24 border-4 border-purple-100">
                <AvatarImage src={profile.avatarUrl} />
                <AvatarFallback className="bg-gradient-to-br from-purple-600 to-blue-600 text-white text-2xl">
                  {profile.name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold">{profile.name}</h1>
                  <Badge className="bg-purple-600">Level {stats.level}</Badge>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Mail className="size-4" />
                    <span>{profile.email}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="size-4" />
                    <span>Joined {profile.joinDate}</span>
                  </div>
                </div>
                <p className="text-gray-600">{profile.bio}</p>
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
              <TabsList className="grid w-full grid-cols-3">
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
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-sm font-medium text-gray-600">
                            Total Crystals
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center gap-2">
                            <Sparkles className="size-8 text-purple-600" />
                            <div className="text-3xl font-bold text-purple-600">
                              {stats.totalCrystals.toLocaleString()}
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-sm font-medium text-gray-600">
                            Global Rank
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center gap-2">
                            <Award className="size-8 text-yellow-600" />
                            <div>
                              <div className="text-3xl font-bold">#{stats.rank}</div>
                              <p className="text-sm text-gray-600">
                                of {stats.totalUsers.toLocaleString()}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-sm font-medium text-gray-600">
                            Tasks Completed
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center gap-2">
                            <TrendingUp className="size-8 text-green-600" />
                            <div className="text-3xl font-bold">{stats.tasksCompleted}</div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-sm font-medium text-gray-600">
                            Referrals
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center gap-2">
                            <Users className="size-8 text-blue-600" />
                            <div className="text-3xl font-bold">{stats.referrals}</div>
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
                        <div className="flex justify-between text-sm text-gray-600">
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
                          className={`p-4 border rounded-lg ${
                            achievement.unlocked
                              ? "bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200"
                              : "bg-gray-50 opacity-60"
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className="text-3xl">{achievement.icon}</div>
                            <div className="flex-1">
                              <h3 className="font-semibold mb-1">{achievement.name}</h3>
                              <p className="text-sm text-gray-600">{achievement.description}</p>
                              {achievement.unlocked && (
                                <Badge variant="outline" className="mt-2 border-green-600 text-green-600">
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
                    <div className="space-y-4">
                      {crystalHistory.map((item) => (
                        <div key={item.id} className="flex items-center justify-between pb-4 border-b last:border-0">
                          <div className="flex-1">
                            <p className="font-medium">{item.action}</p>
                            <p className="text-sm text-gray-600">{item.date}</p>
                          </div>
                          <div className="flex items-center gap-1 text-green-600 font-semibold">
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
                  <span className="text-gray-600">This Week</span>
                  <div className="flex items-center gap-1 text-purple-600 font-semibold">
                    <Sparkles className="size-4" />
                    <span>+325</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">This Month</span>
                  <div className="flex items-center gap-1 text-purple-600 font-semibold">
                    <Sparkles className="size-4" />
                    <span>+1,250</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">All Time</span>
                  <div className="flex items-center gap-1 text-purple-600 font-semibold">
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
                        className="flex flex-col items-center p-3 bg-gradient-to-br from-purple-50/80 to-blue-50/80 dark:from-purple-900/20 dark:to-blue-900/20 backdrop-blur-sm rounded-lg"
                      >
                        <div className="text-2xl mb-1">{achievement.icon}</div>
                        <p className="text-xs text-center font-medium dark:text-white">{achievement.name}</p>
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