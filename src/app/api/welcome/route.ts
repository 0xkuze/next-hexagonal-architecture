import { NextResponse } from "next/server";

export async function GET(_request: Request) {
  return NextResponse.json([
    {
      id: "717f7637-a101-49e4-8e64-0db607f90b13",
      name: "Cristian Fonseca",
      imageUrl: "https://placekitten.com/500/400",
    },
  ]);
}
