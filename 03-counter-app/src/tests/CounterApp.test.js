import React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import CounterApp from '../CounterApp';
import { shallow } from 'enzyme';

describe('Validación del componente Counter app', () => {
    let wrapper = shallow(<CounterApp value={ 10 }/>);//no es obligatorio, no es una buena practica, para contar con el inteligen

    //Inicializar las pruebas, reinicia los valores 
    beforeEach(() => {
        console.log(`Ejecución del test `)
        wrapper = shallow(<CounterApp value={ 10 }/>);
    });

    test('Gererar un Snapshot de los valores por defecto', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Mostrar En el contador app el valor de 100 ', ()=>{
        const  value = 100;
        const wrapper = shallow(
            <CounterApp 
                value={ value }
            />
        );
        //Validar un parafo
        const textoParrafo = wrapper.find('h2').text().trim();
        expect( textoParrafo ).toBe( `${ value }` );

    });
    
    test('Debe incrementar con el botón +1 ', () => {
        const bt1 = wrapper.find('button').at(0);
        console.log(bt1.html());  
        bt1.simulate('click');
        const textoParrafo = wrapper.find('h2').text().trim();
        const value =11;
        expect( textoParrafo ).toBe( `${ value }` );  
    });

    test('Debe incrementar con el botón -1 ', () => {
        const bt1 = wrapper.find('button').at(2);
        console.log(bt1.html());  
        bt1.simulate('click');
        const textoParrafo = wrapper.find('h2').text().trim();
        const value =9;
        expect( textoParrafo ).toBe( `${ value }` );  
    });

    test('Debe incrementar con el botón reset ', () => {
        const bt1 = wrapper.find('button').at(1);
        console.log(bt1.html());  
        bt1.simulate('click');
        const textoParrafo = wrapper.find('h2').text().trim();
        const value =0;
        expect( textoParrafo ).toBe( `${ value }` );  
    });
    
});
