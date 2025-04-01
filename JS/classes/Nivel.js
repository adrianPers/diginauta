
class Nivel{

    constructor(urlNave){
        this.boxNivel = document.createElement('div')
        this.boxNivel.classList.add('telas')
        this.boxNivel.setAttribute('id', 'nivel-atual')


        this.nave = document.createElement('div')
        this.nave.setAttribute('id', 'nave')

        this.ImgNave = document.createElement('img')
        this.ImgNave.setAttribute('src', urlNave)

        this.nave.appendChild(this.ImgNave)

        this.boxNivel.appendChild(this.nave)
    }

}

export default Nivel