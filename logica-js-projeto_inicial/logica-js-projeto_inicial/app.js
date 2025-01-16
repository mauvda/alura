alert("Boas vindas ao jogo do número secreto!");
let maximo = 100;
let numeroSecreto = parseInt(Math.random() * maximo +1);
let palpite;
let tentativa = 1;

while (palpite != numeroSecreto){
    palpite = prompt(`Informe um número entre 1 e ${maximo}`);

    if (numeroSecreto == palpite) {
        break;
    } else {
        if (palpite > numeroSecreto){
            alert(`O número secreto é menor que ${palpite}`);
        } else {
            alert(`O número secreto é maior que ${palpite}`);
        }
    }
    tentativa++;
}
let pluralVerifica = tentativa > 1 ? "tentativas" : "tentativa";
alert(`${numeroSecreto} era o número secreto, você acertou com ${tentativa} ${pluralVerifica}.`);
