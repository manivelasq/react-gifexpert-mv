import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import { expect, test } from '@jest/globals';
import { GifExpertApp } from '../src/GifExpertApp'

describe('Pruebas en <GifExpertAdd />', () => {

    test('evalua 1', () => {

        const onAddCategory = jest.fn();
        const inputValue    = 'Celine Dion';

        const { getAllByText } = render(
            <GifExpertApp />
        )

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } } );
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect( onAddCategory ).not.toHaveBeenCalled(); 
        expect(getAllByText(inputValue)[0]);

    });

});
