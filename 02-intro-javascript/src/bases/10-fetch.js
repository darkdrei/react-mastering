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

/** */
const peticion2 = fetch(url);

/** Promesa en cadena */
peticion2
    .then(resp => resp.json())
    .then(({data}) => {
        const {url} = data.images.original;
        console.log(url);
        const img = document.createElement('img');
        img.src = url;
        document.body.appendChild(img);
    })
    .catch(console.warn);

