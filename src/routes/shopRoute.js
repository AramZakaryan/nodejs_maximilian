const express = require('express');

const shopRouter = express.Router();

shopRouter.get('/', (req, res) => {
    res.send(`this is shop page`);
})

module.exports = shopRouter;
