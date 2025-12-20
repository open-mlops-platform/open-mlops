import StudioShell from "../components/StudioShell";

export default function ModelConservatoryPage() {
  return (
    <StudioShell
      activeKey="models"
      pageTitle="Model Conservatory"
      heroKicker="Model Library"
      heroTitle="Living Models"
      actionLabel="Register"
      stats={["12 models", "4 stages", "9 evaluation suites"]}
      collections={[
        {
          title: "OrchardNet v3",
          meta: "vision / 98.1%",
          updated: "45m",
          accent: "#c27a57",
          accentSoft: "rgba(194, 122, 87, 0.18)",
        },
        {
          title: "Delta Detector",
          meta: "edge / 97.4%",
          updated: "3h",
          accent: "#6e7f62",
          accentSoft: "rgba(110, 127, 98, 0.16)",
        },
        {
          title: "Terrain Seg",
          meta: "segmentation / 94.9%",
          updated: "7h",
          accent: "#b65f3a",
          accentSoft: "rgba(182, 95, 58, 0.18)",
        },
        {
          title: "Edge Whisper",
          meta: "audio / 96.2%",
          updated: "1d",
          accent: "#c27a57",
          accentSoft: "rgba(194, 122, 87, 0.18)",
        },
        {
          title: "Bloom Classifier",
          meta: "vision / 95.7%",
          updated: "2d",
          accent: "#6e7f62",
          accentSoft: "rgba(110, 127, 98, 0.16)",
        },
        {
          title: "Pulse Tracker",
          meta: "timeseries / 93.8%",
          updated: "4d",
          accent: "#b65f3a",
          accentSoft: "rgba(182, 95, 58, 0.18)",
        },
      ]}
      activityTitle="Release cadence"
      activity={[
        { title: "orchardnet-v3", meta: "deploy", time: "18m" },
        { title: "delta-detector", meta: "eval", time: "1h" },
        { title: "terrain-seg", meta: "promote", time: "5h" },
        { title: "edge-whisper", meta: "archive", time: "1d" },
      ]}
      mosaicTitle="Benchmark garden"
      mosaicMeta="5 suites / 93% passed"
    />
  );
}
