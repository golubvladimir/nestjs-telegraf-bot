import { Update, Start, Help } from 'nestjs-telegraf';

@Update()
export class EchoUpdate {

  @Start()
  async onStart(): Promise<string> {
    return `Hey, I'm Bot`;
  }

  @Help()
  async onHelp(): Promise<string> {
    return 'Send me any text';
  }
}