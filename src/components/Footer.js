import React from "react";
import '../styles.css';

export default function Footer(){
    const currentYear = new Date().getFullYear();

    return (    //for footer default tag is footer instead of div
        <footer className="footer">
            <p className="footer-text">
                ©{currentYear} All rights reserved by moviedux.
            </p>    
        </footer>
    )
}