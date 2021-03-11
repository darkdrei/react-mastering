import '@testing-library/jest-dom'
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funcionesde Héroes', ()=>{
    test('getHeroeById: Debe retornar un héroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);

        const heroe_data = heroes.find(h =>h.id===id);
        expect(heroe).toEqual(heroe_data);
    });
    //Si se retorna 
    test('getHeroeById: Debe retornar un héroe por id, si no existe retorna un indefinifo', () => {
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    });
    // debe retornar un arreglo con los herroes de DC
    test('getHeroesByOwner: retornas los herroes que pertenecen a un owner', ()=>{
        const owner = 'DC';
        const heroes_data = heroes.filter((h) => h.owner === owner);
        expect(getHeroesByOwner(owner)).toEqual(heroes_data);
    });
    // debe retornar tamaño de un arreglo con los herroes de DC
    test('getHeroesByOwner: retornas los herroes que pertenecen a un owner', ()=>{
        const owner = 'DC';
        const heroes_data = heroes.filter((h) => h.owner === owner);
        expect(getHeroesByOwner(owner).length).toBe(heroes_data.length);
        console.log(getHeroesByOwner(owner).length);
    });
});
