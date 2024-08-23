
export interface PokemonData {
  uid?: string;
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
  uid: string;
  id: number;
  name: string;
  nickname: string;
  count_update?: number;
}
