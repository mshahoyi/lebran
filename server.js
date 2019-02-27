/* eslint-disable */
const express = require('express');
const bodyParser = require('body-parser');
const attendantRoute = require('./routes/api/logsAPI');
const mongoose = require('mongoose');
const URI_STRING = require('./config/db').URI_STRING;

const db = mongoose.connection;
db.on('error', e => console.log('database connection error: ' + e));
db.on('open', () => console.log('connection to database succesfull'));
mongoose.connect(URI_STRING, { useNewUrlParser: true })

const app = express();
const PORT = process.env.PORT || 7600;

console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV !== 'production') {
    const cors = require('cors');
    app.use(cors());
}

app.use(bodyParser.json());
app.use('/api/logs', attendantRoute);

app.listen(PORT, () => console.log(`Your app is running on port ${PORT}`));