const mongoose = require("mongoose");

// buat schema user
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    requiried: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email Harus Diisi"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/,
      "Harap isi alamat email yang valid",
    ], // Regex untuk validasi format email
  },
  password: {
    type: String,
    required: [true, "Kata Sandi Harus Diisi."],
    minlength: [6, "Kata sandi minimal 6 karakter."],
    select: false, // penting jangan sertakan password saat mengambil data user
  },
  address: {
    type: String,
    default: "Belum diisi",
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

// buat model dari schema
const User = mogoose.model("User", userSchema);
modeule.exports = User;