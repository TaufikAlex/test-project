import { capitalize } from '@/lib/utils';
import React, { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';

type Props = {
  pokemonName: string;
  pokemonRealName: string;
  pokemonImgUrl?: string;
  pokemonId: number;
  isCardAction?: boolean;
  onClickRename?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClickRelease?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function PokemonCard({
  pokemonName,
  pokemonRealName,
  pokemonImgUrl,
  pokemonId,
  isCardAction = false,
  onClickRename,
  onClickRelease,
}: Props) {
  const navigate = useNavigate();

  return (
    <Card
      className="cursor-pointer"
      onClick={() => navigate(`/pokemon/${pokemonRealName}`)}
    >
      <CardHeader>
        <CardTitle>
          {capitalize(pokemonName)}
          <span className="ml-2 font-bold text-black-300 text-end">
            #{pokemonId}
          </span>
        </CardTitle>
      </CardHeader>

      <CardContent className="self-center justify-center flex">
        <Suspense fallback={<div>Loading...</div>}>
          <img
            width="0"
            height="0"
            sizes="100%"
            className="w-36 h-36 object-contain"
            src={pokemonImgUrl} // Add fallback image URL if necessary
            alt={`${pokemonName} image`}
          />
        </Suspense>
      </CardContent>
      {isCardAction && (
        <CardFooter className="flex justify-end">
          <div className="flex gap-2">
            <Button
              className="bg-green-700"
              size={'xs'}
              onClick={onClickRename}
            >
              Rename
            </Button>
            <Button className="bg-red-700" size={'xs'} onClick={onClickRelease}>
              Release
            </Button>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
