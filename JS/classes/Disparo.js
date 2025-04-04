
class Disparo{

    constructor(tela, indiceMeteoro, posicaoInicalX, parmDistX){

        this.divDisparo = document.createElement('img')
        this.divDisparo.classList.add('disparo')
        this.divDisparo.setAttribute('src', './IMG/disparo.gif')

        this.posicaoX = 45
        this.posicaoY= 10

        this.indice = 0

        // this.indiceMeteoro = indiceMeteoro
        this.posicaoInicalX = posicaoInicalX
        this.parmDistX = parmDistX

        this.movendo = setInterval(() => {

            this.mover()
            if(this.indice >= indiceMeteoro){
                setTimeout(() => {
                    clearInterval(this.movendo)
                    tela.removeChild(this.divDisparo)

                }, 100)

            }

        }, 50)


    }
    
    mover(){

        this.divDisparo.style.bottom = `${this.posicaoY}%`

        this.divDisparo.style.left = (this.posicaoInicalX > 45.7 ? `${50 + (this.parmDistX * this.indice)}%` :  `${50 + (-this.parmDistX * this.indice)}%` )
        this.posicaoY = this.posicaoY + 5
        // console.log(indice)
        this.indice++
    
    }
}

export default Disparo