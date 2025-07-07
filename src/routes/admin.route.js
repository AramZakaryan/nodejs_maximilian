const express = require('express');
const productsController = require('../controllers/products.controller')

const adminRouter = express.Router();

adminRouter.get('/add-product', productsController.getAddProduct)

adminRouter.post('/add-product', productsController.postAddProduct)

module.exports = adminRouter;
