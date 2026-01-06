import { useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "./ui/sheet";
import { Sparkles, User, LogOut, Menu, Home, LayoutDashboard, Gift, Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

interface NavigationProps {
  onNavigate: (page: string) => void;
  currentPage?: string;
}

export function Navigation({ onNavigate, currentPage }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <button onClick={() => onNavigate("home")} className="flex items-center gap-2 -ml-2 px-2 py-1 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
            <Sparkles className="size-5 text-green-600 dark:text-green-500" />
            <span className="font-semibold text-neutral-900 dark:text-white">
              CrystalQuest
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <Button 
              variant="ghost" 
              onClick={() => onNavigate("home")} 
              className="text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              Home
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => onNavigate("dashboard")} 
              className="text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              Dashboard
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => onNavigate("rewards")} 
              className="text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              Rewards
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => onNavigate("profile")} 
              className="text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              Profile
            </Button>
            <div className="w-px h-6 bg-neutral-200 dark:bg-neutral-700 mx-2" />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              {theme === "light" ? (
                <Moon className="size-5" />
              ) : (
                <Sun className="size-5" />
              )}
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              {theme === "light" ? (
                <Moon className="size-5" />
              ) : (
                <Sun className="size-5" />
              )}
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Navigate to different sections of the app
                </SheetDescription>
                <div className="flex flex-col gap-2 mt-8">
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
                  <div className="border-t border-neutral-200 dark:border-neutral-800 pt-2 mt-2">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-red-600 dark:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20"
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