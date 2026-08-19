import { motion } from "motion/react";

export function EditorialCard({
  title,
  date,
  category,
  image,
  index = 0,
}: {
  title: string;
  date: string;
  category: string;
  image: string;
  index?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div className="overflow-hidden bg-secondary">
        <img
          src={image}
          alt={title}
          loading="lazy"
          width={1200}
          height={900}
          className="aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
        />
      </div>
      <div className="mt-5 flex items-center gap-3 text-muted-foreground">
        <span className="eyebrow">{category}</span>
        <span className="h-px w-8 bg-border" />
        <span className="text-xs">{date}</span>
      </div>
      <h3 className="mt-3 font-display text-2xl leading-snug transition-opacity group-hover:opacity-60 md:text-[28px]">
        {title}
      </h3>
    </motion.article>
  );
}
