/*
Name: Patrick Sullivan
Date: 4/19/2026
File: AboutPage.jsx
Description: About page assembled from reusable React components.
*/
import AboutIntro from "../components/aboutintro";
import OfficeMapSection from "../components/officemapsection";
import "../styling/about.css";

export default function AboutPage() {
  return (
    <>
      <AboutIntro />
      <hr />
      <OfficeMapSection />
    </>
  );
}