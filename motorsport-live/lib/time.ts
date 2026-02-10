

export function isThisWeek(dateStr: string) {
  const date = new Date(dateStr);
  const now = new Date();

  // Get start of week (Monday)
  const day = now.getDay();
  const diff = now.getDate() - day + (day === 0 ? -6 : 1);
  const weekStart = new Date(now.setDate(diff));
  weekStart.setHours(0, 0, 0, 0);

  // End of week (Sunday)
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekEnd.getDate() + 6);
  weekEnd.setHours(23, 59, 59, 999);

  return date >= weekStart && date <= weekEnd;
}

// Format local time nicely
export function formatLocalTime(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleString(undefined, {
    weekday: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}
