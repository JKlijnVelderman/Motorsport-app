import {
  getSeriesById,
  getEventsForSeries,
  getSessionsForEvent
} from "@/lib/selectors";
import SessionRow from "@/components/SessionRow";

export default function SeriesPage({ params }: { params: { id: string } }) {
  const series = getSeriesById(params.id);
  const events = getEventsForSeries(params.id);

  if (!series) {
    return <p className="p-4">Series not found</p>;
  }

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">{series.name}</h1>

      {events.map(event => (
        <section key={event.id} className="mb-6">
          <h2 className="text-xl mb-2">
            {event.name} – {event.circuit}
          </h2>

          {getSessionsForEvent(event.id).map(session => (
            <SessionRow key={session.id} session={session} />
          ))}
        </section>
      ))}
    </main>
  );
}
