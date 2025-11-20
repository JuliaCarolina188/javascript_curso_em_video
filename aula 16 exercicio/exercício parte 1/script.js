let numeros = []
let resultado = document.getElementById('resultado')
let maior = 0   
let menor = 0
let soma = 0

function adicionar () {
    let input = Number(document.getElementById('num').value)
    let recebendo = document.getElementById('recebendo')

    if (input > 100 || input < 0) {
        window.alert('Número maior que 100 ou menor que 0!')
    } else if (numeros.includes(input)) {
        window.alert('Número já adicionado!')
    } else {
        if (numeros.length == 0) {
            let item = document.createElement( 'button')
            item.onclick = analisar
            item.innerText = 'Analisar'
            recebendo.appendChild(item)

            menor = input
        }

        numeros.push(input)
        soma += input

        if (input > maior) {
            maior = input
        }
        if (input < menor) {
            menor = input
        }

        resultado.innerHTML = ''
        if (numeros.length < 5) {
            resultado.size = numeros.length
        } else {
            resultado.size = 5
        }

        for (let i in numeros){
            let item = document.createElement('option')
            item.innerText = `Número ${numeros[i]} `
            resultado.appendChild(item)
        }
    }
}

function analisar() {
    var resultado = document.getElementById('resultados')
    resultado.innerHTML += `<br><br>Ao todo, temos ${numeros.length} números cadastrados.`
    resultado.innerHTML += `<br>O maior número informado foi ${maior}`
    resultado.innerHTML += `<br>O menor número informado foi ${menor}`
    resultado.innerHTML += `<br>A soma de todos os números é igual a ${soma}`
    resultado.innerHTML += `<br>A média entre todos os números é igual a ${soma/numeros.length}`
}