"use client";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const mockUsers = [
  { id: '1', name: 'John Doe', role: 'Admin', email: 'john@example.com' },
  { id: '2', name: 'Jane Smith', role: 'User', email: 'jane@example.com' },
  { id: '3', name: 'Bob Johnson', role: 'Manager', email: 'bob@example.com' },
];

export default function UsersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto space-y-8 px-4 py-8">
        <div className="space-y-4">
          <h1 className="font-bold text-3xl text-foreground">
            👥 Users Module
          </h1>
          <p className="text-muted-foreground">
            This page demonstrates specific dynamic routing: <code>/users/[id]</code>
          </p>
        </div>

        <Card className="p-6">
          <h2 className="mb-4 font-semibold text-xl">Users List</h2>
          <div className="space-y-4">
            {mockUsers.map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div className="space-y-1">
                  <div className="font-medium">{user.name}</div>
                  <div className="text-sm text-muted-foreground">{user.email}</div>
                  <div className="text-xs text-muted-foreground">Role: {user.role}</div>
                </div>
                <Button asChild variant="outline" size="sm">
                  <Link href={`/users/${user.id}`}>
                    View Details
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="mb-4 font-semibold text-xl">Routing Examples</h2>
          <div className="space-y-3">
            <div>
              <Button asChild variant="outline" className="w-full">
                <Link href="/users/123">
                  👤 View User ID: 123
                </Link>
              </Button>
              <p className="mt-1 text-sm text-muted-foreground">
                Route: /users/123
              </p>
            </div>

            <div>
              <Button asChild variant="outline" className="w-full">
                <Link href="/users/456">
                  👤 View User ID: 456
                </Link>
              </Button>
              <p className="mt-1 text-sm text-muted-foreground">
                Route: /users/456
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="mb-4 font-semibold text-xl">Module Features</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <span className="mr-2">✅</span>
              Specific dynamic routing [id]
            </li>
            <li className="flex items-center">
              <span className="mr-2">✅</span>
              User detail views
            </li>
            <li className="flex items-center">
              <span className="mr-2">✅</span>
              Type-safe parameter access
            </li>
            <li className="flex items-center">
              <span className="mr-2">✅</span>
              Automatic 404 handling
            </li>
          </ul>
        </Card>

        <div className="flex gap-4">
          <Button asChild variant="default">
            <Link href="/">← Back to Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/reports">Reports Module →</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}