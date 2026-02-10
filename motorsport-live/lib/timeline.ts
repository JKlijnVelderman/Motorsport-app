export function groupSessionsByDay(sessions: any[]) {
  return sessions.reduce((acc, session) => {
    const day = new Date(session.startTime).toLocaleDateString(undefined, {
      weekday: "long",
      day: "numeric",
      month: "short",
    });

    if (!acc[day]) acc[day] = [];
    acc[day].push(session);

    return acc;
  }, {} as Record<string, any[]>);
}

export function formatTime(dateStr: string) {
  return new Date(dateStr).toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });
}
