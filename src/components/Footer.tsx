import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-xl tracking-[0.3em]">PRODUCTION HOUSE</p>
            <p className="mt-4 max-w-xs text-sm text-ink-foreground/60">
              Independent talent. Global vision.
            </p>
          </div>

          <div>
            <p className="eyebrow text-ink-foreground/50">Navigation</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:opacity-60">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/models" search={{ filter: "all" }} className="hover:opacity-60">
                  Models
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:opacity-60">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:opacity-60">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-ink-foreground/50">Connect</p>
            <ul className="mt-5 space-y-3 text-sm">
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
              <li>
                <a href="mailto:hello@productionhouse.com" className="hover:opacity-60">
                  hello@productionhouse.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-ink-foreground/15 pt-6 text-xs text-ink-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 PRODUCTION HOUSE. All Rights Reserved.</p>
          <p className="eyebrow">Paris · London · New York · Milan</p>
        </div>
      </div>
    </footer>
  );
}
