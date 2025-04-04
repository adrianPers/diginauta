
import * as T from './telas.js'
import * as F from './funcoes.js'

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

const teclas = [...document.querySelectorAll('#teclado span')]
teclas.map((el) => {



    el.addEventListener('click', ()=> {

        teclar(el.innerHTML)

        teclas.map((el) => {
            el.classList.remove('tecladas')
        })

        el.classList.add('tecladas')

    })
})

let spanAtual = {
    value: undefined
}

let meteoroAtual = undefined

document.addEventListener('keydown', (event) => {

    teclar(event.key)

});

function teclar(tecla){

    letras.find((el) => {

        if (el == tecla) {


            if (spanAtual.value == undefined) {

                meteoroAtual = T.arrayMeteoros.find((el) => {
                    if (el.textoMeteoro.innerHTML.substring(0, 1) == tecla) {
                        return el
                    }
                })

                if (meteoroAtual != undefined) {

                    spanAtual.value = meteoroAtual.textoMeteoro
                    T.nave.boxNave.style.transform = `
                      rotate(${(meteoroAtual.getXInicial() >= 47.5? '' : '-' )}${
                            F.calcAngulo(meteoroAtual.getParmX(), 95)}deg)
                      `
                      T.nave.atirar(T.nivelAtual.boxNivel, meteoroAtual.getIndice(), meteoroAtual.getXInicial(), meteoroAtual.getParmX()/18)
                    spanAtual.value.innerHTML = spanAtual.value.innerHTML.substring(1, spanAtual.value.innerHTML.length)
                    spanAtual.value.style.color = 'orange'

                }


            } else {


                    if (spanAtual.value.innerHTML.substring(0, 1) == tecla) {

                        spanAtual.value.innerHTML = spanAtual.value.innerHTML.substring(1, spanAtual.value.innerHTML.length)
                        T.nave.atirar(T.nivelAtual.boxNivel, meteoroAtual.getIndice(), meteoroAtual.getXInicial(), meteoroAtual.getParmX()/18)

                    }

                    if (spanAtual.value.innerHTML == '') {

                        setTimeout(() => {
                            console.log(spanAtual.value)
                            spanAtual.value.nextSibling.src = 'img/explosao.gif'
                            clearInterval(meteoroAtual.descer)
                            setTimeout(() => {

                                T.nivelAtual.boxNivel.removeChild(spanAtual.value.parentElement)
                                spanAtual.value = undefined
                            }, 250)
                        }, 250)

                    }
            }







        }
    })


}