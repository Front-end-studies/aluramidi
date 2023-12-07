function tocaSom(idElementoAudio) {

    document.querySelector(idElementoAudio).play();

}

const ListaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < ListaDeTeclas.length; contador++) {
    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    // template string
    const idAudio = `#som_${instrumento}`;
    // console.log(idAudio);
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

}
