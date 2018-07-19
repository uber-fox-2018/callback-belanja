const beli = require('./beli.js');
beli(50000, {item: "permen", harga: 5000, waktu: 100}, function(sisaBeliPermen){
    beli(sisaBeliPermen, {item: "roti", harga: 10000, waktu: 200}, function(sisaBeliRoti){
        beli(sisaBeliRoti, {item: "rujak", harga: 20000, waktu: 300}, function(sisaBeliRujak){
            beli(sisaBeliRujak, {item: "cendol", harga: 5000, waktu: 100}, function(sisaBeliCendol){
                beli(sisaBeliCendol, {item: "buah", harga: 10000, waktu: 100}, function(sisaBeliBuah){
                    console.log("No money, tarik atm dl.")
                })
            })
        })
    })
});
