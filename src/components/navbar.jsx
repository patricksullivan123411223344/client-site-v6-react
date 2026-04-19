/*
Name: Patrick Sullivan
Date: 4/17/2026
File: navbar.jsx
Description: Shared navigation bar used across site pages. 
*/
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <header>
        <nav className="navBar" id="navLogic">
            <div className="innerNav">
            <img
                src="/public/KC_Logo.png"
                alt="Katherine Sullivan LCSW logo"
                className="navLogo"
            />

            <ul className="navList">
             <li className="navbar_home">
              <Link to="/">Home</Link>
               </li>
                <li className="navbar_about">
                  <Link to="/about">About</Link>
                </li>
               <li className="navbar_contact_CTA">
              <Link to="/contact">Contact</Link>
             </li>
            </ul>
            </div>
        </nav>
        </header>
    );
}