"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-color-mode", "dark");
    }
    if (theme === "white") {
      document.documentElement.setAttribute("data-color-mode", "white");
    }

    return () => document.documentElement.removeAttribute("data-color-mode");
  }, [theme]);

  return (
    <HoverCard>
      <HoverCardTrigger>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => {
                document.documentElement.setAttribute(
                  "data-color-mode",
                  "light"
                );

                setTheme("light");
              }}
            >
              Light
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                document.documentElement.setAttribute(
                  "data-color-mode",
                  "white"
                );

                setTheme("dark");
              }}
            >
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </HoverCardTrigger>
      <HoverCardContent
        side="right"
        className="text-sm text-center  bg-black text-white w-fit p-0 px-2 py-1"
      >
        Toggle
      </HoverCardContent>
    </HoverCard>
  );
}
