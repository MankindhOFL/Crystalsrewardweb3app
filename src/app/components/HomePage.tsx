import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Sparkles, CheckCircle, Users, Gift } from "lucide-react";
import { Navigation } from "./Navigation";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-black">
      <Navigation onNavigate={onNavigate} currentPage="home" />

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-950/30 border border-green-100 dark:border-green-900/50 mb-8">
            <Sparkles className="size-4 text-green-600 dark:text-green-400" />
            <span className="text-sm text-green-900 dark:text-green-300">Earn crystals for every project</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-semibold mb-6 text-neutral-900 dark:text-white tracking-tight">
            Join projects.<br />Earn rewards.
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join CrystalQuest to earn crystals by participating in exclusive Web3 projects, accessing NFT whitelists, and claiming token allocations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => onNavigate("dashboard")}
              className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white shadow-sm"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate("rewards")}
              className="border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white"
            >
              View Rewards
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <div className="size-12 rounded-xl bg-green-50 dark:bg-green-950/30 flex items-center justify-center mb-6">
                <CheckCircle className="size-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-white">Join Projects</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Participate in exclusive Web3 projects and campaigns to earn massive crystal rewards.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="size-12 rounded-xl bg-purple-50 dark:bg-purple-950/30 flex items-center justify-center mb-6">
                <Users className="size-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-white">NFT Whitelist</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Access guaranteed whitelist spots for trending NFT collections and exclusive mints.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="size-12 rounded-xl bg-orange-50 dark:bg-orange-950/30 flex items-center justify-center mb-6">
                <Gift className="size-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-white">Token Allocations</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Use your crystals to secure early token allocations in upcoming TGEs.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 py-20">
        <Card>
          <CardContent className="py-16">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-4xl font-semibold mb-2 text-neutral-900 dark:text-white">50K+</div>
                <div className="text-neutral-600 dark:text-neutral-400">Active Users</div>
              </div>
              <div>
                <div className="text-4xl font-semibold mb-2 text-neutral-900 dark:text-white">2M+</div>
                <div className="text-neutral-600 dark:text-neutral-400">Crystals Earned</div>
              </div>
              <div>
                <div className="text-4xl font-semibold mb-2 text-neutral-900 dark:text-white">100+</div>
                <div className="text-neutral-600 dark:text-neutral-400">Active Projects</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        <Card className="bg-neutral-900 dark:bg-neutral-800 border-neutral-800 dark:border-neutral-700">
          <CardContent className="py-16 text-center">
            <h2 className="text-4xl font-semibold mb-4 text-white">Ready to start earning?</h2>
            <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
              Join thousands of users already earning crystals and unlocking amazing rewards.
            </p>
            <Button 
              size="lg" 
              onClick={() => onNavigate("dashboard")}
              className="bg-white hover:bg-neutral-100 text-neutral-900"
            >
              Get Started Free
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles className="size-5 text-green-600 dark:text-green-500" />
              <span className="font-semibold text-neutral-900 dark:text-white">CrystalQuest</span>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">© 2025 CrystalQuest. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}