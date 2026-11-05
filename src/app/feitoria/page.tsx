import { GameFrame, GameLink } from "../game-ui";

export default function FeitoriaPage() {
  return (
    <GameFrame
      title="Feitoria de Goa"
      subtitle="Entreposto comercial · 1510"
      backHref="/"
      footer={
        <>
          <GameLink href="/cargo" variant="gold">
            📦 Gerir carga
          </GameLink>
          <GameLink href="/">Voltar ao oceano</GameLink>
        </>
      }
    >
      <div
        className="illustrated-screen"
        style={{ backgroundImage: "url('/feitoria.jpg')" }}
      >
        <section className="parchment-card">
          <p className="card-kicker">Mercado atual · Goa</p>
          <h2>Entreposto da Feitoria</h2>
          <p>
            Negocie especiarias com os mercadores locais e prepare a sua
            próxima viagem.
          </p>
          <div className="price-list">
            <div>
              <span>Pimenta-preta</span>
              <strong>12 cruzados / quintal</strong>
            </div>
            <div>
              <span>Canela</span>
              <strong>20 cruzados / quintal</strong>
            </div>
            <div>
              <span>Cravinho</span>
              <strong>18 cruzados / quintal</strong>
            </div>
            <div>
              <span>Cardamomo</span>
              <strong>25 cruzados / quintal</strong>
            </div>
          </div>
          <div className="trust-meter">
            <div className="trust-meter__label">
              <span>Confiança do Rajá</span>
              <strong>62%</strong>
            </div>
            <div className="meter-track">
              <span style={{ width: "62%" }} />
            </div>
          </div>
          <GameLink href="/cargo" variant="gold">
            Gerir carga →
          </GameLink>
        </section>
      </div>
    </GameFrame>
  );
}
