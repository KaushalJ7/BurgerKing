import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <>
            <header>
                <div id="icon">
                    {/* <img src="https://i.ibb.co/PGjhgrZ/TB-Icon.png" alt="BK Icon"/> */}
                    <h1>BurgerKing</h1>
                    <Link className="btn btn-info" to="/">Home</Link>
                    <Link className="btn btn-info" to="/" onClick="changeMode()">Mode</Link>
                </div>
                <div id="social">
                    <Link className="btn btn-info" to="/" href="Homepage/login.html">Login</Link>
                    <Link className="btn btn-info" to="/" href="Homepage/signup.html">Sign Up</Link>
                    <Link className="btn btn-info" to="/" href="index.html">Cart</Link>
                </div>  
            </header>
        </>
    )
}

export default Header