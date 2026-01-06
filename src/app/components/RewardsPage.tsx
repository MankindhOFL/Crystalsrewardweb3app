import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Sparkles,
  Gift,
  CheckCircle2,
  AlertCircle,
  Coins,
  Award,
  Clock,
  ArrowRight,
} from "lucide-react";
import { Navigation } from "./Navigation";

interface RewardsPageProps {
  onNavigate: (page: string) => void;
}

export function RewardsPage({ onNavigate }: RewardsPageProps) {
  const [userCrystals] = useState(2450);
  const [selectedReward, setSelectedReward] = useState<number | null>(null);
  const [tokenAmount, setTokenAmount] = useState("");
  const [redeemedItems, setRedeemedItems] = useState<number[]>([]);

  const nftWhitelists = [
    {
      id: 1,
      name: "Cosmic Apes NFT",
      description: "Guaranteed whitelist spot for the Cosmic Apes collection mint",
      image: "🦍",
      cost: 1000,
      supply: 50,
      claimed: 32,
      mintDate: "Jan 15, 2025",
      benefits: ["Priority mint access", "Exclusive Discord role", "Early reveal"],
    },
    {
      id: 2,
      name: "Crypto Punks Genesis",
      description: "Whitelist for the next generation Crypto Punks collection",
      image: "👾",
      cost: 2500,
      supply: 25,
      claimed: 18,
      mintDate: "Jan 20, 2025",
      benefits: ["Guaranteed mint", "VIP community access", "Airdrop eligibility"],
    },
    {
      id: 3,
      name: "Meta Warriors",
      description: "Premium whitelist spot with double mint allocation",
      image: "⚔️",
      cost: 1500,
      supply: 100,
      claimed: 67,
      mintDate: "Jan 25, 2025",
      benefits: ["2x mint allocation", "Private Discord", "Revenue share"],
    },
    {
      id: 4,
      name: "Digital Dragons",
      description: "Exclusive access to legendary dragon NFT collection",
      image: "🐉",
      cost: 3000,
      supply: 20,
      claimed: 15,
      mintDate: "Feb 1, 2025",
      benefits: ["Legendary tier access", "Staking rewards", "DAO voting rights"],
    },
  ];

  const tokenOffers = [
    {
      id: 1,
      symbol: "CRYSTAL",
      name: "CrystalQuest Token",
      description: "Native platform token with governance rights",
      icon: "💎",
      exchangeRate: 1,
      minAmount: 100,
      maxAmount: 10000,
      available: true,
    },
    {
      id: 2,
      symbol: "ALPHA",
      name: "Alpha Protocol",
      description: "DeFi protocol token with staking benefits",
      icon: "🚀",
      exchangeRate: 0.5,
      minAmount: 500,
      maxAmount: 5000,
      available: true,
    },
    {
      id: 3,
      symbol: "META",
      name: "MetaVerse Coin",
      description: "Virtual world currency for in-game purchases",
      icon: "🌐",
      exchangeRate: 2,
      minAmount: 200,
      maxAmount: 8000,
      available: true,
    },
  ];

  const redemptionHistory = [
    {
      id: 1,
      type: "NFT Whitelist",
      item: "Cosmic Apes NFT",
      cost: 1000,
      date: "Dec 18, 2025",
      status: "Confirmed",
    },
    {
      id: 2,
      type: "Token Swap",
      item: "500 CRYSTAL tokens",
      cost: 500,
      date: "Dec 15, 2025",
      status: "Completed",
    },
    {
      id: 3,
      type: "Token Swap",
      item: "250 ALPHA tokens",
      cost: 500,
      date: "Dec 10, 2025",
      status: "Completed",
    },
  ];

  const handleRedeemWhitelist = (whitelistId: number, cost: number) => {
    if (userCrystals >= cost && !redeemedItems.includes(whitelistId)) {
      setRedeemedItems([...redeemedItems, whitelistId]);
      setSelectedReward(whitelistId);
    }
  };

  const handleTokenSwap = (tokenId: number, crystalAmount: number) => {
    if (crystalAmount > 0 && crystalAmount <= userCrystals) {
      alert(`Successfully swapped ${crystalAmount} crystals!`);
      setTokenAmount("");
    }
  };

  const canAffordWhitelist = (cost: number) => {
    return userCrystals >= cost;
  };

  const calculateTokenOutput = (crystalAmount: number, exchangeRate: number) => {
    return crystalAmount * exchangeRate;
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-black">
      <Navigation onNavigate={onNavigate} currentPage="rewards" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-semibold mb-2 text-neutral-900 dark:text-white">Rewards</h1>
          <p className="text-neutral-600 dark:text-neutral-400">Redeem your crystals for exclusive rewards</p>
        </div>

        {/* Crystal Balance Card */}
        <Card className="mb-12">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="size-16 rounded-2xl bg-green-50 dark:bg-green-950/30 flex items-center justify-center">
                  <Sparkles className="size-8 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">Your Balance</p>
                  <div className="flex items-center gap-2">
                    <span className="text-4xl font-semibold text-neutral-900 dark:text-white">
                      {userCrystals.toLocaleString()}
                    </span>
                    <span className="text-neutral-600 dark:text-neutral-400">crystals</span>
                  </div>
                </div>
              </div>
              <Button onClick={() => onNavigate("dashboard")} className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600">
                Earn More
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <Tabs defaultValue="nft" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="nft">NFT Whitelist</TabsTrigger>
            <TabsTrigger value="tokens">Token Swaps</TabsTrigger>
            <TabsTrigger value="past">Past Rewards</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          {/* NFT Whitelist Tab */}
          <TabsContent value="nft">
            <div className="grid md:grid-cols-2 gap-6">
              {nftWhitelists.map((nft) => {
                const canAfford = canAffordWhitelist(nft.cost);
                const isRedeemed = redeemedItems.includes(nft.id);
                const isSoldOut = nft.claimed >= nft.supply;

                return (
                  <Card
                    key={nft.id}
                    className={
                      !canAfford || isSoldOut
                        ? "opacity-50"
                        : ""
                    }
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-5xl">{nft.image}</div>
                        <div className="flex flex-col gap-2 items-end">
                          {isSoldOut && (
                            <Badge variant="destructive">Sold Out</Badge>
                          )}
                          {isRedeemed && (
                            <Badge className="bg-green-600 dark:bg-green-500">
                              <CheckCircle2 className="size-3 mr-1" />
                              Redeemed
                            </Badge>
                          )}
                          {!canAfford && !isRedeemed && !isSoldOut && (
                            <Badge variant="outline" className="text-orange-600 border-orange-600">
                              <AlertCircle className="size-3 mr-1" />
                              Insufficient
                            </Badge>
                          )}
                        </div>
                      </div>
                      <CardTitle>{nft.name}</CardTitle>
                      <CardDescription>{nft.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-neutral-600 dark:text-neutral-400">Spots Remaining</span>
                          <span className="font-medium text-neutral-900 dark:text-white">
                            {nft.supply - nft.claimed} / {nft.supply}
                          </span>
                        </div>
                        <Progress
                          value={(nft.claimed / nft.supply) * 100}
                          className="h-2"
                        />
                      </div>

                      <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                        <Clock className="size-4" />
                        <span>Mint Date: {nft.mintDate}</span>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-medium text-neutral-900 dark:text-white">Benefits</p>
                        <ul className="space-y-1">
                          {nft.benefits.map((benefit, index) => (
                            <li key={index} className="text-sm text-neutral-600 dark:text-neutral-400 flex items-center gap-2">
                              <CheckCircle2 className="size-4 text-green-600 dark:text-green-400" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm text-neutral-600 dark:text-neutral-400">Cost</span>
                          <div className="flex items-center gap-1 text-xl font-semibold text-green-600 dark:text-green-400">
                            <Sparkles className="size-5" />
                            <span>{nft.cost.toLocaleString()}</span>
                          </div>
                        </div>
                        <Button
                          className="w-full"
                          disabled={!canAfford || isRedeemed || isSoldOut}
                          onClick={() => handleRedeemWhitelist(nft.id, nft.cost)}
                        >
                          {isRedeemed ? (
                            <>
                              <CheckCircle2 className="size-4 mr-2" />
                              Redeemed
                            </>
                          ) : isSoldOut ? (
                            "Sold Out"
                          ) : !canAfford ? (
                            <>
                              <AlertCircle className="size-4 mr-2" />
                              Insufficient Crystals
                            </>
                          ) : (
                            <>
                              <Gift className="size-4 mr-2" />
                              Redeem
                            </>
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Token Swaps Tab */}
          <TabsContent value="tokens">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tokenOffers.map((token) => (
                <Card key={token.id}>
                  <CardHeader>
                    <div className="text-4xl mb-4">{token.icon}</div>
                    <CardTitle className="flex items-center gap-2">
                      {token.name}
                      <Badge variant="outline">{token.symbol}</Badge>
                    </CardTitle>
                    <CardDescription>{token.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-xl">
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">Exchange Rate</p>
                      <div className="flex items-center gap-2 text-lg font-semibold">
                        <span className="text-blue-600 dark:text-blue-400">1</span>
                        <Sparkles className="size-4 text-blue-600 dark:text-blue-400" />
                        <ArrowRight className="size-4 text-neutral-400" />
                        <span className="text-neutral-900 dark:text-white">{token.exchangeRate}</span>
                        <span className="text-neutral-600 dark:text-neutral-400">{token.symbol}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`amount-${token.id}`}>Amount (Crystals)</Label>
                      <Input
                        id={`amount-${token.id}`}
                        type="number"
                        placeholder={`Min: ${token.minAmount}`}
                        min={token.minAmount}
                        max={Math.min(token.maxAmount, userCrystals)}
                        onChange={(e) => setTokenAmount(e.target.value)}
                      />
                      <div className="flex justify-between text-xs text-neutral-600 dark:text-neutral-400">
                        <span>Min: {token.minAmount}</span>
                        <span>Max: {Math.min(token.maxAmount, userCrystals).toLocaleString()}</span>
                      </div>
                    </div>

                    {tokenAmount && Number(tokenAmount) >= token.minAmount && (
                      <div className="p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900/50 rounded-xl">
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">You will receive</p>
                        <div className="flex items-center gap-2 text-xl font-semibold text-green-600 dark:text-green-400">
                          <span>
                            {calculateTokenOutput(Number(tokenAmount), token.exchangeRate).toLocaleString()}
                          </span>
                          <span>{token.symbol}</span>
                        </div>
                      </div>
                    )}

                    <Button
                      className="w-full"
                      disabled={
                        !tokenAmount ||
                        Number(tokenAmount) < token.minAmount ||
                        Number(tokenAmount) > userCrystals ||
                        Number(tokenAmount) > token.maxAmount
                      }
                      onClick={() => handleTokenSwap(token.id, Number(tokenAmount))}
                    >
                      <Coins className="size-4 mr-2" />
                      Swap Crystals
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Info Card */}
            <Card className="mt-6 bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900/50">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <AlertCircle className="size-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-neutral-900 dark:text-white mb-1">Token Swap Information</p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Swapped tokens will be transferred to your connected wallet within 24 hours.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Past Rewards Tab */}
          <TabsContent value="past">
            <div className="space-y-6">
              {/* Expired NFT Whitelists */}
              <Card>
                <CardHeader>
                  <CardTitle>Expired NFT Whitelists</CardTitle>
                  <CardDescription>These whitelist opportunities have ended</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-5 border border-neutral-200 dark:border-neutral-700 rounded-xl opacity-60">
                      <div className="flex items-start justify-between mb-3">
                        <div className="text-4xl">🎨</div>
                        <Badge variant="outline" className="text-neutral-500 border-neutral-400">
                          Expired
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Pixel Artists Club</h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                        Whitelist for exclusive pixel art NFT collection
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-neutral-600 dark:text-neutral-400">Minted: Dec 20, 2025</span>
                        <div className="flex items-center gap-1 text-neutral-500 dark:text-neutral-500 font-medium">
                          <Sparkles className="size-4" />
                          <span>800</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 border border-neutral-200 dark:border-neutral-700 rounded-xl opacity-60">
                      <div className="flex items-start justify-between mb-3">
                        <div className="text-4xl">🤖</div>
                        <Badge variant="outline" className="text-neutral-500 border-neutral-400">
                          Expired
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Robo Warriors</h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                        Early access to futuristic robot NFT series
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-neutral-600 dark:text-neutral-400">Minted: Dec 10, 2025</span>
                        <div className="flex items-center gap-1 text-neutral-500 dark:text-neutral-500 font-medium">
                          <Sparkles className="size-4" />
                          <span>1200</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 border border-neutral-200 dark:border-neutral-700 rounded-xl opacity-60">
                      <div className="flex items-start justify-between mb-3">
                        <div className="text-4xl">🌊</div>
                        <Badge variant="outline" className="text-neutral-500 border-neutral-400">
                          Expired
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Ocean Explorers</h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                        Underwater themed NFT collection whitelist
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-neutral-600 dark:text-neutral-400">Minted: Nov 25, 2025</span>
                        <div className="flex items-center gap-1 text-neutral-500 dark:text-neutral-500 font-medium">
                          <Sparkles className="size-4" />
                          <span>950</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 border border-neutral-200 dark:border-neutral-700 rounded-xl opacity-60">
                      <div className="flex items-start justify-between mb-3">
                        <div className="text-4xl">👑</div>
                        <Badge variant="outline" className="text-neutral-500 border-neutral-400">
                          Expired
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Royal Dynasty</h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                        Premium royal-themed NFT collection access
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-neutral-600 dark:text-neutral-400">Minted: Nov 15, 2025</span>
                        <div className="flex items-center gap-1 text-neutral-500 dark:text-neutral-500 font-medium">
                          <Sparkles className="size-4" />
                          <span>2000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Completed TGEs */}
              <Card>
                <CardHeader>
                  <CardTitle>Completed TGEs</CardTitle>
                  <CardDescription>Token generation events that have concluded</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border border-neutral-200 dark:border-neutral-700 rounded-xl opacity-60 gap-3">
                      <div className="flex items-start gap-3 flex-1">
                        <div className="text-3xl">🔥</div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-neutral-900 dark:text-white">FireChain Protocol</h3>
                            <Badge variant="outline" className="text-neutral-500 border-neutral-400">
                              Completed
                            </Badge>
                          </div>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">400 tokens allocation</p>
                          <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">TGE: Dec 5, 2025</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-neutral-500 dark:text-neutral-500 font-semibold">
                          <Sparkles className="size-4" />
                          <span>2,500</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border border-neutral-200 dark:border-neutral-700 rounded-xl opacity-60 gap-3">
                      <div className="flex items-start gap-3 flex-1">
                        <div className="text-3xl">⚡</div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-neutral-900 dark:text-white">Lightning Network</h3>
                            <Badge variant="outline" className="text-neutral-500 border-neutral-400">
                              Completed
                            </Badge>
                          </div>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">600 tokens allocation</p>
                          <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">TGE: Nov 20, 2025</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-neutral-500 dark:text-neutral-500 font-semibold">
                          <Sparkles className="size-4" />
                          <span>3,200</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border border-neutral-200 dark:border-neutral-700 rounded-xl opacity-60 gap-3">
                      <div className="flex items-start gap-3 flex-1">
                        <div className="text-3xl">🎮</div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-neutral-900 dark:text-white">GameFi Token</h3>
                            <Badge variant="outline" className="text-neutral-500 border-neutral-400">
                              Completed
                            </Badge>
                          </div>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">800 tokens allocation</p>
                          <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">TGE: Nov 10, 2025</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-neutral-500 dark:text-neutral-500 font-semibold">
                          <Sparkles className="size-4" />
                          <span>4,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Redemption History</CardTitle>
                <CardDescription>View your past rewards and token swaps</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {redemptionHistory.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border border-neutral-200 dark:border-neutral-700 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors gap-3"
                    >
                      <div className="flex items-start gap-3 flex-1">
                        <div className="size-10 rounded-xl bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center flex-shrink-0">
                          {item.type === "NFT Whitelist" ? (
                            <Award className="size-5 text-blue-600 dark:text-blue-400" />
                          ) : (
                            <Coins className="size-5 text-blue-600 dark:text-blue-400" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-medium text-neutral-900 dark:text-white">{item.item}</p>
                            <Badge
                              className="bg-green-600 dark:bg-green-500 text-white"
                            >
                              {item.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">{item.type}</p>
                          <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">{item.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold sm:ml-4">
                        <Sparkles className="size-4" />
                        <span>-{item.cost.toLocaleString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Stats Summary */}
            <div className="grid sm:grid-cols-3 gap-6 mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="size-12 rounded-xl bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center">
                      <Award className="size-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-semibold text-neutral-900 dark:text-white">1</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">NFT Whitelists</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="size-12 rounded-xl bg-green-50 dark:bg-green-950/30 flex items-center justify-center">
                      <Coins className="size-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-semibold text-neutral-900 dark:text-white">2</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">Token Swaps</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="size-12 rounded-xl bg-purple-50 dark:bg-purple-950/30 flex items-center justify-center">
                      <Sparkles className="size-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-semibold text-neutral-900 dark:text-white">2,000</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">Crystals Spent</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}