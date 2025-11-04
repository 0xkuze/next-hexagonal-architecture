import { NextResponse } from "next/server";
import { resetStore } from "@/lib/data-store";

export async function POST(_request: Request) {
  resetStore();

  return NextResponse.json({
    reset: true,
    now: Date.now(),
  });
}
