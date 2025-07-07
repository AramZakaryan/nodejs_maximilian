const path = require("node:path");
const fs = require('node:fs')
const srcDir = require("../utils/srcDir")
const dbPath = path.join(srcDir, 'db', 'products.json')


module.exports = class Product {
    constructor(title) {
        this.title = title
    }

    save() {

        fs.readFile(dbPath, (err, data) => {
                if (!err) {
                    const dataString = data.toString()
                    const products = dataString ? JSON.parse(dataString) : []
                    products.push(this)
                    fs.writeFile(dbPath, JSON.stringify(products), (err) => {
                        if (err) console.log(err);
                    })
                }
            }
        )
    }

    static fetchAll(cb) {
        fs.readFile(dbPath, (err, data) => {
                if (!err) {
                    const dataString = data.toString()
                    return cb(dataString ? JSON.parse(dataString) : [])
                }
            }
        )
    }
}
