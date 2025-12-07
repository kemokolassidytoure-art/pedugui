"use client";
import Header from "@/components/header";
import CommunicationCard from "@/app/dashboard/_components/communicationCard";
import EvaluationSummaryCard from "@/app/dashboard/_components/evaluationSummaryCard";
import ScheduleTimeline from "@/components/scheduleTimeline";

export default function DashboardPage() {
  return (
    <main className="flex-1 px-4 sm:px-6 lg:px-10 py-6 overflow-scroll">
      <Header title="Table de bord" />
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="h-[308] overflow-y-scroll">
          <CommunicationCard />
        </div>
        <div className="h-[308] lg:col-start-2 lg:col-end-4 overflow-y-scroll">
          <EvaluationSummaryCard className="" />
        </div>
      </div>
      <div className="overflow-auto">
        <ScheduleTimeline />
      </div>
    </main>
  );
}
