// src/index.ts

const express = require('express');
const bodyParser = require('body-parser');
const adminRouter = require("./routes/adminRoute");
const shopRouter = require("./routes/shopRoute");
const path = require("node:path");
const srcDir = require("./utils/srcDir.js");

const app = express();


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(srcDir, 'public')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/shop', shopRouter);

app.use('/admin', adminRouter);

app.use((req, res) => {
    res.render(path.join(srcDir, 'views', '404'), {
        pageTitle: "404 Page Not Found"
    });
});

app.listen(7777);

