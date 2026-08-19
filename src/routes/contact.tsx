import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Book a Model with PRODUCTION HOUSE" },
      {
        name: "description",
        content:
          "Send a booking or casting inquiry to PRODUCTION HOUSE. Offices in Paris, London, New York and Milan. hello@productionhouse.com",
      },
      { property: "og:title", content: "Contact — Book a Model with PRODUCTION HOUSE" },
      {
        property: "og:description",
        content: "Let's work together. Send your project inquiry to our booking team.",
      },
    ],
  }),
  component: Contact,
});

const projectTypes = ["Editorial", "Campaign", "Runway", "Commercial", "Other"];

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 1100);
  };

  const field =
    "w-full border-b border-border bg-transparent py-4 text-base outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground";

  return (
    <div className="mx-auto max-w-[1600px] px-5 pt-32 pb-24 md:px-10 md:pt-44 md:pb-32">
      <Reveal>
        <p className="eyebrow text-muted-foreground">Inquiries</p>
        <h1 className="display-xl mt-6 max-w-4xl text-5xl sm:text-7xl md:text-8xl">
          LET&apos;S WORK TOGETHER
        </h1>
      </Reveal>

      <div className="mt-16 grid gap-16 border-t border-border pt-14 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          {status === "sent" ? (
            <div className="border border-border p-10">
              <p className="font-display text-3xl">Thank you.</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Your inquiry has been received. Our booking team replies within one business day.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="eyebrow mt-8 border-b border-foreground pb-1"
              >
                Send another →
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-8">
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <label className="eyebrow text-muted-foreground" htmlFor="name">
                    Name
                  </label>
                  <input id="name" required placeholder="Your name" className={field} />
                </div>
                <div>
                  <label className="eyebrow text-muted-foreground" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@studio.com"
                    className={field}
                  />
                </div>
                <div>
                  <label className="eyebrow text-muted-foreground" htmlFor="company">
                    Company
                  </label>
                  <input id="company" placeholder="Brand or publication" className={field} />
                </div>
                <div>
                  <label className="eyebrow text-muted-foreground" htmlFor="project">
                    Project Type
                  </label>
                  <select id="project" defaultValue="Editorial" className={field}>
                    {projectTypes.map((p) => (
                      <option key={p}>{p}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="eyebrow text-muted-foreground" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  placeholder="Tell us about the project, dates and location."
                  className={`${field} resize-none`}
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="eyebrow inline-flex items-center gap-3 border border-foreground px-8 py-4 transition-colors hover:bg-foreground hover:text-background disabled:opacity-50"
              >
                {status === "sending" ? "Sending…" : "Send inquiry →"}
              </button>
            </form>
          )}
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-4 md:col-start-9">
          <div className="space-y-10">
            <div>
              <p className="eyebrow text-muted-foreground">Bookings</p>
              <a href="mailto:hello@productionhouse.com" className="mt-3 block font-display text-2xl">
                hello@productionhouse.com
              </a>
              <a href="tel:+33100000000" className="mt-1 block text-sm text-muted-foreground">
                +33 1 00 00 00 00
              </a>
            </div>
            <div>
              <p className="eyebrow text-muted-foreground">Offices</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Paris — 12 Rue Saint-Honoré</li>
                <li>London — 48 Redchurch Street</li>
                <li>New York — 210 Lafayette Street</li>
                <li>Milan — 9 Via Tortona</li>
              </ul>
            </div>
            <div>
              <p className="eyebrow text-muted-foreground">Social</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a href="https://instagram.com" className="hover:opacity-60">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com" className="hover:opacity-60">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" className="hover:opacity-60">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
