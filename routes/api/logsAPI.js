const express = require('express');
const route = express.Router();
const Log = require('../../db/logModel');


route.get('/',  (req, res) => {
  Log.find({}, (e, logs) => {
    if(e) console.log('here is the error in retrieving logs: ' + e);
    res.json(logs)
  })
})

route.get('/date/:date', (req, res) => {
  const [day, month, year] = req.params.date.split('-');
  const startdate = new Date(year, month - 1, day);
  const enddate = new Date(year, month - 1, day);
  enddate.setDate(startdate.getDate() + 1);

  Log.find({ date: {'$gte': startdate, '$lt': enddate } }, (e, logs) => {
    if(e) console.log('error in retrieving logs by date: ' + e);
    res.json(logs);
  })

})

route.get('/name/:name', (req, res) => {
  const name = req.params.name;
  Log.find({name}, (e, result) => {
    if(e) console.error('error in getting logs by name: ' + e);
    res.json(result);
  })
})

route.post('/', (req, res) => {
  const { name, bookName, bookStart, bookEnd, pagesReadSinceLastLog } = req.body;
  console.log(req.body)
  Log({name, bookName, bookStart, bookEnd, pagesReadSinceLastLog }).save((e, log) => {
    if(e) console.error('log could not be saved due to error: ' + e);
    console.log(log);
    res.json(log)
  })
})

module.exports = route;