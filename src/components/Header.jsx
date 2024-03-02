import React from "react";
import '../output.css';
import Appicon from '../assets/AppIcon.svg';
import home from '../assets/homeIcon.svg';
import search from '../assets/searchIcon.svg';
import prof from '../assets/ProfileIcon.svg';
import './Header.css';

export default function Header() {
  return (
    <div>
        <header className="main-wrap">

            <div className="app-logo">
                <img className="nav-img" src={Appicon} alt="app icon" />
            </div>

            <nav className="nav-bar">
                <img className="nav-img" src={home} alt="home" />
                <img className="nav-img" src={search} alt="search" />
                <img className="nav-img" src={prof} alt="profile" />
            </nav>

        </header>
    </div>
  )
}
