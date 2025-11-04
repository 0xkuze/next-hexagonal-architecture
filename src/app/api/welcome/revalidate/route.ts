import { updateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(_request: Request) {
  updateTag("welcome-data");

  return NextResponse.json({
    revalidated: true,
    now: Date.now(),
  });
}
