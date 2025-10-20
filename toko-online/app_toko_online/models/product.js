const mongoose = require("mongoose");

// buat scehema produk
const productSchema = new mongoose.Schema({
  //tidak perlu membuat prompti id karena akan dibuat otomatis
  // dengan nama_id
  name: {
    type: String,
    required: [true, "Nama produk harus diisi"],
    trim: true, //menghilangkan spasi diawal dan diakhir
  },
  price: {
    type: Number,
    required: [true, "Harga produk harus diisi"],
    min: [1000, "Harga produk minimal 1000"],
    //max : [100000000, "Harga produk maksimal 100000000"],
  },
  description: {
    type: String,
    required: false, //memnandakan kolom wajib diisi atau tidak diisi
  },
  stock: {
    type: Number,
    default: 0, //memberikan nilai bawaan/default
  },
  createAI: {
    type: Date,
    default: Date.now, //memberikan nilai bawaan/default
  },
});

// membuat model dari schema
const Product = mongoose.model("Product", productSchema);

// export model Product
module.exports = Product;