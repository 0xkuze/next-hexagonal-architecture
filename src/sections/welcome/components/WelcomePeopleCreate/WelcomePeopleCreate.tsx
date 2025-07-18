"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { People } from "@/modules/welcome/domain/People";
import { useFormPeople } from "@/sections/welcome/hooks/useFormPeople";

const WelcomePeopleCreate = React.memo(function WelcomePeopleCreate() {
  const { register, handleSubmit, errors, reset, createPeople } =
    useFormPeople();

  function onSubmit(data: People) {
    try {
      createPeople(data);
    } catch (error) {
      console.log(error);
    }
    reset();
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
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-medium text-sm">
                  Name
                </Label>
                <Input
                  id="name"
                  role="textbox"
                  {...register("name")}
                  placeholder="Enter full name"
                  className="h-11"
                />
                {errors?.name?.message && (
                  <span role="alert" className="text-destructive text-sm">
                    {errors.name.message as string}
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="imageUrl" className="font-medium text-sm">
                  Image URL
                </Label>
                <Input
                  id="imageUrl"
                  role="textbox"
                  {...register("imageUrl")}
                  placeholder="https://example.com/image.jpg"
                  className="h-11"
                />
                {errors?.imageUrl?.message && (
                  <span role="alert" className="text-destructive text-sm">
                    {errors.imageUrl.message as string}
                  </span>
                )}
              </div>
            </div>
            <div className="flex justify-center pt-4">
              <Button type="submit" className="px-8 py-2 font-semibold">
                Add Person
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
});

export default WelcomePeopleCreate;
