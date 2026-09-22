export function aleatorio(lista){
    cont posicao = Math.floor(Math.random()*lista.length)
    console.log(posicao)
    return(lista[posicao])
}