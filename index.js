var beli = require('./beli.js')
var mangga = {
    item:'mangga',
    harga: 1000,
    waktu: 1000
}
let permen = {
    item:'permen',
    harga:500,
    waktu:1000
}
let roti = {
    item:'roti',
    harga:3500,
    waktu:1000
}
let minyak = {
    item:'minyak',
    harga:5000,
    waktu:1000
}
let buku = {
    item:'buku',
    harga:1500,
    waktu:1000
}

beli(10000,permen,function(kembalian){
    beli(kembalian,mangga,function(kembalian){
        beli(kembalian,roti,function(kembalian){
            beli(kembalian,minyak,function(kembalian){
                beli(kembalian,buku,function(kembalian){
                })
            })
        })
    })
})