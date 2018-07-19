function beli(uang, obj, cb){
  console.log(`Saya pergi membeli ${obj.name}`)
  setTimeout(function(){
      let kembalian = uang
      if (kembalian > obj.price) {
        let kembalian = uang - obj.price
        console.log(`Saya sudah membeli ${obj.name} uang kembaliannya ${kembalian}`);
        cb(kembalian)
      }else{
        console.log(`uang gk cukup nih buat beli ${obj.name} kembaliannya cuma ${kembalian}`);
      }
  }, obj.time);
}

module.exports = beli;
