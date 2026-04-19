/*
Name: Patrick Sullivan
Date: 4/19/2026
File: ContactPage.jsx
Description: Contact page with CTA buttons, weather bar, booking section,
and controlled contact form. Rebuilds previous DOM logic using React refs.
*/

import { useRef } from "react";
import ContactChoiceBox from "../components/contactchoicebox";
import BookingSection from "../components/bookingsection";
import ContactForm from "../components/contactform";
import "../styling/contact.css"

export default function ContactPage() {
  const bookingRef = useRef(null);
  const emailRef = useRef(null);

  function scrollToBooking() {
    bookingRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function scrollToEmail() {
    emailRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <>
      <ContactChoiceBox
        onQuestionClick={scrollToEmail}
        onBookingClick={scrollToBooking}
      />

      <hr />

      <BookingSection sectionRef={bookingRef} />

      <hr />

      <ContactForm sectionRef={emailRef} />
    </>
  );
}