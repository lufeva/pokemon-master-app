import { inject, Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as PokemonsActions from './pokemons.actions';
import * as PokemonsSelectors from './pokemons.selectors';

@Injectable()
export class PokemonsFacade {
  private readonly store = inject(Store);

  loaded$ = this.store.pipe(select(PokemonsSelectors.selectPokemonsLoaded));
  allPokemons$ = this.store.pipe(select(PokemonsSelectors.selectAllPokemons));
  selectedPokemons$ = this.store.pipe(select(PokemonsSelectors.selectEntity));

  init() {
    this.store.dispatch(PokemonsActions.loadPokemons());
  }
}
