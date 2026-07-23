"use client";

import { useState } from "react";
import ContactForm from "@/components/forms/ContactForm";

const encouragements = [
  {
    image: "/images/1.jpeg",
    text: "Your circumstances today do not define your future. You deserve dignity, opportunity, and the chance to thrive."
  },
  {
    image: "/images/2.jpeg",
    text: "Every girl deserves the freedom to learn, dream, and pursue her future without barriers standing in her way."
  },
  {
    image: "/images/3.jpeg",
    text: "Your voice matters. Your story matters. Your dreams matter. You are worthy of support and opportunity."
  },
  {
    image: "/images/4.jpg",
    text: "No woman should have to choose between meeting her basic needs and pursuing her goals. Dignity should never be a privilege."
  },
  {
    image: "/images/5.jpg",
    text: "The challenges you face today are not the limits of what you can become. Your future is still full of possibilities."
  },
  {
    image: "/images/6.jpg",
    text: "When women are supported, families grow stronger, communities transform, and generations are empowered."
  },
  {
    image: "/images/7.jpeg",
    text: "You deserve access to the resources, education, and support that allow you to live with confidence and dignity."
  },
  {
    image: "/images/8.jpeg",
    text: "Your dreams are valid. Your ambitions are important. The world needs your ideas, your courage, and your voice."
  },
  {
    image: "/images/9.jpeg",
    text: "Small acts of support can create life-changing opportunities. Together, we can build a future where every woman can thrive."
  },
  {
    image: "/images/10.jpg",
    text: "A brighter future begins when we choose compassion, equity, and action. Every woman deserves the chance to rise."
  }
];

export default function VoiceAndEncouragement() {
  const [message, setMessage] = useState(encouragements[0]);

  function receiveEncouragement() {
    const random = Math.floor(Math.random() * encouragements.length);
    setMessage(encouragements[random]);
  }

  return (
    <section className="voice-section">
      <div className="container">

        <div className="voice-heading">
          <span className="section-label">
            YOUR VOICE MATTERS
          </span>

          <h2>
            Every story matters.
            <br />
            Every voice creates change.
          </h2>

          <p>
            Whether you want to share your experience,
            ask for support, or simply tell us your story,
            we are listening.
          </p>
        </div>

        <div className="voice-container">

          <div className="voice-form-card">

            <ContactForm
              title="Leave Your Voice"
              description="Share your experience, ideas, or tell us how we can better support your community."
              buttonText="Send Message"
            />

          </div>

          <div className="encouragement-container">

            <h3>
              Words For Today
            </h3>

            <div
              className="encouragement-card"
              style={{
                backgroundImage: `url(${message.image})`,
              }}
            >
              <div className="encouragement-overlay">
                <p>
                  “{message.text}”
                </p>
              </div>
            </div>

            <button
              className="encouragement-button"
              onClick={receiveEncouragement}
            >
              Click Here for a Message
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}