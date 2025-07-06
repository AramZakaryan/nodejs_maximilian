const express = require('express');
const bodyParser = require('body-parser');
const adminRouter = require("./routes/adminRoute");
const shopRouter = require("./routes/shopRoute");
const path = require("node:path");
const srcDir = require("./utils/srcDir.js");

const app = express();

app.use(express.static(path.join(srcDir, 'public')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/shop', shopRouter);

app.use('/admin', adminRouter);

app.use((req, res) => {
    res.sendFile(path.join(srcDir, 'views', '404.html'));
});


app.listen(7777);

