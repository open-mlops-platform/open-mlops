import StudioShell from "../components/StudioShell";

export default function DataAtelierPage() {
  return (
    <StudioShell
      activeKey="data"
      pageTitle="Data Atelier"
      actionLabel="Upload"
      showFolders={false}
      showStorageCard={false}
      showLowerCards={false}
      stats={["54 files", "78% storage used"]}
      collections={[
        {
          title: "Field Captures",
          meta: "140 files / 2.4 TB",
          updated: "2h",
          accent: "#c27a57",
          accentSoft: "rgba(194, 122, 87, 0.18)",
        },
        {
          title: "Edge Streams",
          meta: "34 files / 920 GB",
          updated: "5h",
          accent: "#6e7f62",
          accentSoft: "rgba(110, 127, 98, 0.16)",
        },
        {
          title: "Curated Scenes",
          meta: "68 files / 640 GB",
          updated: "1d",
          accent: "#b65f3a",
          accentSoft: "rgba(182, 95, 58, 0.18)",
        },
        {
          title: "Training Seeds",
          meta: "24 files / 180 GB",
          updated: "2d",
          accent: "#c27a57",
          accentSoft: "rgba(194, 122, 87, 0.18)",
        },
        {
          title: "Archive Vault",
          meta: "11 files / 1.1 TB",
          updated: "4d",
          accent: "#6e7f62",
          accentSoft: "rgba(110, 127, 98, 0.16)",
        },
        {
          title: "Living Labels",
          meta: "12 files / 98 GB",
          updated: "5d",
          accent: "#b65f3a",
          accentSoft: "rgba(182, 95, 58, 0.18)",
        },
      ]}
    />
  );
}
