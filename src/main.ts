import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import config from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(config.get('port'));
}
bootstrap();

// todos:
// connections -> users (redis)
// -> handle log in; log out; anon-id
// rooms
// -> message broadcasting; store messages
// message history
// deployment via k8s
// redis single point of failure (cluster mode?)
