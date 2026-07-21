import Link from "next/link";
import Image from "next/image";
import { initiatives } from "@/data/initiatives";
import Container from "@/components/layout/Container";

export default function InitiativesPage() {
  return (
    <main className="initiatives-page">

      <section className="initiatives-hero">

        <Container>

          <div className="initiatives-heading">

            <span className="section-label">
              OUR INITIATIVES
            </span>


            <h1>
              Creating Change Through Action
            </h1>


            <p>
              Through education, empowerment, healthcare,
              and community support, we create opportunities
              for women, girls, and underserved communities
              to thrive.
            </p>

          </div>

        </Container>

      </section>



      <section className="initiatives-list">

        <Container>

          <div className="initiative-grid">

            {initiatives.map((initiative) => (

              <Link
                href={`/initiatives/${initiative.slug}`}
                key={initiative.slug}
                className="initiative-card"
              >

                <Image
                  src={initiative.image}
                  alt={initiative.title}
                  fill
                  className="initiative-image"
                />


                <div className="initiative-overlay">


                  <h2>
                    {initiative.title}
                  </h2>


                  <p>
                    {initiative.description}
                  </p>


                  <span>
                    Learn More →
                  </span>


                </div>


              </Link>

            ))}

          </div>

        </Container>

      </section>


    </main>
  );
}