#!/usr/bin/env node

if (process.argv.length != 4) {
    throw 'Expected 2 arguments: moduleName and exposeAs'
}

const fs = require('fs')
const browserify = require('browserify')
const digestStream = require('digest-stream')

const moduleName = process.argv[2]
const exposeAs = process.argv[3]

const temp1File = `vendor.${moduleName}.temp1.js`
const temp2File = `vendor.${moduleName}.temp2.js`

fs.writeFileSync(temp1File, `// Vendorated with https://github.com/mushishi78/vendorate
window.Vendor = window.Vendor || {};
Vendor.${exposeAs} = require('${moduleName}');
`)

const writeStream = fs.createWriteStream(temp2File)
let digest

const b = browserify()
b.add(temp1File)
b.bundle()
    .pipe(digestStream('md5', 'hex', d => digest = d))
    .pipe(writeStream)

writeStream.on('finish', function () {
    fs.unlinkSync(temp1File)
    fs.renameSync(temp2File, `vendor.${moduleName}.${digest}.js`)
})

