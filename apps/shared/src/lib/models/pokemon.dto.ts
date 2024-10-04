export interface PokemonDTO {
  id: number;
  name: string;
  url: string;
  image: string;
}

export interface ListPagination<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}
