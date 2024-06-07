function mudarCorFundo() {
    document.body.style.backgroundColor = "black";
}

document.addEventListener("DOMContentLoaded", function() {
    // Verifica se a URL atual contém 'rj.html'
    if (window.location.href.includes('rj.html')) {
      // Cria o novo parágrafo
      var novoParagrafo = document.createElement("p");
      novoParagrafo.className = "amanha";
      novoParagrafo.textContent = "O Cheiro do ralo - 15:00 - Amanhã";
      
      // Insere o novo parágrafo no final do corpo do documento
      document.body.appendChild(novoParagrafo);
    }
  });
  document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os elementos <h1>
    var elementosH1 = document.getElementsByTagName("h1");
  
    // Itera sobre cada elemento <h1> e altera sua cor
    for (var i = 0; i < elementosH1.length; i++) {
      elementosH1[i].style.color = "#fcb000";
    }
  });
  