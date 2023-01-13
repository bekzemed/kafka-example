import { Injectable } from '@nestjs/common';
import { GetUserRequest } from './get-user-request';

@Injectable()
export class AppService {
  private readonly users: any[] = [
    {
      userId: '123',
      stripeUserId: '1111111',
    },
    {
      userId: '456',
      stripeUserId: '22222222',
    },
  ];

  getData(): { message: string } {
    return { message: 'Welcome to ms-user!' };
  }

  getUser({ userId }: GetUserRequest) {
    return this.users.find((user) => user.userId === userId);
  }
}
