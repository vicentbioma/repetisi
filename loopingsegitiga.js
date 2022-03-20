let res = ''
for (let i = 0; i < 5; i++) {
    res += ` * `
}
console.log(res)


let res2 = ''
for (let i = 0; i < 5; i++) {
    res2 += ' * ' + '\n'
}
console.log(res2)

let res3 = ''
// ' * * * * * '
// ' * * * * * '
// ' * * * * * '
// ' * * * * * '
// ' * * * * * '
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        res += ' * '
    }
    res3 += '\n'
}
console.log(res3)


let res4 = ''
for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= 1; j++) {
        res4 += ' * '
    }
    res4  += '\n'
}
console.log(res4)


