const beli = require('./beli')

function beliMakan(food,money) {
    beli(money,food[0],function(kembalian){
        beli(kembalian,food[1],function(kembalian){
            beli(kembalian,food[2],function(kembalian){
                beli(kembalian,food[3],function(kembalian){
                    beli(kembalian,food[4],function(kembalian){
                    })
                })
            })
        })
    })
}

let money = 100000

let food = [{
    item: 'Nasi Goreng',
    harga: 10000,
    waktu: 2000,
},{
    item: 'Sushi',
    harga: 20000,
    waktu: 2000,
},{
    item: 'Lalapan',
    harga: 15000,
    waktu: 2000,
},{
    item: 'Mie Ayam',
    harga: 12000,
    waktu: 2000,
},{
    item: 'Sate Ayam',
    harga: 18000,
    waktu: 2000,
}]

beliMakan(food,money);
