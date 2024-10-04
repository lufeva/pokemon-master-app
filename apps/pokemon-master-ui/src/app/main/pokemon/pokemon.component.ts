import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonMainComponent } from './features/pokemon-main/pokemon-main.component';
import { PokemonsFacade } from './store/pokemons.facade';
import { PokemonsEntity } from './store/pokemons.models';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
  imports: [
    PokemonMainComponent,
    RouterModule,
    CommonModule,
    MatProgressSpinnerModule,
  ],
  standalone: true,
})
export class PokemonComponent implements OnInit {
  private readonly pokemonsFacade = inject(PokemonsFacade);

  pokemonList$: Observable<PokemonsEntity[]> = this.pokemonsFacade.allPokemons$;
  pokemonListLoaded$: Observable<boolean> = this.pokemonsFacade.loaded$;

  ngOnInit(): void {
    this.pokemonsFacade.init();
  }
}
