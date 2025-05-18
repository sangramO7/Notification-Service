const express = require('express');
const router = express.Router();
const {
  createNotification,
  fetchUserNotifications
} = require('../controllers/notificationHandler');

router.post('/notifications', createNotification);
router.get('/users/:id/notifications', fetchUserNotifications);

module.exports = router;
