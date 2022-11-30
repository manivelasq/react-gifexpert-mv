// import React from 'react'
// import { render, screen } from '@testing-library/react';
import {expect, test} from '@jest/globals';
import { getGifs } from '../../src/helpers/getGifs';


describe('pruebas en getGifs()', () => {

    test('debe retornar un arreglo de gifs', async () => {

        const gifs = await getGifs('Shakira');
        // console.log(gifs);
        // expect(gifs.length).toBe(5);
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id:    expect.any(String), 
            title: expect.any(String), 
            url:   expect.any(String),
        })

    });

})
