const beli = require ('./beli');

let candy = {
  item: 'candy',
  harga: 1000,
  waktu: 1000
}

let gum = {
  item: 'gum',
  harga: 2000,
  waktu: 2000
}

let chips = {
  item: 'chips',
  harga: 5000,
  waktu: 5000
}

let money = 20000
beli(money, candy, change => {
  beli (change, gum, kembalian => {
    beli (kembalian, chips, sisa => {
      beli (sisa, candy, change => {
        beli (change, gum, uangSekarang => {
          console.log(`udah kebeli semua, sisa uang ${uangSekarang}`)
        })
      })
    })
  })
})
