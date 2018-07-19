let beli = require('./beli.js')



beli(10000,{item:'rokok',harga:1000,waktu:2000},function(kembalian){
    beli(kembalian,{item:'ciki',harga:2000,waktu:1000},function(kembalian){
      beli(kembalian,{item:'baygon',harga:500,waktu:2000},function(kembalian){
        beli(kembalian,{item:'lem',harga:1000,waktu:2000},function(kembalian){
          beli(kembalian,{item:'permen',harga:50000,waktu:1000},function(kembalian){
            console.log('terimakasih sudah belanja di warung kami, sisa saldo anda : ' + kembalian)
            console.log('\n')
            home(kembalian,selamatDatang(kembalian))
          })
        })
      })
    })
  })
  
  
  function home(uang_sisa,callback){
    
  
  }
  
  function selamatDatang(saldo) {
    console.log('############ TOKO KHODHI ##########')
    console.log('selamat datang di toko saya')
    console.log('saldo anda ' + saldo)
    
  }
  