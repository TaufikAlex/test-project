import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './app/layout';
import PokemonList from './app/page';
import PokemonDetail from './app/PokemonDetail';
import MyPokemonList from './app/MyPokemonList';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/pokemon/:name" element={<PokemonDetail />} />
          <Route path="/mypokemon-list" element={<MyPokemonList />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
