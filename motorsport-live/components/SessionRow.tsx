import { formatLocalTime } from "@/lib/time";
import platforms from "@/data/streamingPlatforms.json";

interface Session {
  type: string;
  startTime: string;
  status: string;
  streaming: string[];
}

export default function SessionRow({ session }: { session: Session }) {
  return (
    <div className="flex justify-between py-2 border-b border-zinc-800">
      <div>
        <strong>{session.type}</strong>
        <div className="text-xs text-zinc-400">
          {formatLocalTime(session.startTime)}
        </div>
      </div>

      <div className="flex gap-2 items-center">
        {session.status === "live" && (
          <span className="text-red-500 font-bold">LIVE</span>
        )}

        {session.streaming.map(id => (
          <a
            key={id}
            href={platforms[id as keyof typeof platforms].url}
            target="_blank"
            className="text-xs bg-zinc-700 px-2 py-1 rounded"
          >
            {platforms[id as keyof typeof platforms].name}
          </a>
        ))}
      </div>
    </div>
  );
}
