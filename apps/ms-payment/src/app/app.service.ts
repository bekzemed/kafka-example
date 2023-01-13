import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { GetUserRequest } from './get-user-request.dto';
import { OrderCreatedEvent } from './order-created.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('USER_SERVICE') private readonly userClient: ClientKafka
  ) {}
  getData(): { message: string } {
    return { message: 'Welcome to ms-payment!' };
  }

  handleOrderCreated(orderCreatedEvent: OrderCreatedEvent) {
    this.userClient
      .send('get_user', new GetUserRequest(orderCreatedEvent.userId))
      .subscribe((user) => {
        console.log(
          `Billing user with stripe id ${user.stripeUserId} a price of $${orderCreatedEvent.price}`
        );
      });
  }
}
