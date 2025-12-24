import { useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "./ui/sheet";
import { Sparkles, User, LogOut, Menu, Home, LayoutDashboard, Gift } from "lucide-react";

interface NavigationProps {
  onNavigate: (page: string) => void;
  currentPage?: string;
}

export function Navigation({ onNavigate, currentPage }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <nav className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Sparkles className="size-8 text-purple-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              CrystalQuest
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" onClick={() => onNavigate("home")}>
              Home
            </Button>
            <Button variant="ghost" onClick={() => onNavigate("dashboard")}>
              Dashboard
            </Button>
            <Button variant="ghost" onClick={() => onNavigate("rewards")}>
              <Gift className="size-4 mr-2" />
              Rewards
            </Button>
            <Button variant="ghost" onClick={() => onNavigate("profile")}>
              <User className="size-4 mr-2" />
              Profile
            </Button>
            <Button variant="outline" size="sm">
              <LogOut className="size-4 mr-2" />
              Logout
            </Button>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Navigate to different sections of the app
                </SheetDescription>
                <div className="flex flex-col gap-4 mt-8">
                  <Button
                    variant={currentPage === "home" ? "default" : "ghost"}
                    className="justify-start"
                    onClick={() => handleNavigate("home")}
                  >
                    <Home className="size-5 mr-3" />
                    Home
                  </Button>
                  <Button
                    variant={currentPage === "dashboard" ? "default" : "ghost"}
                    className="justify-start"
                    onClick={() => handleNavigate("dashboard")}
                  >
                    <LayoutDashboard className="size-5 mr-3" />
                    Dashboard
                  </Button>
                  <Button
                    variant={currentPage === "rewards" ? "default" : "ghost"}
                    className="justify-start"
                    onClick={() => handleNavigate("rewards")}
                  >
                    <Gift className="size-5 mr-3" />
                    Rewards
                  </Button>
                  <Button
                    variant={currentPage === "profile" ? "default" : "ghost"}
                    className="justify-start"
                    onClick={() => handleNavigate("profile")}
                  >
                    <User className="size-5 mr-3" />
                    Profile
                  </Button>
                  <div className="border-t pt-4 mt-4">
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      onClick={() => setIsOpen(false)}
                    >
                      <LogOut className="size-5 mr-3" />
                      Logout
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}