"use client";

import { useState } from "react";


interface ContactFormProps {

  visible?: boolean;

  title?: string;

  description?: string;

  buttonText?: string;

}


export default function ContactForm({

  visible = true,

  title,

  description,

  buttonText = "Send Message"

}: ContactFormProps) {


  const [submitted, setSubmitted] = useState(false);


  if (!visible) return null;



  function handleSubmit(e: React.FormEvent) {

    e.preventDefault();

    setSubmitted(true);

  }



  if (submitted) {

    return (

      <div className="contact-success">

        <h3>
          Thank you for reaching out.
        </h3>

        <p>
          Our team will get back to you soon.
        </p>

      </div>

    );

  }



  return (

    <div className="contact-form-container">

{title && (

  <h3 className="contact-form-title">
    {title}
  </h3>

)}


{description && (

  <p className="contact-form-description">
    {description}
  </p>

)}






      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >


        <input
          type="text"
          placeholder="Full Name"
          required
        />



        <input
          type="email"
          placeholder="Email Address"
          required
        />



        <input
          type="tel"
          placeholder="Phone Number (optional)"
        />



        <select required>

          <option value="">
            I am...
          </option>

          <option>
            A girl seeking support
          </option>

          <option>
            A parent or guardian
          </option>

          <option>
            A teacher
          </option>

          <option>
            A community leader
          </option>

          <option>
            A volunteer
          </option>

          <option>
            A partner
          </option>

          <option>
            Other
          </option>

        </select>



        <textarea

          placeholder="Tell us how we can support you"

          rows={5}

          required

        />



        <button
          type="submit"
          className="form-submit-button"
        >

          {buttonText}

        </button>


      </form>


    </div>

  );

}