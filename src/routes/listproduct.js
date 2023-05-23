const express = require ('express');
const router = express.Router();

const listproductController = require('../app/controllers/ListproductController')

router.get('/:slug', listproductController.detailproduct);
router.get('/', listproductController.productlist);


module.exports= router;