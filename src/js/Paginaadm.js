function mostrarSecao(secao) {
  // Alternar visibilidade das seções
  document.getElementById("cardapio").classList.remove("active");
  document.getElementById("galeria").classList.remove("active");
  document.getElementById(secao).classList.add("active");

  // Alternar aparência dos botões
  const botoes = document.querySelectorAll('.toggle-button');
  botoes.forEach(botao => botao.classList.remove('active'));

  if (secao === 'cardapio') {
    botoes[0].classList.add('active'); // Botão do cardápio
  } else if (secao === 'galeria') {
    botoes[1].classList.add('active'); // Botão da galeria
  }
}