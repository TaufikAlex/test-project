import { pokeapiUrl } from "@/constant";
import { PokemonData } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetAllPokemonPage = (limit: number, offset: number) => {
  return useQuery<PokemonData[]>({
    queryKey: ["allPokemonPage", limit, offset],
    queryFn: async () => {
      const { data } = await axios.get(
        `${pokeapiUrl}?limit=${limit}&offset=${offset}`
      );
      return data.results.map((result: { name: String; url: String }) => ({
        ...result,
        id: parseInt(result.url.split("/")[6]),
      }));
    },
  });
};

export const useGetPokemon = (pokemonName: string) => {
  return useQuery<PokemonData>({
    queryKey: ["pokemon", pokemonName],
    queryFn: async () => {
      const { data } = await axios.get(`${pokeapiUrl}/${pokemonName}`);
      return data as PokemonData;
    },
    select: (data) => ({
      id: data.id,
      name: data.name,
      types: data.types,
      stats: data.stats,
      height: data.height,
      weight: data.weight,
      abilities: data.abilities,
      species: data.species,
    }),
  });
};
