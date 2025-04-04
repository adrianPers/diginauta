
import * as vars from './vars.js'
import Nivel from './classes/Nivel.js'
import Meteoro from './classes/Meteoro.js'
import Nave from './classes/Nave.js'

// Tela inicial
const main = document.querySelector('main')
const telaMenu = document.getElementById('tela-menu')

const telaInicial = document.getElementById('tela-inicial')

telaInicial.addEventListener('click', () => {

    telaInicial.style.opacity = 0
    // telaInicial.style.right = '-100%'
        vars.STATUS_JOGO.value++
    telaInicial.style.zIndex = 0
    console.log('abrir')
        // setTimeout(() => {
        //     telaMenu.style.zIndex = 2
        // }, 500)
})

document.addEventListener('keydown', (event) => {

    if (event.key == 'Enter' &&  vars.STATUS_JOGO.value == 0) {

        telaInicial.style.opacity = 0
        telaInicial.style.zIndex = 0
        vars.STATUS_JOGO.value++
    }

})

// menu de seleção

const naves = [...document.querySelectorAll('#box-naves > img')]


let urlImgNave = 'img/nave-00.png'

naves.map((el, indice) => {
    el.addEventListener('click', () => {

        urlImgNave = `img/nave-0${indice}.png`
        naves.map((el) => { el.classList.remove('selecionado') })
        el.classList.add('selecionado')

    })
})

const btnsNiveis = [...document.getElementsByClassName('niveis')]
let arrayMeteoros = []
const teclado = document.getElementById('teclado')


function gerarMeteoros(){

    let meteoroAtual = new Meteoro
    arrayMeteoros.push(meteoroAtual)
    nivelAtual.boxNivel.appendChild(meteoroAtual.divMeteoro)

}

let nivelAtual
let nave

btnsNiveis.map((el, indece) => {

    if (indece != 0) {
        el.style.pointerEvents = 'none'
    }

    el.addEventListener('click', () => {

        // statusDoJogo = 2
            telaMenu.style.left = '-100%'
            teclado.style.bottom = '0%'
            nivelAtual = new Nivel()
            nave = new Nave(urlImgNave)
            nivelAtual.boxNivel.appendChild(nave.boxNave)
            main.appendChild(nivelAtual.boxNivel)

            let chuvaDeMeteoros = setInterval(() => {

                gerarMeteoros()
                if(arrayMeteoros.length >= 5){
                    clearInterval(chuvaDeMeteoros)
                }

            }, 2000)

              
                
            // setTimeout(() => {
                
            //     nivelAtual.nave.style.animation = 'sair 1s  linear forwards'

            // }, 3000)
        // nivelAtual.rodarJogo
        // TELA_MENU.style.left = '-100%'

    })
})

export {arrayMeteoros, nivelAtual, nave}

