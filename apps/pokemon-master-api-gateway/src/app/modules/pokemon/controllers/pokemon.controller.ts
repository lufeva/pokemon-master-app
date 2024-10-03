import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { PokemonDTO } from '@pokemon-app/shared-lib';
import { PokemonService } from '../services/pokemon.service';

@Controller('/pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Obtains a list with every pokemon and its endpoint',
  })
  @ApiResponse({
    status: 200,
    description: 'OK!',
    type: 'Pokemon Array',
  })
  @ApiInternalServerErrorResponse({
    description: 'Unexpected error has occurred',
  })
  getAll(): Promise<PokemonDTO[]> {
    return this.pokemonService.getAllPokemon();
  }
}
