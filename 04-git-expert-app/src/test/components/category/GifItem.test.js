import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import React from 'react';
import { GifItem } from '../../../components/category/GifItem'


describe('Pruebas en <GitItems></GitItems>',() => {
    const title = 'Un titulo';
    const url = 'htps://localhost/algo.jpg';
    const wrapper = shallow(<GifItem url= { url } title = { title } />);

    test('Debe mostrar el componente correctamente ', () => {
        
        
        expect (wrapper ).toMatchSnapshot();
    });

    test('Debe tener un párrafo con el titulo', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
    });

    test('Debe tener la imagen igual a a url y los props', () => {
        const img = wrapper.find('img');
        console.log( img.html() );
        console.log( img.props() );
        console.log( img.prop('src') );
        expect( img.prop('src') ).toBe(url);
        expect( img.prop('alt') ).toBe(title);
    });

    test('Debe tener animate_fadeIn', () => {
        const  div = wrapper.find('div');
        const className = div.prop('className');
        expect( className.includes('animate__fadeIn') ).toBe( true );
    });
    
    
    
});