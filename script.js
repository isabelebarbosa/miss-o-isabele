const caixaPrincipal = document.querySelector("caixa-principal");
const caixaPergunta = document.querySelector("caixa-pergunta");
const caixaAlternativa = document.querySelector("caixa-alternativa");
const caixaResultado = document.querySelector("caixa-resultado");
const textoResultado = document.querySelector("texto-resultado");

const pergunta = [
     {
        enunciado: "como combater o desmatamento",
        alternativa:[
            "reflorecimento de areas degradadas"
            "implementação de leis mais rigorosas para a aproteção das floretas"
      ]
     },
    { 
        enunciado: "como combater a esigulae social no mundo em que vivemos",
        alternativa:["politica de redistribuição de rend e oprtunidades"]
        implementar

     },
];
let tual=0;
let perguntaAtual;

function monstraPergunta(){
   perguntaAtul=perguntas [atual];
   caixaPerguntas.textContent=perguntaAtual.enunciado;
   caixaAlternativas.textContent = "";
   mostraAlternativas();
}

function mostraAlternativas(){
   for(const alternativa of perguntaAtual.alternativas){
      const botãoAlternativas = document.createElement("button");
      botãoAlternativas = textContent = alternativa;
      caixaAlternativas.appendChild(botaoAlternativas);
   }


}
mostraPergunta();