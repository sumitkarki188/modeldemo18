import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import heroImage from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section className="relative isolate flex h-svh min-h-[620px] items-end overflow-hidden">
      <motion.img
        src={heroImage}
        alt="Editorial fashion photograph of a model in a black couture gown"
        width={1600}
        height={1920}
        initial={{ scale: 1.14 }}
        animate={{ scale: 1 }}
        transition={{ duration: 14, ease: "linear" }}
        className="absolute inset-0 size-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/25 to-ink/85" />

      <div className="relative mx-auto w-full max-w-[1600px] px-5 pb-24 text-ink-foreground md:px-10 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="eyebrow text-ink-foreground/70"
        >
          Est. 2014 — International Talent Management
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="display-xl mt-5 text-[13vw] leading-[0.85] sm:text-[11vw] lg:text-[8.5vw]"
        >
          PRODUCTION
          <br />
          HOUSE
        </motion.h1>


        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-6 flex flex-col gap-8 border-t border-ink-foreground/25 pt-6 md:flex-row md:items-center md:justify-between"
        >
          <p className="max-w-sm font-display text-xl text-ink-foreground/85 md:text-2xl">
            Where individuality meets fashion.
          </p>
          <Link
            to="/models"
            search={{ filter: "all" }}
            className="eyebrow inline-flex w-fit items-center gap-3 border border-ink-foreground/50 px-8 py-4 transition-colors hover:bg-ink-foreground hover:text-ink"
          >
            Explore Models →
          </Link>
        </motion.div>
      </div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink-foreground/70 md:flex"
      >
        <span className="eyebrow text-[10px]">Scroll</span>
        <motion.span
          animate={{ scaleY: [0.2, 1, 0.2], originY: 0 }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="block h-12 w-px bg-ink-foreground/60"
        />
      </motion.div>
    </section>
  );
}
