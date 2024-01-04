"use client";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      className="border-0 hover:bg-background"
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      <SunIcon className="scale-100 dark:scale-0" />
      <MoonIcon className="absolute scale-0 dark:scale-100" />
    </Button>
  );
}
