const beli = require(`./beli.js`)

class Item {
    constructor(name, price, time) {
        this.name = name
        this.price = price
        this.time = time
    }
}

const candy = new Item(`candy`, 5000, 1000)
const snack = new Item(`snack`, 9000, 1000)
const drink = new Item(`drink`, 9000, 1000)
const fruit = new Item(`fruit`, 12000, 1000)
const cigar = new Item(`cigar`, 20000, 1000)
const cycle = new Item(`cycle`, 2000000, 1000)
let money = 65000

beli(money, candy, function(kembalian) {
    beli(kembalian, snack, function(kembalian) {
        beli(kembalian, drink, function(kembalian) {
            beli(kembalian, fruit, function(kembalian) {
                beli(kembalian, cigar, function(kembalian) {
                    beli(kembalian, cycle, function(kembalian) {

                    })
                })
            })
        })
    })
})