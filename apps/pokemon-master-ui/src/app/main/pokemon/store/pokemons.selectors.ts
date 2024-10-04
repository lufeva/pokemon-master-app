import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  POKEMONS_FEATURE_KEY,
  PokemonsState,
  pokemonsAdapter,
} from './pokemons.reducer';

// Lookup the 'Pokemons' feature state managed by NgRx
export const selectPokemonsState =
  createFeatureSelector<PokemonsState>(POKEMONS_FEATURE_KEY);

const { selectAll, selectEntities } = pokemonsAdapter.getSelectors();

export const selectPokemonsLoaded = createSelector(
  selectPokemonsState,
  (state: PokemonsState) => state.loaded
);

export const selectPokemonsError = createSelector(
  selectPokemonsState,
  (state: PokemonsState) => state.error
);

export const selectPokemonsPage = createSelector(
  selectPokemonsState,
  (state: PokemonsState) => state.page
);

export const selectAllPokemons = createSelector(
  selectPokemonsState,
  (state: PokemonsState) => selectAll(state)
);

export const selectPokemonsEntities = createSelector(
  selectPokemonsState,
  (state: PokemonsState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectPokemonsState,
  (state: PokemonsState) => state.selectedId
);

export const selectEntity = createSelector(
  selectPokemonsEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
