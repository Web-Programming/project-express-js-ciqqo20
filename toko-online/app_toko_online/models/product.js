const { default: mongoose } = require("mongoose");
const mogoose = require("mongoose");

//buat skema Produk
const ProducSchema = new mongoose.Schema({
//tidak perlu membuat properti id karena akan dibuat otomatis
//dengan nama_id
name:{
    type : string,
    require: [true, "Nama produk harus di isi"],
    trim: true,
},
price: {
    type : Number,
    require : [true,"Harga produk harus diisi"],
    min: [1000, "harga produk minimal 1000"],

},
descrption: {
    type : String,
    require: false,//menandakan kolom wajib diisi atau tidak
},
stock: {
    type: Number,
    default:0,//memberikan nilai bawaan/default
},
createAt:{
    type: Data,
    default: Date.now

}
 
});

//Buat model dari Schema
const Product =mongoose.model('Product',ProducSchema);

module.exports = Product;
