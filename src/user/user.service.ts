import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  findOne(id: string) {
    return `This action returns a [${id}] user`;
  }
}
