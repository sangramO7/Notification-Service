const { loadData, saveData } = require('../utils/fileHelper');
const { v4: generateId } = require('uuid');

exports.createNotification = async (req, res) => {
  const { userId, type, message } = req.body;

  if (!userId || !type || !message) {
    return res.status(400).json({ error: 'All fields are mandatory' });
  }

  const notification = {
    id: generateId(),
    userId,
    type,
    message,
    timestamp: new Date().toISOString()
  };

  const allData = await loadData();
  allData.push(notification);
  await saveData(allData);

  console.log(`[${type.toUpperCase()}] Sent to ${userId}: ${message}`);

  res.status(201).json({ status: 'Notification recorded', data: notification });
};

exports.fetchUserNotifications = async (req, res) => {
  const userId = req.params.id;
  const allData = await loadData();
  const result = allData.filter(note => note.userId === userId);
  res.json(result);
};
