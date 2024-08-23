import Loading from '@/components/loading';
import { useGetAllPokemonPage } from '@/hooks/use-pokeapi';
import { getImageURL } from '@/lib/utils';
import { usePaginationStore } from '@/store/pagination';
import { PokemonData } from '@/types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import PokemonCard from './pokemon-card';

export default function PokemonList() {
  const { currentPage, itemsPerPage, updatePagePosition } =
    usePaginationStore();

  const {
    isLoading,
    data: pokemonPage,
    error,
  } = useGetAllPokemonPage(itemsPerPage, currentPage);

  const [pokemonList, setPokemonList] = useState<PokemonData[]>([]);

  useEffect(() => {
    setPokemonList(pokemonPage ?? []);
  }, [pokemonPage]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        {pokemonList.map((pokemon, index) => (
          <PokemonCard
            key={index}
            pokemonName={pokemon.name}
            pokemonRealName={pokemon.name}
            pokemonImgUrl={getImageURL(pokemon.id)}
            pokemonId={pokemon.id}
          />
        ))}

        <div className="flex justify-center my-4">
          <Button
            disabled={currentPage === 0}
            onClick={() => updatePagePosition(-itemsPerPage)}
          >
            <ChevronLeft />
          </Button>
          <Button onClick={() => updatePagePosition(itemsPerPage)}>
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
