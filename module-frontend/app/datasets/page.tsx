import StudioShell from "../components/StudioShell";

export default function DatasetLoomPage() {
  return (
    <StudioShell
      activeKey="datasets"
      pageTitle="Dataset Loom"
      heroKicker="Weave Library"
      heroTitle="Curated Blends"
      actionLabel="Compose"
      stats={["18 blends", "7 annotation flows", "4 model targets"]}
      collections={[
        {
          title: "Orchard Weave",
          meta: "12 layers / 310 GB",
          updated: "1h",
          accent: "#c27a57",
          accentSoft: "rgba(194, 122, 87, 0.18)",
        },
        {
          title: "Sensor Fusion",
          meta: "6 channels / 140 GB",
          updated: "3h",
          accent: "#6e7f62",
          accentSoft: "rgba(110, 127, 98, 0.16)",
        },
        {
          title: "Delta Quilt",
          meta: "18 splits / 220 GB",
          updated: "6h",
          accent: "#b65f3a",
          accentSoft: "rgba(182, 95, 58, 0.18)",
        },
        {
          title: "Urban Stitch",
          meta: "9 scenes / 96 GB",
          updated: "1d",
          accent: "#c27a57",
          accentSoft: "rgba(194, 122, 87, 0.18)",
        },
        {
          title: "Seasonal Mix",
          meta: "14 batches / 180 GB",
          updated: "2d",
          accent: "#6e7f62",
          accentSoft: "rgba(110, 127, 98, 0.16)",
        },
        {
          title: "Edge Ensemble",
          meta: "5 bundles / 72 GB",
          updated: "3d",
          accent: "#b65f3a",
          accentSoft: "rgba(182, 95, 58, 0.18)",
        },
      ]}
      activityTitle="Annotation flow"
      activity={[
        { title: "loom-orchard", meta: "blend", time: "14m" },
        { title: "delta-quilt", meta: "review", time: "58m" },
        { title: "urban-stitch", meta: "label", time: "2h" },
        { title: "sensor-fusion", meta: "merge", time: "6h" },
      ]}
      mosaicTitle="Annotation quilt"
      mosaicMeta="8 templates / 420k labels"
    />
  );
}
