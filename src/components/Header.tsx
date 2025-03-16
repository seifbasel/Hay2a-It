"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Settings, User, LogOut } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark";
    setDarkMode(isDark);

    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Logout function (Placeholder)
  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <header className="w-full flex justify-between items-center px-6 py-2 bg-card shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image
          src="/it.png"
          alt="HAY2A IT"
          width={50}
          height={50}
          className="w-10 h-10"
        />
        <h1 className="text-2xl font-bold">HAY2A IT</h1>
      </div>

      {/* Settings Dropdown Menu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="p-2 rounded-full">
            <Settings className="w-6 h-6 text-black dark:text-white" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem
            onClick={toggleDarkMode}
            className="flex items-center"
          >
            {darkMode ? (
              <Moon className="w-6 h-6 mr-2" />
            ) : (
              <Sun className="w-6 h-6 mr-2" />
            )}
            {darkMode ? "Dark Mode" : "Light Mode"}
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center">
            <User className="w-6 h-6 mr-2" />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={handleLogout}
            className="flex items-center text-red-600"
          >
            <LogOut className="w-6 h-6 mr-2" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
