import React from "react";
import icon from '../assets/yellowman.png'

export default function Header() {
  return (
    <div>
        <header>
            <div className="app-logo">
                <img src={icon} alt="app icon" />
            </div>
        </header>
    </div>
  )
}
