var span = document.getElementById("resultado")

$(window).on("load", function()
{
    var urlAtual = decodeURIComponent(window.location.href)
    var valorSeparacaoUrl = urlAtual.split("?")
    var respostas = valorSeparacaoUrl[1].split("&")
    var quantidadeDePerguntas = respostas.length
    var acertos = 0

    for (let index = 0; index < respostas.length; index++) {
        const element = respostas[index].split("=");

        const valor = element[1]

        console.log(valor);
        if (valor == "true") {

            acertos++
        }

    }

    span.innerText = acertos + "/" + quantidadeDePerguntas

})