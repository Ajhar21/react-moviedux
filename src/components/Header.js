import React from 'react';
import '../styles.css'; //double dot to go back to src folder

export default function Header(){
    return(
        <div className="header">
            <img className="logo" src='logo.png' alt='moviedux'/>
            <h2>It's time for popcorn! Let's enjoy movie time</h2>
        </div>
    );
}