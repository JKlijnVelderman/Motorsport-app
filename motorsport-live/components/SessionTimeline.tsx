"use client";

import { groupSessionsByDay, formatTime } from "@/lib/timeline";

type Session = {
  id: string;
  type: string;
  startTime: string;
  status: string;
  seriesName?: string;
  eventName?: string;
};

export default function SessionTimeline({ sessions }: { sessions: Session[] }) {
  const grouped = groupSessionsByDay(sessions) as Record<string, Session[]>;

  return (
    <section className="border border-zinc-800 rounded-xl bg-zinc-950">
      <div className="px-4 py-3 border-b border-zinc-800 font-semibold">
        This Week — Timeline
      </div>

      {Object.keys(grouped).length === 0 && (
        <div className="p-4 text-sm text-zinc-500">
          No sessions scheduled this week
        </div>
      )}

      <div className="p-4 space-y-6">
        {Object.entries(grouped).map(([day, daySessions]) => (
          <div key={day}>
            {/* Day Header */}
            <div className="text-sm font-semibold text-zinc-400 mb-3">
              {day}
            </div>

            <div className="relative border-l border-zinc-800 pl-6 space-y-4">
              {daySessions.map(session => (
                <div key={session.id} className="relative">
                  {/* Timeline Dot */}
                  <span
                    className={`absolute -left-[9px] top-2 w-3 h-3 rounded-full ${
                      session.status === "live"
                        ? "bg-red-500 animate-pulse"
                        : "bg-zinc-600"
                    }`}
                  />

                  {/* Session Card */}
                  <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <div className="font-medium">
                        {session.seriesName} — {session.type}
                      </div>

                      <div className="text-sm text-zinc-400">
                        {formatTime(session.startTime)}
                      </div>
                    </div>

                    <div className="text-sm text-zinc-500 mt-1">
                      {session.eventName}
                    </div>

                    {session.status === "live" && (
                      <div className="text-xs text-red-500 font-semibold mt-2">
                        LIVE NOW
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
