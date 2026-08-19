import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import ctaImage from "@/assets/cta.jpg";

export function CTA() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={ctaImage}
        alt="Model silhouette in a photography studio"
        loading="lazy"
        width={1920}
        height={1080}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/65" />
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto max-w-[1600px] px-5 py-32 text-ink-foreground md:px-10 md:py-44"
      >
        <h2 className="display-xl max-w-3xl text-4xl sm:text-6xl md:text-7xl">
          LOOKING FOR THE NEXT FACE?
        </h2>
        <p className="mt-5 text-sm text-ink-foreground/70">
          Let&apos;s create something unforgettable.
        </p>
        <Link
          to="/contact"
          className="eyebrow mt-10 inline-flex items-center gap-3 border border-ink-foreground/50 px-8 py-4 text-ink-foreground transition-colors hover:bg-ink-foreground hover:text-ink"
        >
          Get in touch →
        </Link>
      </motion.div>
    </section>
  );
}
