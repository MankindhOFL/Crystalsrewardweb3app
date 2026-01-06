import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Sparkles, Users, CheckCircle2, Rocket, TrendingUp, ArrowRight, Image, Coins } from "lucide-react";
import { Navigation } from "./Navigation";

interface DashboardProps {
  onNavigate: (page: string) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  const [crystals] = useState(2450);
  const [level] = useState(7);
  const [nextLevelCrystals] = useState(3000);

  const featuredProjects = [
    {
      id: 1,
      title: "Alpha Launch Campaign",
      description: "Early access to revolutionary Web3 platform",
      reward: 1500,
      participants: 1247,
      maxParticipants: 5000,
      featured: true,
      status: "Active",
      category: "Launch Event",
    },
    {
      id: 2,
      title: "DeFi Protocol Beta Testing",
      description: "Test cutting-edge DeFi features and earn rewards",
      reward: 2000,
      participants: 856,
      maxParticipants: 2000,
      featured: true,
      status: "Active",
      category: "Beta Test",
    },
    {
      id: 3,
      title: "NFT Marketplace Early Access",
      description: "Join exclusive marketplace before public launch",
      reward: 1200,
      participants: 2100,
      maxParticipants: 3000,
      featured: false,
      status: "Active",
      category: "Marketplace",
    },
  ];

  const trendingNFTs = [
    {
      id: 1,
      name: "Cosmic Apes",
      floor: "2.5 ETH",
      change: "+15%",
      crystalCost: 1000,
      image: "🦍",
    },
    {
      id: 2,
      name: "Cyber Punks",
      floor: "3.2 ETH",
      change: "+22%",
      crystalCost: 2500,
      image: "👾",
    },
    {
      id: 3,
      name: "Meta Dragons",
      floor: "1.8 ETH",
      change: "+8%",
      crystalCost: 1500,
      image: "🐉",
    },
  ];

  const upcomingTGEs = [
    {
      id: 1,
      name: "ALPHA Protocol",
      allocation: "500 tokens",
      crystalCost: 3000,
      tgeDate: "Jan 25, 2025",
      icon: "🚀",
    },
    {
      id: 2,
      name: "DeFi Nexus",
      allocation: "750 tokens",
      crystalCost: 4500,
      tgeDate: "Feb 1, 2025",
      icon: "💎",
    },
    {
      id: 3,
      name: "Meta Coin",
      allocation: "1000 tokens",
      crystalCost: 5000,
      tgeDate: "Feb 10, 2025",
      icon: "🌐",
    },
  ];

  const quickTasks = [
    {
      id: 1,
      title: "Daily check-in",
      reward: 25,
      type: "Daily",
      icon: "✅",
    },
    {
      id: 2,
      title: "Complete profile",
      reward: 50,
      type: "Profile",
      icon: "👤",
    },
    {
      id: 3,
      title: "Refer a friend",
      reward: 50,
      type: "Referral",
      icon: "👥",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-black">
      <Navigation onNavigate={onNavigate} currentPage="dashboard" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-semibold mb-2 text-neutral-900 dark:text-white">Dashboard</h1>
          <p className="text-neutral-600 dark:text-neutral-400">Join projects and earn crystals</p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-12 rounded-xl bg-green-50 dark:bg-green-950/30 flex items-center justify-center">
                  <Sparkles className="size-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">Total Crystals</div>
                  <div className="text-2xl font-semibold text-neutral-900 dark:text-white">{crystals.toLocaleString()}</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600 dark:text-neutral-400">Level {level}</span>
                  <span className="text-neutral-900 dark:text-white font-medium">{crystals}/{nextLevelCrystals}</span>
                </div>
                <Progress value={(crystals / nextLevelCrystals) * 100} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-12 rounded-xl bg-purple-50 dark:bg-purple-950/30 flex items-center justify-center">
                  <Rocket className="size-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">Active Projects</div>
                  <div className="text-2xl font-semibold text-neutral-900 dark:text-white">3</div>
                </div>
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                Join more to earn faster
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-12 rounded-xl bg-orange-50 dark:bg-orange-950/30 flex items-center justify-center">
                  <TrendingUp className="size-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">This Week</div>
                  <div className="text-2xl font-semibold text-neutral-900 dark:text-white">+325</div>
                </div>
              </div>
              <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                ↑ 12% from last week
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Projects - Main Focus */}
        <Card className="mb-12 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900/50">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Rocket className="size-6 text-green-600 dark:text-green-400" />
                  Featured Projects
                </CardTitle>
                <CardDescription className="text-base mt-2">Join exclusive projects to earn massive crystal rewards</CardDescription>
              </div>
              <Badge className="bg-green-600 dark:bg-green-500 text-white w-fit">
                {featuredProjects.length} Active
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {featuredProjects.map((project) => (
              <Card
                key={project.id}
                className="bg-white dark:bg-neutral-900 hover:shadow-md transition-shadow cursor-pointer"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-4 gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-white">{project.title}</h3>
                        {project.featured && (
                          <Badge className="bg-green-600 dark:bg-green-500 text-white">
                            Featured
                          </Badge>
                        )}
                        <Badge variant="outline" className="border-neutral-300 dark:border-neutral-700">
                          {project.category}
                        </Badge>
                      </div>
                      <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                        <div className="flex items-center gap-1">
                          <Users className="size-4" />
                          <span>{project.participants.toLocaleString()} / {project.maxParticipants.toLocaleString()} joined</span>
                        </div>
                      </div>
                    </div>
                    <div className="lg:ml-6 flex lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-4 lg:text-right">
                      <div>
                        <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">Earn up to</div>
                        <div className="flex items-center gap-1 text-green-600 dark:text-green-400 font-semibold text-xl">
                          <Sparkles className="size-5" />
                          <span>{project.reward.toLocaleString()}</span>
                        </div>
                      </div>
                      <Button
                        size="lg"
                        className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 whitespace-nowrap"
                        onClick={() => onNavigate("task")}
                      >
                        Join Project
                        <ArrowRight className="size-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-600 dark:text-neutral-400">Participation</span>
                      <span className="font-medium text-neutral-900 dark:text-white">
                        {Math.round((project.participants / project.maxParticipants) * 100)}% full
                      </span>
                    </div>
                    <Progress value={(project.participants / project.maxParticipants) * 100} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Trending NFTs */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Image className="size-5 text-neutral-900 dark:text-white" />
                  Trending NFT Whitelists
                </CardTitle>
                <Button variant="ghost" size="sm" onClick={() => onNavigate("rewards")}>
                  View All
                  <ArrowRight className="size-4 ml-1" />
                </Button>
              </div>
              <CardDescription>Access exclusive NFT whitelist spots</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {trendingNFTs.map((nft) => (
                <div
                  key={nft.id}
                  className="flex items-center justify-between p-4 border border-neutral-200 dark:border-neutral-700 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{nft.image}</div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white">{nft.name}</h4>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="text-neutral-600 dark:text-neutral-400">Floor: {nft.floor}</span>
                        <span className="text-green-600 dark:text-green-400 font-medium">{nft.change}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-green-600 dark:text-green-400 font-semibold mb-1">
                      <Sparkles className="size-4" />
                      <span>{nft.crystalCost.toLocaleString()}</span>
                    </div>
                    <Button size="sm" variant="outline">
                      Redeem
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Upcoming TGEs */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Coins className="size-5 text-neutral-900 dark:text-white" />
                  Upcoming TGEs
                </CardTitle>
                <Button variant="ghost" size="sm" onClick={() => onNavigate("rewards")}>
                  View All
                  <ArrowRight className="size-4 ml-1" />
                </Button>
              </div>
              <CardDescription>Secure early token allocations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcomingTGEs.map((tge) => (
                <div
                  key={tge.id}
                  className="flex items-center justify-between p-4 border border-neutral-200 dark:border-neutral-700 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{tge.icon}</div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white">{tge.name}</h4>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="text-neutral-600 dark:text-neutral-400">{tge.allocation}</span>
                        <span className="text-neutral-500 dark:text-neutral-500">TGE: {tge.tgeDate}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-green-600 dark:text-green-400 font-semibold mb-1">
                      <Sparkles className="size-4" />
                      <span>{tge.crystalCost.toLocaleString()}</span>
                    </div>
                    <Button size="sm" variant="outline">
                      Reserve
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Quick Tasks - Smaller Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Quick Tasks</CardTitle>
            <CardDescription>Small tasks for bonus crystals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-3">
              {quickTasks.map((task) => (
                <div
                  key={task.id}
                  className="p-4 border border-neutral-200 dark:border-neutral-700 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
                >
                  <div className="text-2xl mb-2">{task.icon}</div>
                  <h4 className="font-medium text-neutral-900 dark:text-white mb-1">{task.title}</h4>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-green-600 dark:text-green-400 text-sm font-medium">
                      <Sparkles className="size-3" />
                      <span>+{task.reward}</span>
                    </div>
                    <Button size="sm" variant="ghost">
                      Start
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}