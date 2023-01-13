import { Body, Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { CreateOrderRequest } from './create-order.request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post()
  createOrder(@Body() createOrderRequest: CreateOrderRequest) {
    return this.appService.createOrder(createOrderRequest);
  }
}
