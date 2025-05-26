import Fastify from 'fastify';
import { connectKafka, producer } from './kafka/client';

const fastify = Fastify({ logger: true });

fastify.get('/health', async () => {
  return { status: 'ok' };
});

fastify.post('/notify', async (request, reply) => {
  const body = await request.body;

  await producer.send({
    topic: 'notification-topic',
    messages: [{ value: JSON.stringify(body) }],
  });

  reply.send({ status: 'message sent' });
});

const start = async () => {
  try {
    await connectKafka();
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
    console.log('API Gateway running on http://localhost:3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();