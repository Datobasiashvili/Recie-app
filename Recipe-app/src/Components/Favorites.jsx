import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaDeleteLeft } from "react-icons/fa6";

import Navbar from "./Navbar";
import '../styles/Favorites.css';

function Favorites () {

    const { favoriteRecipes, recipeData, handleClick} = useOutletContext();
    console.log('favoriteRecipes:', favoriteRecipes);

    const handleFavoriteDelete = (event) => {
        event.preventDefault();
        handleClick(event);
    }

    return (
        <>
            <Navbar data={recipeData} />
            <div className="favorite-page">
            
                {favoriteRecipes.length > 0 ? (
                        favoriteRecipes.map((favorite) => (
                            <Link
                                key={favorite.id}
                                className="favorite-recipe"
                                to={`/home/${favorite.id}/${favorite.name.replace(/\s+/g, '-').toLowerCase()}`} //URL-friendly route
                            >
                                <div className='favorite'>
                                    <div className='favorite-image-container'>
                                        <img src={favorite.image} alt={favorite.name} width='100' height='100' />
                                        <button 
                                            className="delete-button"
                                            value={favorite.id}
                                            onClick={handleFavoriteDelete}
                                        ><FaDeleteLeft/></button>
                                    </div>
                                    <div className='favorite-details'>
                                        <h4>{favorite.rating}</h4>
                                        <h1>{favorite.name}</h1>
                                    </div>
                                </div>
                            </Link>
            
                        ))
                    ) : (<h1 id='loading'>No Favorite Recipes...</h1>)}
            </div>
        </>
    )
}

export default Favorites; 