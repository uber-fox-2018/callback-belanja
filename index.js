const beLi = require("./beli");

let buku = {item: 'Buku', harga: '5000', waktu: 1000}
let tas = {item: 'Tas', harga: '10000', waktu: 1000}
let jamTangan = {item: 'Jam Tangan', harga: '15000', waktu: 1000}
let baju = {item: 'Baju', harga: '8000', waktu: 1000}
let sepatu = {item: 'Sepatu', harga: '15000', waktu: 1000}

beLi(50000, buku, function(kembalian){
  beLi(kembalian, tas, function(kembalian) {
    beLi(kembalian, jamTangan, function(kembalian){
      beLi(kembalian, baju, function(kembalian){
        beLi(kembalian, sepatu, function(kembalian){

        })
      })
    })
  })
})
