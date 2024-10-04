import { IsInt } from 'class-validator';

export class PokemonSearchQuery {
  @IsInt()
  limit: number;

  @IsInt()
  offset: number;
}
