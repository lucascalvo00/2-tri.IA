const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você ganha a habilidade de dominar qualquer esporte instantaneamente. Qual esporte você escolhe?",
        alternativas: [
            {
                texto: "Futebol",
                afirmacao: "Você adora a emoção do futebol e quer jogar como um profissional."
            },
            {
                texto: "Natação",
                afirmacao: "Você gosta de esportes aquáticos e quer nadar como um campeão olímpico."
            }
        ]
    },
    {
        enunciado: "Você pode passar um dia com qualquer celebridade. Quem você escolhe?",
        alternativas: [
            {
                texto: "Um ator/atriz famoso(a)",
                afirmacao: "Você é fã de cinema e gostaria de saber mais sobre a vida de um ator ou atriz."
            },
            {
                texto: "Um músico famoso",
                afirmacao: "Você é apaixonado por música e quer ver como é o dia a dia de um músico famoso."
            }
        ]
    },
    {
        enunciado: "Você tem a chance de aprender qualquer instrumento musical em um dia. Qual você escolhe?",
        alternativas: [
            {
                texto: "Piano",
                afirmacao: "Você sempre quis tocar piano e criar belas melodias."
            },
            {
                texto: "Guitarra",
                afirmacao: "Você quer tocar guitarra e sentir a energia de uma performance ao vivo."
            }
        ]
    },
    {
        enunciado: "Você encontra um artefato antigo que concede um desejo. O que você deseja?",
        alternativas: [
            {
                texto: "Paz mundial",
                afirmacao: "Você deseja um mundo sem conflitos e cheio de harmonia."
            },
            {
                texto: "Conhecimento infinito",
                afirmacao: "Você quer saber tudo sobre o universo e seus mistérios."
            }
        ]
    },
    {
        enunciado: "Você pode se transformar em qualquer personagem de um filme por um dia. Quem você escolhe?",
        alternativas: [
            {
                texto: "Um super-herói",
                afirmacao: "Você quer experimentar ter superpoderes e salvar o dia."
            },
            {
                texto: "Um personagem de fantasia",
                afirmacao: "Você quer viver em um mundo mágico e cheio de aventuras."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();