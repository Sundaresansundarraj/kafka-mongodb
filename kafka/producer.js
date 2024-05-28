const { producer, kafkaConfig } = require('../config/kafkaConfig');

const produceMessage = async (message) => {
  await producer.connect();
  await producer.send({
    topic: kafkaConfig.topic,
    messages: [{ value: message }],
  });
  
  await producer.disconnect();
};

module.exports = produceMessage;


