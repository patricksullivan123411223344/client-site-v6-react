/*
Name: Patrick Sullivan
Date: 4/18/2026
File: homepage.jsx
Description: Homepage assembled from reusable react components
*/
import HeroBanner from "../components/herobanner"
import SpecialtiesSection from "../components/specialtiessection"
import "../styling/homepage.css"

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <SpecialtiesSection />
    </>
  );
}