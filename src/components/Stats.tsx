import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 120, suffix: "+", label: "Models" },
  { value: 18, suffix: "", label: "Countries" },
  { value: 35, suffix: "+", label: "Global Clients" },
  { value: 12, suffix: "", label: "Years of Experience" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl lg:text-7xl">
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-y-14 px-5 py-20 md:grid-cols-4 md:px-10 md:py-28">
        {stats.map((s) => (
          <div key={s.label} className="md:border-l md:border-ink-foreground/15 md:pl-8">
            <Counter value={s.value} suffix={s.suffix} />
            <p className="eyebrow mt-4 text-ink-foreground/55">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
