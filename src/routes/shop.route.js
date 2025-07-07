const express = require('express');
const productsController = require('../controllers/products.controller')
const shopRouter = express.Router();


shopRouter.get('/', productsController.getProduct)

module.exports = shopRouter;
