import Image from "next/image";
import Reveal from "@/components/animations/Reveal";
import Container from "@/components/layout/Container";
import Counter from "@/components/ui/Counter";

export default function Mission() {
  return (
    <section className="mission-section">

      <Container>

        <div className="mission-grid">

          {/* Left */}

          <Reveal>

            <div className="mission-content">

              <span className="section-label">
                WHO WE ARE
              </span>

              <h2 className="mission-title">
                Empowering Women.
                <br />
                Transforming Communities.
              </h2>

              <p className="mission-text">
                A Thousand Women is a nonprofit organisation committed
                to empowering women and girls across Africa through
                education, menstrual equity, advocacy, healthcare,
                and community support.
              </p>

              <p className="mission-text">
                We believe every woman and girl deserves the opportunity
                to learn, grow and lead. By creating access to knowledge,
                essential resources and opportunities, we are building
                stronger communities and empowering generations to come.
              </p>

            </div>

          </Reveal>


          {/* Right */}

    

            <div className="mission-visual">

              <div className="mission-image-wrapper">

                <Image
                  src="/images/hero-image.jpg"
                  alt="A Thousand Women community impact"
                  fill
                  className="mission-image"
                />

                <div className="mission-stat-card stat-one">

                  <strong>
                    <Counter end={5000} />
                  </strong>

                  <span>
                    Menstrual Products Provided
                  </span>

                </div>


                <div className="mission-stat-card stat-two">

                  <strong>
                    <Counter end={1000} />
                  </strong>

                  <span>
                    Girls Supported
                  </span>

                </div>


                <div className="mission-stat-card stat-three">

                  <strong>
                    <Counter end={250} />
                  </strong>

                  <span>
                    Educational Supplies
                  </span>

                </div>

              </div>

            </div>


        </div>

      </Container>

    </section>
  );
}