import React from "react";
import '../output.css';
import Appicon from '../assets/AppIcon.svg';
import home from '../assets/homeIcon.svg';
import search from '../assets/searchIcon.svg';
import prof from '../assets/ProfileIcon.svg';

export default function Header() {
  return (
    <div>
        <header className="flex p-8 justify-around">

            <div className="app-logo">
                <img src={Appicon} alt="app icon" />
            </div>

            <nav className="flex flex-row gap-10">
                <img src={home} alt="home" />
                <img src={search} alt="search" />
                <img src={prof} alt="profile" />
            </nav>

        </header>
    </div>
  )
}
