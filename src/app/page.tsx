import { Suspense } from "react";
import { WelcomePeopleCreate } from "@/sections/welcome/components/WelcomePeopleCreate";
import { WelcomePeopleList } from "@/sections/welcome/components/WelcomePeopleList";
import WelcomePeopleListSkeleton from "@/sections/welcome/components/WelcomePeopleList/WelcomePeopleListSkeleton";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto space-y-12 px-4 py-16">
        <div className="space-y-6 text-center">
          <div className="space-y-4">
            <h1 className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text font-bold text-5xl text-transparent md:text-6xl">
              ✨ NextJS Starter Kit ✨
            </h1>
            <p className="mx-auto max-w-2xl text-muted-foreground text-xl">
              Thanks for using this template 🖤
            </p>
          </div>
        </div>

        <div className="space-y-12">
          <WelcomePeopleCreate />
          <div className="space-y-8">
            <h2 className="text-center font-semibold text-2xl text-foreground">
              People Gallery
            </h2>
            <Suspense fallback={<WelcomePeopleListSkeleton />}>
              <WelcomePeopleList />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
