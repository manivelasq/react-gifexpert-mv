import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import { expect, test } from '@jest/globals';
import { GifGird } from '../../src/components/GifGird';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');


describe('Prueba en <GifGird />', () => {

    const category = 'Shakira';

    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(
            <GifGird 
                category = {category}
            />
        );

        // screen.debug();
        expect(screen.getByText('Cargando....'));
        expect(screen.getByText(category));

    });

    test('debe de mostrar items cuando se muestran las imagenes useFetchGifs', () => {

        const gifs = [
            {
                id: '001',
                title: 'Shakira',
                url: 'http://localhost/Shakira.jpg',
            },
            {
                id: '002',
                title: 'Celine Dion',
                url: 'http://localhost/CelineDion.jpg',
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(
            <GifGird 
                category = {category}
            />
        );

        expect( screen.getAllByRole('img').length ).toBe(2);
        
        // screen.debug();

    });


});
