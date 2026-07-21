import Image from "next/image";
import Container from "@/components/layout/Container";
import Reveal from "@/components/animations/Reveal";
import ContactForm from "@/components/forms/ContactForm";


export default function EducationalSupportPage() {

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
              Educational Support
            </h1>


            <h2 className="initiative-subtitle">
              Creating opportunities. Inspiring confidence. Building futures.
            </h2>


            <p className="initiative-intro">

              We believe education is one of the most powerful
              tools for changing lives.

              Through our{" "}
              <strong>
                Educational Support Initiative
              </strong>
              , we provide learning resources, encouragement,
              and empowerment opportunities that help girls
              and children in underserved communities thrive.

            </p>


          </Reveal>


        </Container>

      </section>





      {/* STORY SECTION */}

      <section className="initiative-story">

        <Container>


          <div className="story-grid">


            <Reveal>

              <div>

                <h2>
                  Supporting Learning Beyond The Classroom
                </h2>


                <p>

                  Education goes beyond books and classrooms.
                  It creates confidence, opens opportunities,
                  and helps young people imagine a brighter future.

                </p>


                <p>

                  Through our outreach programmes, we provide
                  educational supplies including books, school
                  bags, writing materials, and other learning
                  resources to support students in underserved
                  communities.

                </p>


                <p>

                  We also create safe spaces where girls can
                  share their experiences, discuss challenges,
                  and receive encouragement to continue pursuing
                  their dreams.

                </p>


              </div>

            </Reveal>



            <Reveal>

              <Image

                src="/images/education-support.jpg"

                alt="A Thousand Women educational support outreach"

                width={600}

                height={500}

                className="initiative-image"

              />

            </Reveal>


          </div>


        </Container>

      </section>





      {/* WHAT WE DO */}

      <section className="initiative-impact">

        <Container>


          <div className="initiative-stats">


            <div>

              <strong>
                Books
              </strong>

              <p>
                Educational resources provided
              </p>

            </div>



            <div>

              <strong>
                Schools
              </strong>

              <p>
                Communities reached through outreach
              </p>

            </div>



            <div>

              <strong>
                Girls
              </strong>

              <p>
                Encouraged to learn, grow, and lead
              </p>

            </div>


          </div>


        </Container>


      </section>





      {/* INTERNATIONAL DAY OF EDUCATION */}

      <section className="initiative-story">

        <Container>


          <div className="story-grid">


            <Reveal>

              <div>

                <h2>
                  International Day of Education 2025
                </h2>


                <p>

                  To celebrate the International Day of Education,
                  A Thousand Women visited schools to inspire
                  young minds and highlight the importance of
                  education.

                </p>


                <p>

                  Through conversations, empowerment sessions,
                  educational activities, and interactive games,
                  we created opportunities for students to
                  express themselves, share their aspirations,
                  and understand the power of learning.

                </p>


                <a href="#">
                  Read the full story →
                </a>


              </div>

            </Reveal>



            <Reveal>

              <Image

                src="/images/international-education-day.jpg"

                alt="International Day of Education outreach"

                width={600}

                height={500}

                className="initiative-image"

              />

            </Reveal>


          </div>


        </Container>


      </section>





      {/* QUOTE */}

      <section className="future-section">


        <Container>


          <Reveal>

            <h2>
              “Education is the key to unlocking the world,
              a passport to freedom.”
            </h2>


            <p>
              — Wangari Maathai
            </p>


          </Reveal>


        </Container>


      </section>





      {/* VIDEO */}

      <section className="initiative-media">


        <Container>


          <h2>
            Education Is A Superpower
          </h2>


          <div className="video-placeholder">

            <p>
              Video will be embedded here
            </p>

          </div>


        </Container>


      </section>





      {/* CONTACT */}

      <section className="initiative-cta">


        <Container>


          <h2>
            Support A Girl’s Education
          </h2>


          <p>

            Do you know a school or community that needs
            educational support? Are you a student, teacher,
            parent, or partner who would like to connect
            with us? We would love to hear from you.

          </p>



         <ContactForm />


<div className="cta-buttons">

  <button className="support-button">
    Support The Mission
  </button>

</div>


        </Container>


      </section>



    </main>

  );

}