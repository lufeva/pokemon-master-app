export interface PokemonApiEntity {
  name: string;
  url: string;
  detail: PokemonDetailData;
}

export interface PokemonDetailData {
  id: number;
  sprites: PokemonSprites;
}

export interface PokemonSprites {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}
