"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header / Navbar */}
      <header className="flex items-center justify-between border-b border-border px-6 py-3">
        <div className="flex items-center gap-3">
          <h1 className="text-foreground text-lg font-semibold">
            Voxium Mind
          </h1>
          <OrganizationSwitcher />
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <UserButton />
        </div>
      </header>

      {/* Contenido principal */}
      <main className="flex flex-1 items-center justify-center">
        <h2 className="text-muted-foreground text-xl">
          Welcome to Voxium Mind
        </h2>
      </main>
    </div>
  );
}