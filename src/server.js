const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const routes = require('./api-routes');
const fs = require('fs');
const path = require('path');
const serveIndex = require('serve-index')
const { default: mongoose } = require('mongoose');
const { on } = require('events');
const bodyParser = require('body-parser')
const cors = require('cors')

//serving files statically
app.use('/public', express.static(path.join(__dirname, '../public')))
app.use('/public', serveIndex(path.join(__dirname, '../public')))

//MongoDB
mongoose.connect(process.env.MONGODB_CONNECT);
let db = mongoose.connection;
db.on('error', console.error.bind(console, "DB Connection error!"))
db.on('open', () => {
    console.log('MongoDB is connected!')
})

// middleware
//parse the body for each request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// cors for cross plate issue resolve
app.use(cors());

app.use('/', (req, res, next) => {
    let log = {
        method: req.method,
        url: req.url,
        headers: req.headers,
        query: req.query,
        timestamp: Date.now()
    };
    // fs.appendFile(path.join(__dirname, '../logs/logs.log'), `${JSON.stringify(log)}\n`, 'utf-8', (err) => {
    //     if(err) throw err;
    // });
    next();
});

app.use('/', routes);

app.listen(process.env.PORT, process.env.HOSTNAME, () => {
    console.log(`server at - http://${process.env.HOSTNAME}:${process.env.PORT}`);
});
