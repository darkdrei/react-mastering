// import, export , multiples formas de exportaciones
//import { heroes } from './data/heroes';


import  heroes, {owners}  from "../data/heroes";


const getHeroeById = (id)=>{
    return heroes.find((heroe) => heroe.id === id)
}

/*console.log(heroes);                       
console.log(getHeroeById(5));*/

const getHeroeByOwner = (owner)=> heroes.filter((heroe) => heroe.owner === owner);
/*
console.log(heroes);

console.log(getHeroeByOwner('Marvel'));
console.log(owners);*/

export {
    getHeroeById,
    getHeroeByOwner,
}