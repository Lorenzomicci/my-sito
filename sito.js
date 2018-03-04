const express = require('express')
const html = require('html')
const app = express()

app.get('/', (req, res) =>   res.sendFile('index.html', {root: __dirname })     )

app.listen(3000, () => console.log('Example app listening on port 3000!'))