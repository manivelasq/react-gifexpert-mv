import PropTypes from "prop-types";
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGird = ( { category} ) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando....</h2>)
            }
            
            <div className='card-grid'>
                {
                    images.map( (img) => (
                        <GifItem 
                            key= { img.id }
                            { ...img}
                        />
                    ))
                }
            </div>
        </>
    )

}

GifGird.propTypes = {
    category: PropTypes.string.isRequired,
}