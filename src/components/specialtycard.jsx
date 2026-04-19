/*
Name: Patrick Sullivan
Date: 4/18/2026
File: specialtycard.jsx
Description: Reusable specialty card component using props
*/
export default function SpecialtyCard({ title, text }) {
    return (
        <article className="card">
            <h3 className="cardTitle">{text}</h3>
            <p className="cardText">{text}</p>
        </article>
    );
}