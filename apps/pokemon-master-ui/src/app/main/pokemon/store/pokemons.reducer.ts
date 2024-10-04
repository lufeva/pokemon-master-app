import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as PokemonsActions from './pokemons.actions';
import { PokemonsEntity } from './pokemons.models';

export const POKEMONS_FEATURE_KEY = 'pokemons';

export interface PokemonsState extends EntityState<PokemonsEntity> {
  selectedId?: string | number; // which Pokemons record has been selected
  loaded: boolean; // has the Pokemons list been loaded
  error?: string | null; // last known error (if any)
  page: number; // page of the table list of pokemons
}

export interface PokemonsPartialState {
  readonly [POKEMONS_FEATURE_KEY]: PokemonsState;
}

export const pokemonsAdapter: EntityAdapter<PokemonsEntity> =
  createEntityAdapter<PokemonsEntity>();

export const initialPokemonsState: PokemonsState =
  pokemonsAdapter.getInitialState({
    // set initial required properties
    loaded: false,
    page: 0,
  });

const reducer = createReducer(
  initialPokemonsState,
  on(PokemonsActions.loadPokemons, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(PokemonsActions.loadPokemonsSuccess, (state, { pokemons }) =>
    pokemonsAdapter.setAll(pokemons, { ...state, loaded: true })
  ),
  on(PokemonsActions.loadPokemonsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function pokemonsReducer(
  state: PokemonsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
