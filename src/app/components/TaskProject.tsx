import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import {
  Sparkles,
  ArrowLeft,
  Users,
  Calendar,
  TrendingUp,
  CheckCircle2,
  Clock,
  Gift,
  Star,
} from "lucide-react";
import { Navigation } from "./Navigation";

interface TaskProjectProps {
  onNavigate: (page: string) => void;
}

export function TaskProject({ onNavigate }: TaskProjectProps) {
  const [joined, setJoined] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const project = {
    title: "Alpha Launch Campaign",
    description: "Be among the first to experience our revolutionary new platform. Complete simple tasks to earn massive crystal rewards and exclusive early access benefits.",
    status: "Active",
    totalParticipants: 1247,
    endDate: "December 31, 2025",
    totalReward: 1500,
    category: "Launch Event",
    difficulty: "Easy",
  };

  const rewards = [
    { crystals: 500, action: "Join the campaign", icon: "🎯" },
    { crystals: 300, action: "Complete all tasks", icon: "✅" },
    { crystals: 200, action: "Refer 2 friends", icon: "👥" },
    { crystals: 500, action: "Early adopter bonus", icon: "⭐" },
  ];

  const tasks = [
    {
      id: 1,
      title: "Follow us on social media",
      description: "Follow our official accounts on Twitter and LinkedIn",
      reward: 50,
      required: true,
    },
    {
      id: 2,
      title: "Join our Discord community",
      description: "Become a member of our active Discord server",
      reward: 50,
      required: true,
    },
    {
      id: 3,
      title: "Complete the feedback survey",
      description: "Share your thoughts about our platform",
      reward: 100,
      required: true,
    },
    {
      id: 4,
      title: "Share the campaign",
      description: "Share this campaign on your social media",
      reward: 75,
      required: false,
    },
    {
      id: 5,
      title: "Invite friends",
      description: "Invite at least 2 friends to join the campaign",
      reward: 200,
      required: false,
    },
  ];

  const milestones = [
    { participants: 500, reward: "50 bonus crystals", achieved: true },
    { participants: 1000, reward: "100 bonus crystals", achieved: true },
    { participants: 2000, reward: "200 bonus crystals", achieved: false },
    { participants: 5000, reward: "VIP badge for all", achieved: false },
  ];

  const handleJoinCampaign = () => {
    setJoined(true);
  };

  const handleToggleTask = (taskId: number) => {
    if (completedSteps.includes(taskId)) {
      setCompletedSteps(completedSteps.filter((id) => id !== taskId));
    } else {
      setCompletedSteps([...completedSteps, taskId]);
    }
  };

  const totalEarned = tasks
    .filter((task) => completedSteps.includes(task.id))
    .reduce((sum, task) => sum + task.reward, 0);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-black">
      <Navigation onNavigate={onNavigate} currentPage="task" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Button variant="ghost" className="mb-8 -ml-2" onClick={() => onNavigate("dashboard")}>
          <ArrowLeft className="size-4 mr-2" />
          Back to Dashboard
        </Button>

        {/* Project Header */}
        <Card className="mb-12 bg-neutral-900 dark:bg-neutral-800 border-neutral-800 dark:border-neutral-700 text-white">
          <CardContent className="py-12">
            <div className="flex items-center gap-2 mb-6">
              <Badge className="bg-green-600 text-white">{project.status}</Badge>
              <Badge variant="outline" className="border-white/30 text-white">
                {project.category}
              </Badge>
              <Badge variant="outline" className="border-white/30 text-white">
                {project.difficulty}
              </Badge>
            </div>
            <h1 className="text-4xl font-semibold mb-4">{project.title}</h1>
            <p className="text-xl text-neutral-300 mb-8 max-w-3xl">{project.description}</p>
            <div className="flex flex-wrap gap-6 text-sm text-neutral-300">
              <div className="flex items-center gap-2">
                <Users className="size-5" />
                <span>{project.totalParticipants.toLocaleString()} participants</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="size-5" />
                <span>Ends {project.endDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="size-5" />
                <span>Up to {project.totalReward} crystals</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Join Campaign Card */}
            {!joined ? (
              <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900/50">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h2 className="text-2xl font-semibold mb-2 text-neutral-900 dark:text-white">Join the Campaign</h2>
                      <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                        Start earning crystals immediately by joining this exclusive campaign. No commitment required!
                      </p>
                      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-xl mb-4">
                        <Sparkles className="size-6" />
                        <span>+500 crystals just for joining!</span>
                      </div>
                    </div>
                    <Button size="lg" onClick={handleJoinCampaign} className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                      Join Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-900/50">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className="size-6 text-green-600 dark:text-green-400" />
                    <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">You're In!</h2>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Congratulations! You've joined the campaign and earned 500 crystals. Complete tasks below to earn more!
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Tasks */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Campaign Tasks</CardTitle>
                    <CardDescription>
                      Complete tasks to earn crystals ({completedSteps.length}/{tasks.length} completed)
                    </CardDescription>
                  </div>
                  {joined && (
                    <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold text-lg">
                      <Sparkles className="size-5" />
                      <span>{totalEarned} earned</span>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className={`p-5 border rounded-xl transition-colors ${
                      completedSteps.includes(task.id)
                        ? "bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-900/50"
                        : joined
                        ? "bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600"
                        : "bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 opacity-50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <Checkbox
                        checked={completedSteps.includes(task.id)}
                        onCheckedChange={() => handleToggleTask(task.id)}
                        disabled={!joined}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-neutral-900 dark:text-white">{task.title}</h3>
                          {task.required && (
                            <Badge variant="outline" className="text-xs">
                              Required
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">{task.description}</p>
                        <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium text-sm">
                          <Sparkles className="size-4" />
                          <span>+{task.reward} crystals</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Community Milestones */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="size-5 text-neutral-900 dark:text-white" />
                  Community Milestones
                </CardTitle>
                <CardDescription>Everyone gets rewards when milestones are reached</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div
                      className={`size-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        milestone.achieved ? "bg-green-50 dark:bg-green-950/30" : "bg-neutral-100 dark:bg-neutral-800"
                      }`}
                    >
                      {milestone.achieved ? (
                        <CheckCircle2 className="size-5 text-green-600 dark:text-green-400" />
                      ) : (
                        <Clock className="size-5 text-neutral-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-neutral-900 dark:text-white">
                          {milestone.participants.toLocaleString()} participants
                        </span>
                        {milestone.achieved && (
                          <Badge variant="outline" className="border-green-600 text-green-600 dark:border-green-400 dark:text-green-400">
                            Achieved
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">{milestone.reward}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Reward Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="size-5 text-neutral-900 dark:text-white" />
                  Reward Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {rewards.map((reward, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-2xl">{reward.icon}</div>
                    <div className="flex-1">
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">{reward.action}</p>
                      <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold">
                        <Sparkles className="size-4" />
                        <span>+{reward.crystals}</span>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
                  <div className="flex items-center justify-between font-semibold text-neutral-900 dark:text-white">
                    <span>Total Potential</span>
                    <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 text-lg">
                      <Sparkles className="size-5" />
                      <span>{project.totalReward}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Progress Card */}
            {joined && (
              <Card>
                <CardHeader>
                  <CardTitle>Your Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-neutral-600 dark:text-neutral-400">Tasks Completed</span>
                      <span className="font-medium text-neutral-900 dark:text-white">
                        {completedSteps.length}/{tasks.length}
                      </span>
                    </div>
                    <Progress value={(completedSteps.length / tasks.length) * 100} className="h-2" />
                  </div>
                  <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-neutral-600 dark:text-neutral-400">Crystals Earned</span>
                      <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold">
                        <Sparkles className="size-4" />
                        <span>{totalEarned + 500}</span>
                      </div>
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-500">
                      {project.totalReward - (totalEarned + 500)} crystals remaining
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Referral Section */}
            {joined && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="size-5 text-neutral-900 dark:text-white" />
                    Boost Your Rewards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                    Share your unique referral link and earn 100 extra crystals for each friend who joins!
                  </p>
                  <div className="space-y-2">
                    <Label htmlFor="referral">Your Referral Link</Label>
                    <div className="flex gap-2">
                      <Input
                        id="referral"
                        value="https://crystalquest.app/ref/alex123"
                        readOnly
                      />
                      <Button variant="outline" className="border-neutral-300 dark:border-neutral-700">Copy</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
