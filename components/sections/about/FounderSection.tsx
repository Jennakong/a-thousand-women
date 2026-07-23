"use client";

import Image from "next/image";

import Container from "@/components/layout/Container";
import Reveal from "@/components/animations/Reveal";


export default function FounderSection() {

  return (

    <section className="founder-section">

      <Container>

        <div className="founder-grid">


          {/* IMAGE */}

          <Reveal>

            <div className="founder-image-wrapper">

              <Image

                src="/images/founder.jpg"

                alt="Jennifer Akong, Founder of A Thousand Women"

                width={550}

                height={650}

                className="founder-section-image"

              />

            </div>

          </Reveal>




          {/* CONTENT */}

          <div className="founder-content">


            <Reveal>

              <span className="section-label">
                OUR FOUNDER
              </span>

            </Reveal>



            <Reveal>

              <h2>
                Jennifer Akong
              </h2>

            </Reveal>



            <Reveal>

              <p>

                Jennifer Akong is the founder of
                A Thousand Women, a women-led
                organisation created from a deep
                commitment to improving the lives
                of women and girls across Africa.

              </p>

            </Reveal>



            <Reveal>

              <p>

                Through her work in fashion,
                community development, digital
                advocacy, and social impact,
                Jennifer recognised that many
                women and girls face barriers
                that limit their ability to thrive.

              </p>

            </Reveal>



            <Reveal>

              <p>

                This inspired the creation of
                A Thousand Women, an organisation
                focused on education, empowerment,
                menstrual equity, and creating
                opportunities where women and girls
                can access the support they need.

              </p>

            </Reveal>



            <Reveal>

             <div className="mission-quote">

  <span className="quote-mark">
    “
  </span>

  <p>
    When women are supported, families grow stronger,
    communities transform, and generations are empowered.
  </p>

</div>
            </Reveal>



          </div>


        </div>


      </Container>


    </section>

  );

}