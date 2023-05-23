const express = require ('express');
const router = express.Router();

const cutstomController = require('../app/controllers/CutstomController')

router.get('/:slug', cutstomController.cutstom);
router.get('/', cutstomController.detailcutstom)


module.exports= router;