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
                    "Raramente a ansiedade te domina, você cultiva presença e gratidão para manter sua paz.",
                    "A ansiedade aparece apenas em situações muito específicas para você",
                    "A ansiedade quase nunca interfere na sua rotina."
                ]
            },
            {
                texto: " Frequentemente ",
                afirmacao: [
                    " Quando a ansiedade chega, você respira, aceita o que sente e lembra que tem recursos para  se acalmar.",
                    "Frequentemente sinto ansiedade ao longo do meu dia",
                    "A ansiedade costuma estar presente na maior parte da sua rotina."
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
                    " Você foca na sua respiração de forma lenta e controlada para acalmar sua mente",
                    " Você utiliza a respiração consciente para recuperar o equilíbrio emocional em momentos de tensão."
                ]
            },
            {
                texto: "  Eu saio para caminhar e tento me concentrar no momento presente, usando os sentidos para me acalmar, além de recorrer a um aplicativo de meditação para relaxar rapidamente.",
                afirmacao: [
                    " Caminhar com atenção e meditar trazem calma e equilíbrio imediato.",
                    " Você costumo sair para caminhar e direcionar sua atenção ao momento presente, utilizando seus sentidos para promover calma e equilíbrio",
                    " VOcê também recorre a um aplicativo de meditação para relaxar de forma rápida e eficiente quando preciso."
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
                    " Você acredita que a ansiedade afeta apenas suas emoções e não o corpo ",
                    " Você acredita que os sinais da ansiedade são sentidos apenas emocionalmente"
                ]
            },
            {
                texto: " Sim, o corpo reage à ansiedade como se estivesse em perigo real.",
                afirmacao: [
                    " O corpo reage à ansiedade como se estivesse em perigo real para enfrentar ou fugir de uma ameaça, o que explica os sintomas físicos como batimentos cardíacos acelerados, respiração ofegante e tensão muscular.",
                    " Você acredita que a ansiedade provoca reações físicas intensas, semelhantes a situações de ameaça ",
                    " Você acredita que, durante a ansiedade, seu corpo se comporta como se estivesse em risco real"
                ]
            }
        ]
    },
    {
        enunciado: "  Ansiedade interfere no seu trabalho ou estudos?",
        alternativas: 
            {
                texto: " Sim",
                afirmacao: [
                    " Quando a ansiedade interferir no seu trabalho ou estudos, busque estratégias para retomar o equilíbrio.",
                    " Você percebe que, durante a ansiedade, seu corpo reage como se estivesse em perigo reaL",
                    " Você reconhece que a ansiedade provoca respostas físicas intensas em seu corpo, semelhantes a situações de risco."
                ]
            },
            {
                texto: " Não",
                afirmacao: [
                    "Como a ansiedade não atrapalha nas suas atividades, aproveite esse estado de tranquilidade para manter meu foco e produtividade.",
                    "Você não percebe que seu corpo reage como se estivesse em perigo real durante a ansiedade ",
                    "Você acredita que a ansiedade não provoca respostas físicas intensas em seu corpo."
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
                    "Você acredita que elas são ineficazes para aliviar os sintomas de ansiedade ",
                    "Você pensa que essas estratégias não ajudam a reduzir os efeitos da ansiedade."
                ]
            },
            {
                texto: " Sim, elas ajudam a acalmar o sistema nervoso e a focar a mente.",
                afirmacao: [
                    " Ao focar a atenção na respiração e no momento presente, essas práticas ajudam a reduzir a frequência cardíaca, a pressão arterial e a liberar a tensão muscular, combatendo os sintomas físicos da ansiedade.",
                    " Elas ajudam a acalmar o sistema nervoso",
                    " Ajudam a focar a mente."

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