import React from 'react';
import './PokemonCard.scss';

type Props = {
  pokemon: newPokemon;
};

export const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <img src={pokemon.info.sprites} alt="pokemon" className="pokemon-card_photo" />
      <div className="pokemon-card_name">
        {`${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} #${pokemon.info.id}`}
      </div>

      <table className="pokemon-card_details">
        <tbody>
          <tr>
            <th>
              Type
            </th>
            <th>
              {pokemon.info.types.map(item => (
                <div key={item.type.name}>
                  {item.type.name.charAt(0).toUpperCase() + item.type.name.slice(1)}
                </div>
              ))}
            </th>
          </tr>
          {pokemon.info.stats.map(item => (
            <tr
              key={item.stat.name}
              className="pockemon-info__stats"
            >
              <th>
                {item.stat.name.charAt(0).toUpperCase() + item.stat.name.slice(1)}
              </th>
              <th>
                {item.base_stat}
              </th>
            </tr>
          ))}
          <tr>
            <th>
              Weight
            </th>
            <th>
              {pokemon.info.weight}
            </th>
          </tr>
          <tr>
            <th>
              Total moves
            </th>
            <th>
              {pokemon.info.moves.length}
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
