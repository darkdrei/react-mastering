import '@testing-library/jest-dom'
import { retornaArreglo } from '../../base/07-deses-arr'

describe('Pruebas 07-desestruc-arr', ()=>{
    // Llamado normal 
    test('retornaArreglo: funcion que retorna un array', ()=>{
        const arr = retornaArreglo();

        expect(arr).toEqual(['ABC', 123]);
    });
    // Llamado con respuesta desestructuradanormal 
    test('retornaArreglo: funcion que retorna un array, el cual es desestructurado', ()=>{
        const [letras, numero] = retornaArreglo();
        //Valiando por el tipo de valor obtenido
        //String
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');
        //Number
        expect(numero).toBe(123);
        expect(typeof numero).toBe('number');
    });
});
