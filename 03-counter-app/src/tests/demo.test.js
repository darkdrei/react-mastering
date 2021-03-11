
describe('Pruebas en el archiv demo.js', ()=>{
    test('Debe ser iguales los string', ()=>{
        // 1.  Inicializar
        const mensaje = 'Hola mundo'
    
        // 2. Estimulo
        const mensaje2 = 'Hola mundo'
    
        //3. Observar el comportamiento 
        expect(mensaje).toBe(mensaje2);
    });
});
