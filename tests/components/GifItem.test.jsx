import React from 'react'
import { render, screen } from '@testing-library/react';
import {expect, test} from '@jest/globals';
import { GifItem } from '../../src/components/GifItem';

/*Tarea

1. Añadir los PropTypes
    a. Title obligatorio
    b. Url Obligatorio
2. Evaluar el snapshot
*/

describe('Pruebas en <GifItem />', () => { 

    const title = "Esta es una prueba";
    const id = "11";
    const url = "http://localhost/";

    test('debe hacer match con el Snapshot', () => {
        const { container } = render( 
                                        <GifItem 
                                            title = {title} 
                                            url = {url} 
                                        />
                                    );
        expect ( container ).toMatchSnapshot();
    })

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {

        render( 
            <GifItem 
                title = {title} 
                url = {url} 
            />
        );
        // screen.debug();
        // console.log(screen.getByRole('img').src);
        // console.log(screen.getByRole('img').alt);
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);

        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
        
    })

    test('debe de mostrar el titulo en el componente', () => {

        render( 
            <GifItem 
                title = {title} 
                url = {url} 
            />
        );

        // screen.debug();
        expect(screen.getByText(title)).toBeTruthy();

    })

});
