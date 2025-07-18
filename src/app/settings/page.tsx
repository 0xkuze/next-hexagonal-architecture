"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  const searchParams = useSearchParams();

  const section = searchParams.get('section') || 'general';
  const view = searchParams.get('view') || 'list';
  const filter = searchParams.get('filter');
  const page = searchParams.get('page') || '1';

  const renderQueryInfo = () => {
    const params = Array.from(searchParams.entries());

    if (params.length === 0) {
      return (
        <div className="text-sm text-muted-foreground">
          No query parameters active
        </div>
      );
    }

    return (
      <div className="space-y-2">
        <div className="font-medium text-sm">Active Query Parameters:</div>
        {params.map(([key, value]) => (
          <div key={key} className="flex items-center text-sm">
            <code className="rounded bg-muted px-2 py-1 mr-2">{key}</code>
            <span className="text-muted-foreground">=</span>
            <code className="rounded bg-muted px-2 py-1 ml-2">{value}</code>
          </div>
        ))}
      </div>
    );
  };

  const renderSectionContent = () => {
    switch (section) {
      case 'profile':
        return (
          <Card className="p-6">
            <h2 className="mb-4 font-semibold text-xl">👤 Profile Settings</h2>
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block font-medium text-sm">Name</label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded border p-2"
                    defaultValue="John Doe"
                  />
                </div>
                <div>
                  <label className="block font-medium text-sm">Email</label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded border p-2"
                    defaultValue="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block font-medium text-sm">Bio</label>
                <textarea
                  className="mt-1 w-full rounded border p-2"
                  rows={3}
                  defaultValue="Software developer passionate about clean architecture."
                />
              </div>
            </div>
          </Card>
        );

      case 'security':
        return (
          <Card className="p-6">
            <h2 className="mb-4 font-semibold text-xl">🔐 Security Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Two-Factor Authentication</div>
                  <div className="text-sm text-muted-foreground">Add an extra layer of security</div>
                </div>
                <Button variant="outline" size="sm">Enable</Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Login Alerts</div>
                  <div className="text-sm text-muted-foreground">Get notified of new login attempts</div>
                </div>
                <Button variant="outline" size="sm">Configure</Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">API Keys</div>
                  <div className="text-sm text-muted-foreground">Manage your API access keys</div>
                </div>
                <Button variant="outline" size="sm">Manage</Button>
              </div>
            </div>
          </Card>
        );

      case 'notifications':
        return (
          <Card className="p-6">
            <h2 className="mb-4 font-semibold text-xl">🔔 Notification Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Email Notifications</div>
                  <div className="text-sm text-muted-foreground">Receive updates via email</div>
                </div>
                <input type="checkbox" defaultChecked className="h-4 w-4" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Push Notifications</div>
                  <div className="text-sm text-muted-foreground">Browser notifications</div>
                </div>
                <input type="checkbox" className="h-4 w-4" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">SMS Alerts</div>
                  <div className="text-sm text-muted-foreground">Critical updates via SMS</div>
                </div>
                <input type="checkbox" defaultChecked className="h-4 w-4" />
              </div>
            </div>
          </Card>
        );

      default:
        return (
          <Card className="p-6">
            <h2 className="mb-4 font-semibold text-xl">⚙️ General Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block font-medium text-sm">Language</label>
                <select className="mt-1 w-full rounded border p-2">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
              <div>
                <label className="block font-medium text-sm">Theme</label>
                <select className="mt-1 w-full rounded border p-2">
                  <option>System</option>
                  <option>Light</option>
                  <option>Dark</option>
                </select>
              </div>
              <div>
                <label className="block font-medium text-sm">Timezone</label>
                <select className="mt-1 w-full rounded border p-2">
                  <option>UTC</option>
                  <option>EST</option>
                  <option>PST</option>
                </select>
              </div>
            </div>
          </Card>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto space-y-8 px-4 py-8">
        <div className="space-y-4">
          <h1 className="font-bold text-3xl text-foreground">
            ⚙️ Settings Module
          </h1>
          <p className="text-muted-foreground">
            This page demonstrates query parameter handling: <code>?section=value&view=value</code>
          </p>
        </div>

        <Card className="p-6">
          <h2 className="mb-4 font-semibold text-xl">Query Parameter Examples</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Button asChild variant={section === 'general' ? 'default' : 'outline'}>
              <Link href="/settings?section=general">
                ⚙️ General
              </Link>
            </Button>
            <Button asChild variant={section === 'profile' ? 'default' : 'outline'}>
              <Link href="/settings?section=profile">
                👤 Profile
              </Link>
            </Button>
            <Button asChild variant={section === 'security' ? 'default' : 'outline'}>
              <Link href="/settings?section=security">
                🔐 Security
              </Link>
            </Button>
            <Button asChild variant={section === 'notifications' ? 'default' : 'outline'}>
              <Link href="/settings?section=notifications">
                🔔 Notifications
              </Link>
            </Button>
          </div>

          <div className="mt-6 space-y-4">
            <h3 className="font-medium">Multiple Query Parameters</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              <Button asChild variant="outline" size="sm">
                <Link href="/settings?section=profile&view=edit&filter=active">
                  Profile + Edit View + Active Filter
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="/settings?section=security&view=grid&page=2">
                  Security + Grid View + Page 2
                </Link>
              </Button>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="mb-4 font-semibold text-xl">Current Route State</h2>
          <div className="space-y-4">
            <div>
              <span className="font-medium">Full URL:</span> /settings{searchParams.toString() ? `?${searchParams.toString()}` : ''}
            </div>
            <div>
              <span className="font-medium">Active Section:</span> {section}
            </div>
            <div>
              <span className="font-medium">View Mode:</span> {view}
            </div>
            {filter && (
              <div>
                <span className="font-medium">Filter:</span> {filter}
              </div>
            )}
            <div>
              <span className="font-medium">Page:</span> {page}
            </div>
            <div className="mt-4">
              {renderQueryInfo()}
            </div>
          </div>
        </Card>

        {renderSectionContent()}

        <Card className="p-6">
          <h2 className="mb-4 font-semibold text-xl">Query Parameter Features</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <span className="mr-2">✅</span>
              Dynamic content based on URL parameters
            </li>
            <li className="flex items-center">
              <span className="mr-2">✅</span>
              Persistent state through page refreshes
            </li>
            <li className="flex items-center">
              <span className="mr-2">✅</span>
              Shareable URLs with specific states
            </li>
            <li className="flex items-center">
              <span className="mr-2">✅</span>
              SEO-friendly parameter handling
            </li>
          </ul>
        </Card>

        <div className="flex gap-4">
          <Button asChild variant="default">
            <Link href="/">← Back to Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/dashboard">Dashboard Module →</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}