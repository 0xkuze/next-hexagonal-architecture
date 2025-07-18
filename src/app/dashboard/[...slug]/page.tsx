"use client";
import { use } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface DashboardDynamicPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export default function DashboardDynamicPage({ params }: DashboardDynamicPageProps) {
  const { slug } = use(params);

  const renderBreadcrumb = () => {
    return (
      <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
        <Link href="/dashboard" className="hover:text-foreground">
          Dashboard
        </Link>
        {slug.map((segment, index) => (
          <span key={index} className="flex items-center">
            <span className="mx-2">/</span>
            <Link
              href={`/dashboard/${slug.slice(0, index + 1).join('/')}`}
              className="hover:text-foreground"
            >
              {segment}
            </Link>
          </span>
        ))}
      </nav>
    );
  };

  const renderContent = () => {
    if (slug[0] === 'analytics') {
      return (
        <Card className="p-6">
          <h2 className="mb-4 font-semibold text-xl">📈 Analytics Dashboard</h2>
          <p className="text-muted-foreground">
            This demonstrates a specific route handler for analytics.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-primary/10 p-4 text-center">
              <div className="font-bold text-2xl text-primary">1,234</div>
              <div className="text-sm text-muted-foreground">Total Users</div>
            </div>
            <div className="rounded-lg bg-green-500/10 p-4 text-center">
              <div className="font-bold text-2xl text-green-600">89%</div>
              <div className="text-sm text-muted-foreground">Conversion Rate</div>
            </div>
            <div className="rounded-lg bg-blue-500/10 p-4 text-center">
              <div className="font-bold text-2xl text-blue-600">$12,345</div>
              <div className="text-sm text-muted-foreground">Revenue</div>
            </div>
          </div>
        </Card>
      );
    }

    if (slug[0] === 'reports') {
      return (
        <Card className="p-6">
          <h2 className="mb-4 font-semibold text-xl">📄 Reports Section</h2>
          <div className="space-y-4">
            <div>
              <span className="font-medium">Report Type:</span> {slug[1] || 'General'}
            </div>
            {slug[2] && (
              <div>
                <span className="font-medium">Period:</span> {slug[2]}
              </div>
            )}
            {slug[3] && (
              <div>
                <span className="font-medium">Detail:</span> {slug[3]}
              </div>
            )}
            <div className="mt-4 rounded-lg bg-muted p-4">
              <div className="font-medium">Report Data</div>
              <div className="mt-2 text-sm text-muted-foreground">
                This would contain the actual report content based on the parameters.
              </div>
            </div>
          </div>
        </Card>
      );
    }

    return (
      <Card className="p-6">
        <h2 className="mb-4 font-semibold text-xl">🔍 Dynamic Route Handler</h2>
        <p className="text-muted-foreground">
          This page handles any route under <code>/dashboard/</code> using catch-all segments.
        </p>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto space-y-8 px-4 py-8">
        <div className="space-y-4">
          <h1 className="font-bold text-3xl text-foreground">
            📊 Dashboard - {slug.join(' / ')}
          </h1>
          {renderBreadcrumb()}
        </div>

        <Card className="p-6">
          <h2 className="mb-4 font-semibold text-xl">Route Information</h2>
          <div className="space-y-2">
            <div>
              <span className="font-medium">Full Route:</span> /dashboard/{slug.join('/')}
            </div>
            <div>
              <span className="font-medium">Parameters:</span> [{slug.join(', ')}]
            </div>
            <div>
              <span className="font-medium">Segments Count:</span> {slug.length}
            </div>
          </div>
        </Card>

        {renderContent()}

        <div className="flex gap-4">
          <Button asChild variant="default">
            <Link href="/dashboard">← Back to Dashboard</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}