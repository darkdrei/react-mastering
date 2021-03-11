// Desetructuración de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];



const [, ,p3] =personajes;
console.log(p3);


const retornaArreglo = () =>{
    return ['ABC', 123]
}
const arr = retornaArreglo();
console.log(arr);
const [letas, numeros] = retornaArreglo();
console.log(letas, numeros);

//Tarea
const saludarAlumno = (valor) => {
    return [valor, ()=>{console.log('Hola mundo')}];
}
const [nombre, getSaludo] = saludarAlumno('goku');
console.log(nombre);
getSaludo();
