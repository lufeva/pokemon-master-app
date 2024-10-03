import { createAction, props } from '@ngrx/store';
import { PokemonsEntity } from './pokemons.models';

export const initPokemons = createAction('[Pokemons Page] Init');

export const loadPokemonsSuccess = createAction(
  '[Pokemons/API] Load Pokemons Success',
  props<{ pokemons: PokemonsEntity[] }>()
);

export const loadPokemonsFailure = createAction(
  '[Pokemons/API] Load Pokemons Failure',
  props<{ error: any }>()
);
