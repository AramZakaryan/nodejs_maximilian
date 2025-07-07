const express = require('express');
const products = require("../db/db");
const shopRouter = express.Router();


shopRouter.get('/', (req, res) => {
    res.render('shop', {
        path: '/shop',
        pageTitle: 'Gago Shop',
        products
    });
})

module.exports = shopRouter;
