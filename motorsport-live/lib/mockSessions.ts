import { getCurrentWeekDates } from "./week";

export function generateThisWeekSessions() {
  const { monday } = getCurrentWeekDates();

  return [
    {
      id: "mock-f1-practice",
      eventId: "f1-test-event",
      type: "Practice",
      startTime: new Date(
        monday.getTime() + 2 * 60 * 60 * 1000
      ).toISOString(),
      status: "upcoming",
      streaming: ["f1tv"]
    },
    {
      id: "mock-f1-qualifying",
      eventId: "f1-test-event",
      type: "Qualifying",
      startTime: new Date(
        monday.getTime() + 2 * 24 * 60 * 60 * 1000
      ).toISOString(),
      status: "upcoming",
      streaming: ["f1tv"]
    },
    {
      id: "mock-f1-race",
      eventId: "f1-test-event",
      type: "Race",
      startTime: new Date(
        monday.getTime() + 3 * 24 * 60 * 60 * 1000
      ).toISOString(),
      status: "live",
      streaming: ["f1tv"]
    }
  ];
}
