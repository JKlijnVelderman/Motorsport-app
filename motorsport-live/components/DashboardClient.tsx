"use client";

import { useEffect, useState } from "react";
import LiveNowCard from "./LiveNowCard";
import ScheduleCard from "./ScheduleCard";
import SessionTimeline from "./timeline/SessionTimeline";


export default function DashboardClient() {
  // Hooks must be inside the component function
  const [liveSessions, setLiveSessions] = useState([]);
  const [weeklySessions, setWeeklySessions] = useState([]);

  // Fetch live sessions
  const fetchLiveSessions = async () => {
    const res = await fetch("/api/live");
    const data = await res.json();
    setLiveSessions(data);
  };

  // Fetch this week's sessions
  const fetchWeeklySessions = async () => {
    const res = await fetch("/api/thisweek");
    const data = await res.json();
    setWeeklySessions(data);
  };

  useEffect(() => {
    fetchLiveSessions();
    fetchWeeklySessions();

    const interval = setInterval(() => {
      fetchLiveSessions();
      fetchWeeklySessions();
    }, 30_000); // refresh every 30s

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* KPI Row */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <DashboardCard title="Series" value="—" />
        <DashboardCard title="Live Now" value={liveSessions.length} />
        <DashboardCard title="Sessions This Week" value={weeklySessions.length} />
        <DashboardCard title="Platforms" value="—" />
      </section>

      {/* LIVE NOW */}
      <LiveNowCard sessions={liveSessions} />

      {/* THIS WEEK */}
      {/*<ScheduleCard sessions={weeklySessions} />*/}

      {/* TIMELINE */}
      <SessionTimeline />
      
    </>
  );
}

function DashboardCard({ title, value }: { title: string; value: any }) {
  return (
    <div className="border border-zinc-800 rounded-xl bg-zinc-950 p-4">
      <div className="text-sm text-zinc-400">{title}</div>
      <div className="text-2xl font-semibold mt-2">{value}</div>
    </div>
  );
}
