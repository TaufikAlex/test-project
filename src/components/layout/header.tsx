import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="supports-backdrop-blur:bg-background/60 fixed top-0 z-40 w-full border-b bg-background/95 shadow-sm backdrop-blur">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="cursor-pointer flex gap-1 items-center">
          <img src="/pokemonball.png" alt="logo" width={30} height={30} />
          <span className="hidden font-bold sm:inline-block select-none">
            PhinconBall
          </span>
        </Link>
        <div className="flex gap-4">
          <Link
            to="/"
            className={clsx(
              pathname === '/'
                ? 'border-b-2 border-black font-bold'
                : 'font-normal'
            )}
          >
            Home
          </Link>
          <Link
            to="/mypokemon-list"
            className={clsx(
              pathname === '/mypokemon-list'
                ? 'border-b-2 border-black font-bold'
                : 'font-normal'
            )}
          >
            My Pokemon
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
