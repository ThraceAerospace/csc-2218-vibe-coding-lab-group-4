<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Feitoria Trading Post - Goa 1547</title>
  <style>
    @import url('https://googleapis.com');

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      user-select: none;
    }

    body {
      background-color: #1c150e;
      font-family: 'Crimson Text', Georgia, serif;
      color: #2b1a0e;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      padding: 20px;
    }

    /* Main Game Container */
    #game-container {
      width: 100%;
      max-width: 1100px;
      background: linear-gradient(rgba(30, 20, 10, 0.45), rgba(30, 20, 10, 0.55)),
                  url('https://unsplash.com') center/cover no-repeat;
      border: 6px solid #6e4e2e;
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.85), inset 0 0 50px rgba(0,0,0,0.6);
      padding: 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 680px;
      position: relative;
      border-radius: 4px;
    }

    /* Parchment Box Styling */
    .parchment {
      background: linear-gradient(135deg, #f3e4c8 0%, #e4cfa3 100%);
      border: 2px solid #593b1f;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5), inset 0 0 15px rgba(139, 90, 43, 0.25);
      border-radius: 3px;
      padding: 12px 15px;
    }

    /* Top Row Layout */
    .top-bar {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 15px;
      z-index: 2;
    }

    .side-panel {
      width: 285px;
    }

    .panel-header {
      font-family: 'Cinzel', serif;
      font-size: 0.85rem;
      font-weight: 800;
      text-align: center;
      border-bottom: 1.5px solid #7c5633;
      padding-bottom: 6px;
      margin-bottom: 10px;
      letter-spacing: 0.5px;
    }

    /* Title Banner */
    .title-banner {
      text-align: center;
      padding: 12px 30px;
      border: 3px double #593b1f;
    }

    .title-banner h1 {
      font-family: 'Cinzel', serif;
      font-size: 1.65rem;
      font-weight: 800;
      line-height: 1.15;
      color: #241409;
      letter-spacing: 1px;
    }

    .title-banner p {
      font-family: 'Cinzel', serif;
      font-size: 0.85rem;
      font-weight: 700;
      margin-top: 4px;
      color: #4a3018;
    }

    /* Clickable Market & Cargo Buttons */
    .item-btn {
      width: 100%;
      background: rgba(255, 248, 232, 0.55);
      border: 1px solid #967048;
      border-radius: 3px;
      padding: 7px 10px;
      margin-bottom: 7px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      text-align: left;
      font-family: inherit;
      color: inherit;
      transition: all 0.15s ease;
    }

    .item-btn:hover {
      background: #fff8e7;
      border-color: #4a2e12;
      transform: translateY(-1px);
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }

    .item-btn:active {
      transform: translateY(1px);
    }

    .item-btn:last-child {
      margin-bottom: 0;
    }

    .item-info strong {
      display: block;
      font-size: 1rem;
      font-weight: 700;
    }

    .item-info span {
      font-size: 0.85rem;
      color: #4a3520;
    }

    .trend-up { color: #1b6e26; font-weight: bold; font-size: 0.9rem; }
    .trend-down { color: #a1231b; font-weight: bold; font-size: 0.9rem; }
    .trend-stable { color: #5c4632; font-size: 0.85rem; }
    .cargo-qty { font-weight: 700; font-size: 0.95rem; color: #2b1a0e; }

    /* Center Stage (Visual Scene Placeholder & Feedback Toast) */
    .center-stage {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      text-align: center;
    }

    #event-log {
      background: rgba(243, 228, 200, 0.92);
      border: 2px solid #593b1f;
      padding: 10px 22px;
      border-radius: 20px;
      font-size: 1.05rem;
      font-weight: 600;
      color: #2b1a0e;
      box-shadow: 0 4px 12px rgba(0,0,0,0.5);
      transition: opacity 0.3s ease;
    }

    /* Bottom Section */
    .bottom-section {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      gap: 15px;
      margin-top: 15px;
    }

    .dialogue-box {
      width: 340px;
    }

    .dialogue-box h3 {
      font-family: 'Cinzel', serif;
      font-size: 0.95rem;
      font-weight: 800;
      margin-bottom: 6px;
    }

    .dialogue-box p {
      font-size: 0.98rem;
      line-height: 1.35;
      font-style: italic;
    }

    .right-controls {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    /* Trust Meter */
    .trust-box {
      text-align: center;
      padding: 10px 18px;
    }

    .trust-title {
      font-family: 'Cinzel', serif;
      font-size: 0.95rem;
      font-weight: 800;
    }

    .trust-subtitle {
      font-family: 'Cinzel', serif;
      font-size: 0.75rem;
      font-weight: 700;
      color: #593b1f;
      margin-bottom: 6px;
    }

    .progress-track {
      width: 100%;
      height: 16px;
      background: #cbb288;
      border: 1.5px solid #4a3018;
      border-radius: 3px;
      overflow: hidden;
      margin-bottom: 6px;
    }

    .progress-fill {
      height: 100%;
      width: 62%;
      background: linear-gradient(90deg, #8b5a2b, #c58b38);
      transition: width 0.3s ease;
    }

    .trust-status {
      font-size: 0.95rem;
      font-weight: 700;
    }

    /* Action Buttons */
    .action-buttons {
      display: flex;
      gap: 10px;
    }

    .action-btn {
      flex: 1;
      font-family: 'Cinzel', serif;
      font-weight: 800;
      font-size: 0.9rem;
      padding: 11px 10px;
      background: linear-gradient(180deg, #efe0c1 0%, #d5b887 100%);
      border: 2px solid #4a3018;
      border-radius: 3px;
      cursor: pointer;
      color: #241409;
      box-shadow: 0 3px 6px rgba(0,0,0,0.4);
      transition: all 0.15s ease;
    }

    .action-btn:hover {
      background: linear-gradient(180deg, #fff6e0 0%, #e4ca9b 100%);
      transform: translateY(-2px);
    }

    .action-btn:active {
      transform: translateY(1px);
    }

    /* Footer Bar */
    .status-footer {
      margin-top: 12px;
      text-align: center;
      font-family: 'Cinzel', serif;
      font-size: 0.78rem;
      font-weight: 700;
      padding: 6px;
    }

    /* Left Screen Overlay */
    #left-screen {
      display: none;
      position: fixed;
      inset: 0;
      background: #140e09;
      color: #e4cfa3;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      z-index: 100;
      padding: 20px;
    }

    #left-screen h1 {
      font-family: 'Cinzel', serif;
      font-size: 3.5rem;
      margin-bottom: 15px;
      letter-spacing: 3px;
    }

    #left-screen p {
      font-size: 1.25rem;
      margin-bottom: 25px;
      color: #bfa57a;
    }
  </style>
</head>
<body>

  <!-- Main Trading Interface -->
  <div id="game-container">
    <!-- Top Panels -->
    <div class="top-bar">
      <!-- Left: Spice Prices (Click to buy/increase cargo) -->
      <div class="parchment side-panel">
        <div class="panel-header">SPICE PRICES • CURRENT MARKET</div>
        
        <button class="item-btn" onclick="adjustCargo('pepper', 1)">
          <div class="item-info">
            <strong>Black Pepper</strong>
            <span>12 cruzados/quintal</span>
          </div>
          <span class="trend-up">▲ +2</span>
        </button>

        <button class="item-btn" onclick="adjustCargo('cinnamon', 1)">
          <div class="item-info">
            <strong>Cinnamon</strong>
            <span>20 cruzados/quintal</span>
          </div>
          <span class="trend-down">▼ -1</span>
        </button>

        <button class="item-btn" onclick="adjustCargo('cloves', 1)">
          <div class="item-info">
            <strong>Cloves</strong>
            <span>18 cruzados/quintal</span>
          </div>
          <span class="trend-stable">— stable</span>
        </button>

        <button class="item-btn" onclick="adjustCargo('cardamom', 1)">
          <div class="item-info">
            <strong>Cardamom</strong>
            <span>25 cruzados/quintal</span>
          </div>
          <span class="trend-up">▲ +3</span>
        </button>
      </div>

      <!-- Center: Title -->
      <div class="parchment title-banner">
        <h1>FEITORIA<br>TRADING POST</h1>
        <p>— GOA • 1547 —</p>
      </div>

      <!-- Right: Cargo Hold (Click to increase amount held) -->
      <div class="parchment side-panel">
        <div class="panel-header">CARGO HOLD • CAPACITY <span id="capacity-count">72</span>/150</div>
        
        <button class="item-btn" onclick="adjustCargo('pepper', 1)">
          <div class="item-info">
            <strong>Black Pepper</strong>
            <span>Click to add sack</span>
          </div>
          <span class="cargo-qty" id="qty-pepper">x40 sacks</span>
        </button>

        <button class="item-btn" onclick="adjustCargo('cinnamon', 1)">
          <div class="item-info">
            <strong>Cinnamon</strong>
            <span>Click to add bundle</span>
          </div>
          <span class="cargo-qty" id="qty-cinnamon">x22 bundles</span>
        </button>

        <button class="item-btn" onclick="adjustCargo('cloves', 1)">
          <div class="item-info">
            <strong>Cloves</strong>
            <span>Click to add sack</span>
          </div>
          <span class="cargo-qty" id="qty-cloves">x10 sacks</span>
        </button>

        <button class="item-btn" onclick="adjustCargo('cardamom', 1)">
