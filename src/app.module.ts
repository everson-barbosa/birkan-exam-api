import { Module } from '@nestjs/common';
import { HttpModule } from './http/http.module';
import { EnvModule } from './env/env.module';
import { ConfigModule } from '@nestjs/config';
import { envSchema } from './env/env';
import { EventModule } from './events/event.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    HttpModule,
    EnvModule,
    EventModule,
  ],
})
export class AppModule {}
