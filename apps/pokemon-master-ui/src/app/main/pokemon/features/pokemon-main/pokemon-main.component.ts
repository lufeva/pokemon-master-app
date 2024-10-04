import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { PokemonsEntity } from '../../store/pokemons.models';

@Component({
  selector: 'app-pokemon-main',
  templateUrl: './pokemon-main.component.html',
  styleUrls: ['./pokemon-main.component.scss'],
  imports: [MatTableModule, MatPaginatorModule],
  standalone: true,
})
export class PokemonMainComponent {
  @Input() pokemonList: PokemonsEntity[] | null = [];

  @Output() pageNumberChange = new EventEmitter<number>();

  length = 50;
  pageSize = 10;
  pageIndex = 0;

  displayedColumns: string[] = ['name', 'image'];

  handlePageEvent(e: PageEvent) {
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.pageNumberChange.emit(this.pageIndex);
  }
}
