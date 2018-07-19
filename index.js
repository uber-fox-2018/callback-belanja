let beli = require('./beli.js');

let uang = 50000;

let icecream = {'item': 'icecream', 'harga': 20000, 'waktu': 1000};
let noodles = {'item': 'noodles', 'harga': 15000, 'waktu': 3000};
let cola = {'item': 'cola', 'harga': 10000, 'waktu': 1000};
let juice = {'item': 'juice', 'harga': 10000, 'waktu': 2000};

function countMoney(kembalian) {
    uang = uang - kembalian;
}

beli(uang, icecream, function (kembalian) {
    beli(kembalian, noodles, function (kembalian) {
        beli(kembalian, cola, function (kembalian) {
            beli(kembalian, juice, function (kembalian) {
                countMoney(uang);
            })
        })
    })
})