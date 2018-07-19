const beli = require('./beli')

beli(50000, {
    item: 'Nasi Padang',
    harga: 12000,
    waktu: 2000
}, (kembalian) => {
    console.log(kembalian);
    beli(kembalian, {
        item: 'Soda Susu',
        harga: 10000,
        waktu: 1000
    }, (kembalian) => {
        console.log(kembalian);
        beli(kembalian, {
            item: 'Martabak',
            harga: 10000,
            waktu: 500
        }, (kembalian) => {
            console.log(kembalian);
            beli(kembalian, {
                item: 'Kue Putu',
                harga: 7000,
                waktu: 1200
            }, (kembalian)=> {
                console.log(kembalian);
                beli(kembalian, {
                    item: 'Ketoprak',
                    harga: 12000,
                    waktu: 2000
                }, (kembalian) => {
                    console.log(kembalian);
                })
            })
        })
    })
})