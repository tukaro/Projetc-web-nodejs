const express = require ('express');
const router = express.Router();

const motorsportController = require('../app/controllers/MotorsportController')

router.get('/:slug', motorsportController.motorsport);
router.get('/', motorsportController.detailmotorsport);


module.exports= router;