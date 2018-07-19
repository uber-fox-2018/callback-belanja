const beli= require ('./beli.js')

class Barang {
    constructor (nama, harga, waktu) {
        this.item= nama
        this.harga= harga
        this.waktu= waktu

    }
}

class Daging extends Barang {
    constructor () {
        super('Daging', 100000, 3000)
    }
}

class Ikan extends Barang {
    constructor () {
        super('Ikan', 90000, 3000)
    }
}

class Sayur extends Barang {
    constructor () {
        super('Sayur', 10000, 3000)
    }
}

class Buah extends Barang {
    constructor () {
        super('Daging', 20000, 3000)
    }
}

class Tahu extends Barang {
    constructor () {
        super('Tahu', 5000, 3000)   
    }
}

var daging= new Daging
var ikan= new Ikan
var sayur= new Sayur
var buah= new Buah
var tahu= new Tahu


beli(1000000, daging,function(kembalian){
	beli(kembalian,ikan,function(kembalian){
		beli(kembalian,sayur, function(kembalian){
			beli(kembalian,buah,function(kembalian){
				beli(kembalian,tahu,function(kembalian){

				})
			})
		})
	})
})