"use client";

import Container from "@/components/layout/Container";
import Reveal from "@/components/animations/Reveal";


const values = [
  {
    icon: "📚",
    title: "Education",
    text:
      "Creating access to knowledge, learning opportunities, and resources that help women and girls make informed decisions about their futures."
  },

  {
    icon: "🌱",
    title: "Empowerment",
    text:
      "Supporting women and girls with the tools, confidence, and opportunities needed to build independent and fulfilling lives."
  },

  {
    icon: "📢",
    title: "Advocacy",
    text:
      "Using awareness, storytelling, and community action to address issues affecting women and girls."
  },

  {
    icon: "🤍",
    title: "Dignity",
    text:
      "Ensuring every woman and girl has access to essential resources, support, and opportunities without barriers."
  },

  {
    icon: "✨",
    title: "Opportunity",
    text:
      "Building pathways that allow women and girls to learn, grow, contribute, and lead."
  }
];


export default function MissionVision() {


  return (

    <section className="mission-section">


      <Container>


        {/* MISSION / VISION */}


        <div className="mission-grid">


          <Reveal>

            <div className="mission-card">


              <span className="section-label">
                OUR MISSION
              </span>


              <h2>
                Creating opportunities
                for women and girls
                to thrive.
              </h2>


              <p>

                Our mission is to empower women
                and girls across Africa through
                education, advocacy, access to
                essential resources, and community
                driven initiatives.

              </p>


            </div>

          </Reveal>





          <Reveal>

            <div className="mission-card">


              <span className="section-label">
                OUR VISION
              </span>


              <h2>
                A future where every woman
                can reach her full potential.
              </h2>


              <p>

                We envision a world where
                women and girls have the dignity,
                knowledge, confidence, and support
                needed to shape their own futures.

              </p>


            </div>


          </Reveal>



        </div>





      </Container>


    </section>

  );

}