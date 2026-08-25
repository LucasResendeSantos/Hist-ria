const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternativas = document.querySelector(".caixa-alternativas")
const caixaResultado = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".texto-resultado")

const perguntas = [
    {
        enunciado: "Assim que saiu da escola, Hello Kitty encontrou um pequeno gatinho perdido perto do caminho de casa. Ele parecia assustado e não sabia para onde ir. Qual é o primeiro pensamento?",
        alternativas: [
            {
                texto: "Vou ajudar o gatinho a encontrar sua família!",
                afirmacao: "Com muito carinho, decidiu ajudar o gatinho e ficou determinada a encontrar sua família."
            },
            {
                texto: "Talvez alguém já esteja procurando por ele.",
                afirmacao: "Pensou com cuidado em uma forma segura de ajudar o gatinho sem deixá-lo ainda mais assustado."
            }
        ]
    },
    {
        enunciado: "Depois de encontrar o gatinho, Hello Kitty descobriu que ele adorava brincar, mas estava com saudade de seus amigos. Ela decidiu preparar uma surpresa para animá-lo. O que ela faz?",
        alternativas: [
            {
                texto: "Prepara alguns biscoitinhos em formato de coração.",
                afirmacao: "Foi para a cozinha e preparou deliciosos biscoitinhos em formato de coração para deixar o novo amiguinho feliz."
            },
            {
                texto: "Faz um desenho colorido para ele.",
                afirmacao: "Pegou seus lápis de cor e criou um desenho cheio de flores, corações e estrelinhas."
            }
        ]
    },
    {
        enunciado: "No dia seguinte, Hello Kitty e seus amigos decidiram fazer um piquenique no parque. Cada um deveria levar alguma coisa especial. O que você decide levar?",
        alternativas: [
            {
                texto: "Uma cesta cheia de frutas e docinhos.",
                afirmacao: "Preparou uma linda cesta com frutas, docinhos e vários quitutes para compartilhar com todos."
            },
            {
                texto: "Uma toalha fofinha e jogos para brincar.",
                afirmacao: "Levou uma toalha bem confortável e vários jogos divertidos para que todos pudessem brincar juntos."
            }
        ]
    },
    {
        enunciado: "Durante o piquenique, começou a chover e todos correram para debaixo de uma árvore. Hello Kitty teve uma ideia para deixar aquele momento divertido. E agora?",
        alternativas: [
            {
                texto: "Contar histórias engraçadas para os amigos.",
                afirmacao: "Começou a contar histórias engraçadas e logo todos estavam rindo juntos, esquecendo completamente da chuva."
            },
            {
                texto: "Cantar uma música bem alegre.",
                afirmacao: "Começou a cantar uma música alegre e seus amigos entraram na brincadeira, transformando a chuva em uma festa."
            }
        ]
    },
    {
        enunciado: "Quando a chuva finalmente parou, Hello Kitty percebeu que o gatinho estava triste novamente. Ele queria agradecer por toda a ajuda, mas não sabia como. O que você faz?",
        alternativas: [
            {
                texto: "Diz que não precisa agradecer e dá um abraço nele.",
                afirmacao: "Aprendeu que pequenos gestos de carinho podem fazer uma grande diferença e que ajudar um amigo é uma coisa muito especial."
            },
            {
                texto: "Sugere que ele faça uma surpresa para os outros amigos também.",
                afirmacao: "Percebeu que a gentileza pode virar uma corrente de carinho quando cada pessoa compartilha um pouquinho de amor com os outros."
            }
        ]
    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = ""

function mostraPergunta(){
     if(atual >= perguntas.length){  
        mostraResultado()
        return
    }
    perguntaAtual= perguntas[atual]
    caixaPerguntas.textContent =perguntaAtual.enunciado
    caixaAlternativas.textContent = "";
    mostraAlternativas()


}
fuction mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativa){
        const botaoAlternativas = document.creatElement("button")
        botaoAlternativas.textContent =alternativa.texto
        botaoAlternativas.addEventListener("click", ()=> respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}
function respostaSelecionada(opcaoSelecionada){
    constant afirmacoes += afirmacoes + " "
    atual++
    mostraPergunta()
}
function mostraResultado(){
    caixaPerguntas.textContent ="A partir de sua ajuda ..."
    textoResultad.textContent = historiaFinal
    caixaAlternativas.textContent ="";
}


mostraPergunta()