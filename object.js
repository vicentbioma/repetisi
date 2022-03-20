let obj = {
    name: 'Apple'
    // price : 10000,
    // stock : 9
}

// How to access value in object
console.log(obj.name)
console.log(obj["price"])

// Make object With New
let obj2 = new Object() // let obj2 = {}
obj2.username = "Juan"
console.log(obj2)

// Method
let obj3 = {
    name: "Bioma",
    greet() {
        console.log(`hello`)
    }
}
// how to access method
obj3.greet()
// 'metohd adalah function di dalam object

// This
let obj4 = {
    name : "kuroky",
    intro : function() {
        console.log(`Hello My name  is ` + this.name)
    }
}
obj4.intro()
