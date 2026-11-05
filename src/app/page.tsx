"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GameFrame, GameLink } from "./game-ui";

const voyage = [
  {
    left: "19%",
    top: "34%",
    progress: 0,
    status: "In LISBOA - Ready to Zoom",
    zoom: 1,
    origin: "18% 32%",
  },
  {
    left: "28%",
    top: "58%",
    progress: 25,
    status: "Zooming Atlantic - Kraken! 🐙",
    zoom: 1.8,
    origin: "28% 58%",
  },
  {
    left: "50%",
    top: "86%",
    progress: 50,
    status: "ZOOM x2 - Cape Storms ⛈️",
    zoom: 2.2,
    origin: "50% 86%",
  },
  {
    left: "65%",
    top: "60%",
    progress: 75,
    status: "ZOOM x1.8 - Sea Serpent 🐍",
    zoom: 1.8,
    origin: "65% 60%",
  },
  {
    left: "77%",
    top: "40%",
    progress: 100,
    status: "Arrived GOA! Zoom out",
    zoom: 1,
    origin: "77% 40%",
  },
];

export default function Home() {
  const [step, setStep] = useState(0);
  const router = useRouter();
  const current = voyage[step];

  useEffect(() => {
    if (current.progress !== 100) return;

    const timeout = window.setTimeout(() => router.push("/feitoria"), 1500);
    return () => window.clearTimeout(timeout);
  }, [current.progress, router]);

  function sail() {
    if (step === voyage.length - 1) {
      router.push("/feitoria");
      return;
    }

    setStep((currentStep) => currentStep + 1);
  }

  return (
    <GameFrame
      title="Mapa da Rota · Zoom Mode"
      status={`${current.progress}% · ${current.status}`}
      footer={
        <>
          <button className="game-button game-button--gold" onClick={sail}>
            {current.progress === 0
              ? "🔍⛵ Set Sail with Zoom →"
              : current.progress === 100
                ? "Arrived! → Feitoria"
                : `Zoom ${current.zoom}x - ${current.progress}% Continue`}
          </button>
          <GameLink href="/feitoria">Skip to Goa</GameLink>
        </>
      }
    >
      <div className="map-frame">
        <div className="map-canvas">
          <div
            className="map-art"
            style={{
              backgroundImage: "url('/ocean.jpg')",
              transform: `scale(${current.zoom})`,
              transformOrigin: current.origin,
            }}
          >
            <span className="map-port map-port--lisbon">Lisboa</span>
            <span className="map-port map-port--cape">Cape</span>
            <span className="map-port map-port--goa">Goa</span>
            <span className="map-port map-port--locked">Malacca (Locked)</span>
            <span
              className={`map-ship${step === 2 ? " map-ship--storm" : ""}`}
              style={{ left: current.left, top: current.top }}
              aria-label="Your ship"
              role="img"
            >
              ⛵
            </span>
          </div>
          <span className="map-zoom" aria-live="polite">
            🔍 Zoom: {current.zoom}x
          </span>
        </div>
      </div>
    </GameFrame>
  );
}
