import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PokemonController } from './controllers/pokemon.controller';
import { PokemonService } from './services/pokemon.service';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [PokemonController],
  providers: [PokemonService],
})
export class PokemonModule {}
