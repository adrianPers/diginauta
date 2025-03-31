

const divTeclado = document.getElementById('teclado')
const LinhasTeclado = [...divTeclado.children]
const letras = [
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 
    'z', 'x', 'c', 'v', 'b', 'n', 'm'
]

letras.map((el, indice) => {

    let span = document.createElement('span')
    span.innerHTML = el

   if(indice <= 9){
        LinhasTeclado[0].appendChild(span)
   } else if( indice <= 18){
    LinhasTeclado[1].appendChild(span)
   } else {
    LinhasTeclado[2].appendChild(span)
   }

})