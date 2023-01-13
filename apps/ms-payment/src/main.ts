import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Partitioners } from 'kafkajs';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['localhost:9092'],
        },
        producer: {
          createPartitioner: Partitioners.LegacyPartitioner,
        },
        consumer: {
          groupId: 'billing-consumer',
        },
      },
    }
  );
  await app.listen();
}

bootstrap();
