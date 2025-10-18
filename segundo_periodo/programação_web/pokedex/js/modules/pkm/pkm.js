const API_URL = 'https://pokeapi.co/api/v2/pokemon';
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
};

const getPokemons = async (url = API_URL) => {
    const data = await getList(url);
    const promises = data.results.map(p => getDetails(p.url));
    const pokemons = await Promise.all(promises);
    return { pokemons, next: data.next, previous: data.previous };
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
