const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if ((req.method === 'POST' || req.method === 'PUT') && (!req.body || Object.keys(req.body).length === 0)) {
      return res.status(400).send('Bad Request: Empty body');
    }
    next();
});

module.exports = router;