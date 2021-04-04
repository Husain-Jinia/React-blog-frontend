import React from 'react';
import './style.css'

export default function Header() {
    return (
        <header className="header">
            <nav className="headerMenu">
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
            </nav>
            <div>
                Social media links
            </div>
        </header>
    )
}
