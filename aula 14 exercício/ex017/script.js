function tabuada() {
    var num = Number(document.getElementById('num').value)
    var resultado = document.getElementById('resultado')
    
    resultado.innerHTML = ''

    for (var i = 1; i <= 10; i++) {
        let item = document.createElement('option')
        item.text = `${num} x ${i} = ${i*num}`
        item.value = i
        resultado.appendChild(item)
    }
}