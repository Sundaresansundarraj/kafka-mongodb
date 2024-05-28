const { consumer, kafkaConfig } = require('../config/kafkaConfig');
const Message = require('../models/messageModel');

const consumeMessages = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: kafkaConfig.topic, fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const messageContent = message.value.toString();
      console.log(message)
      const newMessage = new Message({ content: messageContent });
      await newMessage.save();
      
    },
  });
};

module.exports = consumeMessages;
