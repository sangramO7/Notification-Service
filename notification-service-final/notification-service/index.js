const express = require('express');
const app = express();
const routes = require('./routes/routes');

app.use(express.json());
app.use('/', routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Notification service is up on port ${PORT}`);
});
