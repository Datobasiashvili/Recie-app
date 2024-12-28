import Searchbar from "./Searchbar";
import { FaUser } from 'react-icons/fa';  //user icon from react-icons
import { FaHouse } from "react-icons/fa6"; //home icon from react-icons
import { FaHeart } from "react-icons/fa"; //heart icon from react-icons
import { FaListUl } from "react-icons/fa"; //about icon from react-icons


import { Link, NavLink } from "react-router-dom";
import '../styles/Navbar.css'

export default function Navbar({ data }){
    return(
        <header className="nav-header">
            <Link to='/home'  id="title-link">
                    <h1 className='title'>
                        <i>Dato's <span id='title-part'>Recipe App</span></i>
                    </h1>
            </Link>
            
            <Searchbar recipeArr={data} className='searchbar' />

                <div className='nav-links'>
                    <NavLink
                        to='/home'
                        className={({ isActive }) => (isActive ? "active" : "inactive")}
                    >
                        <div className='icon-container'>
                            <FaHouse className="icon"/>
                            <p className="hover-text">Home</p>
                        </div>
                    </NavLink>
                
                    <NavLink
                        to='/home/login'
                        className={({ isActive }) => (isActive ? "active" : "inactive")}
                    >
                        <div className='icon-container'>
                            <FaUser className="icon"/>
                            <p className="hover-text">Log in</p>
                        </div>
                    </NavLink>
                    <NavLink
                        to='/home/favorites'
                        className={({ isActive }) => (isActive ? "active" : "inactive")}
                    >
                        <div className='icon-container' id='favorite'>
                            <FaHeart className="icon"/>
                            <p className="hover-text">Favorites</p>
                        </div>
                    </NavLink>
                    <NavLink
                        to='/home/about'
                        className={({ isActive }) => (isActive ? "active" : "inactive")}
                    >
                        <div className='icon-container'>
                            <FaListUl className="icon"/>
                            <p className="hover-text">About us</p>
                        </div>
                    </NavLink>
                </div>
        </header>
    )

}