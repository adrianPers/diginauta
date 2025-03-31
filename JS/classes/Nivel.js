
class Nivel{

    constructor(urlNave){
        this.boxNivel = document.createElement('div')
        this.boxNivel.classList.add('telas')
        this.boxNivel.setAttribute('id', 'nivel-atual')

        this.nave = document.createElement('img')
        this.nave.setAttribute('id', 'nave')
        this.nave.setAttribute('src', urlNave)

        this.boxNivel.appendChild(this.nave)
    }

}

export default Nivel