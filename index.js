const beli = require('./beli')

class ListBeli {
    constructor(item, harga, waktu) {
        this.item = item
        this.harga = harga
        this.waktu = waktu
    }
}

let beras = new ListBeli('Beras', 8000, 200)
let minyak = new ListBeli('Minyak', 4000, 200)
let susu = new ListBeli('Susu', 12000, 200)
let shampoo = new ListBeli('Shampoo', 1000, 100)


beli(50000, beras, function (kembalianBeras){
    beli(kembalianBeras, minyak, function(kembalianMinyak){
        beli(kembalianMinyak, susu, function(kembalianSusu){
            beli(kembalianSusu, shampoo, function(kembalian){

            })
        })
    })
})