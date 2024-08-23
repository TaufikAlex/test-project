import Dialog from '@/components/dialog';
import PokemonCard from '@/components/pokemon/pokemon-card';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RenameCounts } from '@/lib/rename';
import { getImageURL } from '@/lib/utils';
import { RootState } from '@/store';
import { usePaginationMyPokemonStore } from '@/store/pagination';
import { releasePokemon, renamePokemon } from '@/store/pokemon';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '../../components/ui/input';

const MyPokemonPage = () => {
  const dispatch = useDispatch();

  const [openDialog, setOpenDialog] = useState(false);

  const { currentPage, itemsPerPage, updatePagePosition } =
    usePaginationMyPokemonStore();
  const myPokemons = useSelector(
    (state: RootState) => state.pokemon.myPokemons
  );

  const [newNickname, setNewNickname] = useState<{
    id: number;
    nickname: string;
  } | null>(null);

  // Paginate the data
  const paginatedPokemons = myPokemons.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handleRenamePokemon = (data: { id: number; nickname: string }) => {
    setOpenDialog(true);
    setNewNickname(data);
  };

  const handleOnCloseUnsuccess = () => {
    setOpenDialog(false);
  };

  const handleSave = () => {
    if (newNickname) {
      try {
        const nickname = RenameCounts(newNickname.id, newNickname.nickname);
        dispatch(renamePokemon({ id: newNickname.id, nickname }));
        handleOnCloseUnsuccess();
      } catch {
        setOpenDialog(true);
        // setIsUnsuccessRename(true);
      }
    }
  };

  const handleReleasePokemon = (id: number) => {
    try {
      dispatch(releasePokemon(id));
    } catch {
      setOpenDialog(true);
      // setIsUnsuccessRelease(true);
    }
  };

  const handleOnChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (newNickname) {
      setNewNickname({ ...newNickname, nickname: e.target.value });
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
      {paginatedPokemons.map((pokemon, index) => (
        <PokemonCard
          key={index}
          pokemonName={pokemon.nickname || ''}
          pokemonRealName={pokemon.name}
          pokemonImgUrl={getImageURL(pokemon.id)}
          pokemonId={pokemon.id}
          isCardAction
          onClickRename={(e) => {
            e.stopPropagation();
            handleRenamePokemon({
              id: pokemon.id,
              nickname: pokemon.nickname,
            });
          }}
          onClickRelease={(e) => {
            e.stopPropagation();
            handleReleasePokemon(pokemon.id);
          }}
        />
      ))}

      <Dialog isOpen={openDialog}>
        <Card>
          <CardHeader>
            <CardTitle className="flex flex-col gap-1">
              <span>Rename your Pokémon</span>
              <span className="text-xs text-gray-400 font-normal">
                Enter a new nickname for your Pokémon!
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2">
            <Input
              placeholder="Pokémon Nickname"
              value={newNickname?.nickname || ''}
              onChange={handleOnChangeNickname}
            />
            <Button size={'sm'} onClick={handleSave}>
              Save
            </Button>
          </CardContent>
        </Card>
      </Dialog>

      <div className=" bottom-0 flex flex-row gap-2 md:bottom-[-10] right-4 mb-4 mr-4">
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
  );
};

export default MyPokemonPage;
