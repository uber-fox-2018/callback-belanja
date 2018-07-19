let beli = require("./beli.js");

class Snack {
  constructor(item, harga, waktu) {
    this.item = item;
    this.harga = harga;
    this.waktu = waktu;
  }
}

let chiki = new Snack("taro", 7000, 1000);
let coklat = new Snack("yamyam", 5000, 1000);
let permen = new Snack("milkita", 2000, 1000);
let minum = new Snack("nutrisari", 5000, 1000);
let biskuit = new Snack("regal", 5000, 1000);

let uang = 10000;

beli(uang, chiki, function(value) {
  beli(value, coklat, function(value) {
    beli(value, permen, function(value) {
      beli(value, minum, function(value) {
        beli(value, biskuit, function(value) {

        });
      });
    });
  });
});
