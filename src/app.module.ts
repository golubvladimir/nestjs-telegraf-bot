import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { EchoModule } from './echo/echo.module';
import { EchoUpdate } from './echo/echo.update';

@Module({
  imports: [
    TelegrafModule.forRoot({
      token: '+++',
    }),
    EchoModule
  ],
})
export class AppModule {}
