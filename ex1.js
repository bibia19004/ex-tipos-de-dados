let primeiroNome = "Nome"
let ultimoNome = "Sobrenome"
let nomeCompleto = primeiroNome + " "
console.log(nomeCompleto)

let numero1 = '10'
let numero2 = 20

let soma = numero1 + numero2
let subtracao = numero1 - numero2
let multiplicação = numero1 * numero2
let divisao = numero1 / numero2

console.log(soma + '\n' + subtracao + '\n' + multiplicação + '\n' + divisao)

let estaChovendo = true 
if(estaChovendo){
    console.log("esta Chovendo!")
}else{
    console.log("não está chovendo!")
}

let resposta = null 
let nota 

console.log("resposta = " + resposta)
console.log("nota = " + nota)

let idUnico = Symbol("id")
let produto = {
    [idUnico]: 123  
}

console.log(produto[idUnico])