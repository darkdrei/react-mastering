import '@testing-library/jest-dom'

import { getSaludo } from '../../base/02-template-string'

describe('Prueba en 02-template-string.js', ()=>{
    test('Prueba en en metodo getSaludo', ()=>{
        const nombre = 'Eugenio';

        const saludo = getSaludo(nombre);

        expect( saludo ).toBe('Hola '+ nombre );
        console.log(saludo);
    })
    //getSaludo debe retornar Hola Mirlan
    test('Prueba en en metodo getSaludo, con valor por defecto debe retornar "Hola miraln"', ()=>{
        const nombre = 'Mirlan';

        const saludo = getSaludo();

        expect( saludo ).toBe('Hola '+ nombre );
    });
        
});