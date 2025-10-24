const API_URL = 'http://localhost:2000/pokemons';
const SPECIES_URL = 'https://pokeapi.co/api/v2/pokemon-species';

const getList = async (url = API_URL) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
        return { results: [], next: null, previous: null };
    }
};

const getDetails = async (url) => {
    try {
        const res = await fetch(url);
        return await res.json();
    } catch (err) {
        console.error(err);
        return null;
    }
};

const getSpecies = async (id) => {
    try {
        const res = await fetch(`${SPECIES_URL}/${id}`);
        return await res.json();
    } catch (err) {
        console.error(err);
        return null;
    }
};API_URL

const getPokemons = async (url = API_URL) => {
    try {
        const res = await fetch(url);
        const data = await res.json();

        const pokemons = data.results || [];
        return { pokemons, next: null, previous: null };
    } catch (err) {
        console.error(err);
        return { pokemons: [], next: null, previous: null };
    }
};


const getEvolutionChain = async (species) => {
    try {
        const res = await fetch(species.evolution_chain.url);
        const data = await res.json();
        const chain = [];
        let current = data.chain;
        do {
            const id = current.species.url.split('/').slice(-2, -1)[0];
            chain.push({ name: current.species.name, id });
            current = current.evolves_to[0];
        } while (current);
        return chain;
    } catch (err) {
        console.error(err);
        return [];
    }
};

export { getList, getDetails, getPokemons, getSpecies, getEvolutionChain };
