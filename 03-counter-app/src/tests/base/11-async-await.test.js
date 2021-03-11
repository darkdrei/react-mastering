import '@testing-library/jest-dom'
import { getImagen } from '../../base/11-async-await' 

describe('Validando 11-async-await', () => {
    test('getImagen: validar que hace la peticion con la url de la imagen ', async() => {
        const apiKey = 'C1khQe3Z7R1W2lfTO9myKeuShdqFYSGC';
        const url_data = `http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`;
        const url = await getImagen();
        console.log(url);
        expect(typeof url).toBe('string');

    });
    
});