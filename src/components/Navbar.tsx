import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", to: "/" as const, search: undefined },
  { label: "Models", to: "/models" as const, search: { filter: "all" } },
  { label: "Women", to: "/models" as const, search: { filter: "women" } },
  { label: "Men", to: "/models" as const, search: { filter: "men" } },
  { label: "About", to: "/about" as const, search: undefined },
  { label: "Contact", to: "/contact" as const, search: undefined },
];

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overlay = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const solid = scrolled || !overlay;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 md:h-20 md:px-10">
        <Link
          to="/"
          className={`font-display text-sm tracking-[0.28em] transition-colors md:text-lg ${
            solid ? "text-foreground" : "text-ink-foreground"
          }`}
        >
          PRODUCTION HOUSE
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              search={l.search as never}
              className={`eyebrow transition-opacity hover:opacity-60 ${
                solid ? "text-foreground" : "text-ink-foreground"
              }`}
              activeOptions={{ exact: l.to === "/", includeSearch: !!l.search }}
              activeProps={{ className: "opacity-100 underline underline-offset-8" }}
              inactiveProps={{ className: "opacity-80" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
            className={`transition-opacity hover:opacity-60 ${
              solid ? "text-foreground" : "text-ink-foreground"
            }`}
          >
            <Search className="size-[18px]" strokeWidth={1.25} />
          </button>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className={`transition-opacity hover:opacity-60 lg:hidden ${
              solid ? "text-foreground" : "text-ink-foreground"
            }`}
          >
            {open ? (
              <X className="size-5" strokeWidth={1.25} />
            ) : (
              <Menu className="size-5" strokeWidth={1.25} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border bg-background"
          >
            <div className="mx-auto max-w-[1600px] px-5 py-6 md:px-10">
              <input
                autoFocus
                placeholder="Search models, editorials…"
                className="w-full border-b border-border bg-transparent pb-3 font-display text-2xl outline-none placeholder:text-muted-foreground focus:border-foreground md:text-3xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="border-t border-border bg-background lg:hidden"
          >
            <div className="flex flex-col px-5 py-4">
              {links.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  search={l.search as never}
                  className="border-b border-border py-4 font-display text-2xl last:border-0"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
