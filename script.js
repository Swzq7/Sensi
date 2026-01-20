let modoAtual = 'mobile';

const sensis = {
  mobile: {
    baixa: [{ nome: "Mobile Baixa", dados: "Geral: 75\nRed Dot: 65\n2x: 70\n4x: 80\nAWM: 50\nOlhadinha: 60\nDPI: 410" }],
    media: [{ nome: "Mobile Média", dados: "Geral: 90\nRed Dot: 85\n2x: 90\n4x: 95\nAWM: 70\nOlhadinha: 75\nDPI: 500" }],
    alta: [{ nome: "Mobile Alta", dados: "Geral: 98\nRed Dot: 95\n2x: 98\n4x: 100\nAWM: 85\nOlhadinha: 90\nDPI: 600" }]
  },
  emulador: {
    baixa: [{ nome: "Emulador Baixa", dados: "Geral: 50\nRed Dot: 45\n2x: 50\n4x: 55\nMouse DPI: 800" }],
    media: [{ nome: "Emulador Média", dados: "Geral: 65\nRed Dot: 60\n2x: 65\n4x: 70\nMouse DPI: 1000" }],
    alta: [{ nome: "Emulador Alta", dados: "Geral: 75\nRed Dot: 70\n2x: 75\n4x: 80\nMouse DPI: 1200" }]
  }
};

function modo(m) {
  modoAtual = m;
  document.getElementById("cards").innerHTML = "";
  alert("Modo " + m.toUpperCase() + " ativado");
}

function mostrar(tipo) {
  const cards = document.getElementById("cards");
  cards.innerHTML = "";
  sensis[modoAtual][tipo].forEach(s => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<h2>${s.nome}</h2><pre>${s.dados}</pre><button class="copy" onclick="copiar(\`${s.dados}\`)">Copiar</button>`;
    cards.appendChild(div);
  });
}

function copiar(texto) {
  navigator.clipboard.writeText(texto);
  alert("Sensibilidade copiada!");
}