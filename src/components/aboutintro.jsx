/*
Name: Patrick Sullivan
Date: 4/19/2026
File: AboutIntro.jsx
Description: Intro section for the About page with image and bio list.
*/
import { aboutInfo } from "../data/aboutinfo"

export default function AboutIntro() {
  return (
    <section className="meetKatherine">
      <div className="katherineInfoSection">
        <img
          src="/public/hero_image.png"
          alt="Meet Katherine Sullivan Image"
          className="kcAboutImage"
        />

        <div className="aboutTextContent">
          <h2 className="aboutKCh2">Meet Katherine...</h2>

          <ul className="kcInfoList">
            {aboutInfo.map((item, index) => (
              <li key={index} className="infoList">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}