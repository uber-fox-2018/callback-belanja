const beli = require('./beli.js')

let barang = [
  {item: 'kacang',harga: 2000,waktu: 1000,},
  {item: 'roko',harga: 25000,waktu: 200,},
  {item: 'kokakola',harga: 10000,waktu: 300,},
  {item: 'ao',harga: 5000,waktu: 2000,},
  {item: 'gorengan',harga: 15000,waktu: 500,},
]
beli(100000,barang[0],function(kembalian){
  beli(kembalian,barang[1],function(kembalian){
    beli(kembalian,barang[2],function(kembalian){
      beli(kembalian,barang[3],function(kembalian){
        beli(kembalian,barang[4],function(kembalian){

        })
      })
    })
  })
})