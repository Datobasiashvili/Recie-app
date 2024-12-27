import { Link, useParams } from 'react-router-dom';
import { useOutletContext } from "react-router-dom";

import '../styles/Recipe.css'

export default function Recipe(){
    //sending recipeData from Home component to render more information about the recipes
    const { recipeData} = useOutletContext(); 

    let { recipeName, recipeId } = useParams();

    const id = Number(recipeId) - 1;

    if(!recipeData || !recipeData[id]){
        return <h1>Recipe not found</h1>
    }

    return (
        <>
            <div className='recipe-information'>

                <div className='img-container'>
                    <img src={recipeData[id].image} alt={recipeData[id].name} width='100' height='100'/>
                </div>

                <div className='description'>
                    
                    <Link to='/home'  id="title-link">
                        <h1 className='recipe-title'>
                            <i>Dato's <span id='title-part'>Recipe App</span></i>
                        </h1>
                    </Link>
                    
                    <ul>
                        <h1 className='recipe-page-name'>{recipeData[id].name}</h1>
                        <li>Cooking time: {recipeData[id].cookTimeMinutes} minutes</li>
                        <li>Cuisine: {recipeData[id].cuisine}</li>
                        <li>Ingredients:
                            {recipeData[id].ingredients.map((ingredient, index) => {
                                return <span key={index}>{ingredient}, </span>;
                            })}</li>
                        <li>Instructions:
                            <ol>
                                {recipeData[id].instructions.map((instruction, index) => (
                                    <li key={index}>{instruction}</li>
                                ))}
                            </ol>
                        </li>
                    </ul>

                </div>

            </div>
        </>
    )
}