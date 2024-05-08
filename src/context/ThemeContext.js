// "use client";
// import { ThemeProvider, useTheme } from "next-themes";
// import { useState, useEffect } from "react";
// export function useCustomTheme() {
//   return useTheme();
// }
// export default function Providers({ children }) {
//   const { resolvedTheme } = useCustomTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, [resolvedTheme]);
//   useEffect(() => {
//     // Check if the theme is resolved (not 'system') and store it in local storage
//     if (resolvedTheme && resolvedTheme !== "system") {
//       // localStorage.setItem("theme", resolvedTheme);
//       localStorage.setItem("theme", "dark"); // or 'light'
//     }
//   }, [resolvedTheme]);

//   const storedTheme = localStorage.getItem("theme");
//   // const storedTheme =
//   //   typeof window !== "undefined" ? localStorage.getItem("theme") : null;
//   // useEffect(() => {
//   //   // Check localStorage and perform client-side operations
//   //   if (typeof window !== "undefined") {
//   //     const storedTheme = localStorage.getItem("theme");
//   //     // Other client-side operations
//   //   }
//   // }, []);

//   if (!mounted) {
//     return <>{children}</>;
//   }

//   return (
//     <ThemeProvider attribute="class" defaultTheme={storedTheme || "light"}>
//       {children}
//     </ThemeProvider>
//   );
// }
"use client";
import { ThemeProvider, useTheme } from "next-themes";
import { useState, useEffect } from "react";

export function useCustomTheme() {
  return useTheme();
}

export default function Providers({ children }) {
  const { resolvedTheme } = useCustomTheme();
  const [mounted, setMounted] = useState(false);
  const [storedTheme, setStoredTheme] = useState(null);

  useEffect(() => {
    setMounted(true);

    // Check if window is defined (running in a browser environment)
    if (typeof window !== "undefined") {
      const theme = localStorage.getItem("theme");
      if (theme && theme !== "system") {
        setStoredTheme(theme);
      }
    }
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme={storedTheme || "light"}>
      {mounted && children}
    </ThemeProvider>
  );
}
