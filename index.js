let beli = require('./beli')

let uang = 25000

let rokok = {'item': 'rokok', 'harga': 15000, 'waktu': 1000};
let korek = {'item': 'korek', 'harga': 5000, 'waktu': 1000};
let kopi = {'item': 'kopi', 'harga': 6000, 'waktu': 1000};

beli(uang, rokok, function(charge) {
    beli(charge, korek, function(charge) {
        beli(charge, kopi, function() {
        })
    })  
})
