// 8 jogos — edite nome, descrição, link de jogar e link de baixar

  const games = [
  {
    name: "Chicken Run",
    desc: "Fuja do galinheiro.",
    play: "https://makinadeideias.github.io/play/games/ChickenRun.html",
    download: "https://makinadeideias.github.io/play/games/ChickenRun.html"
  },
  
  
  { name: "Shootout X",  desc: "Duelo de precisão.",  play: "/play/games/ChickenRun.html", download: "#" };]

const grid = document.getElementById("gameGrid");
const countEl = document.getElementById("gameCount");

const iconPlay = `
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M8 5v14l11-7z"/>
  </svg>`;

const iconDownload = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
       stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
       aria-hidden="true">
    <path d="M12 3v12"/>
    <path d="M6 11l6 6 6-6"/>
    <path d="M5 21h14"/>
  </svg>`;

games.forEach((game, i) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div class="card-top">
      <div class="card-body">
        <h3>${game.name}</h3>
        <p>${game.desc}</p>
      </div>
      <span class="card-index">${String(i + 1).padStart(2, "0")}</span>
    </div>
    <div class="card-actions">
      <a href="${game.play}" class="action action-play" target="_blank" rel="noopener">
        ${iconPlay} Jogar
      </a>
      <a href="${game.download}" class="action action-download" download>
        ${iconDownload} Baixar
      </a>
    </div>
  `;
  grid.appendChild(card);
});

countEl.textContent = `${games.length} títulos`;
document.getElementById("year").textContent = new Date().getFullYear();
