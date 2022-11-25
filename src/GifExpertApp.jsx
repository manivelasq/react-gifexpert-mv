import { useState } from 'react';
import { AddCategory, GifGird } from './components';

export const GifExpertApp = () => {
    const [categories, setcategories] = useState(['Shakira']);
    const onAddCategory = ( NewCategory ) => {
        if (categories.includes(NewCategory)) return;
        setcategories([NewCategory,...categories])
    }

    return (
        <>
            <h1>Gif-Expert-App</h1>
            <AddCategory 
                onNewCategory = { (value) => onAddCategory( value )  }
            />
            { 
                categories.map( (category) => (
                        <GifGird 
                            key= { category } 
                            category = { category }
                        />
                    )) 
            }
        </>
    )
}
