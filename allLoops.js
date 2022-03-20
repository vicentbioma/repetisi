// let i = 3
// while (i > 0) {
//     console.log(`Looping While`)
//     i--
// }

// do while
// let j = 3
// do {
//     console.log(`Looping Do While`)
//     j--
// } while (j > 0)

// FOR
// for (let k = 0; k > 5; k++) {
//     console.log(`Looping For`)
// }

// Break and Continue
// let a = 1 
// while (a < 5) {
//     console.log(a)
//     if (a == 2) break
//     a++
// }

// for(let b = 0;b < 5; b++) {
//     console.log(b)
//     if (b == 3) break
// }


// continue => untuk menskip task sesuai kondisi
for (let c = 0; c < 5; c++) {
    if (c % 2 == 0) continue
    console.log(c)
}

let str = `hello`
for (let d = 0; d < str.length; d++) {
if (str.charAt(d) == `l`) continue
console.log(str.charAt(d))
}



