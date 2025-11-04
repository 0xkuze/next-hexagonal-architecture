"use client";

import { useRouter } from "next/navigation";
import type React from "react";
import { useState } from "react";
import { createPerson } from "@/app/actions/people";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const WelcomePeopleCreate = () => {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsPending(true);
    setError(null);

    const formData = new FormData(event.currentTarget);

    try {
      const result = await createPerson(formData);

      if (result.error) {
        setError(result.error);
      } else {
        (event.target as HTMLFormElement).reset();
        router.refresh();
      }
    } catch (err) {
      setError("Failed to create person");
      console.error(err);
    } finally {
      setIsPending(false);
    }
  }

  return (
    <div className="mx-auto max-w-2xl">
      <Card className="border-2 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Add New Person</CardTitle>
          <CardDescription>
            Create a new person profile to add to your gallery
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="rounded-md bg-destructive/10 p-3 text-center text-destructive text-sm">
                {error}
              </div>
            )}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-medium text-sm">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  role="textbox"
                  placeholder="Enter full name"
                  className="h-11"
                  required
                  minLength={3}
                  maxLength={50}
                  disabled={isPending}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="imageUrl" className="font-medium text-sm">
                  Image URL
                </Label>
                <Input
                  id="imageUrl"
                  name="imageUrl"
                  type="url"
                  role="textbox"
                  placeholder="https://example.com/image.jpg"
                  className="h-11"
                  required
                  disabled={isPending}
                />
              </div>
            </div>
            <div className="flex justify-center pt-4">
              <Button
                type="submit"
                className="px-8 py-2 font-semibold"
                disabled={isPending}
              >
                {isPending ? "Adding..." : "Add Person"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default WelcomePeopleCreate;
