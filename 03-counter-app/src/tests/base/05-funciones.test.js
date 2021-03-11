import '@testing-library/jest-dom'
import { getUser, getUsuarioActivo } from '../../base/05-funciones'

describe('Prueba en 05-funciones.js', ()=>{
    test('getUser: debe retorna un objeto', ()=>{
        const userTest ={
            uid: 'ABC123',
            username: 'Darkdrei88',
        }

        const user = getUser();

        expect(user).toEqual( userTest );

    });
    // Prueba del getUsuariActivo
    test('getUsuarioActivo: debe retorna un objeto del usuario activo', ()=>{
        const nombre = 'Eugenio'
        const userTest ={
            uid: 'ABC567',
            username: nombre
        }

        const user = getUsuarioActivo(nombre);

        expect(user).toEqual( userTest );

    });
});