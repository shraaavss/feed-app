import React from "react";
import '../output.css';
import Appicon from '../assets/AppIcon.svg';
import home from '../assets/homeIcon.svg';
import search from '../assets/searchIcon.svg';
import prof from '../assets/ProfileIcon.svg';

export default function Header() {
  return (
    <div>
        <header className="flex p-8">
            <div className="app-logo">
                <img src={Appicon} alt="app icon" />
                <img src={home} alt="app icon" />
                <img src={search} alt="app icon" />
                <img src={prof} alt="app icon" />
                <p className="text-2xl font-bold">hello</p>
            </div>
        </header>
    </div>
  )
}
