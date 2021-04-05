import React,{useState} from 'react'
import {NavLink} from 'react-router-dom';
import './style.css'

function Navbar() {

    const[search,setSearch] = useState(false);

    function submitSearch(e) {
        e.preventDefault();
        alert('Searched')
    }

    const openSearch = () =>{
        setSearch(true);
    }

    const searchClass = search?"searchinput active":"searchinput";

    return (
        <div className="navbar">
            <ul className="navbarMenu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about-us">About Us</NavLink></li>
                <li><NavLink to="/post">Posts</NavLink></li>
                <li><NavLink to="/contact-us">Contact Us</NavLink></li>
            </ul>
            <div className="search">
                <form onSubmit={submitSearch}>
                <input type="text" className={searchClass} placeholder="Search" />
                <img onclick={openSearch} className="searchicon" src={require('../../assets/icons/search.png')} alt ="Search"/>
                </form>
                
            </div>
        </div>

    )
}

export default Navbar