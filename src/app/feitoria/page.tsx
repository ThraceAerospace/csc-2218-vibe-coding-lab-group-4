import { GameFrame, GameLink } from "../game-ui";

export default function FeitoriaPage() {
  return (
    <GameFrame
      title="Feitoria de Goa"
      subtitle="Goa · 1510"
      backHref="/"
      footer={
        <>
          <GameLink href="/cargo" variant="gold">
            Manage Cargo →
          </GameLink>
          <GameLink href="/">Back to Ocean</GameLink>
        </>
      }
    >
      <div
        className="illustrated-screen"
        style={{ backgroundImage: "url('/feitoria.jpg')" }}
      >
        <section className="parchment-card">
          <h2>Goa Feitoria Trading Post</h2>
          <p>
            Now top is NOT cut! You can see Cinnamon, Cloves, Cardamom prices.
          </p>
          <div className="price-list">
            <p>
              <strong>Black Pepper</strong>
              <br />
              Buy: 12 Gold in Goa | Sell: 22 Gold in Lisbon
            </p>
            <p>
              <strong>Your Cargo: 50 crates</strong>
            </p>
            <p>Bottom Trust Meter now visible too!</p>
          </div>
          <GameLink href="/cargo" variant="gold">
            Manage Cargo → cargo.jpg
          </GameLink>
        </section>
      </div>
    </GameFrame>
  );
}
