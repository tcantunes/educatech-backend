const express = require('express');
const passport = require('passport');
const { protect } = require('../middleware/authMiddleware');
const authController = require('../controllers/authController'); 

const router = express.Router();
router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  authController.googleAuthCallback
);
router.get('/users', protect, authController.getUsers);
router.get('/user', protect, authController.getUserProfile);
router.put('/user', protect, authController.updateUserProfile);

module.exports = router;

