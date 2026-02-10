import DashboardClient from "@/components/DashboardClient";
import { getSeries } from "@/lib/selectors";

export default function DashboardPage() {
  const series = getSeries();

  return (
    <div className="space-y-6">
      <DashboardClient />

      {/* Series Overview */}
      <section className="border border-zinc-800 rounded-xl bg-zinc-950">
        <div className="px-4 py-3 border-b border-zinc-800 font-semibold">
          Motorsport Series
        </div>

        <div className="divide-y divide-zinc-800">
          {series.map(s => (
            <div key={s.id} className="px-4 py-3 flex justify-between">
              <div>
                <div className="font-medium">{s.name}</div>
                <div className="text-sm text-zinc-400">
                  {s.category}
                </div>
              </div>

              <span className="text-xs text-green-400">
                {s.status}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
