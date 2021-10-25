const diasCo= document.getElementById("dias");
const horasCo= document.getElementById("horas");
const minutosCo= document.getElementById("minutos");
const segundosCo= document.getElementById("segundos");

const novoAno = "1 Jan 2022";

function contagem (){
    const novoAnoData = new Date(novoAno)
    const dataAtual = new Date();

    const totalSegundos = (novoAnoData - dataAtual) / 1000;
    const days = Math.floor(totalSegundos / 3600 / 24);
    const horas = Math.floor(totalSegundos / 3600) %24;
    const minutos = Math.floor(totalSegundos /60)  %60;
    const segundos = Math.floor(totalSegundos) %60;

    diasCo.innerHTML= days;
    horasCo.innerHTML= formatoTempo(horas);
    minutosCo.innerHTML= formatoTempo(minutos);
    segundosCo.innerHTML= formatoTempo(segundos);

}

function formatoTempo(tempo) {
    return tempo < 10?`0${tempo}` : tempo;
}
contagem();
setInterval(contagem, 1000);


 