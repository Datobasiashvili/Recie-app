import { Link } from 'react-router-dom'
import '../styles/Home.css';
import { FaRegHeart } from "react-icons/fa"; //heart icon from react-icons

import Navbar from './Navbar';

function Home({ data, handleClick, clickedButtons }) {

    const handleButtonClick = (event, recipeId) => {
        event.preventDefault(); //stoping my Link to get activated by pressing the favorite button.
        handleClick(event);
    }

    return (
        <>
            <Navbar data={data}/>
            <div className='home-page'>
                {data.length > 0 ? (
                    data.map((recipe) => (
                        <Link
                            className={`recipe-${recipe.id}`}
                            key={recipe.id}
                            to={`/home/${recipe.id}/${recipe.name.replace(/\s+/g, '-').toLowerCase()}`} //URL-friendly route. Providing id to URL path to then manipulate our fetched  Array and display more informations about the recipes in Recipe component
                        >
                            <div className='recipe'> 
                                <div className='image-container'>
                                    <img src={recipe.image} alt={recipe.name} />
                                    <button 
                                    className={clickedButtons[recipe.id] ? 'top-right-button-clicked' : 'top-right-button' }
                                    value={recipe.id} 
                                    onClick={(event) => handleButtonClick(event, recipe.id)}
                                    >
                                        <FaRegHeart/>
                                    </button>
                                </div>
                                <div className='text'>
                                    <h4>{recipe.rating}</h4>
                                    <h1>{recipe.name}</h1>
                                </div>
                            </div>
                        </Link>
                
                    ))
                ) : (<h1>Loading...</h1>)}
            </div>
        </>
    )
}

export default Home;