import { Update, Start, Help } from 'nestjs-telegraf';
import { Context } from 'telegraf';
import { Injectable } from '@nestjs/common';

@Update()
@Injectable()
export class EchoUpdate {

  @Start()
  async onStart(ctx: Context) {
    await ctx.reply(`Hello world`);
  }
}