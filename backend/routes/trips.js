var express = require('express');
var router = express.Router();

const Trip = require('./models/trips');

router.post('/signin', (req, res) => {
    if (!checkBody(req.body, ['email', 'password'])) {
      res.json({ result: false, error: 'Missing or empty fields' });
      return;
    }
  
    User.findOne({ email: req.body.email, password: req.body.password }).then(data => {
      if (data) {
        res.json({ result: true });
      } else {
        res.json({ result: false, error: 'User not found' });
      }
    });
  });



module.exports = router;