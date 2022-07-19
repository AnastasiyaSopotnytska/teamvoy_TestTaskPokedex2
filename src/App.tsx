import React from 'react';
import './App.scss';
import { Pokemons } from './components/Pokemons';

export const App: React.FC = () => {
  return (
    <div className="main">
      <h1 className="main_title">Pokedex</h1>
      <Pokemons />
    </div>
  );
};
