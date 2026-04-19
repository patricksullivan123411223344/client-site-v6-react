/*
Name: Patrick Sullivan
Date: 4/19/2026
File: BookingSection.jsx
Description: Displays the Calendly booking section on the contact page.
*/
import { useEffect } from "react";

export default function BookingSection({ sectionRef }) {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="bookingSection" ref={sectionRef}>
      <div className="bookSessionWrapper" id="bookSessionSection">
        <h2 className="bookSessionHeader">Book a session with Katherine!</h2>

        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/patrick-sullivan-uri/30min"
          style={{ minWidth: "320px", height: "700px" }}
        />
      </div>
    </section>
  );
}