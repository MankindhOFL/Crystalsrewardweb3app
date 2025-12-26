import { useState } from "react";
import { HomePage } from "./components/HomePage";
import { Dashboard } from "./components/Dashboard";
import { UserProfile } from "./components/UserProfile";
import { TaskProject } from "./components/TaskProject";
import { RewardsPage } from "./components/RewardsPage";
import { ThemeProvider } from "./contexts/ThemeContext";

type Page = "home" | "dashboard" | "profile" | "task" | "rewards";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  return (
    <ThemeProvider>
      <div className="size-full">
        {currentPage === "home" && <HomePage onNavigate={handleNavigate} />}
        {currentPage === "dashboard" && <Dashboard onNavigate={handleNavigate} />}
        {currentPage === "profile" && <UserProfile onNavigate={handleNavigate} />}
        {currentPage === "task" && <TaskProject onNavigate={handleNavigate} />}
        {currentPage === "rewards" && <RewardsPage onNavigate={handleNavigate} />}
      </div>
    </ThemeProvider>
  );
}