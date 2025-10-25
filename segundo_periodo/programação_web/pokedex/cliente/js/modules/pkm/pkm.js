const API_URL = 'http://localhost:2000/pokemons';

const getPokemons = async (limit = 20, offset = 0) => {
  try {
    const res = await fetch(`${API_URL}?limit=${limit}&offset=${offset}`);
    if (!res.ok) throw new Error('Erro ao buscar lista de pokémons');
    return await res.json();
  } catch (err) {
    console.error(err);
    return { count: 0, results: [] };
  }
};

const getPokemonDetails = async (id) => {
  try {
    const res = await fetch(`${API_URL}/${id}`);
    if (!res.ok) throw new Error(`Erro ao buscar detalhes do Pokémon ${id}`);
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
};

export { getPokemons, getPokemonDetails };