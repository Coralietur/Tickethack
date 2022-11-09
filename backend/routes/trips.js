var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

const moment = require ('moment');
const Trip = require('../models/trips');

router.get('/:departure/:arrival/:date', (req, res) => {
  console.log(req.params.date);
  Trip.find({departure: req.params.departure, arrival: req.params.arrival, date: moment(req.params.date)})
  .then(tripsFound => {
      res.json({tripList : tripsFound });
             });
            })


module.exports = router;