import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('USER_SERVICE') private readonly userClient: ClientKafka
  ) {}
  getData(): { message: string } {
    return { message: 'Welcome to ms-email!' };
  }
}
