import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Stats } from "@/components/Stats";
import { CTA } from "@/components/CTA";
import aboutImage from "@/assets/about.jpg";
import editorial2 from "@/assets/editorial-2.jpg";
import editorial3 from "@/assets/editorial-3.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — PRODUCTION HOUSE Talent Agency" },
      {
        name: "description",
        content:
          "Founded in 2014, PRODUCTION HOUSE develops distinctive talent with care, discretion and a long-term point of view across four global offices.",
      },
      { property: "og:title", content: "About — PRODUCTION HOUSE Talent Agency" },
      {
        property: "og:description",
        content: "Our story, mission, global presence and the team behind the board.",
      },
    ],
  }),
  component: About,
});

const offices = [
  { city: "Paris", detail: "12 Rue Saint-Honoré" },
  { city: "London", detail: "48 Redchurch Street" },
  { city: "New York", detail: "210 Lafayette Street" },
  { city: "Milan", detail: "9 Via Tortona" },
];

const team = [
  { name: "Camille Roux", role: "Founder & Director" },
  { name: "Jonas Vetter", role: "Head of Women" },
  { name: "Marta Silva", role: "Head of Men" },
  { name: "Ines Haddad", role: "New Faces & Development" },
];

function About() {
  return (
    <div>
      <section className="mx-auto max-w-[1600px] px-5 pt-32 pb-20 md:px-10 md:pt-44 md:pb-28">
        <Reveal>
          <p className="eyebrow text-muted-foreground">Since 2014</p>
          <h1 className="display-xl mt-6 max-w-4xl text-5xl sm:text-7xl md:text-8xl">
            AN AGENCY BUILT ON CHARACTER
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-14 grid gap-10 border-t border-border pt-12 md:grid-cols-12">
            <p className="eyebrow text-muted-foreground md:col-span-3">Our Story</p>
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:col-span-8">
              <p>
                PRODUCTION HOUSE began in a single Paris studio with four faces and one belief: that
                individuality is the only thing that cannot be copied. Twelve years later we
                represent talent in four cities and place them with the houses, magazines and brands
                that define the season.
              </p>
              <p>
                We work slowly and deliberately. Careers are developed over years, not campaigns,
                and every model on our board is managed by a team that knows them personally.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal>
          <img
            src={aboutImage}
            alt="PRODUCTION HOUSE studio during an editorial shoot"
            loading="lazy"
            width={1200}
            height={1500}
            className="aspect-[16/9] w-full object-cover"
          />
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <p className="eyebrow text-muted-foreground">Mission</p>
            <h2 className="display-xl mt-6 text-4xl md:text-6xl">
              REPRESENTATION WITH INTENTION
            </h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
              We advocate for our talent in every room: fair contracts, honest advice and a
              commitment to well-being on and off set. Our models are collaborators, not products.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-5 md:col-start-8">
            <img
              src={editorial3}
              alt="Three models photographed for an editorial collection"
              loading="lazy"
              width={1200}
              height={900}
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <Stats />

      <section className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="eyebrow text-muted-foreground">Global Presence</p>
            <ul className="mt-8">
              {offices.map((o) => (
                <li
                  key={o.city}
                  className="flex items-baseline justify-between border-b border-border py-5"
                >
                  <span className="font-display text-3xl">{o.city}</span>
                  <span className="text-xs text-muted-foreground">{o.detail}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-6 md:col-start-7">
            <img
              src={editorial2}
              alt="Backstage at Paris Fashion Week"
              loading="lazy"
              width={1200}
              height={900}
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
        </div>

        <div className="mt-24 border-t border-border pt-14">
          <p className="eyebrow text-muted-foreground">The Team</p>
          <div className="mt-10 grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.06}>
                <p className="font-display text-2xl">{t.name}</p>
                <p className="mt-2 text-xs tracking-wide text-muted-foreground">{t.role}</p>
              </Reveal>
            ))}
          </div>
          <Link
            to="/models"
            search={{ filter: "all" }}
            className="eyebrow mt-14 inline-flex items-center gap-3 border border-foreground px-8 py-4 transition-colors hover:bg-foreground hover:text-background"
          >
            View the board →
          </Link>
        </div>
      </section>

      <CTA />
    </div>
  );
}
