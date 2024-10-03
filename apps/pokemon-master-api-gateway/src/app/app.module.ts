import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import configuration from '../../config/configuration';
import { AppController } from './app.controller';
import { PokemonModule } from './modules/pokemon/pokemon.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    PokemonModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
