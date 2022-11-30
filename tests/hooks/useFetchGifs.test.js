import React from 'react'
import { fireEvent, render, renderHook, screen, waitFor } from '@testing-library/react';
import {expect, test} from '@jest/globals';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';


describe('Pruebas en hook: useFetchGifs', () => {

    const category = 'Shakira';

    test('debe regresar el estado inicial', () => {

        const { result } = renderHook( () =>  useFetchGifs(category));
        const { images, isLoading } = result.current;

        expect( images.length).toBe(0);
        expect( isLoading ).toBeTruthy();

    });

    test('debe retornar un arreglo de imagenes y isLoading en false', async() => {

        const { result } = renderHook( () =>  useFetchGifs(category));
        // INFO: espera que el hook obtenga las imagenes
        // una vez obtenidas las imagenes, isLoading cambia a false, se debe evaluar que sea false
        // el arreglo de las imagenes ya no debe ser vacio, se debe evaluar que tengas mas de 0 elementos
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
            // ,
            // {
            //     timeout: 5000 // 5 segundos
            // }
        )
        const { images, isLoading } = result.current;
        expect( images.length).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

    });

});
