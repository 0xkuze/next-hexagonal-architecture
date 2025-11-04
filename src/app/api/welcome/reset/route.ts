import { NextResponse } from "next/server";
import { container } from "@/lib/container";

export async function POST(_request: Request) {
  container.resetForTesting();

  return NextResponse.json({
    reset: true,
    now: Date.now(),
  });
}
