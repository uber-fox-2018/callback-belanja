const beli = require('./beli.js')

let susu = {
    item : 'susu',
    harga : 2000,
    waktu : 100
}

let kopi = {
    item : 'kopi',
    harga : 1000,
    waktu : 100
}

let chiki = {
    item : 'chiki',
    harga : 1500,
    waktu : 100
}

let madu = {
    item : 'madu',
    harga : 2000,
    waktu : 100
}

let sikatGigi = {
    item : 'sikat gigi',
    harga : 500,
    waktu : 100
}

let mainan = {
    item : 'mainan',
    harga : 3000,
    waktu : 100
}

beli(10000, susu, function(getKembalian){
    beli(getKembalian, kopi, function(getKembalian){
        beli(getKembalian, chiki, function(getKembalian){
            beli(getKembalian, madu, function(getKembalian){
                beli(getKembalian, sikatGigi, function(getKembalian){
                    beli(getKembalian, mainan, function(getKembalian){
    
                    })
                })
            })
        })
    })  
})





