"use client";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto space-y-8 px-4 py-8">
        <div className="space-y-4">
          <h1 className="font-bold text-3xl text-foreground">
            📊 Dashboard Module
          </h1>
          <p className="text-muted-foreground">
            This page demonstrates basic module routing: <code>/dashboard</code>
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h2 className="mb-4 font-semibold text-xl">Navigation Examples</h2>
            <div className="space-y-3">
              <div>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/dashboard/analytics">
                    📈 Analytics
                  </Link>
                </Button>
                <p className="mt-1 text-sm text-muted-foreground">
                  Route: /dashboard/analytics
                </p>
              </div>

              <div>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/dashboard/reports/2024">
                    📄 2024 Reports
                  </Link>
                </Button>
                <p className="mt-1 text-sm text-muted-foreground">
                  Route: /dashboard/reports/2024
                </p>
              </div>

              <div>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/dashboard/reports/2024/january/summary">
                    📋 January Summary
                  </Link>
                </Button>
                <p className="mt-1 text-sm text-muted-foreground">
                  Route: /dashboard/reports/2024/january/summary
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="mb-4 font-semibold text-xl">Module Features</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="mr-2">✅</span>
                Catch-all dynamic routing
              </li>
              <li className="flex items-center">
                <span className="mr-2">✅</span>
                Nested parameter handling
              </li>
              <li className="flex items-center">
                <span className="mr-2">✅</span>
                Breadcrumb navigation
              </li>
              <li className="flex items-center">
                <span className="mr-2">✅</span>
                URL-based state management
              </li>
            </ul>
          </Card>
        </div>

        <div className="flex gap-4">
          <Button asChild variant="default">
            <Link href="/">← Back to Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/users">Users Module →</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}