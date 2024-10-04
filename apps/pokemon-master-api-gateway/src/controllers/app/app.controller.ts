import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { PokemonDTO } from '@pokemon-app/shared-lib';

import { AppService } from './app.service';
import { PokemonSearchQuery } from '../../schemas/pokemon.schema';

@Controller()
export class AppController {
  constructor(private readonly api: AppService) {}

  @Get('/health')
  @ApiOperation({ summary: 'Health Check for API' })
  @ApiResponse({ status: 200, description: 'Health Check' })
  health(): Record<string, string> {
    return { status: 'ok' };
  }

  @Get('/pokemon')
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
  getAllPokemons(@Query() query: PokemonSearchQuery): Promise<PokemonDTO[]> {
    return this.api.getAllPokemon(query.limit, query.offset);
  }
}
