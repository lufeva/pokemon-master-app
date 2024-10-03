import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'pokemon' },
  { path: 'pokemon',
  loadChildren: () =>
    import('./main/pokemon/pokemon.routes').then((m) => m.pokemonRoutes)}
];
