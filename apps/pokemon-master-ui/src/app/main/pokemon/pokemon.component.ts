import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PokemonMainComponent } from './features/pokemon-main/pokemon-main.component';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
  imports: [PokemonMainComponent, RouterModule],
  standalone: true,
})
export class PokemonComponent {}
