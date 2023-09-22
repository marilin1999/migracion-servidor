const express = require('express');
const router = express.Router();


router.param('listId', (req, res, next, listId) => {
    if (!/^\d+$/.test(listId)) {
      return res.status(400).send('Bad Request: Invalid listId parameter');
    }
    next();
  });

  module.exports = router;