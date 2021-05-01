import { heroes } from '../data/heroes'

export const getHeroSearch = ( search = '') =>{
    if (search === ''){
        return [];
    }
    search = search.toLowerCase();
    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes( search ));
}