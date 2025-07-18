"use client";
import { use } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ReportsPageProps {
  params: Promise<{
    params?: string[];
  }>;
}

export default function ReportsPage({ params }: ReportsPageProps) {
  const resolvedParams = use(params);
  const routeParams = resolvedParams.params || [];
  const isRootPage = routeParams.length === 0;

  const renderBreadcrumb = () => {
    if (isRootPage) return null;

    return (
      <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
        <Link href="/reports" className="hover:text-foreground">
          Reports
        </Link>
        {routeParams.map((segment, index) => (
          <span key={index} className="flex items-center">
            <span className="mx-2">/</span>
            <Link
              href={`/reports/${routeParams.slice(0, index + 1).join('/')}`}
              className="hover:text-foreground"
            >
              {segment}
            </Link>
          </span>
        ))}
      </nav>
    );
  };

  const renderRootContent = () => {
    return (
      <>
        <Card className="p-6">
          <h2 className="mb-4 font-semibold text-xl">Available Reports</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Button asChild variant="outline" className="justify-start h-auto p-4">
              <Link href="/reports/sales">
                <div className="text-left">
                  <div className="font-medium">📊 Sales Reports</div>
                  <div className="text-sm text-muted-foreground">
                    View sales analytics and trends
                  </div>
                </div>
              </Link>
            </Button>

            <Button asChild variant="outline" className="justify-start h-auto p-4">
              <Link href="/reports/users/activity">
                <div className="text-left">
                  <div className="font-medium">👥 User Activity</div>
                  <div className="text-sm text-muted-foreground">
                    Monitor user engagement metrics
                  </div>
                </div>
              </Link>
            </Button>

            <Button asChild variant="outline" className="justify-start h-auto p-4">
              <Link href="/reports/financial/2024/summary">
                <div className="text-left">
                  <div className="font-medium">💰 Financial Summary</div>
                  <div className="text-sm text-muted-foreground">
                    2024 financial overview
                  </div>
                </div>
              </Link>
            </Button>

            <Button asChild variant="outline" className="justify-start h-auto p-4">
              <Link href="/reports/performance/monthly/january">
                <div className="text-left">
                  <div className="font-medium">⚡ Performance</div>
                  <div className="text-sm text-muted-foreground">
                    Monthly performance metrics
                  </div>
                </div>
              </Link>
            </Button>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="mb-4 font-semibold text-xl">Optional Catch-all Features</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <span className="mr-2">✅</span>
              Handles both /reports and /reports/any/params
            </li>
            <li className="flex items-center">
              <span className="mr-2">✅</span>
              Optional parameters with [[...params]]
            </li>
            <li className="flex items-center">
              <span className="mr-2">✅</span>
              Flexible routing structure
            </li>
            <li className="flex items-center">
              <span className="mr-2">✅</span>
              Dynamic content based on parameters
            </li>
          </ul>
        </Card>
      </>
    );
  };

  const renderParameterContent = () => {
    const [category, subcategory, period, detail] = routeParams;

    return (
      <>
        <Card className="p-6">
          <h2 className="mb-4 font-semibold text-xl">Route Information</h2>
          <div className="space-y-2">
            <div>
              <span className="font-medium">Full Route:</span> /reports/{routeParams.join('/')}
            </div>
            <div>
              <span className="font-medium">Parameters:</span> [{routeParams.join(', ')}]
            </div>
            <div>
              <span className="font-medium">Segments:</span> {routeParams.length}
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="mb-4 font-semibold text-xl">📊 Report: {category || 'General'}</h2>
          <div className="space-y-4">
            {category && (
              <div>
                <span className="font-medium">Category:</span> {category}
              </div>
            )}
            {subcategory && (
              <div>
                <span className="font-medium">Subcategory:</span> {subcategory}
              </div>
            )}
            {period && (
              <div>
                <span className="font-medium">Period:</span> {period}
              </div>
            )}
            {detail && (
              <div>
                <span className="font-medium">Detail:</span> {detail}
              </div>
            )}

            <div className="mt-6 rounded-lg bg-muted p-4">
              <div className="font-medium">Generated Report Content</div>
              <div className="mt-2 text-sm text-muted-foreground">
                This content is dynamically generated based on the URL parameters.
                In a real application, this would fetch data based on the specific route.
              </div>

              {category === 'sales' && (
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  <div className="rounded bg-primary/10 p-3 text-center">
                    <div className="font-bold text-lg text-primary">$45,230</div>
                    <div className="text-xs text-muted-foreground">Total Sales</div>
                  </div>
                  <div className="rounded bg-green-500/10 p-3 text-center">
                    <div className="font-bold text-lg text-green-600">+23%</div>
                    <div className="text-xs text-muted-foreground">Growth</div>
                  </div>
                  <div className="rounded bg-blue-500/10 p-3 text-center">
                    <div className="font-bold text-lg text-blue-600">342</div>
                    <div className="text-xs text-muted-foreground">Orders</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Card>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto space-y-8 px-4 py-8">
        <div className="space-y-4">
          <h1 className="font-bold text-3xl text-foreground">
            📈 Reports Module
            {!isRootPage && ` - ${routeParams.join(' / ')}`}
          </h1>
          <p className="text-muted-foreground">
            This page demonstrates optional catch-all routing: <code>[[...params]]</code>
          </p>
          {renderBreadcrumb()}
        </div>

        {isRootPage ? renderRootContent() : renderParameterContent()}

        <div className="flex gap-4">
          <Button asChild variant="default">
            <Link href="/">← Back to Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/settings">Settings Module →</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}