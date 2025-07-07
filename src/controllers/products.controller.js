const Product = require("../models/products.model");

exports.getAddProduct = (req, res) => {
    res.render('add-product',
        {
            path: "/admin/add-product",
            pageTitle: 'Add Product'
        });
}

exports.postAddProduct = (req, res) => {

    const product = new Product(req.body.title)
    product.save()

    res.render('add-product',
        {
            path: "/admin/add-product",
            pageTitle: 'Add Product'
        });
}

j
