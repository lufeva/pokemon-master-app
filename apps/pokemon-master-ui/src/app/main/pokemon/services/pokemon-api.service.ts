import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonsEntity } from '../store/pokemons.models';

@Injectable()
export class PokemonService {
  apiUrl = 'http://localhost:3000/pokemon-api-gateway';

  constructor(private httpClient: HttpClient) {}

  getPokemonList(limit: number, offset: number): Observable<PokemonsEntity[]> {
    const params = {
      params: {
        limit,
        offset,
      },
    };

    return this.httpClient.get<PokemonsEntity[]>(
      `${this.apiUrl}/pokemon`,
      params
    );
  }
}
