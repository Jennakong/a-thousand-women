"use client";
import { useState } from "react";
import ContactForm from "@/components/forms/ContactForm";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Reveal from "@/components/animations/Reveal";


export default function EndPeriodPovertyPage() {

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
              End Period Poverty
            </h1>


            <h2 className="initiative-subtitle">
              Restoring dignity. Keeping girls in school.
            </h2>


            <p className="initiative-intro">

              We believe menstrual health should never be
              a barrier to education.

              Through our{" "}
              <strong>
                End Period Poverty Initiative
              </strong>
              , we provide girls in underserved communities
              with access to menstrual products,
              menstrual health education, and the support
              they need to manage their periods with
              confidence.

            </p>


          </Reveal>

        </Container>

      </section>




      {/* IMPACT NUMBERS */}

      <section className="initiative-impact">

        <Container>

          <div className="initiative-stats">


            <div>
              <strong>
                5,000+
              </strong>

              <p>
                Sanitary pads distributed
              </p>
            </div>



            <div>

              <strong>
                1,000+
              </strong>

              <p>
                Girls supported
              </p>

            </div>



            <div>

              <strong>
                Multiple
              </strong>

              <p>
                Communities reached
              </p>

            </div>


          </div>

        </Container>

      </section>




      {/* EDUCATION SECTION */}


      <section className="initiative-story">

        <Container>


          <div className="story-grid">


            <Reveal>

              <div>

                <h2>
                  More Than Menstrual Products
                </h2>


                <p>

                  Our work goes beyond distributing
                  sanitary products. We believe that
                  education is essential to helping girls
                  understand their bodies and manage
                  their periods with confidence.

                </p>


                <p>

                  Through menstrual health education
                  sessions, we teach girls about hygiene,
                  self-care, and the importance of seeking
                  support when needed.

                </p>


                <p>

                  Every girl deserves to know that her
                  period does not limit her dreams.

                </p>

              </div>

            </Reveal>



            <Reveal>

              <Image

                src="/images/menstrual-training.jpg"

                alt="A Thousand Women menstrual health education session"

                width={600}

                height={500}

                className="initiative-image"

              />

            </Reveal>


          </div>


        </Container>

      </section>




      {/* VIDEO SECTION */}


      <section className="initiative-media">

        <Container>


          <h2>
            Our Impact In Action
          </h2>


          <div className="video-placeholder">

            <p>
              YouTube/Vimeo video will be embedded here
            </p>

          </div>


        </Container>

      </section>





      {/* FUTURE IS FEMALE */}


      <section className="future-section">

        <Container>

          <Reveal>

            <h2>
              The Future Is Female
            </h2>


            <p>

              We remind every girl that her period does
              not define her.

              She is capable. She is valuable.
              She deserves every opportunity to learn,
              grow, and lead.

            </p>


            <p>

              You are not alone. We are here for you.

            </p>

          </Reveal>
 <Reveal>

              <Image

                src="/images/future-is-female.jpg"

                alt="A Thousand Women menstrual health education session"

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
            You are not alone.
          </h2>


          <p>

            Whether you are a girl seeking support,
            a community member, or someone who wants
            to help create change, we would love
            to hear from you.

          </p>


    <div className="cta-container">

  <div className="cta-buttons">

    <button
      onClick={() => setShowForm(!showForm)}
    >
      Speak To Us
    </button>


    <button>
      Donate
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