const express = require('express');
const path = require('path');
const srcDir = require('../utils/srcDir');

const adminRouter = express.Router();


adminRouter.get('/', (req, res) => {
    console.log(srcDir);

    res.sendFile(path.join(srcDir, 'views', 'add_product.html'));
})

adminRouter.post('/products', (req, res) => {
    console.log(req.body)
    res.redirect("/admin");
})

module.exports = adminRouter;
