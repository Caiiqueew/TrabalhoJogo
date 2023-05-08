var nomes = [];
var txtNomes = document.querySelector("#nomes");
var btn = document.querySelector("#iniciar");
var btn2 = document.querySelector("#iniciar2");
var pontuacao = 0;
var rodada = 1;

btn2.addEventListener("click", function () {
    pontuacao = 0;
    rodada = 1;
    var valores = txtNomes.value;
    nomes = valores.split(" ");
    txtNomes.value = "";
    document.getElementById("nomes-input").value = "";
    txtNomes.disabled = true;
    btn.disabled = true;
});

btn.addEventListener("click", function () {
    jogar();

});

function jogar() {

    var numeroAleatorio = Math.floor(Math.random() * nomes.length) + 1;
    var palpite = prompt(`Digite o ${numeroAleatorio}º nome da lista:`);


    var nomeCorreto = nomes[numeroAleatorio - 1];
    var mensagem;
    if (palpite === nomeCorreto) {
        pontuacao++;
        mensagem = "Parabéns, você acertou!";
    } else {
        pontuacao--;
        mensagem = `Ops, você errou! O nome correto era ${nomeCorreto}.`;
    }

    alert(mensagem + ` Sua pontuação é ${pontuacao}.`);


    rodada++;
    if (rodada <= 5) {
        jogar()
    } else {
        alert(`Fim de jogo! Sua pontuação final é ${pontuacao}.`);
        txtNomes.disabled = false;
        btn.disabled = false;
    }
}