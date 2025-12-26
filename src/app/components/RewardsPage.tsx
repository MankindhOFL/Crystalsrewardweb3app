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
  TrendingUp,
  Users,
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
      exchangeRate: 1, // 1 crystal = 1 CRYSTAL token
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
      exchangeRate: 0.5, // 1 crystal = 0.5 ALPHA token
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
      exchangeRate: 2, // 1 crystal = 2 META tokens
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
      // Here you would typically make an API call to process the redemption
    }
  };

  const handleTokenSwap = (tokenId: number, crystalAmount: number) => {
    if (crystalAmount > 0 && crystalAmount <= userCrystals) {
      // Here you would typically make an API call to process the swap
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
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <Navigation onNavigate={onNavigate} currentPage="rewards" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 dark:text-white">Rewards Marketplace</h1>
          <p className="text-gray-600 dark:text-gray-400">Redeem your crystals for exclusive NFT whitelist spots and tokens</p>
        </div>

        {/* Crystal Balance Card */}
        <Card className="mb-8 border-2 border-purple-200 dark:border-purple-500/20 bg-gradient-to-r from-purple-50/80 to-blue-50/80 dark:from-purple-900/20 dark:to-blue-900/20">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-purple-600 dark:bg-purple-500 size-16 rounded-full flex items-center justify-center">
                  <Sparkles className="size-8 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Your Crystal Balance</p>
                  <div className="flex items-center gap-2">
                    <span className="text-4xl font-bold text-purple-600 dark:text-purple-400">
                      {userCrystals.toLocaleString()}
                    </span>
                    <Sparkles className="size-6 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
              </div>
              <Button onClick={() => onNavigate("dashboard")}>
                <TrendingUp className="size-4 mr-2" />
                Earn More Crystals
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <Tabs defaultValue="nft" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="nft">NFT Whitelist</TabsTrigger>
            <TabsTrigger value="tokens">Token Swaps</TabsTrigger>
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
                    className={`${
                      !canAfford || isSoldOut
                        ? "opacity-60"
                        : "hover:border-purple-300 transition-colors"
                    } ${isRedeemed ? "border-2 border-green-500" : ""}`}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-6xl">{nft.image}</div>
                        <div className="flex flex-col gap-2 items-end">
                          {isSoldOut && (
                            <Badge variant="destructive">Sold Out</Badge>
                          )}
                          {isRedeemed && (
                            <Badge className="bg-green-600">
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
                          <span className="text-gray-600">Spots Remaining</span>
                          <span className="font-medium">
                            {nft.supply - nft.claimed} / {nft.supply}
                          </span>
                        </div>
                        <Progress
                          value={(nft.claimed / nft.supply) * 100}
                          className="h-2"
                        />
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="size-4" />
                        <span>Mint Date: {nft.mintDate}</span>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-medium">Benefits:</p>
                        <ul className="space-y-1">
                          {nft.benefits.map((benefit, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                              <CheckCircle2 className="size-4 text-green-600" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm text-gray-600">Cost</span>
                          <div className="flex items-center gap-1 text-xl font-bold text-purple-600">
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
                              Redeem Whitelist
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
                <Card key={token.id} className="hover:border-purple-300 transition-colors">
                  <CardHeader>
                    <div className="text-5xl mb-4">{token.icon}</div>
                    <CardTitle className="flex items-center gap-2">
                      {token.name}
                      <Badge variant="outline">{token.symbol}</Badge>
                    </CardTitle>
                    <CardDescription>{token.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-3 bg-blue-50/80 dark:bg-blue-900/20 rounded-lg backdrop-blur-sm">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Exchange Rate</p>
                      <div className="flex items-center gap-2 text-lg font-semibold">
                        <span className="text-purple-600 dark:text-purple-400">1</span>
                        <Sparkles className="size-4 text-purple-600 dark:text-purple-400" />
                        <ArrowRight className="size-4 text-gray-400" />
                        <span className="text-blue-600 dark:text-blue-400">{token.exchangeRate}</span>
                        <span className="text-blue-600 dark:text-blue-400">{token.symbol}</span>
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
                      <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
                        <span>Min: {token.minAmount}</span>
                        <span>Max: {Math.min(token.maxAmount, userCrystals).toLocaleString()}</span>
                      </div>
                    </div>

                    {tokenAmount && Number(tokenAmount) >= token.minAmount && (
                      <div className="p-3 bg-green-50/80 dark:bg-green-900/20 border border-green-200 dark:border-green-500/20 rounded-lg backdrop-blur-sm">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">You will receive:</p>
                        <div className="flex items-center gap-2 text-xl font-bold text-green-600 dark:text-green-400">
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
            <Card className="mt-6 border-blue-200 dark:border-blue-500/20 bg-blue-50/80 dark:bg-blue-900/20 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <AlertCircle className="size-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-blue-900 dark:text-blue-300 mb-1">Token Swap Information</p>
                    <p className="text-sm text-blue-800 dark:text-blue-400">
                      Swapped tokens will be transferred to your connected wallet within 24 hours. 
                      Make sure you have a wallet address connected to your account.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Redemption History</CardTitle>
                <CardDescription>View your past rewards and token swaps</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {redemptionHistory.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors gap-3"
                    >
                      <div className="flex items-start gap-3 flex-1">
                        <div className="bg-purple-100 size-10 rounded-full flex items-center justify-center flex-shrink-0">
                          {item.type === "NFT Whitelist" ? (
                            <Award className="size-5 text-purple-600" />
                          ) : (
                            <Coins className="size-5 text-purple-600" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-medium">{item.item}</p>
                            <Badge
                              variant={item.status === "Confirmed" ? "default" : "outline"}
                              className={
                                item.status === "Confirmed"
                                  ? "bg-green-600"
                                  : "border-green-600 text-green-600"
                              }
                            >
                              {item.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600">{item.type}</p>
                          <p className="text-xs text-gray-500 mt-1">{item.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-purple-600 font-semibold sm:ml-4">
                        <Sparkles className="size-4" />
                        <span>-{item.cost.toLocaleString()}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {redemptionHistory.length === 0 && (
                  <div className="text-center py-12 text-gray-500">
                    <Gift className="size-12 mx-auto mb-4 text-gray-400" />
                    <p>No redemptions yet</p>
                    <p className="text-sm">Start redeeming rewards to see your history here</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Stats Summary */}
            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-100 size-12 rounded-lg flex items-center justify-center">
                      <Award className="size-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">1</p>
                      <p className="text-sm text-gray-600">NFT Whitelists</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 size-12 rounded-lg flex items-center justify-center">
                      <Coins className="size-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">2</p>
                      <p className="text-sm text-gray-600">Token Swaps</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 size-12 rounded-lg flex items-center justify-center">
                      <Sparkles className="size-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">2,000</p>
                      <p className="text-sm text-gray-600">Crystals Spent</p>
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