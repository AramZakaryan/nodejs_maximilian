// src/index.ts

const express = require('express');
const bodyParser = require('body-parser');
const adminRouter = require("./routes/admin.route");
const shopRouter = require("./routes/shop.route");
const path = require("node:path");
const srcDir = require("./utils/srcDir.js");
const errorsController = require('./controllers/errors.controller')


const app = express();


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(srcDir, 'public')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/shop', shopRouter);

app.use('/admin', adminRouter);

app.use(errorsController.getError404);

app.listen(7777);

