function numeroAleatorio(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min

}

function numeroAleatorioM5(min, max) {
    let num =Math.floor(Math.random() * (max - min + 1)) + min
    return num = num + (5 - (num % 5))
}

function calcAngulo(cO, cA) {
    return (Math.atan(cO / cA)) * (180 / Math.PI)
}



export {numeroAleatorio, numeroAleatorioM5, calcAngulo}