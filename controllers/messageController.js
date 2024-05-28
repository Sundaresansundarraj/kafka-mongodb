const messageService = require('../services/messageService');

const createMessage = async (req, res) => {
  try {
    const { content } = req.body;
    await messageService.createMessage(content);
    res.status(201).send('Message sent to Kafka');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getMessages = async (req, res) => {
  try {
    const messages = await messageService.getMessages();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  createMessage,
  getMessages
};
