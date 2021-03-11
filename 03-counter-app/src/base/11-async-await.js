

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async() => {

    try {

        const apiKey = 'C1khQe3Z7R1W2lfTO9myKeuShdqFYSGC';
        const url_ = `http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`;
        const resp   = await fetch(url_);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        /*const img = document.createElement('img');
        img.src = url;
        document.body.append( img );*/
        return url

    } catch (error) {
        // manejo del error
        return 'No existe'
    }
    
    
    
}

//getImagen();



