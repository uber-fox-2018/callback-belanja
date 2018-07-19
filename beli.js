function beli(uang, obj, cb){
  console.log(`Saya pergi membeli ${obj.item}`)
  setTimeout(function(){
    let kembalian = uang - obj.harga
    if (kembalian > 0) {
      console.log(`Saya sudah membeli ${obj.item} kurangnya ${kembalian}`);
      cb(kembalian)
    }else{
      console.log(`uang gk cukup nih buat beli ${obj.item} kurang uang ${Math.abs(kembalian)}`);
      cb(0)
    }
  }, obj.waktu);
}

module.exports = beli;


//uang => jumlah uang yang dbawa
// objItm => {item: 'rokok',harga: 2000,waktu:5}
/* callback => function kembalian (kembalian){

} */