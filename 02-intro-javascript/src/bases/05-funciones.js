// Funciones

const saludar = function saludar(nombre){
    return `Hola ${nombre}`;
}

const saludar2 = (nombre)=>{
    return `Hola ${nombre}`;
}

const saludar3 = (nombre)=> `Hola ${nombre}`;
const saludar4 = ()=> `Hola Mundo`;

console.log(saludar2('Goku'));
// Con () se retorna un objeto de manera implicita
const getUser = () =>({
    uid:'ABC12345',
    username: 'darkdrei',
})


console.log(getUser());


const getUserActivo = (nombre) =>({
    uid:'ABC12345',
    username: nombre,
})

console.log(getUserActivo('Eugenio'));