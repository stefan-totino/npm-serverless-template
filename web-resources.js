const serverless = require('serverless-http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/index.html', async (req, res) => {
    await res.send("<h1>Hello World! From an AWS Lambda function provided by ZECTR :)</h1>")
})

module.exports.handler = serverless(app);
 