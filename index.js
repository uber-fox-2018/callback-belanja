const beli = require('./beli')

// beli(50000,{item: 'pisau', harga: 8000, waktu: 2000},kembalian
beli(50000,{item: 'mie ayam', harga: 10000, waktu: 2000}, function(kembalian){
    beli(kembalian, {item : 'paku', harga: 4000, waktu: 2000}, function(kembalian){
        beli(kembalian, {item: 'cendol', harga: 6000, waktu: 2500}, function(kembalian){
            beli(kembalian, {item: 'sabun', harga: 12000, waktu: 3000}, function(kembalian){
                beli(kembalian, {item: 'nasi padang', harga: 14000, waktu: 4000}, function(kembalian){
                    beli(kembalian, {item: 'gado-gado', harga: 12000, waktu: 2400}, function(kembalian){
                        
                    })
                })
            })
        })
    })

})