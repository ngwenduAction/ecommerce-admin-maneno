// providers/root-provider.tsx
"use client"; // This directive marks the component as a Client Component

import { ClerkProvider } from "@clerk/nextjs";
import { ModalProvider } from "@/providers/modal-provider";
import { ToasterProvider } from "@/providers/toast-provider";
import { ThemeProvider } from "@/providers/theme-provider";

export function RootProvider({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <ToasterProvider />
        <ModalProvider />
        {children}
      </ThemeProvider>
    </ClerkProvider>
  );
}
