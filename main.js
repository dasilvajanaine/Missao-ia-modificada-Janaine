const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "Com que frequência você sente ansiedade em seu dia a dia?",
        alternativas: [
            {
                texto: " Raramente",
                afirmacao: [
                    " Raramente a ansiedade te domina, você cultiva presença e gratidão para manter sua paz.",
                    "AFIRMACAO 2",
                    "AFIRMACAO 3"
                ]
            },
            {
                texto: " Frequentemente ",
                afirmacao: [
                    " Quando a ansiedade chega, você respira, aceita o que sente e lembra que tem recursos para  se acalmar.",
                    "AFIRMACAO 2",
                    "AFIRMACAO 3"
                ]
            }
        ]
    },
    {
        enunciado: " Quando você se sente ansioso, você tem alguma estratégia ou hábito que tenta praticar para se acalmar?",
        alternativas: [
            {
                texto: " Eu foco na respiração, fazendo-a de forma lenta e controlada, e também escrevo sobre meus sentimentos para processá-los.",
                afirmacao: [
                    " Essa abordagem demonstra uma maneira eficaz de lidar com a ansiedade, pois combina técnicas de relaxamento físico, como a respiração controlada, com a expressão emocional, por meio da escrita.",
                    "AFIRMACAO 2",
                    "AFIRMACAO 3"
                ]
            },
            {
                texto: "  Eu saio para caminhar e tento me concentrar no momento presente, usando os sentidos para me acalmar, além de recorrer a um aplicativo de meditação para relaxar rapidamente.",
                afirmacao: [
                    " Caminhar com atenção e meditar trazem calma e equilíbrio imediato.",
                    "AFIRMACAO 2",
                    "AFIRMACAO 3"
                ]
            }
        ]
    },
    {
        enunciado: " A ansiedade pode causar sintomas físicos, como palpitações ou falta de ar?",
        alternativas: [
            {
                texto: " Não, os sintomas da ansiedade são apenas emocionais.",
                afirmacao: [
                    " Palpitações, sudorese, tontura e tensão muscular são manifestações físicas comuns da ansiedade, resultantes da ativação do sistema nervoso.",
                    "AFIRMACAO 2",
                    "AFIRMACAO 3"
                ]
            },
            {
                texto: " Sim, o corpo reage à ansiedade como se estivesse em perigo real.",
                afirmacao: [
                    " O corpo reage à ansiedade como se estivesse em perigo real para enfrentar ou fugir de uma ameaça, o que explica os sintomas físicos como batimentos cardíacos acelerados, respiração ofegante e tensão muscular.",
                    "AFIRMACAO 2",
                    "AFIRMACAO 3"
                ]
            }
        ]
    },
    {
        enunciado: "  Ansiedade interfere no seu trabalho ou estudos?",
        alternativas: [
            {
                texto: " Sim",
                afirmacao: [
                    " Quando a ansiedade interferir no seu trabalho ou estudos, busque estratégias para retomar o equilíbrio.",
                    "AFIRMACAO 2",
                    "AFIRMACAO 3"
                ]
            },
            {
                texto: " Não",
                afirmacao: [
                    "Como a ansiedade não atrapalha nas suas atividades, aproveite esse estado de tranquilidade para manter meu foco e produtividade.",
                    "AFIRMACAO 2",
                    "AFIRMACAO 3"
                ]
            }
        ]
    },
    {
        enunciado: " Práticas como meditação e exercícios de respiração podem realmente ajudar a controlar a ansiedade?",
        alternativas: [
            {
                texto: " Não, elas são ineficazes para sintomas de ansiedade.",
                afirmacao: [
                    "A afirmação de que meditação e exercícios de respiração são ineficazes é falsa. Na verdade, essas práticas são ferramentas valiosas e acessíveis para o gerenciamento da ansiedade.",
                    "AFIRMACAO 2",
                    "AFIRMACAO 3"
                ]
            },
            {
                texto: " Sim, elas ajudam a acalmar o sistema nervoso e a focar a mente.",
                afirmacao: [
                    " Ao focar a atenção na respiração e no momento presente, essas práticas ajudam a reduzir a frequência cardíaca, a pressão arterial e a liberar a tensão muscular, combatendo os sintomas físicos da ansiedade.",
                    "AFIRMACAO 2"
                     "AFIRMACAO 3"

                ]

            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = " ";

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

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener('click', () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
let resposta

mostraPergunta();

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}


function mostraResultado() {
    caixaPerguntas.textContent = "Acredito que...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();