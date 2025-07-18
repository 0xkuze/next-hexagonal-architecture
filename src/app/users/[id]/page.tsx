"use client";
import { use } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface UserDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getUserData = (id: string) => {
  const users: Record<string, any> = {
    '1': { id: '1', name: 'John Doe', role: 'Admin', email: 'john@example.com', joinDate: '2023-01-15' },
    '2': { id: '2', name: 'Jane Smith', role: 'User', email: 'jane@example.com', joinDate: '2023-03-20' },
    '3': { id: '3', name: 'Bob Johnson', role: 'Manager', email: 'bob@example.com', joinDate: '2023-02-10' },
  };

  return users[id] || null;
};

export default function UserDetailPage({ params }: UserDetailPageProps) {
  const { id } = use(params);
  const user = getUserData(id);

  const renderBreadcrumb = () => {
    return (
      <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
        <Link href="/users" className="hover:text-foreground">
          Users
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">User {id}</span>
      </nav>
    );
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto space-y-8 px-4 py-8">
          <div className="space-y-4">
            <h1 className="font-bold text-3xl text-foreground">
              👥 User Not Found
            </h1>
            {renderBreadcrumb()}
          </div>

          <Card className="p-6">
            <h2 className="mb-4 font-semibold text-xl">❌ User ID: {id} not found</h2>
            <p className="text-muted-foreground">
              This demonstrates automatic 404 handling for invalid user IDs.
            </p>
            <div className="mt-4">
              <Button asChild variant="default">
                <Link href="/users">← Back to Users List</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto space-y-8 px-4 py-8">
        <div className="space-y-4">
          <h1 className="font-bold text-3xl text-foreground">
            👤 {user.name}
          </h1>
          {renderBreadcrumb()}
        </div>

        <Card className="p-6">
          <h2 className="mb-4 font-semibold text-xl">Route Information</h2>
          <div className="space-y-2">
            <div>
              <span className="font-medium">Route:</span> /users/{id}
            </div>
            <div>
              <span className="font-medium">Parameter:</span> id = "{id}"
            </div>
            <div>
              <span className="font-medium">Route Type:</span> Specific Dynamic Route [id]
            </div>
          </div>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h2 className="mb-4 font-semibold text-xl">User Details</h2>
            <div className="space-y-3">
              <div>
                <span className="font-medium">Name:</span> {user.name}
              </div>
              <div>
                <span className="font-medium">Email:</span> {user.email}
              </div>
              <div>
                <span className="font-medium">Role:</span> {user.role}
              </div>
              <div>
                <span className="font-medium">Join Date:</span> {user.joinDate}
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="mb-4 font-semibold text-xl">Actions</h2>
            <div className="space-y-3">
              <Button variant="outline" className="w-full">
                Edit User
              </Button>
              <Button variant="outline" className="w-full">
                View Activity
              </Button>
              <Button variant="outline" className="w-full">
                Send Message
              </Button>
            </div>
          </Card>
        </div>

        <Card className="p-6">
          <h2 className="mb-4 font-semibold text-xl">Navigation Examples</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <Button asChild variant="outline">
              <Link href="/users/1">User 1</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/users/2">User 2</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/users/3">User 3</Link>
            </Button>
          </div>
        </Card>

        <div className="flex gap-4">
          <Button asChild variant="default">
            <Link href="/users">← Back to Users</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}