"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const navigationItems = [
  {
    href: "/dashboard",
    title: "📊 Dashboard",
    description: "Catch-all dynamic routing [...]",
    examples: [
      "/dashboard/analytics",
      "/dashboard/reports/2024",
      "/dashboard/reports/2024/january/summary"
    ]
  },
  {
    href: "/users",
    title: "👥 Users",
    description: "Specific dynamic routing [id]",
    examples: [
      "/users/1",
      "/users/2",
      "/users/123"
    ]
  },
  {
    href: "/reports",
    title: "📈 Reports",
    description: "Optional catch-all [[...params]]",
    examples: [
      "/reports",
      "/reports/sales",
      "/reports/financial/2024/summary"
    ]
  },
  {
    href: "/settings",
    title: "⚙️ Settings",
    description: "Query parameters (?key=value)",
    examples: [
      "/settings?section=profile",
      "/settings?section=security&view=grid",
      "/settings?section=notifications&filter=active"
    ]
  }
];

export function MainNavigation() {
  const pathname = usePathname();

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="font-bold text-2xl text-foreground">
          🚀 Next.js Routing Examples
        </h2>
        <p className="text-muted-foreground">
          Explore different routing patterns with working examples
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {navigationItems.map((item) => {
          const isActive = pathname.startsWith(item.href);

          return (
            <Card key={item.href} className={`p-6 transition-colors ${isActive ? 'border-primary' : ''}`}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>

                <Button asChild variant={isActive ? 'default' : 'outline'} className="w-full">
                  <Link href={item.href}>
                    Visit Module
                  </Link>
                </Button>

                <div className="space-y-2">
                  <div className="font-medium text-sm">Example Routes:</div>
                  <div className="space-y-1">
                    {item.examples.map((example) => (
                      <Button
                        key={example}
                        asChild
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start h-auto p-2 font-mono text-xs"
                      >
                        <Link href={example}>
                          {example}
                        </Link>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>


    </div>
  );
}