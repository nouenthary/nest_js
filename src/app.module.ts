import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { UserModule } from './user/user.module';
// import { User } from "./user/entities/user.entity";
// import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { ReportModule } from './report/report.module';
import { LoggingInterceptor } from './logging.interceptor';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: '12345678',
    //   database: 'nest_js',
    //   entities: [
    //       User
    //   ],
    //   synchronize: true,
    //   autoLoadEntities: true,
    // }),
    // UserModule,
    // RoleModule,
  UserModule,
    ReportModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
