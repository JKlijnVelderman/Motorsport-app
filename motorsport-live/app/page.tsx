import LiveHero from "@/components/live/LiveHero";
import SessionTimeline from "@/components/timeline/SessionTimeline";
import TopNav from "@/components/layout/TopNav";

export default function HomePage() {
  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px" }}>
        <TopNav />
      <LiveHero />
      <SessionTimeline />
    </main>
  );
}
