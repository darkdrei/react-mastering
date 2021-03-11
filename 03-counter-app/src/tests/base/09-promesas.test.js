import '@testing-library/jest-dom'
import { getHeroeByIdAsync } from '../../base/09-promesas'
import heroes from '../../data/heroes'

describe('Validacion del uso de promesas', ()=>{
    test('Debe retornar un Héroe getHeroeByAsync ', ( done ) => {
       const id = 1;
       getHeroeByIdAsync(id).
       then(hero => {
            expect(hero).toEqual(heroes[0]);
            done(); //Llamado al done para finalizar el proceso
       });
    });
    // Vaidar cuando un Héroe no existe
    test('Debe retornar un error si el Héroe no existe en getHeroeByAsync ', ( done ) => {
        const id = 10;
        getHeroeByIdAsync(id).
        then(hero => {
             expect(hero).toEqual(heroes[0]);
             done(); //Llamado al done para finalizar el proceso
        }).catch( error => {
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        });
     });
});