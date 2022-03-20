let products = [
    {
        id: 2341134121,
        kate: "Fast Food",
        nama: "Noodle",
        harga: 3500,
        stok: 10
    },
    {
        id: 294232780985122,
        kate: "Electronic",
        nama: "Casing",
        harga: 300000,
        stok: 5
    },
    {
        id: 2341134123,
        kate: "Cloth",
        nama: "Hoodie",
        harga: 150000,
        stok: 9
    },
    {
        id: 2341324132434124,
        kate: "Fruit",
        nama: "Apple",
        harga: 10000,
        stok: 7
    }
]


class Product {
    constructor(id, kate, nama, harga, stok) {
        this.id = id
        this.kate = kate
        this.nama = nama
        this.harga = harga
        this.stok = stok
    }
}


let a = Date.now()
console.log(a)


let indexEdit = null

let cart = []

let totalPrice = 0