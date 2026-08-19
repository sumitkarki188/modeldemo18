import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ModelCard } from "@/components/ModelCard";
import { Reveal } from "@/components/Reveal";
import { getModel, models } from "@/data/models";

export const Route = createFileRoute("/models/$modelId")({
  loader: ({ params }) => {
    const model = getModel(params.modelId);
    if (!model) throw notFound();
    return { model };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Model unavailable — PRODUCTION HOUSE" }, { name: "robots", content: "noindex" }],
      };
    }
    const { model } = loaderData;
    const description = `${model.name} — ${model.category} model with PRODUCTION HOUSE, based in ${model.location}. Height ${model.height}. View portfolio and booking details.`;
    return {
      meta: [
        { title: `${model.name} — ${model.category} Model | PRODUCTION HOUSE` },
        { name: "description", content: description },
        { property: "og:title", content: `${model.name} — PRODUCTION HOUSE` },
        { property: "og:description", content: description },
      ],
    };
  },
  pendingComponent: () => (
    <div className="flex min-h-screen items-center justify-center">
      <span className="eyebrow animate-pulse text-muted-foreground">Loading profile</span>
    </div>
  ),
  notFoundComponent: ModelNotFound,
  component: ModelProfile,
});

function ModelNotFound() {
  return (
    <div className="mx-auto max-w-[1600px] px-5 pt-40 pb-32 md:px-10">
      <h1 className="display-xl text-5xl md:text-7xl">MODEL NOT FOUND</h1>
      <Link
        to="/models"
        search={{ filter: "all" }}
        className="eyebrow mt-10 inline-block border-b border-foreground pb-1"
      >
        Back to the board →
      </Link>
    </div>
  );
}

function ModelProfile() {
  const { model } = Route.useLoaderData();
  const similar = models.filter((m) => m.id !== model.id).slice(0, 4);

  const specs = [
    { label: "Category", value: model.category },
    { label: "Location", value: model.location },
    { label: "Height", value: model.height },
    { label: "Bust", value: model.bust },
    { label: "Waist", value: model.waist },
    { label: "Hips", value: model.hips },
    { label: "Shoe", value: model.shoe },
    { label: "Hair", value: model.hair },
    { label: "Eyes", value: model.eyes },
  ];

  return (
    <div>
      <div className="grid md:grid-cols-2">
        <div className="relative overflow-hidden">
          <motion.img
            src={model.image}
            alt={model.name}
            width={1000}
            height={1400}
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="h-[70vh] w-full object-cover md:h-svh"
          />
        </div>

        <div className="flex flex-col justify-center px-5 py-16 md:px-14 md:py-24">
          <Reveal>
            <Link
              to="/models"
              search={{ filter: "all" }}
              className="eyebrow text-muted-foreground hover:text-foreground"
            >
              ← Back to models
            </Link>
            <h1 className="display-xl mt-8 text-5xl sm:text-6xl md:text-7xl">{model.name}</h1>
            <p className="mt-4 text-sm tracking-wide text-muted-foreground">
              {model.category} · {model.location}
            </p>

            <dl className="mt-12 grid grid-cols-2 gap-y-6 border-t border-border pt-10 sm:grid-cols-3">
              {specs.map((s) => (
                <div key={s.label}>
                  <dt className="eyebrow text-muted-foreground">{s.label}</dt>
                  <dd className="mt-2 font-display text-xl">{s.value}</dd>
                </div>
              ))}
            </dl>

            <Link
              to="/contact"
              className="eyebrow mt-12 inline-flex w-fit items-center gap-3 border border-foreground px-8 py-4 transition-colors hover:bg-foreground hover:text-background"
            >
              Book this model →
            </Link>
          </Reveal>
        </div>
      </div>

      <section className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
        <Reveal>
          <p className="eyebrow text-muted-foreground">Portfolio</p>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {model.gallery.map((src, i) => (
            <Reveal key={`${src}-${i}`} delay={(i % 2) * 0.08} className={i % 3 === 0 ? "" : ""}>
              <img
                src={src}
                alt={`${model.name} editorial photograph ${i + 1}`}
                loading="lazy"
                className="w-full object-cover"
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
          <h2 className="display-xl text-3xl md:text-5xl">SIMILAR MODELS</h2>
          <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {similar.map((m, i) => (
              <ModelCard key={m.id} model={m} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
