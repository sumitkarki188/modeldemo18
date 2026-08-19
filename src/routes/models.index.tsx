import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ModelGrid } from "@/components/ModelGrid";
import { Reveal } from "@/components/Reveal";
import { models } from "@/data/models";

const filters = [
  { label: "All", value: "all" },
  { label: "Women", value: "women" },
  { label: "Men", value: "men" },
  { label: "New Faces", value: "new-faces" },
];

export const Route = createFileRoute("/models/")({
  validateSearch: (search: Record<string, unknown>) => ({
    filter: typeof search["filter"] === "string" ? (search["filter"] as string) : "all",
  }),
  head: () => ({
    meta: [
      { title: "Our Models — PRODUCTION HOUSE Agency Board" },
      {
        name: "description",
        content:
          "Browse the PRODUCTION HOUSE board: women, men and new faces represented worldwide for fashion, beauty and editorial bookings.",
      },
      { property: "og:title", content: "Our Models — PRODUCTION HOUSE Agency Board" },
      {
        property: "og:description",
        content: "Meet the people behind the image. Women, men and new faces.",
      },
    ],
  }),
  component: ModelsPage,
});

function ModelsPage() {
  const { filter } = Route.useSearch();

  const filtered = models.filter((m) => {
    if (filter === "women") return m.gender === "Female";
    if (filter === "men") return m.gender === "Male";
    if (filter === "new-faces") return m.category === "New Faces";
    return true;
  });

  return (
    <div className="mx-auto max-w-[1600px] px-5 pt-32 pb-24 md:px-10 md:pt-44 md:pb-32">
      <Reveal>
        <p className="eyebrow text-muted-foreground">The Board</p>
        <h1 className="display-xl mt-6 text-5xl sm:text-6xl md:text-8xl">OUR MODELS</h1>
        <p className="mt-5 text-sm text-muted-foreground">Meet the people behind the image.</p>
      </Reveal>

      <div className="mt-14 flex flex-wrap gap-3 border-t border-border pt-8">
        {filters.map((f) => {
          const active = f.value === filter;
          return (
            <Link
              key={f.value}
              to="/models"
              search={{ filter: f.value }}
              className={`eyebrow border px-6 py-3 transition-colors ${
                active
                  ? "border-foreground bg-foreground text-background"
                  : "border-border hover:border-foreground"
              }`}
            >
              {f.label}
            </Link>
          );
        })}
      </div>

      <motion.div key={filter} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-16">
        <ModelGrid models={filtered} offset />
      </motion.div>
    </div>
  );
}
