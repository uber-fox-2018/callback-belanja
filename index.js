const beli = require('./beli.js')

let makanan = {
  item: 'Nasi Goreng Petai',
  harga: 15000,
  waktu: 2000
}

let minuman = {
  item: 'Jus Sirsak',
  harga: 9000,
  waktu: 2000
}

let buku = {
  item: 'You don`t know Javascript',
  harga: 100000,
  waktu: 2000
}


// running beli
beli(200000, makanan, function(sisa) {
    beli(sisa, minuman, function(sisa) {
        beli(sisa, buku, function(sisa) {
            beli(sisa, buku, function(sisa) {
                beli(sisa, minuman, function(sisa) { 
                    console.log(`uang saya sekarang tinggal ${sisa}`)
                });
            });
        });
    });
});