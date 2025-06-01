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

  @Get('/setting')
  setting(): any {
    return {
      message: "setting"
    };
  }

  @Get('/restart')
  restart(): any {
    return {
      message: "restart"
    };
  }

  @Get('/restart2')
  restart2(): any {
    return {
      message: "restart2"
    };
  }


  // @Get('/restart3')
  // restart3(): any {
  //   return {
  //     message: "restart3"
  //   };
  // }
  //
  // @Get('/restart4')
  // restart4(): any {
  //   return {
  //     message: "restart44"
  //   };
  // }
  //
  // @Get('/restart5')
  // restart5(): any {
  //   return {
  //     message: "restart44"
  //   };
  // }
  //
  //
  // @Get('/restart6')
  // restart6(): any {
  //   return {
  //     message: "restart6"
  //   };
  // }
}