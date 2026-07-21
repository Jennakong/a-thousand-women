"use client";

import { useState } from "react";
import Image from "next/image";

import Reveal from "@/components/animations/Reveal";
import Container from "@/components/layout/Container";
import ContactForm from "@/components/forms/ContactForm";


export default function LuwaComingSoon() {

  const [showForm, setShowForm] = useState(false);


  return (

    <section className="luwa-section">

      <Container>

        <div className="luwa-grid">


          {/* LEFT */}

          <div className="luwa-content">


            <Reveal>

              <span className="section-label">
                COMING SOON
              </span>

            </Reveal>



            <Reveal>

              <h2 className="section-title">
                Introducing LUWA
              </h2>

            </Reveal>



            <Reveal>

              <p className="luwa-text">

                You'll never have to worry about
                your period alone again.

              </p>

            </Reveal>



            <Reveal>

              <p className="luwa-description">

                A new menstrual equity platform
                connecting girls and women to
                trusted information,
                essential products,
                and a supportive community.

              </p>

            </Reveal>



            <Reveal>

              <button
                className="luwa-button"
                onClick={() => setShowForm(!showForm)}
              >

                Notify Me

              </button>

            </Reveal>



            {showForm && (

              <Reveal>

                <ContactForm

                  title="Stay Updated"

                  description="Leave your details and we will notify you when LUWA launches."

                  buttonText="Notify Me"

                />

              </Reveal>

            )}


          </div>




          {/* RIGHT */}

          <Reveal>

            <div className="luwa-phone">

              <Image

                src="/images/luwa-mockup.png"

                alt="LUWA App Preview"

                width={360}

                height={720}

                priority

                className="phone-image"

              />

            </div>

          </Reveal>



        </div>

      </Container>

    </section>

  );

}