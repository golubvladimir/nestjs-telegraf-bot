import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { EchoModule } from './echo/echo.module';

@Module({
  imports: [
    TelegrafModule.forRoot({
      token: '****',
      include: [
        EchoModule
      ]
    }),
    EchoModule
  ],
})
export class AppModule {}
