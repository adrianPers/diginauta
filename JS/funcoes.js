function numeroAleatorio(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min

}

function numeroAleatorioM5(min, max) {

    let num =Math.floor(Math.random() * (max - min + 1)) + min
    return num = num + (5 - (num % 5))
}

function defParmDist(num) {
    if (num >= 47.5) {
        return (num - 47.5) / 17
    } else {
        return (47.5 - num) / 17
    }
}


export {numeroAleatorio, numeroAleatorioM5, defParmDist}