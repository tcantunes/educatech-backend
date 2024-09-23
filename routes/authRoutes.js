const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const authController = require('../controllers/authController'); 

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/users', protect, authController.getUsers); 
router.get('/user', protect, authController.getUserProfile);

module.exports = router;
