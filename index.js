const beli = require('./beli');

let buku = {item: 'Buku', harga: 5000};
let airGalon = {item: 'Air Mineral Galon', harga: 18000};
let amoxilin = {item: 'Amoxilin', harga: 2500};
let nasiGoreng = {item: 'Nasi Goreng', harga: 13000};
let paracetamol = {item: 'Paracetamol', harga: 3000};

beli(100000, buku, function(kembalian) {
  if(kembalian > 0) {
    beli(kembalian, paracetamol, function(kembalian){
      if(kembalian > 0) {
        beli(kembalian, nasiGoreng, function(kembalian) {
          if(kembalian > 0) {
            beli(kembalian, airGalon, function(kembalian) {
              if(kembalian > 0) {
                beli(kembalian, amoxilin, function(kembalian) {
                });
              }
            });
          }
        });
      }
    });
  }
});
  

