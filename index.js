const beli = require('./beli')

class ObjItem {
 constructor(item, harga, waktu) {
     this.item = item
     this.harga = harga
     this.waktu = waktu
 }
}

let gula = new ObjItem("Gula", 2000, 1000)
let kopi = new ObjItem("Kopi", 5000, 1000)
let teh = new ObjItem("Teh", 1000, 1000)
let beras = new ObjItem("Beras", 10000, 1000)
let mie = new ObjItem("Mie", 1700, 1000)

let uang = 100000

function itungUang(kembalian){
    kembalian = uang - kembalian
}

beli(uang, gula, function(kembalian){
    beli(kembalian, kopi, function(kembalian){
        beli(kembalian, teh, function(kembalian){
            beli(kembalian, beras, function(kembalian){
                beli(kembalian, mie, function(kembalian){
                    console.log('item sudah dibeli semua');
                    
                })
            })
        })
    })
})

