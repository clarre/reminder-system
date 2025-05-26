import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'api-gateway',
  brokers: ['localhost:9092'], // Adjust for your setup
});

export const producer = kafka.producer();
export const consumer = kafka.consumer({ groupId: 'api-gateway-group' });

export const connectKafka = async () => {
  await producer.connect();
  await consumer.connect();
  console.log('[Kafka] Connected');
};