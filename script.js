// Data de início do relacionamento (formato: Ano, Mês-1, Dia)
const startDate = new Date(2021, 10, 10); // Exemplo: 10 de Novembro de 2021

function updateTime() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("time-counter").innerText =
    `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}

setInterval(updateTime, 1000); // Atualiza a cada segundo
updateTime();
