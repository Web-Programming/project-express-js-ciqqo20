const mongoose = require("mongoose");

// Buat skema User
const UserSchema = new mongoose.Schema({
    // _id akan dibuat otomatis oleh MongoDB
    username: {
        type: String,
        required: [true, "Username harus diisi"],
        unique: true,
        trim: true, // menghapus spasi di awal dan akhir
    },
    email: {
        type: String,
        required: [true, "Email harus diisi"],
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Harap isi alamat email yang valid'], //Regex untuk validasi format email
    },
    password: {
        type: String,
        required: [true, 'kata sandi harus diisi.'],
        minlenght: [6, 'kata sandi harus diisi.'],
        select: false, //Penting : Jangan sertakan password saat query GET
    },
    address: {
        type: String,
        required: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    createAt: {
        type: Date,
        default: Date.now,
    }
});

// Buat model dari Schema
const User = mongoose.model('User', UserSchema);

module.exports = User;
