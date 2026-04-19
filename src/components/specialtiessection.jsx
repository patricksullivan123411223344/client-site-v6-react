/*
Name: Patrick Sullivan
Date: 4/18/2026
File: specialtiessection.jsx
Description: Homepage specialties section rendered from an array with .map()
*/
import SectionTitle from "./sectiontitle";
import SpecialtyCard from "./specialtycard";
import { specialties } from "../data/specialties"

export default function SpecialtiesSection() {
    return (
        <section className="specialities" aria-labelledby="specialtiesTitle">
            <SectionTitle id="specialtiesTitle" title="Specialties" />

            <div className="cardGrid">
                {specialties.map((item) => (
                <SpecialtyCard
                    key={item.title}
                    title={item.title}
                    text={item.text}
                />
                ))}
            </div>
        </section>
    );
}