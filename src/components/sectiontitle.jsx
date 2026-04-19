/*
Name: Patrick Sullivan
Date: 4/18/2026
File: sectiontitle.jsx
Description: Reusable section heading component using props.
*/
export default function SectionTitle({ id, title, className = "sectionTitle" }) {
    return (
        <h2 id={id} className={className}>
            {title}
        </h2>
    );
}