import http from 'http';

const PORT = 2000;
const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
const TYPE_BASE_URL = 'https://pokeapi.co/api/v2/type';

const fetchData = async (url) => {
    try {
        const res = await fetch(url);
        if (res.ok) return await res.json();
        throw new Error('HTTP error ' + res.status);
    } catch (err) {
        console.error(`Erro ao buscar ${url}:`, err.message);
        return null;
    }
};

const getDetails = async (pokemon) => {
    const details = await fetchData(pokemon.url);
    if (!details) return null;

    const types = details.types.map(t => t.type.name);

    let strengths = [];
    let weaknesses = [];
    for (const type of types) {
        const typeData = await fetchData(`${TYPE_BASE_URL}/${type}`);
        if (!typeData) continue;
        strengths.push(...typeData.damage_relations.double_damage_to.map(t => t.name));
        weaknesses.push(...typeData.damage_relations.double_damage_from.map(t => t.name));
    }
    strengths = [...new Set(strengths)];
    weaknesses = [...new Set(weaknesses)];

    return {
        id: details.id,
        name: details.name,
        sprite: details.sprites.front_default,
        types,
        height: details.height,
        weight: details.weight,
        species: details.species,
        strengths,
        weaknesses
    };
};

const getList = async (limit = 20, offset = 0) => {
    const url = `${POKEAPI_BASE_URL}?limit=${limit}&offset=${offset}`;
    const listData = await fetchData(url);
    if (!listData || !listData.results) return { count: 0, results: [] };

    const tasks = listData.results.map(getDetails);
    const results = (await Promise.all(tasks)).filter(p => p !== null);
    return { count: listData.count, results };
};

const server = http.createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        return res.end();
    }

    const url = req.url;
    const method = req.method;

    if (url.startsWith('/pokemons') && method === 'GET' && !/^\/pokemons\/\d+/.test(url)) {
        const params = new URL(`http://localhost${url}`).searchParams;
        const limit = parseInt(params.get('limit')) || 20;
        const offset = parseInt(params.get('offset')) || 0;
        const data = await getList(limit, offset);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(data));
    }

    const match = url.match(/^\/pokemons\/(\d+)/);
    if (match && method === 'GET') {
        const id = match[1];
        const data = await getDetails({ url: `${POKEAPI_BASE_URL}/${id}` });
        if (!data) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ erro: 'Pokémon não encontrado' }));
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(data));
    }

    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ erro: 'Recurso não encontrado' }));
});

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
