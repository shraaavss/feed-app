import React from "react";
import { Link } from 'react-router-dom';

import '../output.css';
import home from '../assets/homeIcon.svg';
import search from '../assets/searchIcon.svg';
import prof from '../assets/ProfileIcon.svg';
import './Header.css';

export default function Header() {
  return (
    <div>
        <header className="main-wrap">
            <nav className="nav-bar">
                <Link to={"/"}><img className="nav-img" src={home} alt="home" /></Link>
                <Link to={"/search"}><img className="nav-img" src={search} alt="search" /></Link>
                <Link to={"/profile"}><img className="nav-img" src={prof} alt="profile" /></Link>
            </nav>
        </header>
    </div>
  )
}
