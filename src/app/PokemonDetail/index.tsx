import Loading from '@/components/loading';
import PokemonDetails from '@/components/pokemon/pokemon-details';
import { useGetPokemon } from '@/hooks/use-pokeapi';
import { getImageURL } from '@/lib/utils';
import { useParams } from 'react-router-dom';

const PokemonPage = () => {
  const { name } = useParams(); // Extract name from URL parameters
  const { data, isLoading, isError } = useGetPokemon(name || '');

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>No Data Found</div>;
  }

  return (
    <>
      {data && (
        <PokemonDetails
          pokemonData={data}
          pokemonImageURL={getImageURL(data.id)}
        />
      )}
    </>
  );
};

export default PokemonPage;
