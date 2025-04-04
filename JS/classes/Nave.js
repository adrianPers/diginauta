import Disparo from "./Disparo.js"

class Nave{

    constructor(urlNave){
        this.boxNave = document.createElement('div')
        this.boxNave.setAttribute('id', 'nave')

        this.ImgNave = document.createElement('img')
        this.ImgNave.setAttribute('src', urlNave)

        this.boxNave.appendChild(this.ImgNave)
    }

    atirar(tela, indice, posicaoInicaiX, pamDistX){

        this.disparo = new Disparo(tela, indice, posicaoInicaiX, pamDistX)
        tela.appendChild(this.disparo.divDisparo)

    }



}

export default Nave