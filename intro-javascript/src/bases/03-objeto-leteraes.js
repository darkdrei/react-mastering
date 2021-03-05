// Objetos literales

const persona = {
    nombre:'Tony',
    apellidos: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        lat: 5555,
        lng:34.92
    }
}

console.table(persona);
// Objeto con el mismo nombre de la propiedad objet
console.table({persona});

// Clonar objetos -> Operador expre
const persona2 = {...persona};

persona2.nombre = 'Peter';
console.log(persona2);
console.log(persona);