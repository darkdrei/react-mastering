// Operador termario

const activo = true;

let mensaje = '';

if(activo){
    console.log('Activo');
}else{
    console.log('No Activo');
}

const mensajeTernario = activo? 'Activo': 'Inactivo';
console.log(mensajeTernario);

const mensajeIgual = activo && 'Activo'
console.log(mensajeIgual);