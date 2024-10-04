import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PokemonService } from './pokemon.service';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [],
  providers: [PokemonService],
  exports: [PokemonService],
})
export class PokemonModule {}
