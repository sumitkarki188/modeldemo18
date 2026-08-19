import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { ModelGrid } from "@/components/ModelGrid";
import { CategoryCard } from "@/components/CategoryCard";
import { EditorialCard } from "@/components/EditorialCard";
import { Stats } from "@/components/Stats";
import { CTA } from "@/components/CTA";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { categories, editorials, models } from "@/data/models";
import aboutImage from "@/assets/about.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PRODUCTION HOUSE — International Fashion Model Agency" },
      {
        name: "description",
        content:
          "PRODUCTION HOUSE is an international talent agency representing distinctive faces across fashion, beauty and editorial work in Paris, London, New York and Milan.",
      },
      { property: "og:title", content: "PRODUCTION HOUSE — International Fashion Model Agency" },
      {
        property: "og:description",
        content: "Where individuality meets fashion. Discover our latest faces.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading title="FEATURED MODELS" subtitle="Discover our latest faces." />
          <Reveal delay={0.1}>
            <Link
              to="/models"
              search={{ filter: "all" }}
              className="eyebrow border-b border-foreground pb-1 hover:opacity-60"
            >
              All models →
            </Link>
          </Reveal>
        </div>
        <div className="mt-16">
          <ModelGrid models={models} offset />
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 pb-24 md:px-10 md:pb-32">
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((c, i) => (
            <CategoryCard key={c.title} {...c} index={i} />
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-[1600px] items-center gap-12 px-5 py-24 md:grid-cols-12 md:px-10 md:py-32">
          <Reveal className="md:col-span-5 md:col-start-1">
            <img
              src={aboutImage}
              alt="Inside the PRODUCTION HOUSE studio during an editorial shoot"
              loading="lazy"
              width={1200}
              height={1500}
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-6 md:col-start-7">
            <p className="eyebrow text-muted-foreground">The Agency</p>
            <h2 className="display-xl mt-6 text-4xl sm:text-5xl md:text-6xl">MORE THAN A MODEL</h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
              We represent distinctive talent with individuality, character and a unique point of
              view. From established faces to emerging talent, our models work across fashion,
              beauty, editorial and commercial projects worldwide.
            </p>
            <Link
              to="/about"
              className="eyebrow mt-10 inline-flex items-center gap-3 border border-foreground px-8 py-4 transition-colors hover:bg-foreground hover:text-background"
            >
              Discover our agency →
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
          <SectionHeading title="LATEST EDITORIAL" />
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {editorials.map((e, i) => (
              <EditorialCard key={e.title} {...e} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <CTA />
    </>
  );
}
