// Template String


const nombre = "Eugenio";
const apellido = "Pajaro";

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre){
    return 'Hola mundo '+ nombre;
}

console.log(`Este es un texto : ${ getSaludo(nombre) }`)