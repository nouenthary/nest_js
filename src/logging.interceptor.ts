import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();

    //console.log(`[${req.method}] ${req.url}`);
    //console.log('Headers:', req.headers);
    // console.log('Body:', req.body);
    console.log('==============================');
    console.log(`Response Time: ${Date.now()}ms`);
    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() => {
          console.log(`Response Time: ${Date.now() - now}ms`);
          console.log('==============================');
        }),
      );
  }
}
