var products = require("../../data/products.json");
var Products = require("../models/products");
const index = async (req, res, next) => {
    try{
        //gunakan find({})
        //untuk mengambil seluruh data dari collection
        const prod = await Products.find({});
        res.render('index', {
        title: 'Toko Online Sederhana - Ini Dari Mongo DB',
        products: prod
        });
    }catch(err){
        res.status(500).send("Gagal memuat produk");
    }
};

const detail = async(req, res, next) => {
    const productId = parseInt(req.params.id); //Tangkap ID dari URL
    const product = products.find(p => p.id === productId); //Cari produk by id

    if(!product){ //jika produk tidak ditemukan
        return res.status(404).send('Produk tidak ditemukan!');
    }
    res.render('product-detail',
        {
            title : product.name,
            product : product
        }
    );
};
module.exports = router;