import { Injectable, Logger } from '@nestjs/common';
import { PokemonDTO } from '@pokemon-app/shared-lib';

import { PokemonService } from '../../integrations/pokemon/pokemon.service';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  constructor(private readonly pokemonService: PokemonService) {}

  async getAllPokemon(limit: number, offset: number): Promise<PokemonDTO[]> {
    this.logger.log('Getting all pokemon');

    const pokemons = await this.pokemonService.getAllPokemonWithDetail(
      limit,
      offset
    );
    // We are only required to pull the picture
    // later if we need to pull another field we can do it here
    return pokemons.map((pokemon) => ({
      id: pokemon.detail.id,
      name: pokemon.name,
      url: pokemon.url,
      image: pokemon.detail.sprites.front_default,
    }));
  }
}
