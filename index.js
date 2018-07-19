const Beli = require('./beli')

class Object{
    constructor(item,harga,waktu){
        this.item = item
        this.harga = harga
        this.waktu = waktu
    }
}

let permen = new Object('permen',500,500)
let roti = new Object('roti',2000,500)
let keripik = new Object('keripik',300,500)
let wafer = new Object('wafer',1000,500)

Beli(5000,permen,function(kembalian){
    Beli(kembalian,roti,function(kembalian){
        Beli(kembalian,permen, function(kembalian){
            Beli(kembalian,keripik,function(kembalian){
                Beli(kembalian,wafer,function(kembalian){
                    Beli(kembalian,roti,function(kembalian){

                    })
                })
            })
        })
    })
})
