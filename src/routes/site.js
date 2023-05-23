const express = require ('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController')


router.get('/map', siteController.map);
router.get('/museum', siteController.museum);
router.get('/', siteController.home)

module.exports= router;