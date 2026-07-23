"use client";

import Image from "next/image";
import Reveal from "@/components/animations/Reveal";
import Container from "@/components/layout/Container";

const boardMembers = [
 

  {
    name: "Anderson Egbe",
    role: "Board Member",
    image: "/images/board-member.jpg",
    description:
      "Bringing experience, insight, and passion to help drive sustainable impact.",
  },


];


export default function BoardSection() {

  return (

    <section className="board-section">

      <Container>


        <Reveal>

          <div className="about-section-heading">

            <span className="section-label">
              OUR LEADERSHIP
            </span>


            <h2>
              The People Behind
              <br />
              The Mission
            </h2>


            <p>
              Our leadership team is committed to creating
              sustainable solutions that empower women and
              girls across Africa.
            </p>

          </div>

        </Reveal>



        <div className="board-grid">


          {boardMembers.map((member, index) => (

            <Reveal key={index}>

              <article className="board-card">


                <div className="board-image-wrapper">

                  <Image

                    src={member.image}

                    alt={member.name}

                    width={350}

                    height={350}

                    className="board-image"

                  />

                </div>



                <h3>
                  {member.name}
                </h3>



                <span className="board-role">
                  {member.role}
                </span>



                <p>
                  {member.description}
                </p>


              </article>


            </Reveal>

          ))}


        </div>


      </Container>


    </section>

  );

}