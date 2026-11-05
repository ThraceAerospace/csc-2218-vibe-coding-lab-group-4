import { GameFrame, GameLink } from "../game-ui";

export default function CargoPage() {
  return (
    <GameFrame
      title="Porão de carga"
      subtitle="Gestão do navio · Goa"
      backHref="/feitoria"
      footer={
        <>
          <GameLink href="/lisbon" variant="gold">
            ⛵ Navegar para Lisboa
          </GameLink>
          <GameLink href="/">Abortar viagem</GameLink>
        </>
      }
    >
      <div
        className="illustrated-screen illustrated-screen--cargo"
        style={{ backgroundImage: "url('/ocean.jpg')" }}
      >
        <section className="parchment-card parchment-card--narrow">
          <p className="card-kicker">Capacidade · 120 / 150</p>
          <h2>Provisões e mercadorias</h2>
          <p>Verifique os mantimentos antes de zarpar para Lisboa.</p>
          <div className="cargo-list">
            <CargoMeter label="Provisões da tripulação" amount="40%" width="40%" />
            <CargoMeter label="Pimenta-preta · 50 caixas" amount="60%" width="60%" />
            <CargoMeter label="Canela · 22 fardos" amount="28%" width="28%" />
          </div>
          <p className="warning-note">
            Atenção: se as provisões caírem abaixo de 30%, a tripulação corre
            perigo.
          </p>
          <GameLink href="/lisbon" variant="gold">
            Zarpar para Lisboa →
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
