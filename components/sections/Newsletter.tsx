"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function Newsletter() {

  const [state, handleSubmit] = useForm("xrenaggb");


  if (state.succeeded) {
    return (
      <section className="newsletter-section">

        <div className="newsletter-overlay">

          <h2>
            Thank You For Joining Us 💚
          </h2>

          <p>
            You are now part of our community.
            We will keep you updated about our programmes,
            impact stories, and opportunities.
          </p>

        </div>

      </section>
    );
  }


  return (
    <section className="newsletter-section">

      <div className="newsletter-overlay">

        <h2>
          Stay Connected With Our Work
        </h2>


        <p>
          Join our community and receive updates about our programmes,
          impact stories, research, and opportunities to support women
          and girls across Africa.
        </p>



        <form
          className="newsletter-form"
          onSubmit={handleSubmit}
        >


          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
          />


          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />



          <button
            type="submit"
            disabled={state.submitting}
          >

            {state.submitting
              ? "Joining..."
              : "Join Our Community"}

          </button>


        </form>


        <ValidationError
          errors={state.errors}
        />


      </div>

    </section>
  );
}