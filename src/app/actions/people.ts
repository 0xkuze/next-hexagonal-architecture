"use server";

import { revalidatePath, updateTag } from "next/cache";
import type { People } from "@/modules/welcome/domain/People";

export async function getPeopleList(): Promise<People[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/welcome`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch people list");
  }

  return response.json();
}

export async function createPerson(formData: FormData) {
  const name = formData.get("name") as string;
  const imageUrl = formData.get("imageUrl") as string;

  if (!name || !imageUrl) {
    return {
      error: "Name and image URL are required",
    };
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/welcome`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, imageUrl }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      return {
        error: error.error || "Failed to create person",
      };
    }

    const person = await response.json();

    updateTag("people-list");
    revalidatePath("/");

    return {
      success: true,
      person,
    };
  } catch (error) {
    console.error("Error creating person:", error);
    return {
      error: "Failed to create person",
    };
  }
}
