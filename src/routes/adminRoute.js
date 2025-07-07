const express = require('express');
const products = require('../db/db')

const adminRouter = express.Router();


adminRouter.get('/add-product', (req, res) => {

    res.render('add-product',
        {
            path: "/admin/add-product",
            pageTitle: 'Add Product'
        });
})

adminRouter.post('/add-product', (req, res) => {

    products.push(req.body)

    res.render('add-product',
        {
            path: "/admin/add-product",
            pageTitle: 'Add Product'
        });
})


module.exports = adminRouter;
