// Desestructuración de objetos
// Asignación Desestructurada

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave:'Iroman',
}
//Lamado normal
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);
// Llamado desestructurado se puede llamar como el nombre del atributo o se puede renombrar despues de los dos puntos
const {nombre:nombre2} = persona;
console.log(nombre2);
const {nombre,edad,clave} = persona;
console.log(nombre, edad, clave);


const retornaPersona = ({nombre, edad, rango='Capitán', clave}) =>{
    //console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios:edad,
        latlng:{
            lat:25,
            lng:-13.3
        }
    }
}

const avenger = retornaPersona(persona);
const {nombreClave, anios, latlng:{lat, lng}} = avenger
console.log(nombreClave, anios, lat, lng);