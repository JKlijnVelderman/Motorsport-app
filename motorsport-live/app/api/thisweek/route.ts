import { NextResponse } from "next/server";
import { getThisWeeksSessions } from "@/lib/selectors";

export async function GET() {
  return NextResponse.json(getThisWeeksSessions());
}
