"use client";

import { useState } from "react";
import Image from "next/image";

import ContactForm from "@/components/forms/ContactForm";
import Container from "@/components/layout/Container";
import Reveal from "@/components/animations/Reveal";

export default function MedicalOutreachPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <main className="initiative-page">

      {/* HERO */}

      <section className="initiative-hero">

        <Container>

          <Reveal>

            <span className="section-label">
              OUR INITIATIVES
            </span>

            <h1 className="initiative-title">
              Medical Outreach
            </h1>

            <h2 className="initiative-subtitle">
              Bringing healthcare closer to underserved communities.
            </h2>

            <p className="initiative-intro">

              Access to basic healthcare should never depend on where
              someone lives or how much they earn.

              Through our
              <strong> Medical Outreach Initiative</strong>, we work
              alongside healthcare professionals and community partners
              to deliver free medical screenings, health education,
              consultations, referrals, and essential healthcare support
              to women, girls, and vulnerable families.

            </p>

          </Reveal>

        </Container>

      </section>



      {/* IMPACT */}

      <section className="initiative-impact">

        <Container>

          <div className="initiative-stats">

            <div>
              <strong>500+</strong>
              <p>People reached</p>
            </div>

            <div>
              <strong>Free</strong>
              <p>Health screenings</p>
            </div>

            <div>
              <strong>Community</strong>
              <p>Health education delivered</p>
            </div>

          </div>

        </Container>

      </section>



      {/* STORY */}

      <section className="initiative-story">

        <Container>

          <div className="story-grid">

            <Reveal>

              <div>

                <h2>
                  Healthcare Beyond Hospital Walls
                </h2>

                <p>

                  Many women and families in underserved communities
                  delay seeking healthcare because of financial barriers,
                  distance, or lack of access to reliable information.

                </p>

                <p>

                  Our outreach programmes take healthcare directly into
                  communities by providing free medical checks,
                  consultations, health education, and referrals where
                  necessary.

                </p>

                <p>

                  We believe that prevention, early diagnosis, and health
                  education save lives.

                </p>

              </div>

            </Reveal>



            <Reveal>

              <Image
                src="/images/medical-outreach.jpg"
                alt="Medical outreach programme"
                width={600}
                height={500}
                className="initiative-image"
              />

            </Reveal>

          </div>

        </Container>

      </section>


{/* WHAT WE PROVIDE */}

<section className="initiative-services">

  <Container>

    <Reveal>

      <span className="section-label">
        WHAT WE PROVIDE
      </span>

      <h2>
        Holistic Healthcare Support
      </h2>

      <p className="services-intro">
        Our medical outreach combines healthcare,
        education and referrals to improve the wellbeing
        of women, girls and underserved communities.
      </p>

    </Reveal>

    <div className="services-grid">

      <Reveal>
        <article className="service-card">
          <div className="service-icon">🩺</div>
          <h3>Health Screening</h3>
          <p>
            Basic medical checks including blood pressure,
            blood sugar, BMI and general health assessments.
          </p>
        </article>
      </Reveal>

      <Reveal>
        <article className="service-card">
          <div className="service-icon">💊</div>
          <h3>Medication Support</h3>
          <p>
            Distribution of essential medicines where
            appropriate through qualified medical partners.
          </p>
        </article>
      </Reveal>

      <Reveal>
        <article className="service-card">
          <div className="service-icon">👩🏾‍⚕️</div>
          <h3>Health Education</h3>
          <p>
            Practical education on hygiene, reproductive
            health, nutrition and disease prevention.
          </p>
        </article>
      </Reveal>

      <Reveal>
        <article className="service-card">
          <div className="service-icon">🏥</div>
          <h3>Medical Referrals</h3>
          <p>
            Connecting patients who require additional care
            with trusted hospitals and healthcare providers.
          </p>
        </article>
      </Reveal>

    </div>

  </Container>

</section>

      {/* VIDEO */}

      <section className="initiative-media">

        <Container>

          <h2>
            Medical Outreach In Action
          </h2>

          <div className="video-placeholder">

            <p>
              Outreach documentary or event highlights will appear here.
            </p>

          </div>

        </Container>

      </section>



      {/* PARTNERS */}

      <section className="future-section">

        <Container>

          <Reveal>

            <h2>
              Healthcare Requires Partnership
            </h2>

            <p>

              We welcome partnerships with hospitals, medical
              professionals, pharmaceutical companies, NGOs, volunteers,
              and organisations that believe healthcare should be
              accessible to everyone.

            </p>

            <p>

              Together we can reach more communities and save more lives.

            </p>

          </Reveal>

          <Reveal>

            <Image
              src="/images/medical-team.jpg"
              alt="Healthcare volunteers"
              width={600}
              height={500}
              className="initiative-image"
            />

          </Reveal>

        </Container>

      </section>



      {/* CTA */}

      <section className="initiative-cta">

        <Container>

          <h2>
            Help Us Reach More Communities
          </h2>

          <p>

            Whether you're a healthcare professional, organisation,
            volunteer or donor, your support helps us bring healthcare
            where it is needed most.

          </p>

          <div className="cta-container">

            <div className="cta-buttons">

              <button
                onClick={() => setShowForm(!showForm)}
              >
                Speak To Us
              </button>

              <button>
                Support This Initiative
              </button>

            </div>

            {showForm && (

              <div className="cta-form-wrapper">

                <ContactForm />

              </div>

            )}

          </div>

        </Container>

      </section>

    </main>
  );
}