import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { PokemonService } from '../services/pokemon-api.service';
import * as PokemonsActions from './pokemons.actions';
import { PokemonsEntity } from './pokemons.models';

@Injectable()
export class PokemonsEffects {
  private actions$ = inject(Actions);

  constructor(private pokemonService: PokemonService) {}

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PokemonsActions.loadPokemons),
      switchMap(() =>
        // TODO: Configure offset and limit values dynamically for paginator
        this.pokemonService.getPokemonList(10, 0).pipe(
          map((pokemons: PokemonsEntity[]) =>
            PokemonsActions.loadPokemonsSuccess({ pokemons })
          ),
          catchError((error) => {
            console.error('Error', error);
            return of(PokemonsActions.loadPokemonsFailure({ error }));
          })
        )
      )
    )
  );
}
