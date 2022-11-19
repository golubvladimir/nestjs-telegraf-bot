import { Update, Start, Help } from 'nestjs-telegraf';
import { Context } from 'telegraf';

@Update()
export class EchoUpdate {

  @Start()
  async onStart(ctx: Context) {
    await ctx.reply(`Hello world`);
  }
}