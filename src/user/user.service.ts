import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async getUser(){
    return {
      user : [],
      message: "data retrieve ",
    };
  }

  async createUser(){
    return {
      user : [],
      message: "data retrieves ",
    };
  }
}
