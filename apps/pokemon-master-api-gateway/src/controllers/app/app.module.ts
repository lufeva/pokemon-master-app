import { Module } from '@nestjs/common';

import { PokemonModule } from '../../integrations/pokemon/pokemon.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [PokemonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
