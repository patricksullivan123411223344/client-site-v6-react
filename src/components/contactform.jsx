/*
Name: Patrick Sullivan
Date: 4/19/2026
File: ContactForm.jsx
Description: Controlled contact form with basic validation.
*/
import { useState } from "react";

export default function ContactForm({ sectionRef }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  }

  return (
    <section
      id="contactSection"
      className="contact"
      aria-labelledby="contactTitle"
      ref={sectionRef}
    >
      <h2 id="contactTitle" className="emailFormHeader">
        Send Katherine an email!
      </h2>

      <form className="contactForm" onSubmit={handleSubmit} noValidate>
        <label className="field">
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <small className="formError">{errors.name}</small>}
        </label>

        <label className="field">
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <small className="formError">{errors.email}</small>}
        </label>

        <label className="field">
          <span>Message</span>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          {errors.message && (
            <small className="formError">{errors.message}</small>
          )}
        </label>

        <button type="submit" className="buttonPrimary">
          Submit
        </button>
      </form>
    </section>
  );
}