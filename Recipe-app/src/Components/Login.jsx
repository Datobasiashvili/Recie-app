import '../styles/Login.css';

//Icons
import { FaUserCircle } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";

import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-form">

                    <Link to='/home' id='login-title-link'>
                        <h1 className='title-login'>
                            <i>Dato's <span id='title-part'>Recipe App</span></i>
                        </h1>
                    </Link>
                    <form>
                        <div className="input-container">
                            <FaUserCircle className='input-container-icon' />
                            <input id='email' type='email' name='email' placeholder='Enter Email' autoComplete="off"  />
                        </div>
                        <div className="input-container">
                            <FaLock className='input-container-icon' />
                            <input id='password' type='password' name='password' placeholder='Password' autoComplete="off" />
                        </div>
                        <button type='submit' onClick={(e) => e.preventDefault()}>Sign in</button>
                        <p>Or continue with</p>
                        <div className='alternative-login-container'>
                            <FcGoogle  className='alternative-login-icon'></FcGoogle>
                            <FaFacebook className='alternative-login-icon' id='facebook-icon'/>
                        </div>
                        <Link to='/signup' id='signup-link'>Don't have an account? Sign up</Link>
                    </form>
                </div>
                <div className="login-image-container">
                    <img src="https://whiskedawaykitchen.com/wp-content/uploads/2024/05/khinkali-recipe-8.jpg" alt="Login Image" />
                </div>
            </div>
        </div>
    );
}

export default Login;
