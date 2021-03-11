// import, export , multiples formas de exportaciones
//import { heroes } from './data/heroes';
import {getHeroeById, getHeroeByOwner} from './bases/08-import-export'


const promesa = new Promise((resolve, reject) => {
    // Llamamos a resolve(...) cuando lo que estabamos haciendo finaliza con éxito, y reject(...) cuando falla.
    // En este ejemplo, usamos setTimeout(...) para simular código asíncrono.
    // En la vida real, probablemente uses algo como XHR o una API HTML5.
    setTimeout(function(){
        const p1 = getHeroeById(2);
        console.log(p1);
        resolve(p1); // ¡Todo salió bien!
        // El reject se utiliza en caso de error
        //reject('No se encontro el héroe.');
    }, 250);
  });

promesa.then((heroe)=>{
    console.log('Heroe -> ', heroe)
})
.catch(err => console.warn(err));

/** Parametro a una promesa */

const getHeroeByAsync = (id)=>{

    return new Promise((resolve, reject) => {
        // Llamamos a resolve(...) cuando lo que estabamos haciendo finaliza con éxito, y reject(...) cuando falla.
        // En este ejemplo, usamos setTimeout(...) para simular código asíncrono.
        // En la vida real, probablemente uses algo como XHR o una API HTML5.
        setTimeout(function(){
            console.log('Promesa por parametro')
            const p1 = getHeroeById(id);
            if(p1 !== undefined){
                resolve(p1);
            }else{
                reject('No se encontro el héroe.');  
            }
             // ¡Todo salió bien!
            // El reject se utiliza en caso de error
            //reject('No se encontro el héroe.');
        }, 500);
      });
    
}

getHeroeByAsync(100).then((heroe)=>{
    console.log('Heroe -> ', heroe)
})
.catch(err => console.warn(err));
