const express = require ('express');
const router = express.Router();

const ownershipController = require('../app/controllers/OwnershipController')

router.get('/:slug', ownershipController.ownership);
router.get('/', ownershipController.detailownership);


module.exports= router;