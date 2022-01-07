const express = require('express');
const app = express();
const cors = require("cors")
const bodyParser = require("body-parser")
app.use(cors())
app.use(bodyParser())
let data = {}
app.post('/', function (req, res) {
    const { body } = req
    console.log("🚀 ~ file: server.js ~ line 9 ~ body", body)
    data = body.data
    res.json({
        status: 200,
        data: {
            message: 'Hello World',
            data
        }
    });
});


app.get('/', function (req, res) {
    res.json({
        status: 200,
        data: {
            message: 'Hello World',
            data
        }
    });
});
const server = app.listen(4000, function () {
    const host = server.address().address
    const port = server.address().port
    console.log("Ung dung Node.js dang hoat dong tai dia chi: http://%s:%s", host, port)
});