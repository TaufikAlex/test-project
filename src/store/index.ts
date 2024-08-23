import { configureStore } from '@reduxjs/toolkit';
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux';
import pokemonReducer from './pokemon'; 

// Configure the Redux store
const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

const useDispatch = () => useAppDispatch<typeof store.dispatch>();
const useSelector: (selector: (state: RootState) => any) => any = useAppSelector;

export { store, useDispatch, useSelector };
