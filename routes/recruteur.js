const express = require('express');
const router = express.Router();

router.get('/recruteur', (req, res) => res.render('recruteur'));

module.exports = router;