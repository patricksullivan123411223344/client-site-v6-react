/*
Name: Patrick Sullivan
Date: 4/19/2026
File: errorpage.jsx
Description: Reusable error page component for 404 and 500 routes
*/
import { Link } from "react-router-dom";

export default function ErrorPage({ code, title, message, detail }) {
    return (
     <div className="error-container">
       <h1 className="error-code">{code}</h1>
        <h2>{title}</h2>
        <p>{message}</p>
        {detail && <p><strong>{detail}</strong></p>}

        <div className="error-actions">
            <Link to="/" className="buttonPrimary">
            ← Back to Home
            </Link>
      </div>
    </div>
    );
}