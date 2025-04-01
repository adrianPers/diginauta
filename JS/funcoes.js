function numeroAleatorio(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min

}

function numeroAleatorioM5(min, max) {

    let num =Math.floor(Math.random() * (max - min + 1)) + min
    return num = num + (5 - (num % 5))
}

function calcAngulo(c1, c2) {
    let hip = (((c1 ** 2) + (c2 ** 2)) ** 0.5)
    return Math.asin(c1 / hip) * (180 / Math.PI)
}



export {numeroAleatorio, numeroAleatorioM5, calcAngulo}