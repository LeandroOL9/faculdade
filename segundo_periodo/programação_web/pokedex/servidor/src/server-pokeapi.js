import http from 'http';

const PORT = 2000;
const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            return await response.json();
        }
        throw new Error('Http error');
    } catch (error) {
        console.error(`Erro ao buscar ${url}`, error.message);
        return null;
    }
};

const getDetails = async (pokemon) => {
    const details = await fetchData(pokemon.url);
    if (!details) return null;
    return {
    id: details.id,
    name: details.name,
    sprite: details.sprites.front_default,
    types: details.types.map(t => t.type.name),
    height: details.height,
    weight: details.weight,
    species: details.species
    };
};

const get = async (limit = 20, offset = 0) => {
    const urlList = `${POKEAPI_BASE_URL}?limit=${limit}&offset=${offset}`;
    const pokemons = await fetchData(urlList);
    if (!pokemons || !pokemons.results) {
        return { count: 0, results: [] };
    }

    const tasks = pokemons.results.map(getDetails);
    const resultTasks = (await Promise.all(tasks)).filter(p => p !== null);

    return { count: pokemons.count, results: resultTasks };
};

const server = http.createServer(async (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (request.method === 'OPTIONS') {
        response.writeHead(204);
        return response.end();
    }

    const { url, method } = request;

    if (url.startsWith('/pokemons') && method === 'GET') {
        const data = await get();
        response.setHeader('Content-Type', 'application/json');
        return response.end(JSON.stringify(data));
    }

    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 404;
    return response.end(JSON.stringify({ erro: 'Recurso não encontrado' }));
});

server.listen(PORT, () => {
    console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
