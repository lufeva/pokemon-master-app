import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { PokemonMainComponent } from './features/pokemon-main/pokemon-main.component';
import { PokemonsEffects } from './store/pokemons.effects';
import { PokemonsFacade } from './store/pokemons.facade';
import * as fromPokemons from './store/pokemons.reducer';

export const pokemonRoutes: Route[] = [
  {
    path: '',
    component: PokemonMainComponent,
    title: 'Pokemon Main Page',
    providers: [
      PokemonsFacade,
      provideState(
        fromPokemons.POKEMONS_FEATURE_KEY,
        fromPokemons.pokemonsReducer
      ),
      provideEffects(PokemonsEffects),
    ],
  },
];
