import * as pkm from './pkm/pkm.js';
import * as ui from '../utils/ui.js';

(() => {
  const container = document.getElementById('main-container');
  let currentOffset = 0;
  const limit = 20;

  let currentPokemons = [];

  const loadPokemons = async () => {
    ui.showStatus('Carregando Pokémon...');
    const data = await pkm.getPokemons(limit, currentOffset);
    currentPokemons = data.results || [];
    ui.hideStatus();

    ui.renderCards(currentPokemons, container, (p) => {
      const idx = currentPokemons.findIndex(pk => pk.id === p.id);
      ui.showDetails(p, currentPokemons, idx);
    });
  };

  document.getElementById('vai').addEventListener('click', () => {
    currentOffset += limit;
    loadPokemons();
  });

  document.getElementById('volta').addEventListener('click', () => {
    currentOffset = Math.max(0, currentOffset - limit);
    loadPokemons();
  });

  document.getElementById('close-details').addEventListener('click', ui.hideDetails);

  loadPokemons();
})();
