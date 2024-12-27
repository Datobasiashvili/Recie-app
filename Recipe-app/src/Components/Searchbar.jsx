import { useState } from 'react';
import { FaSearch } from "react-icons/fa"; //search icon from react-icons
import '../styles/Searchbar.css';
import { Link } from 'react-router-dom';

export default function Searchbar({ recipeArr }){

    const [query, setQuery] = useState('');
    const [activate, setActivate] = useState(false);

   const handleFocus = () => setActivate(true);
   const handleBlur = () => {
    setTimeout(() => setActivate(false), 200);
   }

   const handleKeyDown = (e) => {
    if(e.key === 'Enter'){
        e.preventDefault();
        setQuery('');
    }
   }

   const filteredRecipes = recipeArr.filter(recipe => 
    recipe.name.replace(/\s+/g, ' ').trim().toLowerCase().includes(query.replace(/\s+/g, ' ').trim().toLowerCase())
   );

    return ( 
        <> 
            <div className='search-container'>
                <div className='search-bar'>
                    <label htmlFor='search'><FaSearch id='search-icon' /></label>
                    <input
                        autocomplete="off" 
                        value={query}
                        id='search'
                        type='search' 
                        name='search' 
                        onChange={e => setQuery(e.target.value)} 
                        onFocus={handleFocus} 
                        onBlur={handleBlur} 
                        onKeyDown={handleKeyDown} />
                </div>

                <div 
                    className={activate ? 'search-input-active' : 'search-input-inactive'}
                >
                    {recipeArr.length > 0 ? (
                        <ul>
                            {filteredRecipes.map((recipe) => (
                                <Link
                                    //providing a URL-friendly name with an id to then manipulate.
                                    to={`/home/${recipe.id}/${recipe.name.replace(/\s+/g, '-').toLowerCase()}`}
                                    key={recipe.id}
                                    className='search-result'
                                > 
                                    <li key={recipe.id}>{recipe.name}</li> 
                                </Link>
                            ))}
                        </ul>
                    ) : (<p>No result found</p>)}

                </div>
            </div>
        </>
    )
}

