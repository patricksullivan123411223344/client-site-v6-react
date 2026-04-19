/*
Name: Patrick Sullivan
Date: 4/17/2026
File: herobanner.jsx
Description: Homepage hero banner with a CTA
*/
import { Link } from "react-router-dom";

export default function HeroBanner() {
    return (
        <section className="heroBanner">
        <img
            className="heroBanner_img"
            src="/hero_image.png"
            alt="Katherine Sullivan LCSW Hero Image"
        />

        <div className="heroBanner_overlay">
            <div className="heroText">
            <h1>Katherine Sullivan LCSW</h1>
            <p>A place to move forward</p>

            <Link to="/contact" className="buttonPrimary aLinks">
                Contact
            </Link>
            </div>
        </div>
        </section>
    );
}