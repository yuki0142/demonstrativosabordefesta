// Alternar blocos
document.addEventListener("DOMContentLoaded", function () {
    const blocos = document.querySelectorAll(".bloco");

    blocos.forEach((bloco, index) => {
        if (index % 2 === 1) {
            bloco.classList.add("invertido");
        }
    });
});
// Alternar blocos

// Alternar para fotos

let scrollAntesDeMostrarGaleria = 0;

function mostrarGaleria(id) {

    scrollAntesDeMostrarGaleria = window.scrollY;
    
    document.querySelector('.conteudoprincipal').classList.add('hidden');
    document.getElementById('galeriaFotos').classList.remove('hidden');

    // Esconde todas as seções de fotos
    document.querySelectorAll('.fotos').forEach(el => el.classList.add('hidden'));

    // Mostra a seção específica
    document.getElementById(id).classList.remove('hidden');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function voltarParaPrincipal() {
    document.querySelector('.conteudoprincipal').classList.remove('hidden');
    document.getElementById('galeriaFotos').classList.add('hidden');

    window.scrollTo({ top: scrollAntesDeMostrarGaleria, behavior: 'smooth' });
}