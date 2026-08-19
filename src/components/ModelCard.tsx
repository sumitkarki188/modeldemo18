import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import type { Model } from "@/data/models";

export function ModelCard({ model, index = 0 }: { model: Model; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.85, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        to="/models/$modelId"
        params={{ modelId: model.id }}
        className="group block"
        aria-label={model.name}
      >
        <div className="relative overflow-hidden bg-secondary">
          <img
            src={model.image}
            alt={`${model.name}, ${model.category} model based in ${model.location}`}
            loading="lazy"
            width={1000}
            height={1400}
            className="aspect-[3/4] w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
          />
          <div className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-700 group-hover:bg-ink/25" />
          <span className="eyebrow pointer-events-none absolute bottom-5 left-5 translate-y-3 text-ink-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            View Profile →
          </span>
        </div>

        <div className="mt-4 flex items-baseline justify-between gap-4">
          <h3 className="font-display text-xl md:text-2xl">{model.name}</h3>
          <span className="eyebrow text-muted-foreground">{model.height}</span>
        </div>
        <p className="mt-1 text-xs tracking-wide text-muted-foreground">
          {model.gender} · {model.location}
        </p>
      </Link>
    </motion.div>
  );
}
