import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Sparkles, Trophy, Users, Gift } from "lucide-react";
import { Navigation } from "./Navigation";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-black dark:via-black dark:to-black">
      {/* Navigation */}
      <Navigation onNavigate={onNavigate} currentPage="home" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/80 dark:bg-purple-900/20 backdrop-blur-sm border border-purple-200 dark:border-purple-500/20 mb-6">
            <Sparkles className="size-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-900 dark:text-purple-300">Start Earning Crystals Today</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
            Earn Rewards with<br />CrystalQuest
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Complete tasks, refer friends, and join exciting projects to earn crystals.
            Redeem your crystals for exclusive rewards and tokens.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => onNavigate("dashboard")}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 dark:from-purple-500 dark:to-blue-500"
            >
              <Sparkles className="size-5 mr-2" />
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate("rewards")}
              className="border-purple-200 dark:border-purple-500/30 dark:text-purple-300 dark:hover:bg-white/5"
            >
              View Rewards
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-2 border-purple-200 dark:border-purple-500/20 hover:border-purple-300 dark:hover:border-purple-400/40 transition-colors">
            <CardContent className="pt-6">
              <div className="bg-purple-100 dark:bg-purple-900/30 size-12 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="size-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Complete Tasks</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Earn crystals by completing simple tasks and challenges. The harder the task, the more crystals you earn!
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-200 dark:border-blue-500/20 hover:border-blue-300 dark:hover:border-blue-400/40 transition-colors">
            <CardContent className="pt-6">
              <div className="bg-blue-100 dark:bg-blue-900/30 size-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="size-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Refer Friends</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Invite your friends and earn bonus crystals for every successful referral. Grow together!
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-indigo-200 dark:border-indigo-500/20 hover:border-indigo-300 dark:hover:border-indigo-400/40 transition-colors">
            <CardContent className="pt-6">
              <div className="bg-indigo-100 dark:bg-indigo-900/30 size-12 rounded-lg flex items-center justify-center mb-4">
                <Gift className="size-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Join Projects</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Participate in exciting projects and campaigns to earn massive crystal rewards and exclusive perks.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 border-0 text-white">
          <CardContent className="py-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">50K+</div>
                <div className="text-purple-100 dark:text-purple-200">Active Users</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">2M+</div>
                <div className="text-purple-100 dark:text-purple-200">Crystals Earned</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1K+</div>
                <div className="text-purple-100 dark:text-purple-200">Tasks Completed</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 rounded-2xl p-12 text-center text-white backdrop-blur-xl">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Earning?</h2>
          <p className="text-xl text-purple-100 dark:text-purple-200 mb-8 max-w-2xl mx-auto">
            Join thousands of users already earning crystals and unlocking amazing rewards.
          </p>
          <Button size="lg" variant="secondary" onClick={() => onNavigate("dashboard")}>
            Get Started Free
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/20 dark:border-white/10 bg-white/80 dark:bg-black/80 backdrop-blur-xl mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles className="size-6 text-purple-600 dark:text-purple-400" />
              <span className="font-semibold text-gray-900 dark:text-white">CrystalQuest</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">© 2025 CrystalQuest. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}