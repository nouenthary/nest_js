import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): any {
    return this.appService.getHello();
  }

  @Get('/user')
  getHellos(): any {
    return {
      message: "user"
    };
  }

  @Get('/admin')
  admin(): any {
    return {
      message: "admin"
    };
  }
}