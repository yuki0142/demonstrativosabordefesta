document.addEventListener("DOMContentLoaded", function () {
    const blocos = document.querySelectorAll(".bloco");

    blocos.forEach((bloco, index) => {
      if (index % 2 === 1) {
        bloco.classList.add("invertido");
      }
    });
  });