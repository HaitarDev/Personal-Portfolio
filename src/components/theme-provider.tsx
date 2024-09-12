"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [isMount, setIsMount] = React.useState(false);
  React.useEffect(() => {
    setIsMount(true);
  }, []);
  if (!isMount) return;
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
