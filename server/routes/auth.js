const express = require('express');

const { signup, login } = require('../controllers/auth');

const router = express.Router();

router.post('/inscription', signup);
router.post('/connexion', login);

module.exports = router;
