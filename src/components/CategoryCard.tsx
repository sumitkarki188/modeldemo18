import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

export function CategoryCard({
  title,
  description,
  image,
  filter,
  index = 0,
}: {
  title: string;
  description: string;
  image: string;
  filter: string;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        to="/models"
        search={{ filter }}
        className="group relative block overflow-hidden"
        aria-label={title}
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          width={900}
          height={1200}
          className="aspect-[3/4] w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent transition-opacity duration-700 group-hover:from-ink/90" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-ink-foreground md:p-8">
          <h3 className="font-display text-3xl tracking-wide md:text-4xl">{title}</h3>
          <p className="mt-2 text-sm text-ink-foreground/70">{description}</p>
          <span className="eyebrow mt-4 inline-block translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            Explore →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
