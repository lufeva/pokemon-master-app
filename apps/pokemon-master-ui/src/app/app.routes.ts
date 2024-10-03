import { Route } from '@angular/router';
import { PokemonMainComponent } from './features/pokemon-main/components/pokemon-main.component';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'pokemon' },
  { path: 'pokemon', component: PokemonMainComponent },
];
