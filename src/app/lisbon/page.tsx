import { GameFrame, GameLink } from "../game-ui";

export default function LisbonPage() {
  return (
    <GameFrame
      title="Casa da Índia"
      subtitle="Mercado de Lisboa"
      backHref="/"
      footer={
        <>
          <GameLink href="/" variant="gold">
            ⛵ Iniciar nova viagem
          </GameLink>
          <GameLink href="/feitoria">Visitar a feitoria</GameLink>
        </>
      }
    >
      <div
        className="illustrated-screen illustrated-screen--lisbon"
        style={{ backgroundImage: "url('/lisbon.jpg')" }}
      >
        <section className="parchment-card parchment-card--celebration">
          <p className="card-kicker">Viagem concluída</p>
          <h2>🎉 Bem-vindo de volta!</h2>
          <p>As especiarias chegaram em segurança a Lisboa.</p>
          <div className="profit-summary">
            <p>Mercadoria vendida · 50 caixas de pimenta</p>
            <p>Compra · 12 cruzados / venda · 22 cruzados</p>
            <strong>+850 ouro</strong>
            <p>Favor do Rei · 20 / 20 · Malaca desbloqueada</p>
          </div>
          <GameLink href="/" variant="gold">
            Navegar novamente →
          </GameLink>
        </section>
      </div>
    </GameFrame>
  );
}
