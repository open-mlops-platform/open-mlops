import StudioShell from "../components/StudioShell";

export default function InferencePassagePage() {
  return (
    <StudioShell
      activeKey="inference"
      pageTitle="Inference Passage"
      heroKicker="Execution Bay"
      heroTitle="Job Launches"
      actionLabel="Launch"
      stats={["8 live jobs", "3 schedulers", "2 stream routes"]}
      collections={[
        {
          title: "Night Drift",
          meta: "stream / 18 nodes",
          updated: "12m",
          accent: "#c27a57",
          accentSoft: "rgba(194, 122, 87, 0.18)",
        },
        {
          title: "Field Scout",
          meta: "batch / 240k frames",
          updated: "40m",
          accent: "#6e7f62",
          accentSoft: "rgba(110, 127, 98, 0.16)",
        },
        {
          title: "Stream Relay",
          meta: "edge / 6 gateways",
          updated: "2h",
          accent: "#b65f3a",
          accentSoft: "rgba(182, 95, 58, 0.18)",
        },
        {
          title: "Batch Harbor",
          meta: "offline / 8 runs",
          updated: "5h",
          accent: "#c27a57",
          accentSoft: "rgba(194, 122, 87, 0.18)",
        },
        {
          title: "Edge Pilot",
          meta: "stream / 4 sites",
          updated: "1d",
          accent: "#6e7f62",
          accentSoft: "rgba(110, 127, 98, 0.16)",
        },
        {
          title: "Shadow Sweep",
          meta: "batch / 64k clips",
          updated: "3d",
          accent: "#b65f3a",
          accentSoft: "rgba(182, 95, 58, 0.18)",
        },
      ]}
      activityTitle="Live cadence"
      activity={[
        { title: "job-142", meta: "running", time: "3m" },
        { title: "stream-east", meta: "queued", time: "22m" },
        { title: "batch-harbor", meta: "complete", time: "4h" },
        { title: "edge-pilot", meta: "paused", time: "1d" },
      ]}
      mosaicTitle="Route map"
      mosaicMeta="12 routes / 4 regions"
    />
  );
}
