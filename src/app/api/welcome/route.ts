import { cacheLife, cacheTag } from "next/cache";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { addPersonToStore, getAllPeopleFromStore } from "@/lib/data-store";
import type { People } from "@/modules/welcome/domain/People";

async function getWelcomeData() {
  "use cache";
  cacheTag("people-list");
  cacheLife("hours");

  return getAllPeopleFromStore();
}

export async function GET(_request: Request) {
  const data = await getWelcomeData();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, imageUrl } = body;

    if (!name || !imageUrl) {
      return NextResponse.json(
        { error: "Name and imageUrl are required" },
        { status: 400 }
      );
    }

    const newPerson: People = {
      id: uuidv4(),
      name,
      imageUrl,
    };

    addPersonToStore(newPerson);

    return NextResponse.json(newPerson, { status: 201 });
  } catch (error) {
    console.error("Error creating person:", error);
    return NextResponse.json(
      { error: "Failed to create person" },
      { status: 500 }
    );
  }
}
