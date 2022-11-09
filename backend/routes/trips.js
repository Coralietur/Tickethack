var express = require('express');
var router = express.Router();

const Trip = require('./models/trips');

router.get('/trips', (req, res) => {
  const tripsFound = Trip.find(e => e.departure === req.params.departure & e.arrival === req.params.arrival & e.date === req.params.date);
      if (tripsFound) {
        res.json({ result: true, tripList : tripsFound });
      } else {
        res.json({ result: false, error: 'no trip found' });
      }
    });


module.exports = router;