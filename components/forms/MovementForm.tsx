"use client";

import { useForm, ValidationError } from "@formspree/react";

interface MovementFormProps {
  type: "donate" | "volunteer" | "partner" | "advocate";
}

const content = {
  donate: {
    badge: "💚 Support a Girl",
    title: "Support a Girl",
    description:
      "Your generosity helps provide menstrual products, education, healthcare and opportunities for women and girls across Africa.",
    button: "Donate",
  },

  volunteer: {
    badge: "🌱 Volunteer With Us",
    title: "Volunteer With Us",
    description:
      "Join our growing community of volunteers and help us create meaningful change.",
    button: "Apply to Volunteer",
  },

  partner: {
    badge: "🤝 Partner With Us",
    title: "Partner With Us",
    description:
      "Collaborate with A Thousand Women to expand opportunities for women and girls.",
    button: "Become a Partner",
  },

  advocate: {
    badge: "📢 Become an Advocate",
    title: "Become an Advocate",
    description:
      "Use your voice to inspire change and champion menstrual equity.",
    button: "Join the Movement",
  },
};


export default function MovementForm({
  type,
}: MovementFormProps) {

  const [state, handleSubmit] = useForm("mgogzdrd");

  const form = content[type];


  if (state.succeeded) {
    return (
      <div className="movement-success">

        <h3>
          Thank you for joining the movement!
        </h3>

        <p>
          We've received your submission and our team
          will contact you soon.
        </p>

      </div>
    );
  }


  return (

    <div className="movement-form-wrapper">


      <span className="movement-form-badge">
        {form.badge}
      </span>


      <h3 className="movement-form-title">
        {form.title}
      </h3>


      <p className="movement-form-description">
        {form.description}
      </p>



      <form
        className="movement-form"
        onSubmit={handleSubmit}
      >


        <input
          type="hidden"
          name="interest"
          value={type}
        />


        <input
          type="hidden"
          name="_subject"
          value={`A Thousand Women - ${type} enquiry`}
        />



        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
        />


        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
        />


        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />


        <input
          type="tel"
          name="phone"
          placeholder="Phone Number (optional)"
        />


        <input
          type="text"
          name="country"
          placeholder="Country"
          required
        />



        {type === "donate" && (
          <>

            <input
              type="number"
              name="donation_amount"
              placeholder="Donation Amount"
            />


            <select
              name="donation_type"
              required
            >

              <option value="">
                Donation Type
              </option>

              <option>
                One-time Donation
              </option>

              <option>
                Monthly Donation
              </option>

            </select>

          </>
        )}



        {type === "volunteer" && (
          <>

            <input
              type="text"
              name="occupation"
              placeholder="Occupation"
            />


            <input
              type="text"
              name="skills"
              placeholder="Skills"
            />


            <select name="availability">

              <option value="">
                Availability
              </option>

              <option>
                Weekdays
              </option>

              <option>
                Weekends
              </option>

              <option>
                Flexible
              </option>

            </select>

          </>
        )}



        {type === "partner" && (
          <>

            <input
              type="text"
              name="organisation"
              placeholder="Organisation"
            />


            <input
              type="url"
              name="website"
              placeholder="Website"
            />


            <select name="partnership_type">

              <option value="">
                Partnership Type
              </option>

              <option>
                Corporate
              </option>

              <option>
                NGO
              </option>

              <option>
                School
              </option>

              <option>
                Healthcare
              </option>

              <option>
                Other
              </option>

            </select>

          </>
        )}



        {type === "advocate" && (

          <select name="advocacy_interest">

            <option value="">
              How would you like to help?
            </option>

            <option>
              Social Media
            </option>

            <option>
              Community Events
            </option>

            <option>
              Fundraising
            </option>

            <option>
              Awareness Campaigns
            </option>

          </select>

        )}



        <textarea
          name="message"
          rows={5}
          placeholder={
            type === "donate"
              ? "Leave us a message (optional)"
              : type === "partner"
              ? "Tell us about your organisation"
              : type === "volunteer"
              ? "Why would you like to volunteer?"
              : "Tell us how you'd like to advocate"
          }
        />



        <ValidationError errors={state.errors} />


        <button
          type="submit"
          className="movement-submit-button"
          disabled={state.submitting}
        >

          {state.submitting
            ? "Sending..."
            : form.button}

        </button>


      </form>


    </div>

  );
}