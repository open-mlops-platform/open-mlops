"use client";

import Link from "next/link";
import { useState } from "react";
import type { ComponentType, SVGProps } from "react";

const FolderIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path
      d="M3.5 8.5h6l2 2h9v7.25c0 1.24-1.01 2.25-2.25 2.25H5.75c-1.24 0-2.25-1.01-2.25-2.25V8.5z"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path
      d="M3.5 8.5V6.75C3.5 5.51 4.51 4.5 5.75 4.5h4.6l2.15 2.15"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

const SparkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path
      d="M12 3l2.1 4.8L19 10l-4.9 2.2L12 17l-2.1-4.8L5 10l4.9-2.2L12 3z"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>
);

const UploadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path
      d="M12 16V6m0 0l-3.5 3.5M12 6l3.5 3.5"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 16.5v1.75C4 19.77 5.23 21 6.75 21h10.5C18.77 21 20 19.77 20 18.25V16.5"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const NewFolderIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path
      d="M3.5 8.5h6l2 2h9v7.25c0 1.24-1.01 2.25-2.25 2.25H5.75c-1.24 0-2.25-1.01-2.25-2.25V8.5z"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path
      d="M3.5 8.5V6.75C3.5 5.51 4.51 4.5 5.75 4.5h4.6l2.15 2.15"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M16.5 13.5v5M14 16h5"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

const GridIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" strokeWidth="1.4" />
  </svg>
);

const ListIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path d="M8 6h12M8 12h12M8 18h12" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="5" cy="6" r="1" fill="currentColor" />
    <circle cx="5" cy="12" r="1" fill="currentColor" />
    <circle cx="5" cy="18" r="1" fill="currentColor" />
  </svg>
);

const TagIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path
      d="M4 12.2V5.75C4 4.78 4.78 4 5.75 4h6.45c.6 0 1.18.24 1.6.66l5.3 5.3a2.26 2.26 0 010 3.19l-4.76 4.76a2.26 2.26 0 01-3.19 0l-6.44-6.45A2.26 2.26 0 014 12.2z"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <circle cx="9" cy="8.5" r="1.2" fill="currentColor" />
  </svg>
);

const LeafIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path
      d="M5 13.5c6-6.5 12-6.5 14-6.5-1 6-6.5 12-13 12-1.8 0-2.8-.8-3-2.2 1.4-.1 2.5-.6 3.5-1.6z"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type NavKey = "data" | "datasets" | "models" | "inference";

type Collection = {
  title: string;
  meta: string;
  updated: string;
  accent: string;
  accentSoft: string;
};

type Activity = {
  title: string;
  meta: string;
  time: string;
};

type StudioShellProps = {
  activeKey: NavKey;
  pageTitle: string;
  heroKicker?: string;
  heroTitle?: string;
  actionLabel: string;
  actionIcon?: ComponentType<SVGProps<SVGSVGElement>>;
  stats: string[];
  collections: Collection[];
  showFolders?: boolean;
  showStorageCard?: boolean;
  showLowerCards?: boolean;
  activityTitle?: string;
  activity?: Activity[];
  mosaicTitle?: string;
  mosaicMeta?: string;
};

const navItems = [
  { key: "data" as const, label: "Data Atelier", href: "/data", icon: FolderIcon },
  { key: "datasets" as const, label: "Dataset Loom", href: "/datasets", icon: TagIcon },
  { key: "models" as const, label: "Model Conservatory", href: "/models", icon: LeafIcon },
  { key: "inference" as const, label: "Inference Passage", href: "/inference", icon: UploadIcon },
];

const folders = [
  { label: "Field Captures", count: "14", depth: 0, active: true },
  { label: "Drone", count: "6", depth: 1 },
  { label: "Sensors", count: "8", depth: 1 },
  { label: "Curated Sets", count: "9", depth: 0 },
  { label: "Labeled", count: "5", depth: 1 },
  { label: "Synthetic", count: "4", depth: 1 },
  { label: "Reference", count: "12", depth: 0 },
];

export default function StudioShell({
  activeKey,
  pageTitle,
  heroKicker = "",
  heroTitle = "",
  actionLabel,
  actionIcon: ActionIcon = UploadIcon,
  stats,
  collections,
  showFolders = true,
  showStorageCard = true,
  showLowerCards = true,
  activityTitle = "",
  activity = [],
  mosaicTitle = "",
  mosaicMeta = "",
}: StudioShellProps) {
  const hasHero = heroKicker || heroTitle;
  const showSidebar = showFolders || showStorageCard;
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const isGrid = viewMode === "grid";

  return (
    <div className="relative min-h-screen overflow-hidden px-4 pb-16 pt-10 text-[15px] text-[var(--ink)]">
      <div className="pointer-events-none absolute -right-32 top-[-80px] h-72 w-72 rounded-full bg-[var(--accent-soft)] blur-3xl -z-10" />
      <div className="pointer-events-none absolute left-[-120px] top-44 h-64 w-64 rounded-full bg-[var(--leaf-soft)] blur-3xl -z-10" />
      <div className="pointer-events-none absolute bottom-[-120px] right-24 h-72 w-72 rounded-full bg-[var(--panel-soft)] blur-3xl -z-10" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8">
        <header className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-[var(--linen)] bg-[var(--panel)] px-6 py-4 shadow-[var(--shadow)] backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--panel-strong)] text-[var(--accent-strong)] shadow-[0_12px_20px_rgba(194,122,87,0.25)]">
              <SparkIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--muted)]">
                Open MLOps
              </p>
              <h1 className="font-display text-2xl text-[var(--ink)]">
                {pageTitle}
              </h1>
            </div>
          </div>
          <nav className="flex w-full flex-wrap items-center justify-end gap-2 text-[11px] uppercase tracking-[0.2em] text-[var(--muted)] md:w-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.key === activeKey;
              return (
                <Link
                  key={`top-${item.key}`}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center gap-2 rounded-full border border-[var(--linen)] px-3 py-1.5 text-[11px] tracking-[0.2em] transition ${
                    isActive
                      ? "bg-[var(--panel-strong)] text-[var(--ink)]"
                      : "text-[var(--muted)] hover:text-[var(--ink)]"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </header>

        <div
          className={`grid gap-6 ${
            showSidebar ? "lg:grid-cols-[240px,1fr]" : "lg:grid-cols-[1fr]"
          }`}
        >
          {showSidebar ? (
            <aside className="flex flex-col gap-6 rounded-3xl border border-[var(--linen)] bg-[var(--panel)] p-5 shadow-[var(--shadow)]">
              {showFolders ? (
                <div>
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.24em] text-[var(--muted)]">
                    <span>Folders</span>
                    <button className="h-6 w-6 rounded-full border border-[var(--linen)] text-[var(--muted)]">
                      +
                    </button>
                  </div>
                  <div className="mt-3 space-y-2">
                    {folders.map((folder) => (
                      <div
                        key={folder.label}
                        className={`flex items-center justify-between rounded-2xl px-3 py-2 text-[13px] ${
                          folder.active
                            ? "bg-[var(--panel-strong)] text-[var(--ink)]"
                            : "text-[var(--muted)]"
                        }`}
                        style={{ marginLeft: `${folder.depth * 12}px` }}
                      >
                        <div className="flex items-center gap-2">
                          <FolderIcon className="h-4 w-4" />
                          <span>{folder.label}</span>
                        </div>
                        <span className="text-[11px] text-[var(--muted)]">
                          {folder.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {showStorageCard ? (
                <div className="rounded-2xl bg-[var(--panel-soft)] p-4 text-[13px] text-[var(--muted)]">
                  <div className="flex items-center gap-2 text-[var(--ink)]">
                    <LeafIcon className="h-4 w-4" />
                    Warm storage
                  </div>
                  <p className="mt-2 text-[12px] text-[var(--muted)]">
                    78% used
                  </p>
                  <div className="mt-3 h-2 rounded-full bg-white/80">
                    <div className="h-2 w-4/5 rounded-full bg-[var(--accent)]" />
                  </div>
                </div>
              ) : null}
            </aside>
          ) : null}

          <main className="flex flex-col gap-6 rounded-3xl border border-[var(--linen)] bg-[var(--panel)] p-6 shadow-[var(--shadow)]">
            <div className="flex flex-wrap items-center justify-between gap-4">
              {hasHero ? (
                <div>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--muted)]">
                    {heroKicker}
                  </p>
                  <h2 className="font-display text-3xl text-[var(--ink)]">
                    {heroTitle}
                  </h2>
                </div>
              ) : null}
              <div
                className={`flex flex-wrap items-center ${
                  hasHero
                    ? "gap-2"
                    : "w-full justify-between gap-3"
                }`}
              >
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-2 rounded-full bg-[var(--accent)] px-3 py-1.5 text-[12px] font-medium text-white shadow-[0_12px_24px_rgba(194,122,87,0.28)] transition hover:translate-y-[-1px]">
                    <ActionIcon className="h-3.5 w-3.5" />
                    {actionLabel}
                  </button>
                  <button className="flex items-center gap-2 rounded-full border border-[var(--linen)] bg-white/80 px-3 py-1.5 text-[12px] text-[var(--ink)] shadow-[0_10px_18px_rgba(96,68,42,0.12)] transition hover:-translate-y-0.5">
                    <NewFolderIcon className="h-3.5 w-3.5" />
                    New folder
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-pressed={isGrid}
                    onClick={() => setViewMode("grid")}
                    className={`rounded-full border border-[var(--linen)] p-2 transition ${
                      isGrid
                        ? "bg-[var(--panel-strong)] text-[var(--ink)] shadow-[0_10px_18px_rgba(96,68,42,0.12)]"
                        : "bg-white/70 text-[var(--muted)] hover:text-[var(--ink)]"
                    }`}
                  >
                    <GridIcon className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    aria-pressed={!isGrid}
                    onClick={() => setViewMode("list")}
                    className={`rounded-full border border-[var(--linen)] p-2 transition ${
                      !isGrid
                        ? "bg-[var(--panel-strong)] text-[var(--ink)] shadow-[0_10px_18px_rgba(96,68,42,0.12)]"
                        : "bg-white/70 text-[var(--muted)] hover:text-[var(--ink)]"
                    }`}
                  >
                    <ListIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
              {stats.map((stat) => (
                <span
                  key={stat}
                  className="rounded-full border border-[var(--linen)] bg-white/70 px-3 py-1"
                >
                  {stat}
                </span>
              ))}
            </div>

            {isGrid ? (
              <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {collections.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-[var(--linen)] bg-white/70 p-5 shadow-[0_18px_30px_rgba(96,68,42,0.12)] transition hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(96,68,42,0.16)]"
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-2xl"
                        style={{
                          background: item.accentSoft,
                          color: item.accent,
                        }}
                      >
                        <FolderIcon className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="mt-5">
                      <h3 className="font-display text-lg text-[var(--ink)]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[12px] text-[var(--muted)]">
                        {item.meta}
                      </p>
                    </div>
                  </div>
                ))}
              </section>
            ) : (
              <section className="space-y-2">
                {collections.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[var(--linen)] bg-white/70 px-4 py-3 text-[13px] text-[var(--muted)] shadow-[0_12px_20px_rgba(96,68,42,0.08)]"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-xl"
                        style={{
                          background: item.accentSoft,
                          color: item.accent,
                        }}
                      >
                        <FolderIcon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-[13px] text-[var(--ink)]">
                          {item.title}
                        </p>
                        <p className="text-[11px] uppercase tracking-[0.16em]">
                          {item.meta}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </section>
            )}

            {showLowerCards ? (
              <section className="grid gap-4 lg:grid-cols-[1.2fr,1fr]">
                <div className="rounded-3xl border border-[var(--linen)] bg-[var(--panel-soft)] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--muted)]">
                        Flow
                      </p>
                      <h3 className="font-display text-xl text-[var(--ink)]">
                        {activityTitle}
                      </h3>
                    </div>
                    <button className="rounded-full border border-[var(--linen)] bg-white/80 px-3 py-1 text-[12px] text-[var(--muted)]">
                      View all
                    </button>
                  </div>
                  <div className="mt-4 space-y-3">
                    {activity.map((item) => (
                      <div
                        key={item.title}
                        className="flex items-center justify-between rounded-2xl bg-white/70 px-3 py-2 text-[13px] text-[var(--muted)]"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--panel-strong)] text-[var(--accent-strong)]">
                            <SparkIcon className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-[13px] text-[var(--ink)]">
                              {item.title}
                            </p>
                            <p className="text-[11px] uppercase tracking-[0.18em]">
                              {item.meta}
                            </p>
                          </div>
                        </div>
                        <span className="text-[11px] uppercase tracking-[0.18em]">
                          {item.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-[var(--linen)] bg-[var(--panel-soft)] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--muted)]">
                        Preview
                      </p>
                      <h3 className="font-display text-xl text-[var(--ink)]">
                        {mosaicTitle}
                      </h3>
                    </div>
                    <button className="rounded-full border border-[var(--linen)] bg-white/80 px-3 py-1 text-[12px] text-[var(--muted)]">
                      Inspect
                    </button>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <div
                        key={`tile-${index}`}
                        className="aspect-square rounded-2xl border border-white/60 shadow-[0_10px_16px_rgba(96,68,42,0.12)]"
                        style={{
                          background:
                            index % 3 === 0
                              ? "linear-gradient(140deg, #f3e6d8, #e6d1bc)"
                              : index % 3 === 1
                                ? "linear-gradient(150deg, #f7f1e8, #e9d8c6)"
                                : "linear-gradient(150deg, #efe0cc, #d9c4ae)",
                        }}
                      />
                    ))}
                  </div>
                  <div className="mt-4 rounded-2xl border border-[var(--linen)] bg-white/70 px-4 py-3 text-[12px] text-[var(--muted)]">
                    {mosaicMeta}
                  </div>
                </div>
              </section>
            ) : null}
          </main>
        </div>
      </div>
    </div>
  );
}
