"use client";

import { useState } from "react";
import MovementForm from "@/components/forms/MovementForm";

export default function JoinMovement() {

  const [selectedForm, setSelectedForm] = useState<
    "donate" | "volunteer" | "partner" | "advocate" | null
  >(null);

  const actions = [

    {
      title: "Donate",
      icon: "💚",
      type: "donate" as const,
      text: "Every contribution helps provide menstrual products, educational resources, and life-changing opportunities for girls and women across Africa.",
      button: "Make a Donation"
    },

    {
      title: "Volunteer",
      icon: "🌱",
      type: "volunteer" as const,
      text: "Join our community of changemakers by sharing your time, skills, and passion to empower women and girls.",
      button: "Become a Volunteer"
    },

    {
      title: "Partner",
      icon: "🤝",
      type: "partner" as const,
      text: "Partner with us to expand our reach, strengthen communities, and create sustainable impact together.",
      button: "Partner With Us"
    },

    {
      title: "Advocate",
      icon: "📢",
      type: "advocate" as const,
      text: "Stand with us to raise awareness, inspire action, and champion dignity, equality, and opportunity for every girl.",
      button: "Become an Advocate"
    }

  ];

  return (

    <section className="movement-section">

      <div className="movement-heading">

        <span className="section-label">
          GET INVOLVED
        </span>

        <h2>
          Be Part of a Movement
          <br />
          Transforming Lives.
        </h2>

        <p>
          Supporting A Thousand Women means
          creating access to dignity, education,
          health, and opportunity for women and girls.
        </p>

      </div>


      <div className="movement-grid">

        {actions.map((action) => (

          <article
            key={action.title}
            className="movement-card"
          >

            <div className="movement-icon">
              {action.icon}
            </div>

            <h3>
              {action.title}
            </h3>

            <p>
              {action.text}
            </p>

            <button
              className="movement-button"
              onClick={() => setSelectedForm(action.type)}
            >
              {action.button} →
            </button>

          </article>

        ))}

      </div>

     {selectedForm && (

<div className="movement-modal-overlay">

  <div className="movement-modal">

    <button
      className="modal-close"
      onClick={() => setSelectedForm(null)}
    >
      ×
    </button>


    <MovementForm
      type={selectedForm}
    />

  </div>

</div>

)}

    </section>

  );

}