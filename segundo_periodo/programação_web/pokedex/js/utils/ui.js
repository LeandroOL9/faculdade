const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

const cardPokemon = (pokemon) => {
    const col = document.createElement('div');
    col.className = 'cursor-pointer bg-white text-gray-800 rounded-lg shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform';
    col.innerHTML = `
        <img src="${pokemon.sprites.front_default}" class="w-24 h-24">
        <h5 class="font-bold mt-2">${capitalize(pokemon.name)}</h5>
        <p class="text-gray-500">#${pokemon.id.toString().padStart(3,'0')}</p>
    `;
    return col;
};

const renderCards = (list, container, onClick) => {
    container.innerHTML = '';
    if (!list || list.length === 0) {
        container.innerHTML = `<p class="col-span-4 text-center bg-yellow-200 text-gray-800 rounded p-2">Nenhum Pokémon encontrado</p>`;
        return;
    }
    list.forEach(p => {
        const card = cardPokemon(p);
        card.addEventListener('click', () => onClick(p));
        container.appendChild(card);
    });
};

const showDetails = async (pokemon, allPokemons, index) => {
    const main = document.getElementById('main-container');
    const details = document.getElementById('details');

    main.style.marginRight = '400px';
    details.style.right = '0';
    
//refatorar esssa parada aqui slc
    document.getElementById('details-img').src = pokemon.sprites.front_default;
    document.getElementById('details-name').textContent = capitalize(pokemon.name);
    document.getElementById('details-id').textContent = `#${pokemon.id.toString().padStart(3,'0')}`;
    document.getElementById('details-types').innerHTML = pokemon.types.map(t => `<span class="bg-red-600 text-white px-2 py-1 rounded">${capitalize(t.type.name)}</span>`).join(' ');
    document.getElementById('details-height').textContent = `Altura: ${pokemon.height / 10} m`;
    document.getElementById('details-weight').textContent = `Peso: ${pokemon.weight / 10} kg`;

    const species = await (await fetch(pokemon.species.url)).json();
    const flavor = species.flavor_text_entries.find(f => f.language.name === 'en');
    document.getElementById('details-description').textContent = flavor ? flavor.flavor_text.replace(/\n|\f/g, ' ') : '';

    const evoChain = await fetch(species.evolution_chain.url).then(r => r.json());
    const evoContainer = document.getElementById('evolution-chain');
    evoContainer.innerHTML = '';
    let current = evoChain.chain;
    while(current) {
        const id = current.species.url.split('/').slice(-2,-1)[0];
        const img = document.createElement('img');
        img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        img.className = 'w-16 h-16 rounded';
        evoContainer.appendChild(img);
        current = current.evolves_to[0];
    }

    const prevBtn = document.getElementById('prev-detail');
    const nextBtn = document.getElementById('next-detail');
    prevBtn.disabled = index <= 0;
    nextBtn.disabled = index >= allPokemons.length -1;

    prevBtn.onclick = () => showDetails(allPokemons[index-1], allPokemons, index-1);
    nextBtn.onclick = () => showDetails(allPokemons[index+1], allPokemons, index+1);
};

const hideDetails = () => {
    document.getElementById('main-container').style.marginRight = '0';
    document.getElementById('details').style.right = '-400px';
};

export { cardPokemon, renderCards, showDetails, hideDetails };
