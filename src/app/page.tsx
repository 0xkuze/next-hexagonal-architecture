"use client";
import { useMemo } from "react";
import { createLocalStoragePeopleRepository } from "@/modules/welcome/infrastructure/LocalStoragePeopleRepository";
import { WelcomePeopleCreate } from "@/sections/welcome/components/WelcomePeopleCreate";
import { WelcomePeopleList } from "@/sections/welcome/components/WelcomePeopleList";
import { WelcomeContextProvider } from "@/sections/welcome/context";
import { MainNavigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";

export default function Home() {
  const repository = createLocalStoragePeopleRepository();

  // Memoize the WelcomePeopleList component
  const memoizedWelcomePeopleList = useMemo(() => <WelcomePeopleList />, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto space-y-12 px-4 py-16">
        <div className="space-y-6 text-center">
          <div className="space-y-4">
            <h1 className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text font-bold text-5xl text-transparent md:text-6xl">
              ✨ NextJS Hexagonal Architecture Template 🔯
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Thanks for using this template 🖤
            </p>
          </div>
        </div>

        <MainNavigation />

        <WelcomeContextProvider repository={repository}>
          <div className="space-y-12">
            <WelcomePeopleCreate />
            <div className="space-y-8">
              <h2 className="text-center font-semibold text-2xl text-foreground">
                People Gallery
              </h2>
              {memoizedWelcomePeopleList}
            </div>
          </div>
        </WelcomeContextProvider>
      </div>
    </div>
  );
}
