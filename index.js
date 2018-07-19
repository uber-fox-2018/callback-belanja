const beli = require('./beli');

class Item {
    constructor(nama, harga, waktu) {
        this.item = nama,
        this.harga = harga,
        this.waktu = waktu
    }
}

let items = [
    new Item('permen', 1000, 1000),
    new Item('roti', 12000, 1000),
    new Item('coklat', 15000, 1000),
    new Item('donat', 10000, 1000),
    new Item('snack', 8000, 1000),
    new Item('es krim', 4000, 1000),
    new Item('buah', 18000, 1000)
]

let i = 0;

function belanja(uang) {
    if(uang <= 0)
        return;
    if(i >= items.length)
        return;

    beli(uang, items[i++], belanja);
}

belanja(50000);






