import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch' ]);
    //console.log(categories);
    const onAddCategory = (newCategory ) => {

        if( categories.includes(newCategory) ) return;

        //console.log(newCategory);
        setCategories([ newCategory, ...categories]);
        //setcategories( cat => [ ...cat, 'Valorant'] );
    }

    return(
        
        <>
        {/** Titulo */}        
            <h1>GifExpertAPP</h1>
        {/** Input */}
        <AddCategory 
            //setCategories={ setCategories } 
            onNewCategory={ value => onAddCategory(value) }
        />

        {/** Listado de Gif */}
        {/* <button onClick={ onAddCategory }>Agregar</button> */}
    
            {
                categories.map( ( category ) => (
                    // return <li key={ category }> {category} </li>
                //    return (
                        <GifGrid key={ category } category={ category }/>
                        // <div> key= { category }
                        //     <h3>{ category }</h3>
                        //     <li>{ category }</li>
                        // </div>
                    )
                )
            }      
    
        </>
    )


}