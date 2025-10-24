import * as pkm from './pkm/pkm.js';
import * as ui from '../utils/ui.js';

(() => {
    const container = document.getElementById('main-container');
    let currentPokemons = [];
    let nextUrl = null;
    let prevUrl = null;

    const loadPokemons = async (url) => {
        const data = await pkm.getPokemons(url);
        currentPokemons = data.pokemons;
        nextUrl = data.next;
        prevUrl = data.previous;

        ui.renderCards(currentPokemons, container, (p) => {
            const idx = currentPokemons.findIndex(pk => pk.id === p.id);
            ui.showDetails(p, currentPokemons, idx);
        });
    };

    document.getElementById('vai').addEventListener('click', () => { if(nextUrl) loadPokemons(nextUrl); });
    document.getElementById('volta').addEventListener('click', () => { if(prevUrl) loadPokemons(prevUrl); });
    document.getElementById('close-details').addEventListener('click', ui.hideDetails);

    loadPokemons();
})();
