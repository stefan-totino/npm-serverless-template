const [serverless, express] = [require('serverless-http'), require('express')];
const [app, bodyParser] = [express(), require('body-parser')];
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/index.html', async (req, res) => {
    await res.send("<h1>Hello World! From an AWS Lambda function via GitHub Actions :)</h1>")
})

module.exports.handler = serverless(app);
