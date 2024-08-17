let contagem = 0;

function aumentar(){
    contagem++;
    document.getElementById("contador").innerText = contagem;
}
function diminuir(){
    contagem--;
    document.getElementById("contador").innerText = contagem;
}
