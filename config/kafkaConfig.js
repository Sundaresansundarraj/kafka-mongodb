const { Kafka } = require('kafkajs');

const kafkaConfig = {
  clientId: 'my-app',
  brokers: ['localhost:9092'],
  topic: 'messages',
};

const kafka = new Kafka({
  clientId: kafkaConfig.clientId,
  brokers: kafkaConfig.brokers,
});

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: 'message-group' });

module.exports = { producer, consumer, kafkaConfig };
