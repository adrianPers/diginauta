
import * as F from '../funcoes.js'

class Meteoro{

    constructor(){

        this.divMeteoro = document.createElement('div')
        this.divMeteoro.classList.add('meteoro')
        
        this.imgMeteoro = document.createElement('img')
        this.imgMeteoro.setAttribute('src', './IMG/meteoro.png') 

        this.textoMeteoro = document.createElement('span')
        this.textoMeteoro.innerHTML = 'texto'

        this.divMeteoro.append(this.textoMeteoro)
        this.divMeteoro.append(this.imgMeteoro)

        this.posicaoX = F.numeroAleatorioM5(0, 95)
        this.posicaoInicaiX = this.posicaoX
        this.posicaoY = -5

        this.parmDistX = (this.posicaoX  > 47.5 ? this.posicaoX - 47.5 : 47.5 - this.posicaoX)/18
        
    }
    i = 1

    descer(){

        this.divMeteoro.style.top = `${this.posicaoY}%`
        this.divMeteoro.style.left = `${this.posicaoX}%`

        this.posicaoY = this.posicaoY +5
        this.posicaoX = (this.posicaoInicaiX > 47.5 ? this.posicaoX - this.parmDistX : this.posicaoX + this.parmDistX)
        
        if(this.posicaoY > 85){
            clearInterval(this.atingirNave)
        }

        this.i++

    }

    getParmX(){
        return this.parmDistX*18
    }

    getXInicial(){
        return this.posicaoInicaiX
    }

    atingirNave = setInterval(() =>{
        this.descer()
    }, 200 )



}

export default Meteoro