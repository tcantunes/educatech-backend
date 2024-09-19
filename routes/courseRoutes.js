const express = require('express');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/cursos', protect, (req, res) => {
  res.json({ message: 'Bem-vindo aos cursos protegidos!' });
});

module.exports = router;
