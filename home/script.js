// Carregando o XML
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    importarXML(this);
  }
};
xhttp.open("GET", "feed.xml", true);
xhttp.send();

function importarXML(xml) {
  var xmlDoc = xml.responseXML;

  // Extrair os valores do XML
  var euro = xmlDoc.querySelector("euro").textContent;
  var dolar = xmlDoc.querySelector("dollar").textContent;

  var imgVar2 = xmlDoc.querySelector("imgVar2").textContent;
  var temperaturaImg = document.querySelector(".temperatura-img");
  temperaturaImg.style.backgroundImage = "url(" + imgVar2 + ")";
  console.log(imgVar2);

  // Substituir os valores no HTML

  document.querySelector(".euro a").textContent = euro;
  document.querySelector(".dolar a").textContent = dolar;
}

document.addEventListener("DOMContentLoaded", function () {
  // Seleciona o elemento com a classe "data"
  var dataElement = document.querySelector(".data");
  var horaElement = document.querySelector(".hora");

  function atualizarDataHora() {
    // Obtém a data atual
    var dataAtual = new Date();

    // Formata a data no formato desejado (04 de Outubro de 2023)
    var options = { year: "numeric", month: "long", day: "numeric" };
    var dataFormatada = dataAtual.toLocaleDateString("pt-BR", options);

    // Define o conteúdo do elemento para a data formatada
    dataElement.querySelector("a").textContent = dataFormatada;

    var horaFormatada = dataAtual.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
    horaElement.querySelector("a").textContent = horaFormatada;
  }

  function atualizarHorarioAjustado() {
    var dataAtual = new Date();
    var segundosAjuste = 60 - dataAtual.getSeconds(); // Calcula os segundos restantes até o próximo minuto
    setTimeout(atualizarDataHora, segundosAjuste * 1000); // Atualiza no próximo minuto
  }

  atualizarDataHora(); // Chama a função para exibir a data e hora imediatamente
  atualizarHorarioAjustado(); // Inicia o ajuste de horário

  // Ajustar o horário a cada minuto após o primeiro ajuste
  setInterval(atualizarHorarioAjustado, 60000); // Atualizar o horário a cada minuto
});
