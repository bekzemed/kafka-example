import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { ClientKafka, EventPattern } from '@nestjs/microservices';

import { AppService } from './app.service';

@Controller()
export class AppController implements OnModuleInit {
  @Inject('USER_SERVICE') private readonly userClient: ClientKafka;
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @EventPattern('order_created')
  handleOrderCreated(data: any) {
    return this.appService.handleOrderCreated(data);
  }

  onModuleInit() {
    this.userClient.subscribeToResponseOf('get_user');
  }
}
