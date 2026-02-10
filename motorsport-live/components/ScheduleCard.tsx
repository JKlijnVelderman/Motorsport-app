"use client";

import { formatLocalTime } from "@/lib/time";
import platformsData from "@/data/streamingPlatforms.json";

type Platform = {
  name: string;
  url: string;
  regions: string[];
};

const platforms: Record<string, Platform> = platformsData;

type Session = {
  id: string;
  type: string;
  startTime: string;
  status: string;
  eventName?: string;
  seriesName?: string;
  streaming: string[];
};

export default function ScheduleCard({ sessions }: { sessions: Session[] }) {
  return (
    <section className="border border-zinc-800 rounded-xl bg-zinc-950">
      <div className="px-4 py-3 border-b border-zinc-800 font-semibold">
        This Week’s Sessions
      </div>

      {sessions.length === 0 && (
        <div className="p-4 text-sm text-zinc-500">
          No sessions scheduled this week
        </div>
      )}

      {sessions.map(session => (
        <div
          key={session.id}
          className="px-4 py-3 border-t border-zinc-800 flex justify-between items-center"
        >
          <div>
            <div className="font-medium flex items-center gap-2">
              {session.seriesName} — {session.type}
              {session.status === "live" && (
                <span className="text-red-500 font-semibold animate-pulse text-xs">
                  LIVE
                </span>
              )}
            </div>
            <div className="text-sm text-zinc-400">
              {session.eventName} · {formatLocalTime(session.startTime)}
            </div>
          </div>

          <div className="flex gap-2">
            {session.streaming.map(id => (
              <a
                key={id}
                href={platforms[id].url}
                target="_blank"
                className="text-xs bg-zinc-800 hover:bg-zinc-700 px-2 py-1 rounded"
              >
                {platforms[id].name}
              </a>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
