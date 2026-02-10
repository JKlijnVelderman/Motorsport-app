import Link from "next/link";

type Series = {
  id: string;
  name: string;
  category: string;
  status: "ongoing" | "off-season";
};

export default function SeriesCard({ series }: { series: Series }) {
  return (
    <Link href={`/series/${series.id}`}>
      <article className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-red-500 transition cursor-pointer">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold">{series.name}</h2>

          {series.status === "ongoing" && (
            <span className="text-xs px-2 py-1 bg-green-600/20 text-green-400 rounded">
              Season Live
            </span>
          )}
        </div>

        <p className="text-sm text-zinc-400">{series.category}</p>

        <div className="mt-4 text-xs text-zinc-500">
          View schedule →
        </div>
      </article>
    </Link>
  );
}
