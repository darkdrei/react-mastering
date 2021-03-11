// Fetch
const apiKey = 'Y447DHDqNidwuTM2Lo3fs60pmLHxYvFS';
const url = `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

const peticion = fetch(url);

/** Forma desencadenada de una promesa, es una mala practica */
peticion.then((res) => {
    res.json().then((data) => {
        console.log(data);
    });
}).catch(console.log);

/** Caso 1 */

const getImagenPromesa= ()=>{
    const promesa = new Promise((resolve, reject) =>{
        resolve(url);
    })
    return promesa;
}
getImagenPromesa().then(console.log)
/** Caso simplificado */
const getImagenPromesaSimplificado = ()=>
    new Promise((resolve, reject) =>resolve(url))


/** Caso con easy */
const getImage = async() =>{
    try{
        const respuesta =  await fetch(url);
        const {data} = await respuesta.json();
        console.log(data.data);
        const {url:imageUrl} = data.images.original;
            console.log(imageUrl);
            const img = document.createElement('img');
            img.src = imageUrl;
            document.body.appendChild(img);
    }catch(error){
        console.log('Manejo de errores');
    }
}

console.log(getImage().then(console.log))

/** Caso con await */
