const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const log = require('morgan');
const cors = require('cors');
const config = require('config');
const mongoose = require('mongoose')
const devDbUrl = config.get('db')
const mongoDB = process.env.MONGODB_URI || devDbUrl
const api = require('./routers/router');
const PORT = process.env.PORT || 8080;
mongoose.connect(mongoDB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    serverSelectionTimeoutMS: 3000
}).catch(err => console.log(err.reason))

mongoose.Promise = global.Promise

const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.use(log('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: "*" }));
app.use('/', api.router);
app.use((err, req, res, next) => {
    if (err.status) {
        res.send(err.message)
    } else {
        res.send(err.message)
    }
})
app.listen(PORT, () => {
    console.log(`Server is run at port ${PORT}`);
});