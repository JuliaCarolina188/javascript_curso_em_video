function parouimpar (n) {
    if (n % 2 == 0) {
        return 'par'
    }
    else {
        return 'impar'
    }
}

console.log(parouimpar(3))
console.log(parouimpar(2))

function soma (n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(2, 5))
console.log(soma(1))

function fatorial1(n) {
    let fat = 1
    for (let i = n; i >= 1; i--){
        fat = fat * i
    }
    return fat
}

console.log(fatorial1(5))

function fatorial2 (n=1) {
    if (n == 1){
        return 1
    } else {
        return n * fatorial2(n - 1)
    }
}

console.log(fatorial2(5))