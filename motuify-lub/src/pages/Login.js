import React from 'react'
import "./Login.css"
import logo from "../images/baby-deadpool.png"
import {longUrl} from "../spotifyPage/spotify"

function Login() {
    return (
        <div className="login">
            {/* Logo */}
            {/* Login with spotify button */}
            <img src={logo} alt="company logo" />
            <a href={longUrl}>Logon</a>
        </div>
    )
}

export default Login
