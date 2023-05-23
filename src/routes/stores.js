const express = require ('express');
const router = express.Router();

const storesController = require('../app/controllers/StoresController')


router.get('/:slug', storesController.productlist);
router.get('/', storesController.store)


module.exports= router;

