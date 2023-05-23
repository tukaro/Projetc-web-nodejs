const express = require ('express');
const router = express.Router();

const newController = require('../app/controllers/ListmodelCotroller')

router.get('/:slug', newController.detailmodel)
router.get('/', newController.vehicles);

module.exports= router;