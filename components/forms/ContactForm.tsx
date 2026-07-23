"use client";

import { useForm, ValidationError } from "@formspree/react";

interface ContactFormProps {
  visible?: boolean;
  title?: string;
  description?: string;
  buttonText?: string;
  variant?: "default" | "luwa";
}


const variants = {
  luwa: {
    title: "Join the LUWA Waitlist",
    description:
      "Be the first to know when LUWA launches and get early access updates.",
    buttonText: "Join LUWA Waitlist",
  },
};



export default function ContactForm({
  visible = true,
  title,
  description,
  buttonText = "Send Message",
  variant = "default",
}: ContactFormProps) {


  const [state, handleSubmit] = useForm(
    variant === "luwa"
      ? "xbdnkwwj"
      : "meeyzpng"
  );


  if (!visible) return null;



  const isLuwa = variant === "luwa";


  const formContent = isLuwa
    ? variants.luwa
    : {
        title,
        description,
        buttonText,
      };



  if (state.succeeded) {

    return (
      <div className="contact-success">

        <h3>
          {isLuwa
            ? "🎉 You're on the LUWA waitlist!"
            : "Thank you for reaching out!"}
        </h3>

        <p>
          {isLuwa
            ? "We'll notify you as soon as LUWA launches."
            : "We've received your message and our team will get back to you soon."}
        </p>

      </div>
    );

  }



  return (

    <div className="contact-form-container">


      <h3 className="contact-form-title">
        {formContent.title}
      </h3>


      <p className="contact-form-description">
        {formContent.description}
      </p>



      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >


        <input
          type="hidden"
          name="_subject"
          value={
            isLuwa
              ? "LUWA Waitlist Signup"
              : "A Thousand Women Website Enquiry"
          }
        />


        <input
          type="hidden"
          name="form_type"
          value={variant}
        />



        {/* LUWA SIMPLE WAITLIST */}

        {isLuwa && (

          <>

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
              type="text"
              name="country"
              placeholder="Country (optional)"
            />

          </>

        )}



        {/* NORMAL CONTACT FORM */}

        {!isLuwa && (

          <>

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


            <select
              name="role"
              required
            >

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
              name="message"
              rows={5}
              placeholder="Tell us how we can support you"
              required
            />

          </>

        )}



        <ValidationError
          errors={state.errors}
        />



        <button
          type="submit"
          className="form-submit-button"
          disabled={state.submitting}
        >

          {state.submitting
            ? "Sending..."
            : formContent.buttonText}

        </button>


      </form>


    </div>

  );

}