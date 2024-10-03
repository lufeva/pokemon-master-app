import { Injectable, inject } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as PokemonsActions from './pokemons.actions';
import * as PokemonsFeature from './pokemons.reducer';
import * as PokemonsSelectors from './pokemons.selectors';

@Injectable()
export class PokemonsFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(PokemonsSelectors.selectPokemonsLoaded));
  allPokemons$ = this.store.pipe(select(PokemonsSelectors.selectAllPokemons));
  selectedPokemons$ = this.store.pipe(select(PokemonsSelectors.selectEntity));

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(PokemonsActions.initPokemons());
  }
}
