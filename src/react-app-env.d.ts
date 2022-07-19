type Pokemons = {
  'count': number,
  'next': number,
  'previous': number,
  'results': Array<Pokemon_result>,
};

type Pokemon_result = {
  'name': string,
  'url': string,
};

type newPokemon = {
  'name': string,
  'url': string,
  'info': Info,
};

type Info = {
  'sprites': string,
  'moves': Array,
  'stats': Stat[],
  'weight': number,
  'types': Type[],
  'id': number,
};

type Type = {
  'slot': number,
  'type': {
    'name': string,
  }
};

type Stats = {
  'hp': number,
  'attack': number,
  'defense': number,
  'special-attack': number,
  'special-defense': number,
  'speed': number,
};
