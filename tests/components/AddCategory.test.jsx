import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import { expect, test } from '@jest/globals';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

    test('debe de cambiar el valor de la caja de texto', () => {
        render(
            <AddCategory 
                onNewCategory = { () => {}}
            />
        );
        // INFO: screen.debug();
        const input = screen.getByRole('textbox');
        // INFO: console.log(input);
        fireEvent.input(input, { target: { value: 'Shakira' } } );
        // INFO: screen.debug();
        expect(input.value).toBe('Shakira');
    });

    test('debe de llamar el onNewCategory si el input tiene algun valor ', () => {

        const inputValue    = 'Shakira';
        const onNewCategory = jest.fn();
        
        render(
            <AddCategory 
                onNewCategory = { onNewCategory }
            />
        );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } } );
        // INFO: screen.debug();
        fireEvent.submit(form);
        // INFO: screen.debug();
        expect(input.value).toBe('');
        expect( onNewCategory ).toHaveBeenCalled(); // INFO: se evalua que la funcion haya sido llamada
        expect( onNewCategory ).toHaveBeenCalledTimes(1); // INFO: evalua que la funcion se llamado una vez
        expect( onNewCategory ).toHaveBeenCalledWith(inputValue); // INFO: evalua que la funcion se llamado con un valor


    });

})