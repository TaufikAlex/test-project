import { MyPokemonData } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonState {
  uid:string;
  myPokemons: MyPokemonData[]; 
}

const initialState: PokemonState = {
  uid: '0', // Initialize with a default value
  myPokemons: JSON.parse(localStorage.getItem('myPokemons') || '[]'), 
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemons(state, action: PayloadAction<MyPokemonData[]>) {
      state.myPokemons = action.payload;
      localStorage.setItem('myPokemons', JSON.stringify(state.myPokemons));
    },
    addPokemon(state, action: PayloadAction<MyPokemonData>) {
      state.myPokemons.push(action.payload);
      localStorage.setItem('myPokemons', JSON.stringify(state.myPokemons));
    },
    
    renamePokemon(state, action: PayloadAction<{ uid: string; nickname: string }>) {
      const { uid, nickname } = action.payload;
      const index = state.myPokemons.findIndex(pokemon => pokemon.uid === uid);
      if (index !== -1) {
        state.myPokemons[index].nickname = nickname;
        localStorage.setItem('myPokemons', JSON.stringify(state.myPokemons));
      }
    },
    releasePokemon(state, action: PayloadAction<string>) {
      state.myPokemons = state.myPokemons.filter(pokemon => pokemon.uid !== action.payload);
      localStorage.setItem('myPokemons', JSON.stringify(state.myPokemons));
    },
  },
});

export const {
  setPokemons, 
  addPokemon,
  renamePokemon,
  releasePokemon
} = pokemonSlice.actions;

export default pokemonSlice.reducer;
