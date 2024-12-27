import { useState, useEffect } from 'react';
import { Outlet, useLocation} from 'react-router-dom';

import Home from './Home';

function FetchData () {
    const [recipeData, setRecipeData] = useState([]);
    const [favorite, setFavorite ] = useState([]);
    const [clickedButtons, setClickedButtons] = useState({});

    const location = useLocation();

    useEffect(() => {
        fetch('https://dummyjson.com/recipes')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setRecipeData(data.recipes);
            })
            .catch(err => `Error: ${err}`)
    }, [])

    const handleClick = (event) => {
        const favoriteRecipeId = event.currentTarget.value; 
    
        setFavorite((prev) => {
            if (prev.includes(favoriteRecipeId-1)) {
                // Remove the recipe if it's already in favorites
                return prev.filter((id) => id !== favoriteRecipeId-1);
            } else {
                // Add the recipe to favorites if it's not already there
                return [...prev, favoriteRecipeId-1];
            }
        });
    
        setClickedButtons((prev) => ({
            ...prev,
            [favoriteRecipeId]: !prev[favoriteRecipeId], // Toggle the button state
        }));
    };

    const favoriteRecipes = recipeData.filter((recipe) => 
        favorite.includes(recipe.id-1)
    )

    return (
        <>
            {location.pathname === "/home" && (
                <Home data={recipeData} handleClick={handleClick}  clickedButtons={clickedButtons}/>
            )}

            <Outlet context={{ favoriteRecipes, recipeData, handleClick }}/>
        </>
    )

}

export default FetchData;