import { GameFrame, GameLink } from "../game-ui";

export default function LisbonPage() {
  return (
    <GameFrame
      title="Casa da Índia · +850 Gold"
      subtitle="Lisbon · Voyage complete"
      backHref="/"
      footer={
        <>
          <GameLink href="/" variant="gold">
            Sail Again → Ocean Map
          </GameLink>
        </>
      }
    >
      <div
        className="illustrated-screen illustrated-screen--lisbon"
        style={{ backgroundImage: "url('/lisbon.jpg')" }}
      >
        <section className="parchment-card parchment-card--celebration">
          <h2>🎉 VOYAGE SUCCESS!</h2>
          <p>Background is lisbon.jpg!</p>
          <div className="profit-summary">
            <p>Sold 50 Pepper</p>
            <p>Buy 12 → Sell 22</p>
            <strong>+850 GOLD</strong>
            <p>King&apos;s Favor 20/20 - Malacca UNLOCKS!</p>
          </div>
          <GameLink href="/" variant="gold">
            Sail Again → ocean.jpg
          </GameLink>
        </section>
      </div>
    </GameFrame>
  );
}
