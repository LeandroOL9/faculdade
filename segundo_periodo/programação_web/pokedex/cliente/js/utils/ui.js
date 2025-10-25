const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const TYPE_COLORS = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD'
};

const cardPokemon = (pokemon) => {
  const col = document.createElement('div');
  col.className = 'cursor-pointer bg-white text-gray-800 rounded-lg shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform';
  col.innerHTML = `
    <img src="${pokemon.sprite}" class="w-24 h-24">
    <h5 class="font-bold mt-2">${capitalize(pokemon.name)}</h5>
    <p class="text-gray-500">#${pokemon.id.toString().padStart(3, '0')}</p>
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

  document.getElementById('details-img').src = pokemon.sprite;
  document.getElementById('details-name').textContent = capitalize(pokemon.name);
  document.getElementById('details-id').textContent = `#${pokemon.id.toString().padStart(3, '0')}`;
  document.getElementById('details-types').innerHTML = pokemon.types.map(t => {
    const color = TYPE_COLORS[t] || '#777';
    return `<span class="px-2 py-1 rounded text-white" style="background-color: ${color}">${capitalize(t)}</span>`;
  }).join(' ');

  document.getElementById('details-height').textContent = `Altura: ${pokemon.height / 10} m`;
  document.getElementById('details-weight').textContent = `Peso: ${pokemon.weight / 10} kg`;

  const oldExtra = details.querySelector('.extra-info');
  if (oldExtra) oldExtra.remove();

  if (pokemon.weaknesses?.length || pokemon.strengths?.length) {
    const container = document.createElement('div');
    container.className = 'mt-4 extra-info';

    if (pokemon.strengths?.length) {
      container.innerHTML += `<h3 class="font-semibold">Pontos fortes:</h3>
        <p class="text-sm mb-2">${pokemon.strengths.map(t => {
          const color = TYPE_COLORS[t] || '#777';
          return `<span class="px-2 py-1 rounded text-white mr-1" style="background-color: ${color}">${capitalize(t)}</span>`;
        }).join('')}</p>`;
    }

    if (pokemon.weaknesses?.length) {
      container.innerHTML += `<h3 class="font-semibold">Fraquezas:</h3>
        <p class="text-sm">${pokemon.weaknesses.map(t => {
          const color = TYPE_COLORS[t] || '#777';
          return `<span class="px-2 py-1 rounded text-white mr-1" style="background-color: ${color}">${capitalize(t)}</span>`;
        }).join('')}</p>`;
    }

    details.appendChild(container);
  }

  const prevBtn = document.getElementById('prev-detail');
  const nextBtn = document.getElementById('next-detail');
  prevBtn.disabled = index <= 0;
  nextBtn.disabled = index >= allPokemons.length - 1;

  prevBtn.onclick = () => showDetails(allPokemons[index - 1], allPokemons, index - 1);
  nextBtn.onclick = () => showDetails(allPokemons[index + 1], allPokemons, index + 1);
};

const hideDetails = () => {
  document.getElementById('main-container').style.marginRight = '0';
  document.getElementById('details').style.right = '-400px';
  const details = document.getElementById('details');
  const extra = details.querySelectorAll('h3, p.text-sm');
  extra.forEach(e => e.remove());
};

const showStatus = (msg) => {
  const el = document.getElementById('status-message');
  el.textContent = msg;
  el.className = 'text-center text-yellow-200';
};

const hideStatus = () => {
  const el = document.getElementById('status-message');
  el.textContent = '';
  el.className = '';
};

export { renderCards, showDetails, hideDetails, showStatus, hideStatus };