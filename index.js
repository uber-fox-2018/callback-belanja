const beli = require('./beli')

let jajanan = [
  {
    item: 'Coklat',
    harga: 15000,
    waktu: 1000
  },
  {
    item: 'Roti',
    harga: 20000,
    waktu: 1500
  },
  {
    item: 'Kripik',
    harga: 10000,
    waktu: 900
  },
  {
    item: 'Ice Cream',
    harga: 25000,
    waktu: 1200
  }, 
  {
    item: 'Thai Milk',
    harga: 15000,
    waktu: 2000
  }
]

beli(100000, jajanan[0], function(kembalian) {
  beli(kembalian, jajanan[1], function(kembalian) {
    beli(kembalian, jajanan[2], function(kembalian) {
      beli(kembalian, jajanan[3], function(kembalian) {
        beli(kembalian, jajanan[4], function() {
          console.log("Jajanan sudah terbeli semua")
        })
      })
    })
  })
})