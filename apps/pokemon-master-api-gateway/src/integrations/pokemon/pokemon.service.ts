import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ListPagination, PokemonDTO } from '@pokemon-app/shared-lib';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom, forkJoin, map, switchMap } from 'rxjs';
import { PokemonApiEntity } from '../../models/pokemon-api.model';

@Injectable()
export class PokemonService {
  pokemonBaseUrl = this.configService.get<string>('pokemonApi.baseUrl');
  pokemonUrl = this.configService.get<string>('pokemonApi.pokemonUrl');

  private readonly logger = new Logger(PokemonService.name);

  constructor(
    private readonly configService: ConfigService,
    private httpService: HttpService
  ) {}

  async getAllPokemonWithDetail(
    limit = 20,
    offset = 0
  ): Promise<PokemonApiEntity[]> {
    const data = await firstValueFrom(
      this.httpService
        .get<ListPagination<PokemonDTO>>(
          `${this.pokemonBaseUrl}/${this.pokemonUrl}/?limit=${limit}&offset=${offset}`
        )
        .pipe(
          switchMap((response) => {
            return forkJoin([
              ...response.data.results.map((pokemon) =>
                this.httpService
                  .get<PokemonDTO>(
                    `${this.pokemonBaseUrl}/${this.pokemonUrl}/${pokemon.name}`
                  )
                  .pipe(
                    map((response) => {
                      return response.data;
                    })
                  )
              ),
            ]).pipe(
              map((detailListResponse) => {
                const dict = detailListResponse.reduce(
                  (acc, detail) => ({ ...acc, [detail.name]: detail }),
                  {}
                );

                return response.data.results.map((pokemon) => ({
                  ...pokemon,
                  detail: dict[pokemon.name],
                }));
              })
            );
          }),
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
