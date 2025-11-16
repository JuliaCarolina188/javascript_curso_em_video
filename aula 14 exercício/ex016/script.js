function sequencia() {
    var inicio = (document.getElementById('inicio').value)
    var fim = (document.getElementById('fim').value)
    var passo = (document.getElementById('passo').value)

    var resultado = document.getElementById('resultado')
    resultado.innerHTML = ' '

    if ((inicio).length == 0 || (fim).length == 0 || (passo).length == 0) {
        //window.alert('Dado de início, fim ou passo INVÁLIDOS. Insira os dados novamente')
        resultado.innerHTML = 'Impossível contar'
    } else {
        inicio = Number(inicio)
        fim = Number(fim)
        passo = Number(passo)



        if (fim > inicio) {
            for (let i = inicio; i <= fim; i += passo) {
            if (i <= fim - passo) {
                resultado.innerHTML += `${i} 👉`
            }
            else {
                resultado.innerHTML += `${i} 🎯`   
            }
        }
        } else if (inicio > fim) {
            for (let i = inicio; i >= fim; i -= Math.abs(passo)) {
            if (i - Math.abs(passo) >= fim) {
                resultado.innerHTML += `${i} 👉 `
            }
            else {
                resultado.innerHTML += `${i} 🎯 `   
            }
        }
        }
    }
}