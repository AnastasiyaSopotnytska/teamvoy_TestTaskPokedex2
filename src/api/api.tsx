const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=';

export const getPokemons = (count: number) => {
  return fetch(`${URL}${count * 12}`)
    .then(response => {
      if (!response.ok) {
        return Promise.reject();
      }

      return response.json();
    });
};

export const getPokemonInfo = (url: string) => {
  return fetch(`${url}`)
    .then(response => {
      if (!response.ok) {
        return Promise.reject();
      }

      return response.json();
    });
};
