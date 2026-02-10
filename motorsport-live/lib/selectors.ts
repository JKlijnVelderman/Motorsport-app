import series from "@/data/series.json";
import events from "@/data/events.json";
import sessions from "@/data/sessions.json";
import results from "@/data/results.json";

export const getSeries = () => series;

export const getSeriesById = (id: string) =>
  series.find(s => s.id === id);

export const getEventsForSeries = (seriesId: string) =>
  events.filter(e => e.seriesId === seriesId);

export const getSessionsForEvent = (eventId: string) =>
  sessions.filter(s => s.eventId === eventId);

export const getResultsForSession = (resultsId?: string) =>
  resultsId ? (results as Record<string, any>)[resultsId] : null;



// This is a helper function to get live sessions, used for the "Live Now" section on the homepage and the API route
export function getLiveSessions() {
  return sessions
    .filter(session => session.status === "live")
    .map(session => {
      const event = events.find(e => e.id === session.eventId);
      const seriesItem = series.find(s => s.id === event?.seriesId);

      return {
        ...session,
        eventName: event?.name,
        seriesName: seriesItem?.name,
      };
    });
}

// This is a helper function to get sessions that are happening this week, used for the "This Week" section on the homepage
import { isThisWeek } from "./time";
import { generateThisWeekSessions } from "./mockSessions";

const isDev = process.env.NODE_ENV === "development";

export function getThisWeeksSessions() {
  const baseSessions = [...sessions];

  // 🔥 Inject mock sessions if none exist this week
  if (
    isDev &&
    !baseSessions.some(s => isThisWeek(s.startTime))
  ) {
    baseSessions.push(...generateThisWeekSessions());
  }

  return baseSessions
    .filter(s => isThisWeek(s.startTime))
    .map(session => {
      const event = events.find(e => e.id === session.eventId) ?? {
        name: "Test Grand Prix",
        seriesId: "f1"
      };

      const seriesItem = series.find(s => s.id === event.seriesId) ?? {
        name: "Formula 1"
      };

      return {
        ...session,
        eventName: event.name,
        seriesName: seriesItem.name
      };
    })
    .sort(
      (a, b) =>
        new Date(a.startTime).getTime() -
        new Date(b.startTime).getTime()
    );
}
