const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongoConfig = require('./config/mongoConfig');
const messageRoutes = require('./routes/messageRoutes');
const consumeMessages = require('./kafka/consumer');

const app = express();
const PORT = 3008;

mongoose.connect(mongoConfig.url);

app.use(bodyParser.json());
app.use('/api', messageRoutes);

consumeMessages().catch(console.error);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
