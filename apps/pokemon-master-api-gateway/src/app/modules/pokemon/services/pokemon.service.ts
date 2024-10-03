import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PokemonDTO } from '@pokemon-app/shared-lib';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class PokemonService {
  pokemonBaseUrl = this.configService.get<string>('pokemonApi.baseUrl');
  pokemonUrl = this.configService.get<string>('pokemonApi.pokemonUrl');

  private readonly logger = new Logger(PokemonService.name);

  constructor(
    private readonly configService: ConfigService,
    private httpService: HttpService
  ) {}

  async getAllPokemon(): Promise<PokemonDTO[]> {
    const { data } = await firstValueFrom(
      this.httpService
        .get<PokemonDTO[]>(
          `${this.pokemonBaseUrl}/${this.pokemonUrl}/?limit=20`
        )
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);
            throw 'An error happened!';
          })
        )
    );
    return data;
  }
}

// Note: extend from the Pokemon DTO interface and create a class for class validators
