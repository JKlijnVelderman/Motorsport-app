import { NextResponse } from "next/server";
import sessions from "@/data/sessions.json";
import events from "@/data/events.json";
import series from "@/data/series.json";

export async function GET() {
  // Compute enriched live sessions
  const liveSessions = sessions
    .filter(s => s.status === "live")
    .map(session => {
      const event = events.find(e => e.id === session.eventId);
      const seriesItem = series.find(s => s.id === event?.seriesId);

      return {
        ...session,
        eventName: event?.name,
        seriesName: seriesItem?.name,
      };
    });

  return NextResponse.json(liveSessions);
}
