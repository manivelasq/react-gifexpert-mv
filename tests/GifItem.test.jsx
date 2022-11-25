import React from 'react'
import { render } from '@testing-library/react';
import {expect, test} from '@jest/globals';
import { GifItem } from '../src/components/GifItem';

/*Tarea

1. Añadir los PropTypes
    a. Title obligatorio
    b. Url Obligatorio

2. Evaluar el snapshot

*/

describe('Pruebas en <GifItem />', () => { 

    const img = {
        title: "Esta es una prueba",
        id: "11",
        url: ""
    }

    test('Evaluar el Snapshot', () => {

        const { container } = render( <GifItem {...img} />);
        expect ( container ).toMatchSnapshot();

    })

});
