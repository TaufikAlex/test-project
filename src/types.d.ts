
export interface PokemonData {
  uid?: number;
  id: number;
  name: string;
  nickname?: string;
  stats: PokemonStats[];
  abilities: PokemonAbility[];
  types: PokemonType[];
  weight: number;
  height: number;
  species: species;
}

export interface MyPokemonData {
  uid: number;
  id: number;
  name: string;
  nickname: string;
  count_update?: number;
}
