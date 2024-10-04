import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { PokemonComponent } from './pokemon.component';
import { PokemonService } from './services/pokemon-api.service';
import { PokemonsEffects } from './store/pokemons.effects';
import { PokemonsFacade } from './store/pokemons.facade';
import * as fromPokemons from './store/pokemons.reducer';

export const pokemonRoutes: Route[] = [
  {
    path: '',
    component: PokemonComponent,
    title: 'Pokemon Main Page',
    providers: [
      PokemonsFacade,
      PokemonService,
      provideState(
        fromPokemons.POKEMONS_FEATURE_KEY,
        fromPokemons.pokemonsReducer
      ),
      provideEffects(PokemonsEffects),
    ],
  },
];
