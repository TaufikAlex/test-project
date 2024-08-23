import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(word: string) {
  return word[0].toUpperCase() + word.slice(1);
}

export function getImageURL(pokemonId: number) {
  const baseURL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other";

  // Has only PNG.
  if (pokemonId >= 650) {
    return `${baseURL}/official-artwork/${pokemonId}.png`;
  }

  // Has SVG.
  return `${baseURL}/dream-world/${pokemonId}.svg`;
}
