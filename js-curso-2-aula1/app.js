let numerosSorteados = [];
let limiteLista = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${limiteLista}`);
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    verificaPlural = tentativas > 1 ? 'tentativas' : 'tentativa';
    chute == numeroSecreto ? exibirTextoNaTela('h1', `Acertou com ${tentativas} ${verificaPlural}`) + exibirTextoNaTela('p', 'O número secreto foi encontrado') 
        + document.getElementById('reiniciar').removeAttribute('disabled') 
        : chute > numeroSecreto ? exibirTextoNaTela('p', `O número secreto é menor que ${chute}`) 
        : exibirTextoNaTela('p', `O número secreto é maior que ${chute}`);
    tentativas++;
    limparCampo();
}

function gerarNumeroAleatorio() {
    let numeroAleatorio = parseInt(Math.random() * limiteLista + 1);
    if (numerosSorteados.length >= limiteLista) {
        numerosSorteados = [];
    }
    if (numerosSorteados.includes(numeroAleatorio)){
        return gerarNumeroAleatorio();
    } else {
        numerosSorteados.includes(numeroAleatorio);
        return numeroAleatorio;
    }

    //numerosSorteados.includes(numeroAleatorio) ? return gerarNumeroAleatorio() : numeroAleatorio;
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    exibirMensagemInicial();
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}