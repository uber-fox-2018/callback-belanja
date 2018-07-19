const beli = require('./beli')

beli(50000, {
    item: 'Nasgor',
    harga: 10000,
    waktu: 500
}, (kembalian) => {
    beli(kembalian, {
        item: 'Teh Tarik',
        harga: 10000,
        waktu: 200
    }, (kembalian) => {
        beli(kembalian, {
            item: 'Cumi',
            harga: 5000,
            waktu : 1000
        }, (kembalian) => {
            beli(kembalian, {
                item: 'Permen',
                harga: 5000,
                waktu: 200
            }, (kembalian) => {
                beli(kembalian, {
                    item: 'Motor',
                    harga: 30000,
                    waktu: 100
                }, (kembalian) => {
                    console.log(kembalian)
                })
            })
        })
    })
}) 

