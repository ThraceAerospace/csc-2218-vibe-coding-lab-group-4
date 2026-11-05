import Link from "next/link";
import type { ReactNode } from "react";

type GameFrameProps = {
  title: string;
  subtitle?: string;
  status?: string;
  children: ReactNode;
  footer: ReactNode;
  backHref?: string;
};

export function GameFrame({
  title,
  subtitle,
  status,
  children,
  footer,
  backHref,
}: GameFrameProps) {
  return (
    <main className="game-screen">
      <header className="game-header">
        <div>
          {subtitle && <p className="game-kicker">{subtitle}</p>}
          <h1>{title}</h1>
        </div>
        <div className="game-header__right">
          {status && <p className="game-status">{status}</p>}
          {backHref && (
            <GameLink href={backHref} variant="dark">
              ← Mapa do oceano
            </GameLink>
          )}
        </div>
      </header>
      <section className="game-viewport">
        <div className="game-stage">{children}</div>
      </section>
      <footer className="game-footer">{footer}</footer>
    </main>
  );
}

type GameLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "gold" | "dark";
};

export function GameLink({
  href,
  children,
  variant = "dark",
}: GameLinkProps) {
  return (
    <Link className={`game-button game-button--${variant}`} href={href}>
      {children}
    </Link>
  );
}
