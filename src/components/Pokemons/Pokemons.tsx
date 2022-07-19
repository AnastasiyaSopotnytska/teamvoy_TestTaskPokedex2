/* eslint-disable array-callback-return */
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { getPokemonInfo, getPokemons } from '../../api/api';
import { PokemonCard } from '../Pokemon_card';
import './Pokemons.scss';

export const Pokemons: React.FC = () => {
  const [count, setCount] = useState<number>(1);
  const [pokemons, setPokemons] = useState<newPokemon[]>([]);
  const [pokemonSelect, setPokemonSelect] = useState<newPokemon | null>();
  let allpokemons: newPokemon[] = [];

  useEffect(() => {
    allpokemons = [];
    getPokemons(count)
      .then((pokemonsFromServer: Pokemons) => {
        pokemonsFromServer.results.map(item => {
          getPokemonInfo(item.url)
            .then(result => {
              const newPokemon: newPokemon = {
                name: item.name,
                url: item.url,
                info: {
                  sprites: result.sprites.front_default,
                  moves: result.moves,
                  stats: result.stats,
                  types: result.types,
                  weight: result.weight,
                  id: result.id,
                },
              };

              allpokemons = [...allpokemons, newPokemon];
              setPokemons(allpokemons);
            })
            .catch((error) => {
              // eslint-disable-next-line no-console
              console.log(error);
            });
        });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }, [count]);

  const selectPokemon = (pokemon: newPokemon) => {
    if (pokemon.name === pokemonSelect?.name) {
      setPokemonSelect(null);
    } else {
      setPokemonSelect(pokemon);
    }
  };

  return (
    <>
      { pokemonSelect && (
        <PokemonCard pokemon={pokemonSelect} />
      )}

      <div className="pokemons">
        {pokemons?.map(pokemon => (
          <div key={pokemon.info.id} className="pokemons_cards">
            <img src={pokemon.info.sprites} alt="pokemon" className="pokemons_photo" />
            <div className="pokemons_name">
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </div>
            <div>
              {pokemon.info.types.map(item => (
                <button
                  type="button"
                  className={classNames('pokemons_types',
                    { fire: item.type.name === 'fire' },
                    { grass: item.type.name === 'grass' },
                    { poison: item.type.name === 'poison' },
                    { water: item.type.name === 'water' },
                    { fairy: item.type.name === 'fairy' },
                    { ground: item.type.name === 'ground' },
                    { electric: item.type.name === 'electric' },
                    { bug: item.type.name === 'bug' },
                    { flying: item.type.name === 'flying' })}
                  key={item.type.name}
                  onClick={() => selectPokemon(pokemon)}
                >
                  {item.type.name.charAt(0).toUpperCase() + item.type.name.slice(1)}
                </button>
              ))}

            </div>
          </div>
        ))}
        <button
          type="button"
          className="button"
          onClick={() => {
            const i = count + 1;

            setCount(i);
          }}
        >
          Load More
        </button>
      </div>
    </>
  );
};
