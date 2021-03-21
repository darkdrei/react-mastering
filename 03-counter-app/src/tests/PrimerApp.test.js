import React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import PrimeraApp from '../PrimerApp';
import { shallow } from 'enzyme';

describe('Pruebas en PrimeraApp', () => {
    //Testin con jet
    test('Validación del mensaje de acuerdo al nombre Eugenio', () => {
        const saludo ='Eugenio';
        //De forma estructurada
        /*const wrapper = render(<PrimeraApp saludo='Eugenio' />)
        wrapper.getByText*/
        //De forma desestructurada
        const { getByText } = render(<PrimeraApp saludo='Eugenio' />);
        expect( getByText(saludo)).toBeInTheDocument();
    });
    //Testing con Enzyme
    test('Debe de mostrar <PrimeraApp /> correctamene', () => {
        const saludo= 'Hola mundo'
        const wrapper = shallow(<PrimeraApp saludo={ saludo }></PrimeraApp>);
        expect( wrapper ).toMatchSnapshot();
    });

    test('Mostrar el subtitulo mostrado por props', ()=>{
        const  saludo = 'Hola, Soy Eugenio';
        const subtitulo = 'Soy un subtitulo';
        const wrapper = shallow(
            <PrimeraApp 
                saludo={ saludo }
                subtitulo={ subtitulo }
            />
        );
        //Validar un parafo
        const textoParrafo = wrapper.find('p').text();
        expect( subtitulo ).toBe( subtitulo );

    });
    
});