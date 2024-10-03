import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as PokemonsActions from './pokemons.actions';
import * as PokemonsFeature from './pokemons.reducer';

@Injectable()
export class PokemonsEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PokemonsActions.initPokemons),
      switchMap(() =>
        of(PokemonsActions.loadPokemonsSuccess({ pokemons: [] }))
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(PokemonsActions.loadPokemonsFailure({ error }));
      })
    )
  );
}
