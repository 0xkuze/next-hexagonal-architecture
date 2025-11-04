import { cacheLife, cacheTag } from "next/cache";
import { NextResponse } from "next/server";

async function getWelcomeData() {
  "use cache";
  cacheTag("welcome-data");
  cacheLife("hours");

  return [
    {
      id: "717f7637-a101-49e4-8e64-0db607f90b13",
      name: "Cristian Fonseca",
      imageUrl: "https://placekitten.com/500/400",
    },
  ];
}

export async function GET(_request: Request) {
  const data = await getWelcomeData();
  return NextResponse.json(data);
}
