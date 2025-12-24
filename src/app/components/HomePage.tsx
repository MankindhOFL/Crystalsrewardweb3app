import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Sparkles, Trophy, Users, Gift } from "lucide-react";
import { Navigation } from "./Navigation";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <Navigation onNavigate={onNavigate} currentPage="home" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6">
            <Sparkles className="size-4" />
            <span className="text-sm font-medium">Earn rewards for every action</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Earn Crystals, Unlock Rewards
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Complete tasks, refer friends, and join exciting projects to earn crystal rewards. 
            The more you engage, the more you earn!
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" onClick={() => onNavigate("dashboard")}>
              Start Earning Now
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-2 hover:border-purple-300 transition-colors">
            <CardContent className="pt-6">
              <div className="bg-purple-100 size-12 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="size-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Complete Tasks</h3>
              <p className="text-gray-600">
                Earn crystals by completing simple tasks and challenges. The harder the task, the more crystals you earn!
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-blue-300 transition-colors">
            <CardContent className="pt-6">
              <div className="bg-blue-100 size-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="size-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Refer Friends</h3>
              <p className="text-gray-600">
                Invite your friends and earn bonus crystals for every successful referral. Grow together!
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-indigo-300 transition-colors">
            <CardContent className="pt-6">
              <div className="bg-indigo-100 size-12 rounded-lg flex items-center justify-center mb-4">
                <Gift className="size-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Join Projects</h3>
              <p className="text-gray-600">
                Participate in exciting projects and campaigns to earn massive crystal rewards and exclusive perks.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="bg-gradient-to-r from-purple-600 to-blue-600 border-0 text-white">
          <CardContent className="py-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">50K+</div>
                <div className="text-purple-100">Active Users</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">2M+</div>
                <div className="text-purple-100">Crystals Earned</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1K+</div>
                <div className="text-purple-100">Tasks Completed</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Earning?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users already earning crystals and unlocking amazing rewards.
          </p>
          <Button size="lg" variant="secondary" onClick={() => onNavigate("dashboard")}>
            Get Started Free
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles className="size-6 text-purple-600" />
              <span className="font-semibold text-gray-900">CrystalQuest</span>
            </div>
            <p className="text-gray-600 text-sm">© 2025 CrystalQuest. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}