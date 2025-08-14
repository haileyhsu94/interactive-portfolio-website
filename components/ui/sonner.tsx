"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        style: {
          background: theme === "dark" ? "hsl(240 10% 3.9%)" : "hsl(0 0% 100%)",
          color: theme === "dark" ? "hsl(0 0% 98%)" : "hsl(240 10% 3.9%)",
          border: theme === "dark" ? "1px solid hsl(240 3.7% 15.9%)" : "1px solid hsl(240 5.9% 90%)",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
