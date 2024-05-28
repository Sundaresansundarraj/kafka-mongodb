const Message = require('../models/messageModel');
const produceMessage = require('../kafka/producer');

const createMessage = async (content) => {
  await produceMessage(content);
};

const getMessages = async () => {
  return await Message.find({});
};

module.exports = {
  createMessage,
  getMessages
};
