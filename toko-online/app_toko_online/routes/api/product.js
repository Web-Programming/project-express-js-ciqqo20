var express = require('express');
var router = express.Router();
var mainController = require("../../controllers/product");

//url create - POST (/api/produk)
router.post("/", productController.create);
//url read all - GET (/api/produk)
router.get("/", productController.all); //done
//url read one - detail - GET (/api/produk/:id)
router.get("/:id", productController.detailproduk);
//url update - PUT (/api/produk/:id)
router.put("/:id",productController.update);
//url delete - DELETE (/api/produk/:id)
router.delete("/:id",productController.remove);

MediaSourceHandle.exsports = router