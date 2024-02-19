const express = require('express');
const router = express.Router();

const isInvalidDate = (date) => date.toString() === 'Invalid Date';

router.get('/', (req, res) => {
  const currentDate = new Date();
  res.json({
    unix: currentDate.getTime(),
    utc: currentDate.toUTCString(),
  });
});

router.get('/:date', (req, res) => {
  let date = new Date(req.params.date);

  if (isInvalidDate(date)) {
    date = new Date(+req.params.date);
  }

  if (isInvalidDate(date)) {
    return res.json({
      error: 'Invalid Date',
    });
  }

  res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
});

module.exports = router;
