const beli = require('./beli')
var candy = {item : 'candy', harga : 500, waktu : 2000}
var bread = {item : 'bread', harga : 17500, waktu : 5000}
var milk = {item : 'milk', harga : 2000, waktu : 2000}
var rice = {item : 'rice', harga : 3000, waktu : 2000}
var popCorn = {item : 'pop corn', harga : 3000, waktu : 2000}



beli(25000, candy, function(kembalian){
    if(kembalian > 0){
        beli(kembalian, bread, function(kembalian){
            if(kembalian > 0){
                beli(kembalian,milk, function(kembalian){ 
                    if(kembalian > 0){
                        beli(kembalian, rice, function(kembalian){ 
                            if(kembalian > 0){
                                beli(kembalian, popCorn, function(kembalian){
                                    if(kembalian > 0){
                                        console.log(`sisa belanja adalah ${kembalian}`);
                                    }
                                    
                                })
                            }
                        })
                    }
                })
            }
        })
    }   
       
})
