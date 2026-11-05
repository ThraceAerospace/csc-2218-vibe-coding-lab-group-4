import { GameFrame, GameLink } from "../game-ui";

export default function CargoPage() {
  return (
    <GameFrame
      title="Cargo Hold · cargo.jpg"
      subtitle="Cargo Management"
      backHref="/feitoria"
      footer={
        <>
          <GameLink href="/lisbon" variant="gold">
            Set Sail to Lisbon →
          </GameLink>
          <GameLink href="/">Abort → Ocean</GameLink>
        </>
      }
    >
      <div className="illustrated-screen illustrated-screen--cargo">
        <section className="parchment-card parchment-card--narrow">
          <h2>Cargo Management</h2>
          <p>Background is cargo.jpg now!</p>
          <div className="cargo-list">
            <CargoMeter label="🍞 Food" amount="40%" width="40%" />
            <CargoMeter label="🌑 Pepper 50 crates" amount="60%" width="60%" />
            <p className="warning-note">If Food &lt; 30%, crew dies!</p>
          </div>
          <GameLink href="/lisbon" variant="gold">
            Sail to Lisbon → lisbon.jpg
          </GameLink>
        </section>
      </div>
    </GameFrame>
  );
}

function CargoMeter({
  label,
  amount,
  width,
}: {
  label: string;
  amount: string;
  width: string;
}) {
  return (
    <div className="cargo-meter">
      <div className="cargo-meter__label">
        <span>{label}</span>
        <strong>{amount}</strong>
      </div>
      <div className="meter-track">
        <span style={{ width }} />
      </div>
    </div>
  );
}
